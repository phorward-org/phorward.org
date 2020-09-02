import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import './Tutorials.scss'
import { useLocation } from 'react-router-dom'
const mediumUrl =
  'https://api.rss2json.com/v1/api.json?latest=true&rss_url=https://medium.com/feed/@TidBytes?latest=true'

export default function Tutorials() {
  const [search, setSearch] = useState('')
  const location = useLocation()

  useEffect(() => {
    const s = new URLSearchParams(location.search).get('search')
    if (s) {
      setSearch(s)
    }
  }, [location.search])

  const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      fetch(mediumUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setArticles(data.items)
        })
    }, [])

    function stripHtml(html, title) {
      var tmp = document.createElement('DIV')
      tmp.innerHTML = html
      let text = tmp.textContent.slice(0, 500).replace(/(\r\n|\n|\r)/gm, '')
      if (text.startsWith(title)) {
        text = text.substring(title.length, text.length)
      }
      return text
    }

    function openArticle(url) {
      window.open(url, '_blank')
    }

    function filterBySearch(a) {
      return a.filter(a => a.title.toLowerCase().includes(search.toLowerCase()))
    }

    return filterBySearch(articles).map(article => (
      <div
        className="Article"
        key={article.link}
        onClick={() => openArticle(article.link)}
      >
        <div className="ArticleHeader">
          <div className="Logo">
            <img src="/logo.svg" alt="Logo" />
            <img className="Medium" src="/medium.png" alt="Medium" />
          </div>
          <div>
            <h4>{article.title}</h4>
            <h6 className="Tagline">@TidBytes on Medium</h6>
          </div>
        </div>
        <p>{stripHtml(article.description, article.title)}</p>
        {article.categories.length ? (
          <h6>tags: {article.categories.join(', ')}</h6>
        ) : null}
      </div>
    ))
  }

  return (
    <div id="Tutorials">
      <h1>Tutorials</h1>
      <p>
        Check out the articles below to learn about new topics and take on
        challenges. All of the articles below are original content published on
        Medium - feel free to give us claps if you like what you see!
      </p>
      <Input
        label="Search"
        onChange={setSearch}
        value={search}
        style={{ position: 'absolute', right: 64, top: 140, width: 240 }}
      />
      <div id="Medium">
        <Articles />
      </div>
    </div>
  )
}

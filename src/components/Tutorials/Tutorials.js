import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import { useLocation } from 'react-router-dom'
import useMobile from '../../hooks/useMobile'
import './Tutorials.scss'

const mediumUrl =
  'https://api.rss2json.com/v1/api.json?latest=true&rss_url=https://medium.com/feed/@TidBytes?latest=true'

export default function Tutorials() {
  const mobile = useMobile()
  const [search, setSearch] = useState('')
  const location = useLocation()
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(mediumUrl)
      .then(res => res.json())
      .then(data => setArticles(data.items))
  }, [])

  useEffect(() => {
    const s = new URLSearchParams(location.search).get('search')
    if (s) {
      setSearch(s)
    }
  }, [location.search])

  const searchStyle = mobile
    ? null
    : { position: 'absolute', right: 64, top: 140, width: 280 }

  const Articles = () => {
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

    const filtered = filterBySearch(articles)

    return filtered.length ? (
      filterBySearch(articles).map(article => (
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
    ) : (
      <h4>No articles match your search!</h4>
    )
  }

  return (
    <div id="Tutorials">
      <h1>
        <span role="img" aria-label="About">
          💡
        </span>
        Tutorials
      </h1>
      <p>
        Need help getting rolling on a TidBytes projects? Maybe got stuck
        somewhere in the middle? Checkout the articles below to help get
        unstuck. If you find what we do helpful, be sure to give us some claps,
        and help spread the word to new devs!
      </p>
      <Input
        label="🔍 Search"
        onChange={setSearch}
        value={search}
        style={searchStyle}
      />
      <div id="Medium">
        {articles ? <Articles /> : <h4>Loading articles...</h4>}
      </div>
    </div>
  )
}

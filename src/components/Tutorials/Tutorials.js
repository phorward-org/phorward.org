import React, { useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import './Tutorials.scss'
const mediumUrl =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@TidBytes?latest'

export default function Tutorials() {
  const [search, setSearch] = useState('')
  useEffect(() => {
    setTimeout(() => {
      const i = document.getElementById('twitter-widget-0')
      if (i) {
        i.scrolling = 'true'
      }
    }, 1000)
  })

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

    return articles
      .filter(a => a.title.includes(search))
      .map(article => (
        <div className="Article" key={article.link}>
          <div className="Header">
            <div className="Logo">
              <img src="/icon.png" alt="Logo" />
              <img className="Medium" src="/medium.png" alt="Medium" />
            </div>
            <h4>{article.title}</h4>
          </div>
          <h6 className="Tagline">@AxiomWealthMgmt on Medium</h6>
          <p>{stripHtml(article.description, article.title)}</p>
          {article.categories.length ? (
            <h6>tags: {article.categories.map(cat => cat).join(', ')}</h6>
          ) : null}
          <div>
            <button onClick={() => openArticle(article.link)}>
              Read more...
            </button>
          </div>
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

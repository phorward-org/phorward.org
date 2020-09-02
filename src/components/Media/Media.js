import React, { useEffect, useState } from 'react'
import './Media.scss'
const mediumUrl =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@axiomwealthmgmt'

export default function Media() {
  useEffect(() => {
    setTimeout(() => {
      const i = document.getElementById('twitter-widget-0')
      if (i) {
        i.scrolling = 'true'
      }
    }, 1000)
  })

  const Thoughts = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      fetch(mediumUrl)
        .then((res) => res.json())
        .then((data) => setArticles(data.items))
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

    return articles.map((article) => (
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
          <h6>tags: {article.categories.map((cat) => cat).join(', ')}</h6>
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
    <div id="Media">
      <div id="Medium">
        <Thoughts />
      </div>
      <div id="MediaContent">
        <h3>Stay Up to Date</h3>
        <p>
          <strong>
            Click on any of the selected{' '}
            <a
              href="https://medium.com/@axiomwealthmgmt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>{' '}
            articles to read more and keep up with Axiom.
          </strong>
        </p>
        <p>
          Axiom publishes thoughts and insights regularly through Medium,
          Twitter, and our other social pages. Follow us to learn more about
          what we're seeing in the markets, and how it influences our planning
          for your portfolio.
        </p>
        <div className="Social">
          <a
            href="https://medium.com/@axiomwealthmgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ background: '#fff', color: '#000' }}>
              <img src="/medium.png" alt="Medium" />
              Medium
            </button>
          </a>
          <a
            href="https://twitter.com/AxiomWealthMgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <img src="/twitter.png" alt="Twitter" />
              Twitter
            </button>
          </a>
          <a
            href="https://www.linkedin.com/company/axiomwealthmgmt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={{ background: '#2867B2' }}>
              <img src="/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

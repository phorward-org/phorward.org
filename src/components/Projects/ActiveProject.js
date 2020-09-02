import React, { useState } from 'react'
import Modal from '../Modal'
import { Input } from '../Input/Input'
import './ActiveProject.scss'
import { Link } from 'react-router-dom'

export default function ActiveProject({ active, handleClose }) {
  const [showInput, setInput] = useState(false)
  const [status, setStatus] = useState('Submit your Project for Code Review')
  const [email, setEmail] = useState('')
  const [pullRequest, setPullRequest] = useState('')
  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const arrayToString = arr => arr.join(', ')

  function handleSubmit(e) {
    e.preventDefault()
    const form = document.getElementById('PullRequestForm')
    const data = new FormData(form)
    const req = new XMLHttpRequest()
    req.open(form.method, form.action)
    req.setRequestHeader('Accept', 'application/json')
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return
      if (req.status === 200) {
        setEmail('')
        setPullRequest('')
        setStatus('Submitted! Watch your email for a response.')
      } else {
        setStatus('Whoops! Invalid email or URL.')
        const e = JSON.parse(req.response).error
        console.error(e)
      }
    }
    req.send(data)
  }

  return active ? (
    <Modal handleClose={handleClose}>
      <div id="ActiveProject">
        <div className="ActiveProjectHeader">
          <h4>{active.index + 1}</h4>
          <div>
            <h2>{active.name}</h2>
            <h6>
              {difficulties[active.difficulty]} -{' '}
              {arrayToString(active.content)}
            </h6>
          </div>
        </div>
        <p>{active.description}</p>
        {showInput ? (
          <>
            <h3>{status}</h3>
            <Input
              label="Your email address"
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Link to your pull request"
              value={pullRequest}
              onChange={setPullRequest}
              onSubmit={handleSubmit}
            />
            <div className="Links">
              <p onClick={() => setInput(false)}>&lt; Back</p>
            </div>
          </>
        ) : (
          <>
            <a
              href={active.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <img src="/github.svg" alt="Github" />
                Get Started by Forking the Github Repository
              </button>
            </a>
            <button className="Submit" onClick={() => setInput(true)}>
              <i className="fa fa-check" />
              Submit your Finished Project for Review
            </button>

            <div className="Links">
              <Link to="/tutorials?search=github">
                <p>Need help with Github?</p>
              </Link>
            </div>
          </>
        )}

        <form
          id="PullRequestForm"
          action="https://formspree.io/xoqkoryv"
          method="POST"
          hidden
        >
          <input type="hidden" value={email} name="_replyto" />
          <input type="hidden" value={pullRequest} name="pullRequest" />
        </form>
      </div>
    </Modal>
  ) : null
}

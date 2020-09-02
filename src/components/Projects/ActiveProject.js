import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import { Input } from '../Input/Input'
import './ActiveProject.scss'
import { Link, useParams, useHistory } from 'react-router-dom'
import { content } from './content'

export default function ActiveProject() {
  const [status, setStatus] = useState('Submit your Project for Code Review')
  const [pullRequest, setPullRequest] = useState('')
  const [showInput, setInput] = useState(false)
  const [project, setProject] = useState()
  const [email, setEmail] = useState('')
  const history = useHistory()
  const { id } = useParams()

  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const arrayToString = arr => arr.join(', ')

  useEffect(() => {
    const p = content.projects.find(i => i.id === parseInt(id))
    if (!p) {
      history.push('/projects')
    }
    setProject(p)
  }, [id])

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

  return project ? (
    <Modal handleClose={() => history.push('/projects')}>
      <div id="ActiveProject">
        <div className="ActiveProjectHeader">
          <h4>{project.id}</h4>
          <div>
            <h2>{project.name}</h2>
            <h6>
              {difficulties[project.difficulty]} -{' '}
              {arrayToString(project.content)}
            </h6>
          </div>
        </div>
        <p>{project.description}</p>
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
              href={project.githubUrl}
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

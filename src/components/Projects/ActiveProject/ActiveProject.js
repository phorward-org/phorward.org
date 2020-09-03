import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import useWidth from '../../../hooks/useWidth'
import { Input } from '../../Input/Input'
import Modal from '../../Modal'
import './ActiveProject.scss'

export default function ActiveProject({ projects }) {
  const { mobile } = useWidth()
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
    if (projects) {
      const p = projects.find(i => i.id === parseInt(id))
      p ? setProject(p) : history.push('/projects')
    }
  }, [id, projects]) // eslint-disable-line react-hooks/exhaustive-deps

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
                {mobile
                  ? 'View Github Repo'
                  : 'Get Started by Forking the Github Repository'}
              </button>
            </a>
            <button className="Submit" onClick={() => setInput(true)}>
              <i className="fa fa-check" />
              {mobile
                ? 'Submit for Review'
                : 'Submit your Finished Project for Review'}
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

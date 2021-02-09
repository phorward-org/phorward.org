import React, { useState } from 'react'
import './Contact.scss'
import { Input } from '../Input/Input'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState()
  const [status, setStatus] = useState(
    'The best way to start a project with Phorward is to get in touch. Fill out the form below so we can learn more about you and your organization.'
  )

  function handleSubmit(e) {
    e.preventDefault()
    const form = document.getElementById('FromData')
    const data = new FormData(form)
    const req = new XMLHttpRequest()
    req.open(form.method, form.action)
    req.setRequestHeader('Accept', 'application/json')
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return
      if (req.status === 200) {
        setEmail('')
        setName('')
        setMessage('')
        setStatus("Sent! We'll get back to you ASAP.")
      } else {
        setStatus('Whoops! Looks like there was an error in your form.')
        const e = JSON.parse(req.response).error
        console.error(e)
      }
    }
    req.send(data)
  }

  return (
    <div id="Contact">
      <h1>Reach Out</h1>
      <p>{status}</p>
      <div id="ContactForm">
        <Input label="Your name" value={name} onChange={setName} />
        <Input label="Your email address" value={email} onChange={setEmail} />
        <Input
          type="textarea"
          label="Your message"
          value={message}
          onChange={setMessage}
        />
        <button onClick={handleSubmit}>Send!</button>
      </div>
      <form
        id="FromData"
        action="https://formspree.io/xoqkoryv"
        method="POST"
        hidden
      >
        <input type="hidden" value={name} name="name" />
        <input type="hidden" value={email} name="_replyto" />
        <input type="hidden" value={message} name="message" />
      </form>
    </div>
  )
}

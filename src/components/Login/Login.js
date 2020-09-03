import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'
import './Login.scss'

export default function Login() {
  const history = useHistory()
  const { state, dispatch } = useAuth()
  const [data, setData] = useState({ errorMessage: '', isLoading: false })

  const { client_id, client_secret, redirect_uri } = state

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href
    const hasCode = url.includes('?code=')

    // If Github API returns the code parameter
    if (hasCode) {
      const code = url.split('?code=')[1]
      const data = new FormData()
      data.append('client_id', client_id)
      data.append('client_secret', client_secret)
      data.append('code', code)
      data.append('redirect_uri', redirect_uri)

      console.log(client_id, client_secret, code, redirect_uri)
      debugger
      // Request to exchange code for an access token
      fetch(`https://github.com/login/oauth/access_token`, {
        method: 'POST',
        body: data,
      }).then(res => console.log(res))
      // const newUrl = url.split('?code=')
      // history.push(newUrl[0])
      // setData({ ...data, isLoading: true })

      // const requestData = {
      //   client_id: state.client_id,
      //   redirect_uri: state.redirect_uri,
      //   client_secret: state.client_secret,
      //   code: newUrl[1],
      // }

      // const proxy_url = state.proxy_url

      // // Use code parameter and other parameters to make POST request to proxy_server
      // fetch(proxy_url, {
      //   method: 'POST',
      //   body: JSON.stringify(requestData),
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     dispatch({
      //       type: 'LOGIN',
      //       payload: { user: data, isLoggedIn: true },
      //     })
      //   })
      //   .catch(error => {
      //     setData({
      //       isLoading: false,
      //       errorMessage: 'Sorry! Login failed',
      //     })
      //   })
    }
  }, [state, dispatch, data])

  if (state.isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div id="Login">
      <div>
        <h1>TidBytes Login</h1>
        <span>{data.errorMessage}</span>
        <div className="login-container">
          {data.isLoading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <a
              className="login-link"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
              onClick={() => {
                setData({ ...data, errorMessage: '' })
              }}
            >
              <span>Login with GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

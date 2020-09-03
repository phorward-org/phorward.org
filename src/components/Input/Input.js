import React, { useState, useEffect } from 'react'
import './Input.scss'

export function Input({ type, label, value, onChange, onSubmit, style }) {
  const [isUsed, setIsUsed] = useState(false)

  useEffect(() => {
    setIsUsed(!!value)
  }, [value])

  return (
    <div className="Input" style={style}>
      <label className={isUsed ? 'focused' : ''}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          rows={10}
          onChange={e => onChange(e.target.value)}
          value={value}
          onFocus={() => setIsUsed(true)}
          onBlur={e => {
            setIsUsed(e.target.value.length ? true : false)
          }}
        />
      ) : (
        <input
          type={type}
          onChange={e => onChange(e.target.value)}
          value={value}
          onFocus={() => setIsUsed(true)}
          onBlur={e => {
            setIsUsed(e.target.value.length ? true : false)
          }}
        />
      )}
      {onSubmit && (
        <button id="SubmitButton" onClick={onSubmit}>
          <i className="fa fa-check" />
        </button>
      )}
    </div>
  )
}

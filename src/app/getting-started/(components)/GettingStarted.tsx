"use client"
import React, { useState } from 'react'
import Register from './Register'
import EmailConfirm from './EmailConfirm'

const GettingStarted = () => {
    const [confirm, setConfirm] = useState(false)
  return (
    <>
        {
            confirm ? <EmailConfirm/> 
            : 
            <Register setConfirm={setConfirm} />
        }
    </>
  )
}

export default GettingStarted

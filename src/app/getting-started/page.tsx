"use client"
import { useState } from "react"
import GettingStarted from "./GettingStarted"
const page = () => {
    const [role, setRole] = useState("-1")
  return (
    <GettingStarted/>
  )
}

export default page

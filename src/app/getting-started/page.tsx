"use client"
import { Toaster } from "react-hot-toast"
import GettingStarted from "./(components)/GettingStarted"
const page = () => {
  return (
    <>
      <GettingStarted/>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 2000
        }}
      />
    </>
  )
}

export default page

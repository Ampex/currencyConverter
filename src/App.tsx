import React from "react"
import { Route } from "react-router-dom"
import "./App.scss"
import Form from "./components/Form"
import Historical from "./components/Historical"
import useAPIcontext from "./hooks/useAPIcontext"
const isMobile = window.innerWidth <= 1200

const App = () => {
  const { open } = useAPIcontext()

  return (
    <div className='container'>
      <div
        style={open && !isMobile ? { width: "1150px" } : { width: "600px" }}
        className='wrapper'
      >
        <main>
          <h3>Konwerter walut</h3>
          <Form />
        </main>
        <div
          style={
            open
              ? {
                  transform: `${
                    isMobile ? "translate(70px, 570px)" : "translate(560px)"
                  }`,
                }
              : { transform: "translate(70px)" }
          }
          className='historical'
        >
          <Historical />
          <Route path='/user/:username' component={Form} />
        </div>
      </div>
    </div>
  )
}
export default App

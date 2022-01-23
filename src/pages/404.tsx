import * as React from "react"
import { Link } from "gatsby"
// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>404</h1>
      <p>Ops...não tem nada aqui.</p>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage

import './Main.css'

import Form from '../Form'
import ListErrors from '../ListErrors'

export default function Main() {
  return (
    <main className="Main">
      <h1 className="visually-hidden">Page for accessibility check</h1>
      <Form />
      <ListErrors />
    </main>
  )
}

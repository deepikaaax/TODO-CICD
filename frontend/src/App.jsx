import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function App(){
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  useEffect(()=>{ axios.get('/api/todos').then(r=>setTodos(r.data)) }, [])

  const add = async () => {
    if(!text) return
    const res = await axios.post('/api/todos', { text })
    setTodos(t=>[...t, res.data])
    setText('')
  }

  return (
    <div style={{padding:20}}>
      <h1>To‑Do</h1>
      <input value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={add}>Add</button>
      <ul>{todos.map(t=> <li key={t.id}>{t.text}</li>)}</ul>
    </div>
  )
}

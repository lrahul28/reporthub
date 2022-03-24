import {useRoutes} from 'react-router-dom'
import React from 'react'
import routes from './routes'
import './App.css'
import './assets/css/tailwind.output.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const content = useRoutes(routes)
  return <div className="App">{content}</div>
}
export default App

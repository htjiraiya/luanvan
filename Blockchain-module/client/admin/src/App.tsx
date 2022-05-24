import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Login from './components/layouts/login/login'
import Main from './components/layouts/main/main'
import NotFound from './components/layouts/not-found/not-found'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='main/*' element={<Main/>}></Route>
          <Route path='' element={<Navigate to='/main'/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

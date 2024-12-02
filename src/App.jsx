import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Nav/Home'
import Navbar from './Nav/Navbar'
import CardDetails from './pages/CardDetails'
import RecentList from './Nav/RecentList'
import UpcomingList from './Nav/UpcomingList'
import TypeList from './Nav/TypeList'
import Favourites from './Favourites'
import TypeSelect from './Nav/TypeSelect'
import Login from './login'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/Recent'  element={<RecentList />} />
        <Route path='/Upcoming'  element={<UpcomingList />} />
        <Route path='/anime/:id' element={<CardDetails />} />
        <Route path='/Type/:ty' element={<TypeList />} />
        <Route path='/Favourite' element={<Favourites />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Recent">Recent</Link>
        <Link to="/Upcoming">Upcoming</Link>
        <Link to="/Type">Type</Link>
        <Link to="/Favourite">Favourite</Link>
        {/* <Link to="/Login">Login</Link> */}
    </div>
  )
}

export default Navbar
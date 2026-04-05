import { Link, Outlet } from "react-router-dom"
import Footer from "../components/footer"

export default function NavLayout() {
  return (
    <div className="nav-layout">
    <nav>
      <Link to="/">
      <h1>DUMMYSHOP</h1>
      </Link>
      <div className="link-div">
        <Link to="orders">
        <h1>Orders</h1></Link>
        <Link to="shop">
        <h1>Shop</h1></Link>
        <Link to="about">
        <h1>About</h1></Link>
      </div>
    </nav>
    <Outlet />
    <Footer/>
    </div>
  )
}
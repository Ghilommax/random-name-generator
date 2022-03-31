import { Fragment } from "react"
import classes from './navbar.module.css'
import { Link } from "react-router-dom"
const NavBar = (props) => {
     return (<nav className= {classes.navbar}>
                <div className={classes['main-name']}>
                   <h1>
                   React Random Generator
                   </h1>
                </div>
                <div >
                <ul className= {classes.navlist} >
                        <li> <Link to='/welcome'> Home</Link></li>
                        <li> <Link to='/Dash'> DashBoard </Link></li>
                        <li> <Link to="/Dash/Profile"> Profile</Link></li>
                    </ul>
                </div>      
                </nav>
                )

}
export default NavBar;
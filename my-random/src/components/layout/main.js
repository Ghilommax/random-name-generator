import { Fragment } from "react"
import NavBar from "./navbar"
const Main  = (props) =>{
   return (<Fragment>
                   <NavBar/>
                   <main>{props.children}</main>
       </Fragment>)          
}
export  default Main;
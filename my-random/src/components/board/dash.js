import { Fragment, useState, useRef} from "react"
import { useSelector,useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom";
import { randomAction } from "../../store"
import classes from './dash.module.css'
import Pagination from "./pagination";
const Dash = () =>{
    const [loadingdata, setloadingdata]  = useState();
     const [currentPage, setCurrentPage] = useState(1);
     const[postPerPage] = useState(10)
     const dispatch = useDispatch();
     const history = useHistory();

     const items= useSelector((state)=> state.item);
    const itemProfile = useSelector((state) => state.itemclicked);


    if(items === 'undefined') {
            return
    }

 function check (id) {
    if(items !== 'undefined') {
        dispatch(randomAction.additemclick(items[id]))
}

     history.push('/Dash/Profile')
 }

const changeHandler =(events) => {
    setloadingdata(events.target.value)
}
function paginate(pageN){setCurrentPage(pageN)
  
   }
 const prevProfile = () => {
    (typeof(itemProfile[itemProfile.length - 1]) === 'undefined' ?  '' :
   ( itemProfile.pop &&   history.push('/Dash/Profile') )
  
    )
 }

const finalPost = currentPage * postPerPage;
const firstPost = finalPost - postPerPage;
const currentPost = items.slice(firstPost, finalPost)

   return(<Fragment>
    <input placeholder="search engine" id="find"onChange={event => changeHandler(event)} className = {classes.input} className={classes.input}/>
    
            <ul className= {classes.item}>
                { (typeof(loadingdata) !== 'undefined' ) ? 
                items.filter((item) => {
                    if((loadingdata) === ' '){
                        return currentPost;
                    }else if(item.first.toLowerCase().includes(loadingdata.toLowerCase())){
                       return items;
                    }
                }).map((item ,index) =>
                (<li key={index} onClick={() => check(item.id)}> 
                <div>
                     {item.first}
                     <img src={item.picture} />
                    </div>  </li>)
                )
                :
                currentPost.map((item ,index) =>
                (<li key={index} onClick={() => check(item.id)}> 
                <div className= {classes.listdash}>
                <div> <img src={item.picturesmall} /></div>
                     <div> <h4> {item.first}  </h4></div>
                   
                    </div>  
                </li>)
                )
                }
            </ul>
              <button type="button" className= {classes.button} onClick = {() => prevProfile() }> 
              Previous Profile
              </button>
            <Pagination postperpage={postPerPage} totalpage={items.length} paginate={paginate}/>

   </Fragment>)
}
export default Dash;
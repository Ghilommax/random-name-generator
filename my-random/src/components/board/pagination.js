import classes from './pagination.module.css'
const Pagination = ({postperpage,totalpage, paginate}) =>{
    const pagenumeber = []
     for(let i = 1; i <= Math.ceil(totalpage/postperpage); i++){
            pagenumeber.push(i)
     }
     return(<nav>
         <ul className= {classes.item}>
            {
                pagenumeber.map(number => (
                    <li key={number} className = ''>
                            <a onClick={() => paginate(number)} href="#"> 
                                {number}
                            </a>
                    </li>
                ))
            } 
         </ul>
     </nav>)
}
export default Pagination;
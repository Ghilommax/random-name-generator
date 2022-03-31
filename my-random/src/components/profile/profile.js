import { Fragment, useState } from "react";
import { useSelector } from "react-redux"
import classes from './profile.module.css'
import Container from "../../UI/container";
const Profile = () =>{
    const historyPro = useSelector((state) => state.itemclicked);
    const[Rdate, setRdate] = useState('00')
    const[Rhour, setRhour] = useState('00')
    const[Rmin, setRmin] = useState('00')
    const[Rsec, setRsec] = useState('00')
 

    const length = historyPro.length;
        let interval;
         let Age
    const birthDayRem = (date) => {
             Age = new Date().getFullYear() - new Date(date).getFullYear();
            const startCountyear = new Date(date).getFullYear() + Age;
            const startCountMonth = (new Date(date).getMonth() + 1);
            const startCountDay = new Date(date).getDate();
            const startCounthour = new Date(date).getHours();
            const newDate = new Date(`${startCountyear}-${startCountMonth}-${startCountDay} 00:00:00`).getTime();
             
           
           interval = setInterval(() => {
                    const today = new Date().getTime()
                    const remaining = newDate - today;
                 
                    const day = Math.floor(remaining/(1000 * 60 * 60 * 24));
                    const hours= Math.floor((remaining % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
                    const min = Math.floor((remaining % (1000* 60* 60)) / (1000 * 60));
                    const sec = Math.floor((remaining % (1000 * 60)) / 1000);

                    if(remaining < 0){
                        clearInterval(interval)
                    }else{
                        setRdate(day);
                        setRhour(hours)
                        setRmin(min)
                        setRsec(sec)
                    }

           }, 1000);

    }
    (typeof(historyPro[length -1]) === 'undefined') ? '' : birthDayRem(historyPro[length -1].birthday)
   
   
    return(<Fragment>
          <Container>
          <div>
                   {
                       (typeof(historyPro[length -1]) === 'undefined') ? <p>No profile to see </p> : (  <div>
                        <div >
                        <img src={historyPro[length - 1].picture} className= {classes.listimg}/> 
                        </div>
                       <div className= {classes.listname}>
                       <span> {historyPro[length -1].first}</span>   <span>{historyPro[length -1].second}</span>  
                       </div>
                       <div className= {classes.listitem}>
                           <div>
                                <div>Phone Number</div>
                                <div>{historyPro[length -1].phone}</div>
                           </div>

                           <div> 
                              <div>Email</div>
                               <div>{historyPro[length -1].email}</div>
                            </div>
                           <div> 
                               <div>Location</div>
                               <div>{historyPro[length -1].location}</div>
                            </div>
                           <div> 
                               <div>Date of birth</div>
                               <div>{new Date(historyPro[length -1].birthday).toLocaleDateString()}</div>
                            </div>
                           <div>
                                <div>UserName</div>
                                <div>{historyPro[length -1].username}</div>
                           </div>
                           <div>
                                       <div>Password</div>
                                <div>{historyPro[length -1].password}</div>
                            </div>
                            <div>
                                 <div>Age</div>
                                <div>{Age}</div>
                            </div>
                            <div>
                                 <div>Remaining birthday</div>
                                            <p> days:{Rdate}</p>
                                <p>hours:{Rhour}    min: {Rmin}  sec: {Rsec}      </p>
                            </div>
                      </div>
                    </div>)




                   }
                </div>
          </Container>
               
           
    </Fragment>)
}
export default Profile
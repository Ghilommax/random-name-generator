 import { randomAction } from "./index";
 export const fetchList = () => {
     return async (dispatch) => {
         const fetchItem = async () => {

           

             const response = await fetch('https://randomuser.me/api/?results=100');
             if(!response.ok){
                 throw new Error('Could not fetch data')
             }
             const data = await response.json();
             dispatch(randomAction.additems(data.results))
             return data;
            }
          
          try{
             await fetchItem();
          } catch (error) {
           console.log(error.message)
          }
     }
 }
 
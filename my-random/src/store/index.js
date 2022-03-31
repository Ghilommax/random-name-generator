import {createSlice,configureStore} from '@reduxjs/toolkit';
 const initialHoldState = {item: [], itemclicked:[], loadingStatus:{cartIsVisible: false, notification: null }}
const randomSlice = createSlice({
    name:'randomhold',
    initialState: initialHoldState,
    reducers:{
        additems(state, actions){
              const itemlist = actions.payload
              
              for(let i=0; i < 100 ; i++){
                state.item.push({id:i,
                    first: itemlist[i].name.first,
                    second:itemlist[i].name.last,
                    picture:itemlist[i].picture.large,
                    picturesmall:itemlist[i].picture.thumbnail,
                    phone:itemlist[i].cell,
                    email:itemlist[i].email,
                    location:itemlist[i].location.country,
                    birthday:itemlist[i].dob.date,
                    username:itemlist[i].login.username,
                    password:itemlist[i].login.password,
                    age:itemlist[i].dob.age})
              }
        },
        additemclick(state, actions){
            state.itemclicked.push(actions.payload)
        },
         
    }

})
const store = configureStore({
    reducer: randomSlice.reducer
})
export const randomAction = randomSlice.actions;
export default store;

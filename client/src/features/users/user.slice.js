import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   
    isAuthenticated : false

}

export const userSlice = createSlice ({
    name:"user",
    initialState,
    reducers:{
      Login:  ()=>{
        console.log("hello login")
        }
    }
})

export const {Login} = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users : [],
    isLogedIn:false
}

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser : (state,action)=>{
            console.log(action);
            const exist = state.users.find(user=>user.email===action.payload.email)
            if(exist) return alert('user already exist')
            const newUser = [...state.users,action.payload]
            state.users = newUser
            console.log('success')
        },
        removeUser : (state,action)=>{
            const exist = state.users.find(user=>user.email===action.payload.email)
            if(!exist) return alert("user doesn't exist")
            const removed = state.users.filter(user=>user.email !== action.payload.email)
            state.users = removed
            return {status:'success'}
        },
        loginUser : (state,action)=>{
            const exist = state.users.find(user=>user.email===action.payload.email)
            if(!exist) return alert("user doesn't exist")
            if(exist.password === action.payload.password){
                sessionStorage.setItem('username',exist.email)
                sessionStorage.setItem('name',exist.firstName)
                sessionStorage.setItem('userId',exist.id)
                sessionStorage.setItem('isLogedIn',true)
                state.isLogedIn = true
            }
        },
        userReg: (state,action)=>{
            const userExist = state.users.find(user=>user.name === action.payload.name)
            if(userExist) return alert('user already exist')
            const insertId = {...action.payload,id:Math.round(Math.random()*10000)}
            const update = [...state.users,insertId]
            state.users = update
        },
        updateAddress: (state,action)=>{
            const findUser = state.users.find(user=>user.email === action.payload.email)
            console.log(findUser);
            if(!findUser) alert('no user found')
            else{
            const update = {...findUser,address:action.payload.address}
            const findIndx = state.users.findIndex(user=>user.email ===update.email)
            console.log(findIndx);
            state.users[findIndx] = update
        }

        }

    }
})

export const {addUser,removeUser,loginUser,userReg,updateAddress} = usersSlice.actions
export default usersSlice.reducer
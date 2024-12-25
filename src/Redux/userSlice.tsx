import {createSlice} from '@reduxjs/toolkit'

export interface UserProps{
    username?: string,
    password?: string,
    email?: string,
    phone?: string
}

interface UserState{
    Users: UserProps[];
}

const storedData = localStorage.getItem("userLogged");
const UserData: UserProps[] = storedData ? JSON.parse(storedData) : [];

const initialState:UserState = {
    Users: UserData || []
}

const userSlices = createSlice({
    name: 'Users',
    initialState,
    reducers:{
        getUser(state,action){
            state.Users = action.payload;
            localStorage.setItem('userLogged' , JSON.stringify(state))
        },
        removeUser(state){
            state.Users = [] ;
        }
    }
})

export const {getUser,removeUser} = userSlices.actions;
export default userSlices.reducer;
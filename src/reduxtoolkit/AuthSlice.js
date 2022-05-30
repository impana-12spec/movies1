
import { createSlice } from '@reduxjs/toolkit'


const initialAuthState = {
    isAuthenticated : false 
} 

const createAction = createSlice ({
    name:'Auth',
    initialState : initialAuthState,
    reducers : {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated =  false;
        }
    }
})


export const AuthActions = createAction.actions;

export default createAction.reducer;










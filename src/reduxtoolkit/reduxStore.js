import {configureStore} from '@reduxjs/toolkit'
import AuthActions from './AuthSlice'

const store = configureStore({
    reducer : {
        Auth: AuthActions
    }
})

export default store;
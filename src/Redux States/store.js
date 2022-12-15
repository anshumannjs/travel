import {configureStore} from '@reduxjs/toolkit'
import cityInfos from './CityInfo'

export const store = configureStore({
    reducer:{
        City: cityInfos
    },
})
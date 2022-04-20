import  { combineReducers } from 'redux'
import menu from './Menu';


const root = combineReducers({
    menu: menu
})

export default root
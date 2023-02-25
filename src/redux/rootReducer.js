import {combineReducers} from "redux";
import bookingsReducer from "./bookings/reducer";

const rootReducer = combineReducers({
    bookings: bookingsReducer,
});


export default rootReducer;
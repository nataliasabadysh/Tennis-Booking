import axios from 'axios';
import { fetchRequest, fetchSuccess, addBookingSuccess, updateBookingSuccess, deleteBookingSuccess, } from './actions';
// import * as selectors from './selectors';

// +DELEY
// const delay = (timeout = 500) =>
//     new Promise((resolve) => setTimeout(resolve, timeout));

axios.defaults.baseURL = 'http://localhost:4040';


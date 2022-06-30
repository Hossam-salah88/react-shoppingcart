import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productRducer } from "./productReducer";

export default combineReducers({
  products: productRducer,
  cart: cartReducer,
});

// const reducer = (state = {}, action) => {
//   return state;
// };

// export default reducer;

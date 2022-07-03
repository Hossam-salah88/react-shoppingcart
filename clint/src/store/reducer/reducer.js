import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderREducer } from "./orderReducer";
import { productRducer } from "./productReducer";

export default combineReducers({
  products: productRducer,
  cart: cartReducer,
  order: orderREducer,
});

// const reducer = (state = {}, action) => {
//   return state;
// };

// export default reducer;

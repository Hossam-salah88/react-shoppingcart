import { combineReducers } from "redux";
import { productRducer } from "./productReducer";

export default combineReducers({
  products: productRducer,
});

// const reducer = (state = {}, action) => {
//   return state;
// };

// export default reducer;

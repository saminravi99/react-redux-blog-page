import { combineReducers } from "redux";

// to combine all reducers
const rootReducer = combineReducers({
  blogs: blogReducer,
});

export default rootReducer;

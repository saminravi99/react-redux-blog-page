const { SEARCH_FILTER, CATEGORY_FILTER, AUTHOR_FILTER } = require("./actionTypes");
const { initialState } = require("./initialState");

//Redcuer Function
const filteredBlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload.category,
        author: "",
        search: "",
        
      };
    case SEARCH_FILTER:
      return {
        ...state,
        search: action.payload.search,
        author: "",
        category: ""
      };
    case AUTHOR_FILTER:
      return {
        ...state,
        author: action.payload.author,
        category: "",
        search: ""
      };
    default:
      return state;
  }
};

export default filteredBlogsReducer;
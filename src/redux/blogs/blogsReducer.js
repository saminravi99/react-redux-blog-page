//Reducer

const { initialState } = require("./initialState");

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
        return {
            ...state,
            blogs: [...state.blogs, action.payload],
        };
        case "DELETE_BLOG":
        return {
            ...state,
            blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        };
        case "UPDATE_BLOG":
        return {
            ...state,
            blogs: state.blogs.map((blog) => {
            if (blog.id === action.payload.id) {
                return action.payload;
            } else {
                return blog;
            }
            }),
        };
        default:
        return state;
    }
}

export default blogsReducer;
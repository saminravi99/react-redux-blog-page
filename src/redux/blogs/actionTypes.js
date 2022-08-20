import { ADD_BLOG, DELETE_BLOG, UPDATE_BLOG } from "./actions";

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        payload: blog,
    };
}

export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: {
            id,
        },
    };
}

export const updateBlog = (blog) => {
    return {
        type: UPDATE_BLOG,
        payload: blog,
    };
}
import { AUTHOR_FILTER, CATEGORY_FILTER, SEARCH_FILTER } from "./actionTypes";

export const categoryFilter = (category) => {
    return {
        type: CATEGORY_FILTER,
        payload: {
            category,
            blogs,
        }
    };
}

export const searchFilter = (search) => {
    return {
        type: SEARCH_FILTER,
        payload: {
            search,
            blogs,
        }
    };
}

export const authorFilter = (author) => {
    return {
        type: AUTHOR_FILTER,
        payload: {
            author,
            blogs,
        }
    };
}
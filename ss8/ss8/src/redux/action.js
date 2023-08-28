// list
export const GET_POSTS_FETCH = "GET_POSTS_FETCH";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// Tạo mới
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
// Xoá
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
// Sửa
export const UPDATE_POST = "UPDATE_POST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";

// List
export const getPostsFetch = () => ({
    type: GET_POSTS_FETCH,
});

// Tạo mới 
export const createPost = (newPost) => ({
    type: CREATE_POST,
    payload: { newPost: newPost },
}); 

// sửa
export const updatePost = (updatedPost) => ({
    type: UPDATE_POST,
    payload: { updatedPost: updatedPost },
});

//Xoá
export const deletePost = (id) => ({
    type: DELETE_POST,
    payload: { id: id },
});

// export const updatedPost = (updatedPost) => ({
//     type: UPDATE_POST,
//     payload: { updatedPost: updatedPost },
// });
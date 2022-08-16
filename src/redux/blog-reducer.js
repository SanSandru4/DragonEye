const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const blogReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 3,
    //         message: state.newPostText,
    //         likesCount: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } 
    // else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.text;
    // } 
    // return state;

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT, text: text
});
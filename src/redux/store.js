import { blogReducer } from './blog-reducer';
import { dialogReducer } from './dialog-reducer';
import { sidebarReducer } from '../redux/sidebar-reducer'


export let store = {
    _state: {
        dialogPage: {
        dialogs: [
            { id: 1, name: 'Dimon' },
            { id: 2, name: 'Max' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Vadim' },
            { id: 5, name: 'Sasha' },
            { id: 6, name: 'Vitalya' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are your?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
        newMessageBody: ''
        },
        blogPage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 9}
            ],
            newPostText: 'new text message!'
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State it was change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.blogPage = blogReducer(this._state.blogPage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

// export const addPostActionCreator = () => ({ type: ADD_POST });

// export const updateNewPostTextActionCreator = (text) => ({
//         type: UPDATE_NEW_POST_TEXT, text: text
// });

// export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

// export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

// if (action.type === ADD_POST) {
//     let newPost = {
//         id: 3,
//         message: this._state.blogPage.newPostText,
//         likesCount: 0
//     };
//     this._state.blogPage.posts.push(newPost);
//     this._state.blogPage.newPostText = '';
//     this._callSubscriber(this._state);
// } 
// else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.blogPage.newPostText = action.text;
//     this._callSubscriber(this._state);
// } 
// else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     this._state.dialogPage.newMessageBody = action.body;
//     this._callSubscriber(this._state);
// }
// else if (action.type === SEND_MESSAGE) {
//     let body = this._state.dialogPage.newMessageBody;
//     this._state.dialogPage.newMessageBody = '';
//     this._state.dialogPage.messages.push({ id: 6, message: body });
//     this._callSubscriber(this._state);
// }
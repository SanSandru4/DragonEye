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
        ]
        },
        blogPage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 9}
            ],
            newPostText: 'new text message!'
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State it was change');
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.blogPage.newPostText,
            likesCount: 0
        };
        this._state.blogPage.posts.push(newPost);
        this._state.blogPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.blogPage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }, 
}
 
// export default store;
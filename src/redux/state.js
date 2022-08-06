import { rerenderingEntireTree } from './../render';

export let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.blogPage.newPostText,
        likesCount: 0
    };

    state.blogPage.posts.push(newPost);
    state.blogPage.newPostText = '';
    rerenderingEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.blogPage.newPostText = newText;
  rerenderingEntireTree(state);
}



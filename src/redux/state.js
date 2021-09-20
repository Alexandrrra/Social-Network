const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';



let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Hey',
          likesCount: 1
        }, {
          id: 2,
          message: 'How r u?',
          likesCount: 4
        }, {
          id: 3,
          message: 'I luv u 2 much?',
          likesCount: 12
        }
      ],
      newPostText: 'Sanya'
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: 'Vanya'
        }, {
          id: 2,
          name: 'Sanya'
        }, {
          id: 3,
          name: 'Katerina'
        }, {
          id: 4,
          name: 'Masha'
        }, {
          id: 5,
          name: 'Dasha'
        }, {
          id: 6,
          name: 'Lena'
        }
      ],
      messages: [
        {
          id: 1,
          message: 'Hi'
        }, {
          id: 2,
          message: 'Yo'
        }, {
          id: 3,
          message: 'How r u'
        }, {
          id: 4,
          message: 'Howw u doin'
        }, {
          id: 5,
          message: 'Kus'
        }, {
          id: 6,
          message: 'Fuck'
        }
      ],
      newMessageText: 'Perevirka'
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Vanya',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }, {
          id: 2,
          name: 'Sanya',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }, {
          id: 3,
          name: 'Kuzya',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }, {
          id: 4,
          name: 'Vlad',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }, {
          id: 5,
          name: 'Nadya',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }, {
          id: 6,
          name: 'Vasya',
          image: 'http://hypeava.ru/uploads/posts/2018-01/1515670967_4.jpg'
        }
      ]

    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log('State changed')
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this
        ._state
        .profilePage
        .posts
        .push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText
      };
      this
        ._state
        .dialogsPage
        .messages
        .push(newMessage);
      this._state.dialogsPage.newMessageText = ''; 
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }else if(action.type === ''){

    }
  }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) =>
({type: 'UPDATE-NEW-POST-TEXT', newText: text});

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updateNewMessageTextActionCreator = (text) =>
({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});



export default store;

window.store = store;
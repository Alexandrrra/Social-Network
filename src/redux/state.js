import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}
export default store;

window.store = store;
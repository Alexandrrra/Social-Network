const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = 
{
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
        newMessageText: ''
      };

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SEND_MESSAGE: 
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }; 
            state.messages.push(newMessage);
            state.newMessageText = ''; 
                return state;
        case UPDATE_NEW_MESSAGE_TEXT: 
            state.newMessageText = action.newText;
                return state;
        default: 
            return state;

    }
}
export const addMessageActionCreator = () => ({type: 'SEND-MESSAGE'});

export const updateNewMessageTextActionCreator = (text) =>
({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});



export default dialogsReducer;
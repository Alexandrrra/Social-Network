import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar friends={props.state.sidebar.friends}/>
        <div className='app-wrapper-content'>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
          <Route
            path="/dialogs"
            render={() => <Dialogs
            dialog={props.state.dialogsPage.dialogs}
            messages={props.state.dialogsPage.messages}
            newMessageText={props.state.dialogsPage}

            dispatch={props.dispatch}/>}/>
          <Route
            path="/profile"
            render={() => <Profile
            profilePage={props.state.profilePage}
            
            dispatch ={props.dispatch} />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

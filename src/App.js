import React, {Fragment,useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import {Provider} from 'react-redux';
import store from './Store';


const App=()=> {

   useEffect(()=>{
    M.AutoInit();
  })
  return (
    <Provider store={store}>
     <Fragment>
      <SearchBar/>
      <div className='container'>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <AddBtn/>
        <Logs/>
      </div>
    </Fragment>
  </Provider>
  );
}

export default App;

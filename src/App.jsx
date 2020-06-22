import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback
} from 'react';
import List from './components/list';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import axios from 'axios';


function App() {
  const dispatch = useDispatch();
  const { myList, reList,myTitle,reTitle} = useSelector(state => ({
    myList: state.myList,
    reList: state.reList,
    myTitle: state.myTitle,
    reTitle: state.reTitle
  }));
  useEffect(()=>{
    async function fetchData() {
      await axios.get('http://localhost:3001/getData')
      .then(function (response) {
        dispatch({type:"loadData",value:response.data ?response.data:[]})
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    fetchData();
  },[]);
  const addBtn = (e) => {
    dispatch({type:"addData",value:e.target.name })
  }
  const removeBtn = (e) => {
    dispatch({type:"removeData",value:e.target.name })
  }
    return ( 
      <div className = "App" >
        <div className="icon">
          <img src={[require("./image/nficon.PNG")]} alt="nficon"/>
        </div>
         <List ListArr={myList} TitleName={myTitle} btName={'remove'} btnFn={removeBtn}/>
         <List ListArr={reList} TitleName={reTitle} btName={'add'} btnFn={addBtn}/>
      </div>
    );
}

export default App;
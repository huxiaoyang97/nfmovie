import React, {
    useEffect,
    useState,
    useMemo,
    useRef,
    useCallback
  } from 'react';

function List(props) {


return ( 
        <div className = "listArr" >
           <div><h2>{props.TitleName}:</h2></div>
           <ul className ="listUl">
            {
                props.ListArr.map((listItem,index) =>{
                return <li key={index}><div><h3>{listItem.title}</h3></div> <div className="imgContainer"><img className="image" src={listItem.img}></img><button onClick={props.btnFn} name={index}>{props.btName}</button></div></li>
              })
            }
            </ul>
        </div>
      );
}


export default List;
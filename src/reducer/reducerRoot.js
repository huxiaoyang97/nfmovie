const initialState = {
    myList: [],
    reList:[],
    myTitle:'myList',
    reTitle:'recommendation'
}

function reducerRoot(state = initialState, action) {
    
    if (action.type == "loadData") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.myList= action.value.mylist;
        newState.reList = action.value.recommendations;
        return newState;
    }
    if (action.type == "addData") {
        const newState = JSON.parse(JSON.stringify(state));
        let temp = newState.reList[action.value];
        console.log("temp before",temp);
        newState.reList.splice(action.value,1);
        console.log("temp after",temp);
        newState.myList.push(temp);
        return newState;
    }
    if (action.type == "removeData") {
        console.log("remove data");
        const newState = JSON.parse(JSON.stringify(state));
        let temp = newState.myList[action.value];
        console.log("temp before",temp);
        newState.myList.splice(action.value,1);
        console.log("temp after",temp,newState.myList);
        newState.reList.push(temp);
        return newState;
    }
   
    return state;
}

export default reducerRoot;
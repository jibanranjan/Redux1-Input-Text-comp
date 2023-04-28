
var initialdata = {
    name:"jiban"
}

const  basicReducer=(storedata = initialdata, action)=>{

     if(action.type==="name"){
        return {
            name:action.userName,
        };
     }



 return storedata;
};


export default basicReducer;
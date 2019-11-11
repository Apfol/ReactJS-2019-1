import * as actionTypes from "./actionTypes";
import axios from "../../Instances/axios-sportequipment";
import firebase from "../../Instances/FireBase";


const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

const endLoading = () => {
  return {
    type: actionTypes.END_LOADING
  };
};

export const PostPrestamo = PrestamoData => {
  return dispatch => {
    dispatch(startLoading());  
    if(firebase.auth().currentUser != null){      
      let PrestamoData2 = {
        ...PrestamoData,
        student: firebase.auth().currentUser.displayName,
        studentemail: firebase.auth().currentUser.email,
        UID: firebase.auth().currentUser.uid
      }
      axios
      .put("/Prestamo/"+ firebase.auth().currentUser.uid +".json" , PrestamoData2)
      .then(Response => { 

        axios.get("/Sport/" + PrestamoData.sport + "/Count.json").then((r) => {
          console.log(r.data)
          let data = {
            "Count": r.data + 1
          }
          
          axios.patch("/Sport/" + Response.data.sport + "/.json", data).then((bien) =>{
            console.log(bien)
          }).catch((error) => {
            console.log(error)
          }).finally(()=>{
            dispatch(endLoading());
          })
        }).catch((error) => {
          console.log(error)
        })
        
        console.log(Response)
      }).catch((error) => {
        console.log(error)
      })
    }
    else{
      dispatch(endLoading());   
    }
    
  };
};

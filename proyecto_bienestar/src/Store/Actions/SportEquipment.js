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

const savePrestamo = Prestamos => {
  return {
    type: actionTypes.SavePrestamos,
    payload: {
      ...Prestamos
    }
  };
};

export const GetPrestamos = () => {
  return dispatch => {

      firebase
      .database()
      .ref("Prestamo")
      .once("value")
      .then(function(snapshot) {
        
        const posts = Object.values(snapshot.val()).map((post) => {
          return {...post};
        });
        console.log(posts)
        dispatch(savePrestamo(posts));
        
      });
  };
};

export const PostPrestamo = PrestamoData => {
  return dispatch => {            
    dispatch(startLoading());  
    if(firebase.auth().currentUser != null){      
      let PrestamoData2 = {
        ...PrestamoData
      }
      axios
      .patch("/Prestamo/" + PrestamoData.UID + ".json" , PrestamoData2)
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

export const UpdatePrestamo = PrestamoData => {
  return dispatch => {            
    dispatch(startLoading());  
    if(firebase.auth().currentUser != null){      
      let PrestamoData2 = {
        ...PrestamoData
      }
      axios
      .patch("/Prestamo/" + PrestamoData.uid + ".json" , PrestamoData2)
      .then(Response => { 
        axios.get("/Sport/" + PrestamoData.sport + "/Count.json").then((r) => {
          console.log(r.data)
          let data = {
            "Count": r.data - 1
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

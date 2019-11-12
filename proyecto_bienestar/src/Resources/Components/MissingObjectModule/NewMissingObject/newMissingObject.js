import React from "react";
import {Modal, Button} from "react-bootstrap";

var newMissingObject = (props) => {      
      
        return(<Modal
            size="lg"
            show={props.getModalStatus}
            onHide={() => props.setLgShow()}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Ingresar Objeto Perdido                     
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>            
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="encontrado">Encontrado por:</label>
                  <input
                    type="text"
                    class="form-control"                  
                    placeholder="¿Quién lo encontró?"                  
                    value={props.newObjectData.foundedby}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'foundedby')}}
                  />
                </div>
                <div class="form-group">
                  <label for="lugarEncontrado">Lugar Donde fue encontrado</label>
                  <input
                    type="text"
                    class="form-control"                  
                    placeholder="¿Donde lo encontró?"       
                    value={props.newObjectData["foundlocation"]}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'foundlocation')}}
                  />
                </div>
                <div class="form-group">
                  <label for="objectName">¿Cuál es el objeto perdido?</label>
                  <input
                    type="text"
                    class="form-control"                  
                    placeholder="Nombre del objeto perdido"       
                    value={props.newObjectData["name"]}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'name')}}
                  />
                </div>   
                <div class="form-group">
                  <label for="imagen">Imagen del objeto perdido</label>
                  <input
                    type="file"
                    class="form-control"                  
                    placeholder="Selección de imagen"       
                    value={props.newObjectData["image"]}
                    onChange={(event) => {props.uploadMissingObjectOnUpload(event)}}
                  />
                </div>   
                <img id = "myimg"/>
                <Button variant="primary" onClick={props.submitNewMissingObjectObj}>Ingresar Objeto Perdido</Button>                                                               
              </form>
            </Modal.Body>
          </Modal>)
    }   

export default newMissingObject


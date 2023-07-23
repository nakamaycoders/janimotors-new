import React from "react";
import { Modal } from "react-bootstrap";
// import Box from "@mui/material/Box";
// import Fade from "@mui/material/Fade";
// import Typography from "@mui/material/Typography";
// import { Form } from "react-bootstrap";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import {Button} from 'react-bootstrap'
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };


const ReusableModel = (props)=> {
  return (
    <div>
      <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        {props.modalTitle && <Modal.Title>{props.modalTitle}</Modal.Title>}
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.buttons ? (
          props.buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))
        ) : 
          <Button
                variant="success"
                onClick={props.onSubmit}
                style={{
                  backgroundColor: "#999999",
                  marginTop: "11px",
                  float: "right",
                  fontWeight: "bold",
                  // color: "success",
                }}
              >
                Save Changes
              </Button>
        }
      </Modal.Footer>
    </Modal>
      {/* <Modal  size={props.size} show={props.show} handleClose={props.handleClose} centered>
        <Fade in={props.show}>
          <Box sx={style}>
            <Form>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {props.modelName}
              </Typography>

              {
                props.children
              }

              <Button
                variant="secondary"
                style={{
                  backgroundColor: "#999999",
                  marginTop: "11px",
                  marginLeft: "6rem",
                  fontWeight: "bold",
                  color: "white",
                }}
                onClick={props.handleClose}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={props.handleClose}
                style={{
                  backgroundColor: "#999999",
                  marginTop: "11px",
                  float: "right",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Save Changes
              </Button>
            </Form>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
}

export default ReusableModel;

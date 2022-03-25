import React from "react";
import Button from "./Button";
import "../styles/EditModal.css";
import PropTypes from "prop-types";

class EditModal extends React.Component{
    render(){
        const {edit, close, data, change, update} = this.props;
        if(edit){
            return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input type="text" value={data.title} onChange={change}/>
                    </div>
                    <div className="btn-group">
                        <Button text="OK" variant="primary" action={update}/>
                        <Button text="cancel" variant="warning" action={close}/>
                    </div>
                </div>
            </div>
            )
        }else{
            return null;
        }
    }
}

EditModal.propTypes = {
    data: PropTypes.object.isRequired,
    edit: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
}

export default EditModal;
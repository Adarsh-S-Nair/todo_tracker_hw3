import React from 'react';

import { WModal, WMHeader, WMMain, WButton } from 'wt-frontend';

const Delete = (props) => {

    const handleDelete = async () => {
        props.deleteList(props.activeid);
        props.setShowDelete(false);
    }

    return (
        <div className="overlay">
            <div className="delete-modal modal">
                <div className="modal-header" onClose={() => props.setShowDelete(false)}>
                    Delete List?
                </div>
                <div className="modal-spacer">&nbsp;</div>
                <div className="modal-spacer">&nbsp;</div>
                <div>
                    <WButton hoverAnimation="darken" className="modal-button cancel-button" onClick={() => props.setShowDelete(false)} wType="texted">
                        Cancel
                    </WButton>
                    <label className="col-spacer">&nbsp;</label>
                    <label className="col-spacer">&nbsp;</label>
                    <label className="col-spacer">&nbsp;</label>
                    <label className="col-spacer">&nbsp;</label>
                    <WButton hoverAnimation="darken" className="modal-button" onClick={handleDelete} clickAnimation="ripple-light" hoverAnimation="darken" shape="rounded" color="danger">
                        Delete
                    </WButton>
                </div>
            </div>
        </div>
    );
}

export default Delete;
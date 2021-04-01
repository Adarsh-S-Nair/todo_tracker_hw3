import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const undoable = props.tps.hasTransactionToUndo();
    const redoable = props.tps.hasTransactionToRedo();

    const headerStyle = props.disabled ? 'table-header-disabled' : 'table-header';
    const headerSectionStyle = props.disabled ? 'table-header-section-disabled' : 'table-header-section';
    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const undoStyle = undoable && !props.disabled ? 'table-header-button' : 'table-header-button-disabled';
    const redoStyle = redoable && !props.disabled ? 'table-header-button' : 'table-header-button-disabled';
    const clickDisabled = () => { };

    return (
        <div className="table-header-container">
            <WRow className={headerStyle}>
                <WCol size="3">
                    <WButton className={headerSectionStyle} wType="texted" hoverAnimation={props.disabled ? "" : "lighten"}>Task</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className={headerSectionStyle} wType="texted" hoverAnimation={props.disabled ? "" : "lighten"}>Due Date</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className={headerSectionStyle} wType="texted" hoverAnimation={props.disabled ? "" : "lighten"}>Status</WButton>
                </WCol>

                <WCol size="2">
                    <WButton className={headerSectionStyle} wType="texted" hoverAnimation={props.disabled ? "" : "lighten"}>Assigned To</WButton>
                </WCol>

                <WCol size="3">
                    <div className="table-header-buttons">
                        <WButton onClick={undoable ? props.undo : clickDisabled} className={`${undoStyle}`} wType="texted" clickAnimation={undoable ? "ripple-light" : ""} shape="rounded" hoverAnimation={undoable ? "lighten" : ""}>
                            <i className="material-icons">undo</i>
                        </WButton>
                        <WButton onClick={redoable ? props.redo : clickDisabled} className={`${redoStyle}`} wType="texted" clickAnimation={redoable ? "ripple-light" : ""} shape="rounded" hoverAnimation={redoable ? "lighten" : ""}>
                            <i className="material-icons">redo</i>
                        </WButton>
                        <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`} hoverAnimation={props.disabled ? "" : "lighten"}>
                            <i className="material-icons">add_box</i>
                        </WButton>
                        <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`} hoverAnimation={props.disabled ? "" : "lighten"}>
                            <i className="material-icons">delete_outline</i>
                        </WButton>
                        <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`} hoverAnimation={props.disabled ? "" : "lighten"}>
                            <i className="material-icons">close</i>
                        </WButton>
                    </div>
                </WCol>
            </WRow>
        </div>
    );
};

export default TableHeader;
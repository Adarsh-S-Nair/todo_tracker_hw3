import React, { useState } from 'react';
import { WButton, WInput, WRow, WCol } from 'wt-frontend';

const TableEntry = (props) => {
    const { data } = props;

    const completeStyle = data.completed ? ' complete-task' : ' incomplete-task';
    const assignedToStyle = data.completed ? 'assigned-to-complete' : 'assigned-to-incomplete';
    const topItem = props.data == props.list[0];
    const bottomItem = props.data == props.list[props.list.length-1];
    const upArrowStyle = topItem ? 'disabled-table-entry-buttons' : 'table-entry-buttons';
    const downArrowStyle = bottomItem ? 'disabled-table-entry-buttons' : 'table-entry-buttons';

    const clickDisabled = () => { };

    const description = data.description;
    const due_date = data.due_date;
    const status = data.completed ? 'complete' : 'incomplete';
    const assigned_to = data.assigned_to;
    const [editingDate, toggleDateEdit] = useState(false);
    const [editingDescr, toggleDescrEdit] = useState(false);
    const [editingStatus, toggleStatusEdit] = useState(false);
    const [editingAssigned, toggleAssignedEdit] = useState(false);

    const handleDateEdit = (e) => {
        toggleDateEdit(false);
        const newDate = e.target.value ? e.target.value : 'No Date';
        const prevDate = due_date;
        if(newDate != prevDate) { props.editItem(data._id, 'due_date', newDate, prevDate); }
    };

    const handleDescrEdit = (e) => {
        toggleDescrEdit(false);
        const newDescr = e.target.value ? e.target.value : 'No Description';
        const prevDescr = description;
        if(newDescr != prevDescr) { props.editItem(data._id, 'description', newDescr, prevDescr); }
    };

    const handleStatusEdit = (e) => {
        toggleStatusEdit(false);
        const newStatus = e.target.value ? e.target.value : false;
        const prevStatus = status;
        if(newStatus != prevStatus) { props.editItem(data._id, 'completed', newStatus, prevStatus); }
    };

    const handleAssignedEdit = (e) => {
        toggleAssignedEdit(false);
        const newAssigned = e.target.value ? e.target.value : "Not Assigned";
        const prevAssigned = assigned_to;
        if(newAssigned != prevAssigned) { props.editItem(data._id, 'assigned_to', newAssigned, prevAssigned); }
    }

    return (
        <WRow className='table-entry'>
            <WCol size="3">
                {
                    editingDescr || description === ''
                        ? <WInput
                            className='table-input' onBlur={handleDescrEdit}
                            autoFocus={true} defaultValue={description} type='text'
                            wType="lined" barAnimation="left-to-right" inputClass="table-input"
                        />
                        : <div className="table-text"
                            onClick={() => toggleDescrEdit(true)}
                        >{description}
                        </div>
                }
            </WCol>

            <WCol size="2">
                {
                    editingDate ? <input
                        className='table-input' onBlur={handleDateEdit}
                        autoFocus={true} defaultValue={due_date} type='date'
                        wType="outlined" barAnimation="solid" inputClass="table-input-class"
                    />
                        : <div className="table-text"
                            onClick={() => toggleDateEdit(true)}
                        >{due_date}
                        </div>
                }
            </WCol>

            <WCol size="2">
                {
                    editingStatus ? <select
                        className='table-select' onBlur={handleStatusEdit}
                        autoFocus={true} defaultValue={status}
                    >
                        <option value="complete">complete</option>
                        <option value="incomplete">incomplete</option>
                    </select>
                        : <div onClick={() => toggleStatusEdit(true)} className={`${completeStyle} table-text`}>
                            {status}
                        </div>
                }
            </WCol>

            <WCol size="2">
                {
                    editingAssigned ? <WInput
                        className='table-input' onBlur={handleAssignedEdit}
                        autoFocus={true} defaultValue={assigned_to} type='text'
                        wType="lined" barAnimation="left-to-right" inputClass="table-input"
                    />
                    : <div className={`${assignedToStyle} table-text`}
                        onClick={() => toggleAssignedEdit(true)}
                    >{assigned_to}
                    </div>
                }
            </WCol>

            <WCol size="3">
                <div className='button-group'>
                    <WButton className={upArrowStyle} onClick={() => {if(!topItem) {props.reorderItem(data._id, -1)}}} wType="texted" hoverAnimation={topItem ? "" : "lighten"}>
                        <i className="material-icons">expand_less</i>
                    </WButton>
                    <WButton className={downArrowStyle} onClick={() => {if(!bottomItem) {props.reorderItem(data._id, 1)}}} wType="texted" hoverAnimation={bottomItem ? "" : "lighten"}>
                        <i className="material-icons">expand_more</i>
                    </WButton>
                    <WButton className="table-entry-buttons" onClick={() => props.deleteItem(data, props.index)} wType="texted" hoverAnimation="lighten">
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>
        </WRow>
    );
};

export default TableEntry;
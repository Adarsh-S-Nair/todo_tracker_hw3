import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    const activeList = props.todolists.find(list => list.id === props.activeid);
    console.log(props.todolists);
    const mostRecentLists = [...props.todolists]
    mostRecentLists.sort((a, b) => {if ( a.index < b.index ){
                                        return 1;
                                    }
                                    if ( a.index > b.index ){
                                        return -1;
                                    }
                                    return 0;})
    

    

    return (
        <>
            {
                props.todolists &&
                mostRecentLists.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;
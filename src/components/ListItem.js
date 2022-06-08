import React from 'react'

const ListItem = ({note}) => { // add the curly bracket where it would inherit proops so it correctly rendeers - same as props.note
    return (
        <div className='notes-list-item'>
            <h3>{note.body} </h3>
        </div>
    )
}

export default ListItem
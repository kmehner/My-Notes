import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'

const NotesPage = () => {
  return (
    <div>
        {notes.map(note => (
            <ListItem note = {note} /> // Reference note object inside list object as Note (from array notes)
        ))}
    </div>
  )
}

export default NotesPage
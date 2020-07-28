import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      notes: [
        {
          id: 1,
          text: 'watch youtube',
        },
        {
          id: 2,
          text: 'watch netflix',
        },
        {
          id: 3,
          text: 'do nothing',
        },
        {
          id: 4,
          text: 'do react',
        },
        {
          id: 5,
          text: 'practice git',
        }
      ],

      noteInputValue: ''
    }


  }

  handleNoteInputChange = (e) => {
    this.setState({ noteInputValue: e.target.value })
    console.log(e.target.value)

  }

  handleAddButton = (e) => {
    e.preventDefault()
    console.log(this.state.notes.length)
    
    let note = {
      // id:Date.now(),
      id: this.state.notes.length+1,
      text: this.state.noteInputValue,
    }

    let newNotes = [note,...this.state.notes]

    this.setState({
      notes:newNotes,
      noteInputValue:'',
    })
  }

  handleNoteDelete = (e) =>{
    let noteIdToDelete = parseInt(e.target.id)
    let notes = this.state.notes

    

    let filteredNotes = notes.filter((item)=>{
      return item.id !== noteIdToDelete
    })
    console.log({filteredNotes})

    this.setState({notes:filteredNotes})
  }

  render() {
    return (
      <div className="wrap">
        <div className="container">
          <div className="notes">
            {
              this.state.notes.map( (note)=>{
                return (
                  <div className="note" key={note.id}>
                    <div className="note-body">
                      <i id={note.id} className="far fa-times-circle note-remove" onClick={this.handleNoteDelete}></i>
                      <div className="note-text">
                        {note.text}
                      </div>
                    </div>
                  </div>
                )
              })
            }

            <div className="note new-note">

              <form className="note-body">
                <div className="form-group">
                  <label htmlFor="note-input">New note</label>
                  <input type="text" className="form-control" id="note-input" value={this.state.noteInputValue} onChange={this.handleNoteInputChange}></input>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleAddButton}>Add</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }

}



export default App;

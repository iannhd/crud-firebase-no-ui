import React, { useState } from 'react'
import { addDoc } from 'firebase/firestore'
import { movieCollectionRef } from '../lib/firestore.collections'

export default function AddMovies() {
    const [name, setName] = useState('')
    function handleSubmit(e) {
    e.preventDefault()
    if (name === '') {
      return
    }
        addDoc(movieCollectionRef, { name: name }).then(response => {
            console.log(response.id)
        })
            .catch(err => {
            console.log(err.message);
        })
        alert(name)
  }
  return (
    <div>
        <h4>AddMovies</h4>  
          <form onSubmit={handleSubmit}>
              <label htmlFor="movie">Add Movie Name</label>
              <input type="text" id='name' value={name} onChange={e => setName(e.target.value)} />
              <button type='submit'>Add Movie</button>
          </form>  
    </div>
  )
}

import React, { useState } from 'react'
import { doc, updateDoc, setDoc } from 'firebase/firestore'
import { movieCollectionRef } from '../lib/firestore.collections'
import { db, } from '../lib/init-firebase'

export default function EditMovies() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    function handleSubmit(e) {
    e.preventDefault()
    if (name === '' || id === '') {
      return
    }
        const docRef = doc(db, 'movies', id)
        updateDoc(docRef, { name })
            .then(response => console.log(response))
            .catch(err => console.log(err.message))
        // setDoc(docRef, { age:26 })
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err.message))
  }
  return (
    <div>
        <h4>Edit Movies</h4>  
          <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id">Add Movie ID</label>
                <input type="text"
                    id='id'
                    value={id}
                    onChange={e => setId(e.target.value)} />
              </div>
              <br/>
              <div>
                <label htmlFor="id">Add Movie Name</label>
                <input type="text" id='name' value={name} onChange={e => setName(e.target.value)} />
                <br/>
                <button type='submit'>Edit Movie</button>
              </div>
          </form>  
    </div>
  )
}


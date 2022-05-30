import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm=() =>{
    const {quary, error, setQuary}= useGlobalContext()
console.log(quary)
    return (
        <section className='section search'>
        <form className='search-form' onSubmit={(e)=>e.preventDefault()}>
          <div className='form-control'>
          <label htmlFor='name' style={{color:'white'}}>search  movie</label>
           <input
           type='text'
           name='name'
           id='name'
           value={quary}
           onChange={(e)=>setQuary(e.target.value)}
          />
         </div>
         </form>
       </section>
    )
}

export default SearchForm

import React , { useState , useEffect}from 'react'
import { useParams, Link } from 'react-router-dom'

/*import api-endpoint-* for fetch single movie from api*/
import {api_endpoint } from '../context'
console.log(api_endpoint)

const SingleMovie=() =>{
    //useParams //
    const { id } = useParams()
const [loading , setLoading] = useState(false)
const [error , setError] = useState({show:false, msg:''})
const [movie , setMovie]= useState({})
   const fetchData= async ()=>{
       setLoading(true)
       try{
           const responde= await fetch(`${api_endpoint}&i=${id}`)
           const data= await responde.json()
           //console.log(data)
           if(data.response === 'false'){
           setError({show:true, msg:data.Error})
           setLoading(false)
           }
           else{
            setMovie(data)
            setLoading(false)
           }
          
       }catch(error){
           console.log('error')

       }
   }
   useEffect(()=>{
       fetchData()
   } ,[id])



   if(loading){
       return(
           <div className='loading'>*/loading*/</div>
       )
   }
   if(error.show){
    return(
        <div className='page-error'>
            <h4>{error.msg}</h4>
            <Link to='/'>Back</Link>
        </div>
    )
}


   const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
    return (
        <div className="wrapper" style={{backgroundColor:'purple'}}>
        <div className='single-movie' >
             <section className='single-movie'>
              <img src={poster} alt={title} />
        <div className='single-movie-info'>
                  <h2>{title}</h2>
                 <p>{plot}</p>
                <h4>{year}</h4>
             <Link to='/' className='btn'>
          back to movies
             </Link>
           </div>
    </section>   
        </div>
        </div>
    )
}

export default SingleMovie








//     const [loading , setLoading] = useState(false)
  
//    const fetchData= async ()=>{
//        try{
//            const responde= await fetch(`${api_endpoint}${id}`)
//            const data= await responde.json()
//            console.log(data)

//        }catch(error){
//            console.log('error')

//        }
//    }
//    useEffect(()=>{
//        fetchData()
//    } ,[id])
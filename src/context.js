import React, {useState , useContext ,useEffect} from "react";
const mainUrl='http://www.omdbapi.com/?apikey='
const keyApi='51531bb2'
export const api_endpoint = `${mainUrl}${keyApi}`


const AppContext = React.createContext();
const AppProvider = ({ children }) => { 

    const [loading , setLoading ] = useState(false)
    const [movies , setMovies] =useState([])
    const [error , setError]= useState({show:false, msg:''})
    const [quary ,setQuary] =useState('batman')

    const fetchMovies= async(url)=>{
        setLoading(true)
        try{
            const responde = await fetch (url)
            const data= await responde.json()
            console.log(data)
            if(data.Response === 'True'){
                setMovies(data.Search)
                setError({show:false, msg:''})
               
            }
           
            else{
                setError({show:true, msg:data.Error})
            }
            
            setLoading(false)
            
           
        }catch(error){
            console.log(error)
        }

    }
    useEffect(() => {
       fetchMovies(`${api_endpoint}&s=${quary}`)
    }, [quary])


console.log(quary)
    return(
        <AppContext.Provider value={{ loading , movies , quary ,setQuary}}>
            {children}
        </AppContext.Provider>
    )
 
}
export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext , AppProvider}
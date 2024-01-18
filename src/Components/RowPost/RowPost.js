import React from 'react'
import { useEffect,useState } from 'react'
import "./RowPost.css"
import { imageUrl,API_KEY } from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'





function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,seturlId]=useState("")
    useEffect(()=>{
            axios.get(props.url).then(response=>{
                console.log(response.data)
                setMovies(response.data.results)
            }).catch(err=>{
               // alert("networkerror")
            })
    },[])
    const opts={
        height:'390',
        width:'100%',
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay:0,
        },
    };
    const handleMovie = (id)=>{
            console.log(id) 
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              if(response.data.results.length!==0)  
              {
                seturlId(response.data.results[0])
              }
              else{
                console.log("empty array")
              }
            })
            }

    
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters' > 
      {movies.map((obj)=>
             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallposter':'poster'} src={`${imageUrl}`+obj.backdrop_path} alt="poster" />
      )}
           
            

      </div>
    {urlId &&  <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost

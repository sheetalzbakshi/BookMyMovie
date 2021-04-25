import React from "react";
import Typography from "@material-ui/core/Typography";
import "./DetailsDescription.css";
import YouTube from 'react-youtube';

const DetailsDescription =({movie})=>{

    const urlParams = new URLSearchParams(movie.trailer_url);
    let videoKey = "";

    for(var pair of urlParams.entries()) {
        videoKey = pair[1];
    }   
    

    return (
        <div className="detailsDescriptionContainer">
             <Typography variant="h2" component="h2">
                {movie.title}
            </Typography>                
            <Typography>
                <b>Genre:</b> {movie.genres.join(", ")}
            </Typography>            
            <Typography>
                <b>Duration:</b> {movie.duration}
            </Typography>       
            <Typography>
                <b>Release Date:</b> {new Date(movie.release_date).toDateString()}
            </Typography> 
            <Typography>
                <b>Rating:</b> {movie.critics_rating}
            </Typography> 
            <Typography style={{marginTop:"16px", flex:"100%"}}>
                <b>Plot:</b>&#40;<a href={movie.wiki_url}>Wiki Link</a>&#41; {movie.storyline}
            </Typography> 
            <Typography style={{marginTop:"16px"}} >
                <b>Trailer:</b>                              
            </Typography>
            <YouTube style={{flexGrow: "1", backgroundColor:"red"}} videoId={videoKey}></YouTube>
        </div>
    );

}


export default DetailsDescription;
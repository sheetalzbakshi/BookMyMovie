import React from 'react';
import Typography from "@material-ui/core/Typography";


// It should have the 'Rate this movie': text is in bold.

// It should have 5 stars with black as the initial colour. When a user clicks on a star, it turns yellow. '
//You must use the StarBorderIcon component of Material UI to implement this. Refer to this image for more information.

// It should have Artists: as the textfield, with a margin of 16px from the top and the bottom.

// It should contain the grid of the artists of that movie. You must use the GridList component of Material UI with the column value as 2. 
//Information about artists is available in the state variable that stores the property ‘artists’. Each grid contains an image of an artist. This information on the artists is available in the state variable that stores the property ‘profile_url’. The grid should also have the title which will be the name of the artist. You must use the GridListTileBar component for the name of the artist. The artist name will be made using the ‘first_name’ and ‘last_name’ properties, with a space between them.


const DetailsRating = ({movie})=>{

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
        
}

export default DetailsRating;
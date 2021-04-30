import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./DetailsRating.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const styles = {
    root: {
      display: "flex",
      flexWrap: "wrap",
      overflowX: "hidden",
      overflowY: "hidden",
    },
    gridList: {
      flexWrap: "wrap",
      flex: "0 1 76%",
      transform: "translateZ(0)",
      margin:"16px"
    },
    titleStyle: {
      color: "rgb(0, 188, 212)",
      cursor: "pointer",
    },
    imageStyle: {          
        width: "100%",
        position: "absolute",
        top:"50%",
        transform: "translateY(-50%)"
    },
  };
  

const DetailsRating = ({ movie }) => {
    const [rating, setRating] = useState(0);

    const onClick = (value) => (event) => {
        if (rating === 1 && rating === value) setRating(0);
        else setRating(value);
    };

    return (
        <div className="detailsRatingContainer">
            <Typography>
                <b>Rate this movie:</b>
            </Typography>
            <div>
                {[1, 2, 3, 4, 5].map((element) => (
                    <StarBorderIcon
                        id={element}
                        key = {element}
                        style={
                            rating >= element
                                ? { color: "yellow", cursor: "pointer" }
                                : { cursor: "pointer" }
                        }
                        onClick={onClick(element)}
                    />
                ))}
            </div>
            <Typography style={{ marginTop: "16px", marginBottom: "16px" }}>
                <b>Artists:</b>
            </Typography>
            <GridList                
                style={styles.gridList}
                cols={2}   
                cellHeight={200}     
                component ="div"        
            >
                {movie.artists.map((tile, index) => (
                    <GridListTile key={index}>
                        <img
                            src={tile.profile_url}
                            alt={tile.first_name}
                            style={styles.imageStyle}                            
                        />
                        <GridListTileBar
                            title={tile.first_name + " " + tile.last_name}                         
                            style={styles.titleStyle}                            
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default DetailsRating;

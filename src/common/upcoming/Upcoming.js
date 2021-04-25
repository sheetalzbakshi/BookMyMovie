import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const styles = {
  root: {    
    display: "flex",
    flexWrap: "wrap",   
    overflowX: "hidden",
    overflowY : "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    flexGrow: 1
  },
  titleStyle: {
    color: "rgb(0, 188, 212)",
  },
  imageStyle :{
    height:"100%", 
    width:"100%"
  }
};

const Upcoming = ({ movies, count }) => {

  return (
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={count} component={'div'}>
        {movies.map((tile, index) =>               
            <GridListTile key={index}>
              <img src={tile.poster_url} alt={tile.title} style={styles.imageStyle}  />
              <GridListTileBar
                title={tile.title}
                style={styles.titleStyle}                
              />
            </GridListTile>

        )}
      </GridList>
    </div>
  );
};

export default Upcoming;

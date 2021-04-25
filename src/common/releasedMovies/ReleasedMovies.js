import React from "react";
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
    height: "100%",
    width: "100%",
    cursor: "pointer",
  },
};

const ReleasedMovies = ({ movies, count, history }) => {


  const onClick = (movie)=> (event)=>{  
    history.push("/movie", movie)
  }


  return (
    <GridList
      cellHeight={350}
      style={styles.gridList}
      cols={count}
      spacing={30}
    >
      {movies.map((tile, index) => (
        <GridListTile key={index}>
          <img
            src={tile.poster_url}
            alt={tile.title}
            style={styles.imageStyle}
            onClick={onClick(tile)}
          />
          <GridListTileBar
            title={tile.title}
            subtitle={
              <span>
                Release Date:{new Date(tile.release_date).toDateString()}
              </span>
            }
            
            style={styles.titleStyle}
            onClick={onClick(tile)}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ReleasedMovies;

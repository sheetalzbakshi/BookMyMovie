import React from "react";
import "./FilterCard.css";
import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    float: "right",
    margin: theme.spacing(1),
    minWidth: 240,
    maxWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
  withMargin:{
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  button:{
    width:"100%"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 11.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FilterCard = ({ genres, artists, filterCallback }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    movieName: "",
    genre: [],
    artist: [],
    from: "",
    to: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = ()=>{   
    if(filterCallback !== undefined) 
    filterCallback(values);
  }

  return (
    <div  className="fCard">
      <Card className={classes.root}>
        <CardContent>
        
          <Typography gutterBottom component="h3" className={classes.title}>
            FIND MOVIES BY:
          </Typography>
          
          <FormControl fullWidth className={classes.withMargin}>
            <InputLabel htmlFor="movieName">Movie Name</InputLabel>
            <Input
              id="movieName"
              value={values.movieName}
              onChange={handleChange("movieName")}
            />
          </FormControl>

          <FormControl fullWidth className={clsx(classes.withMargin)}>
            <InputLabel id="genres-label">Genres</InputLabel>
            <Select
              labelId="genres-label"
              id="genres"
              multiple
              value={values.genre}
              onChange={handleChange("genre")}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {genres.map((element, index) => (
                <MenuItem value={element} key={index}>
                  <Checkbox checked={values.genre.indexOf(element) > -1} />
                  <ListItemText primary={element} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth className={clsx(classes.withMargin)}>
            <InputLabel id="artist-label">Artists</InputLabel>
            <Select
              labelId="artist-label"
              id="artist"
              multiple
              value={values.artist}
              onChange={handleChange("artist")}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {artists.map((element, index) => (
                <MenuItem value={element} key={index}>
                  <Checkbox checked={values.artist.indexOf(element) > -1} />
                  <ListItemText primary={element} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth className={clsx(classes.withMargin)}>          
            <TextField
              id="startDate"
              label="Release Date Start"
              type="date"
              defaultValue=""              
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {handleChange("from")}
            />
          </FormControl>

            <FormControl fullWidth className={clsx(classes.withMargin)}>          
            <TextField
              id="endDate"
              label="Release Date End"
              type="date"
              defaultValue=""              
              InputLabelProps={{
                shrink: true,
              }}
              onChange = {handleChange("to")}
              format="DD-MM-YYYY"
            />
          </FormControl>
          <Button variant="contained" color="primary" disableElevation className={clsx(classes.withMargin, classes.button)} onClick={handleSubmit}>
               APPLY
        </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterCard;

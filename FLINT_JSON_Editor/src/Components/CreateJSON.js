import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Logo from '../Images/logo.png'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    // height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a')
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} >

          <GridListTile style={{padding: "20px"}}>
            <img src={Logo}  />
            <Tooltip title="This option will help you to create a JSON File from a basic template" aria-label="JSON">
            <GridListTileBar
              title="Create JSON File from Scratch"
              
              subtitle={<span>This option will help you to create a JSON File from a basic template</span>}
              actionIcon={
              <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
                />
              }
            /></Tooltip>
          </GridListTile>
          <GridListTile style={{padding: "20px"}}>
            <img src={Logo}  />
            <Tooltip title="This option will help you to create a JSON File, just by choosing values for the keys" aria-label="JSON">
            <GridListTileBar
              title="Create JSON File using Interactive editor"
              subtitle={<span>This option will help you to create a JSON File, just by choosing values for the keys</span>}
              actionIcon={
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
              }
            /></Tooltip>
          </GridListTile>
      </GridList>
    </div>
  );
}

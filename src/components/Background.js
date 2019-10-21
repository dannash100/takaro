import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import sky from '../images/sky blue.png'
import sea from '../images/waves blue.png'
import waves from '../images/waves tile.png'
import hillTop from '../images/hills tile.png'
import hill from '../images/hills green.png'
import clouds from '../images/clouds.png'
import mountains from '../images/mountains.png'
import grass from '../images/grass tiles combined.png'
import earth from '../images/earth brown.png'
import gate from '../images/gate.png'
import red from '../images/red.png'

const useStyles = makeStyles({
  sky: {
    position: 'absolute',
    height: '28%',
  },
  sea: {
    position: 'absolute',
    top: '21vh',
    height: '35%',
    width: '100%'
  },
  ground: {
    position: 'absolute',
    top: '97vh',
    height: '46%',
    width: '100%'
  },
  red: {
    position: 'absolute',
    top: '142vh',
    height: '35%',
    width: '100%'
  },
  waves: {
    width: '100%',
    marginBottom: -5,
  },
  hills: {
    position: 'absolute',
    top: '55vh',
    width: '100%',

  },
});

function Background() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.sky}>
    <img src={clouds} style={{position: 'absolute', height: '40%', right: '10%'}}/>
      <img src={mountains} style={{position: 'absolute', height: '100%', top: '12%', right: 0}}/>
    <img src={sky} style={{width: '100%', minHeight: 300}}/>
    </div>

    <div className={classes.sea}>
      <img src={waves} className={classes.waves}/>
      <img src={sea} style={{width: '100%', minHeight: 500}}/>
    </div>
    <div className={classes.hills}>
      {/* <img src={gate}/> */}
      <img src={hillTop} style={{marginBottom: -5, width: '100%'}}/>
      <img src={hill} className={classes.hill} style={{minHeight:350, width: '100%'}}/>
    </div>
      <img src={gate} style={{position: 'absolute', right: '10%', bottom: '3%', height: 150}}/>
    <div className={classes.ground}>
      <img src={grass} style={{position: 'absolute', marginBottom: -5, width: '100%'}}/>
      <img src={earth} style={{height: '100%', width: '100%'}}/>
    </div>
    <div className={classes.red}>
      <img src={red} style={{height: '100%', width: '100%'}}/>
    </div>

    </>
  );
}

export default Background;

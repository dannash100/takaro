import React from "react";
import Typography from "@material-ui/core/Typography";
import {Parallax} from 'react-scroll-parallax'
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
    height: 200,
  },
  sea: {
    position: 'absolute',
    top: 210,
    // height: 400,
    paddingTop: '3%',
    overflowX: 'hidden',
    width: '100%'
  },
  ground: {
    position: 'absolute',
    top: 1050,
    width: '100%',
    overflowX: 'hidden'
  },
  red: {
    position: 'absolute',
    top: 1520,
    // height: 400,
    width: '100%'
  },
  waves: {
    position: 'absolute',
    width: '100%',
    marginBottom: -2,
    bottom: 0
  },
  hills: {
    position: 'absolute',
    top: 575,
    paddingTop: 30,
    overflowX: 'hidden',
    width: '100%',

  },
});

function Background() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.sky}>
    <img src={clouds} style={{position: 'absolute', height: '40%', right: '10%'}}/>
      <img src={mountains} style={{position: 'absolute', height: 200, top: 60, right: 0}}/>
    <img src={sky} style={{width: '100%', minHeight: 300}}/>
    </div>

    <div className={classes.sea}>
    <Parallax className="custom-class" x={[0, 80]} tagOuter="figure">
      <img src={waves} className={classes.waves}/>
      <img style={{right: '100%', position: 'absolute'}} src={waves} className={classes.waves}/>
      </Parallax>
      <img src={sea} style={{width: '100%', minHeight: 500}}/>
    </div>
    <div className={classes.hills}>
      {/* <img src={gate}/> */}
      <img src={gate} style={{position: 'absolute', right: '10%', top: 311, height: 180}}/>
      <Parallax className="custom-class" x={[0, -60]} tagOuter="figure">
      <img src={hillTop} style={{height: 90,marginBottom: -5, bottom: -60, width: '100%', height: 95, position: 'absolute'}}/>
      <img src={hillTop} style={{height: 90, marginBottom: -5, bottom: -60, width: '100%', height: 95, left: '100%', position: 'absolute'}}/>
      </Parallax>
      <img src={hill} className={classes.hill} style={{height: 600, width: '100%'}}/>
    </div>
    <div className={classes.ground}>
    <Parallax className="custom-class" x={[0, -50]} tagOuter="figure">
      <img src={grass} style={{position: 'absolute', marginBottom: -5, width: '100%'}}/>
      <img src={grass} style={{position: 'absolute', marginBottom: -5, width: '100%', left: '100%'}}/>
      </Parallax>
      <img src={earth} style={{ height: 500, width: '100%'}}/>
    </div>
    <div className={classes.red}>
      <img src={red} style={{marginBottom: -5, height: '100%', width: '100%'}}/>
    </div>

    </>
  );
}

export default Background;


import React from "react";
import {motion} from 'framer-motion'
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
import brownHillTop from '../images/dark-brown-hills-tile.png'
import lava from '../images/orange-waves-tile.png'
import redHills from '../images/red-hills-tile.png'

import redCircle from '../images/red circle.png'
import redBubble from '../images/red bubble.png'
import orangeCircle from '../images/orange circle.png'
import orangeBubble from '../images/orange bubble.png'

const useStyles = makeStyles({
  sky: {
    position: 'absolute',
    // width: '100%',
    overflowX: 'hidden',
    height: 350,
  },
  sea: {
    position: 'absolute',
    top: 210,
    // height: 400,
    paddingTop: '3%',
    width: '100%'
  },
  ground: {
    position: 'absolute',
    top: 1050,
    width: '100%',
  },
  brownGround: {
    position: 'absolute',
    top: 1550,
    height: 450,
    width: '100%',
    backgroundColor: '#9e6037'
  },
  red: {
    position: 'absolute',
    top: 2450,
    height: 270,
    width: '100%'
  },
  waves: {
    position: 'absolute',
    width: '100%',
    bottom: 0
    // top: -12,
    // marginBottom: -10,
  },
  hills: {
    position: 'absolute',
    top: 585,
    paddingTop: 30,
    width: '100%',
  },
  wrapper: {
    overflow: 'hidden',
    height: 'inherit'
  }
});

function Background() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
    <div className={classes.sky}>
    <motion.img
    src={clouds}
    style={{position: 'absolute', overflow: 'hidden'}}
  animate={{ x: ['-100%', '100%'] }}
  transition={{
    loop: Infinity,
    ease: "linear",
    duration: 60
  }}
  >
    </motion.img>
      <img src={mountains} style={{position: 'absolute', height: 200, top: 60, right: 0}}/>
    <img src={sky} style={{width: '100%', minHeight: 300}}/>
    </div>

    <div style={{overflow: 'hidden'}} className={classes.sea}>
    <Parallax className="custom-class" x={[0, 80]} tagOuter="figure">
      <img src={waves} className={classes.waves}/>
      <img style={{right: '100%', position: 'absolute'}} src={waves} className={classes.waves}/>
      </Parallax>
      <img src={sea} style={{width: '100%', minHeight: 500}}/>
    </div>
    <div style={{overflow: 'hidden'}} className={classes.hills}>
      {/* <img src={gate}/> */}
      <img src={gate} style={{position: 'absolute', right: '10%', top: 301, height: 180}}/>
      <Parallax className="custom-class" x={[0, -60]} tagOuter="figure">
      <img src={hillTop} style={{height: 90,marginBottom: -5, bottom: -60, width: '100%', height: 95, position: 'absolute'}}/>
      <img src={hillTop} style={{height: 90, marginLeft: -1, marginBottom: -5, bottom: -60, width: '100%', height: 95, left: '100%', position: 'absolute'}}/>
      </Parallax>
      <img src={hill} className={classes.hill} style={{height: 600, width: '100%'}}/>
    </div>
    <div style={{overflow: 'hidden'}} className={classes.ground}>
    <Parallax className="custom-class" x={[0, -50]} tagOuter="figure">
      <img src={grass} style={{position: 'absolute', marginBottom: -5, width: '100%'}}/>
      <img src={grass} style={{position: 'absolute', marginBottom: -5, width: '100%', left: '100%'}}/>
      </Parallax>
      <img src={earth} style={{ height: 500, width: '100%'}}/>
    </div>
    <div style={{overflow: 'hidden', position: 'absolute', width: '100%', marginTop: 1500}}>
      <Parallax tagOuter="figure"  x={[0,80]}>
        <img src={brownHillTop} style={{ marginBottom: -5, width: '100%' }}/>
        <img src={brownHillTop} style={{position: 'absolute', marginBottom: -5, width: '100%', right: '100%'}}/> 
      </Parallax>
    </div>
    <div className={classes.brownGround}>
      <Parallax tagOuter="figure"  x={[0,-80]}>
        <img src={lava} style={{position: 'absolute', top: 300, marginBottom: -5, width: '100%' }}/>
        <img src={lava} style={{position: 'absolute', top: 300, marginBottom: -5, width: '100%', left: '100%'}}/> 
      </Parallax>
    </div>
    <div style={{position: 'absolute', overflowX: 'hidden', width: '100%', height: 550, marginTop: 1880, backgroundColor: '#f66131'}}>
      <Parallax tagOuter="figure"  x={[0,80]}>
        <img src={redHills} style={{position: 'absolute', top: 380, marginBottom: -5, width: '100%' }}/>
        <img src={redHills} style={{position: 'absolute', top:380, marginBottom: -5, width: '100%', right: '100%'}}/> 
      </Parallax>
    
  </div>
  <div style={{position: 'absolute', height: 400, width: '100%', marginTop: 2350, backgroundColor: '#db4636'}}>
    </div>
    </div>
  );
}

export default Background;


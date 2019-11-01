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
    width: '100%',
    height: 200,
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
    marginBottom: -2,
    bottom: 0
  },
  hills: {
    position: 'absolute',
    top: 585,
    paddingTop: 30,
    width: '100%',
  },
});

function Background() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.sky}>
    <motion.img
    src={clouds}
    style={{position: 'absolute'}}
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

    <div className={classes.sea}>
    <Parallax className="custom-class" x={[0, 80]} tagOuter="figure">
      <img src={waves} className={classes.waves}/>
      <img style={{right: '100%', position: 'absolute'}} src={waves} className={classes.waves}/>
      </Parallax>
      <img src={sea} style={{width: '100%', minHeight: 500}}/>
    </div>
    <div className={classes.hills}>
      {/* <img src={gate}/> */}
      <img src={gate} style={{position: 'absolute', right: '10%', top: 301, height: 180}}/>
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
    <div style={{position: 'absolute', width: '100%', marginTop: 1500}}>
      <Parallax tagOuter="figure"  x={[0,80]}>
        <img src={brownHillTop} style={{position: 'absolute', marginBottom: -5, width: '100%' }}/>
        <img src={brownHillTop} style={{position: 'absolute', marginBottom: -5, width: '100%', right: '100%'}}/> 
      </Parallax>
    </div>
    <div className={classes.brownGround}>
    </div>
    <div style={{position: 'absolute', width: '100%', marginTop: 1930}}>
      <Parallax tagOuter="figure"  x={[0,-80]}>
        <img src={lava} style={{position: 'absolute', marginBottom: -5, height: 40, width: '100%' }}/>
        <img src={lava} style={{position: 'absolute', marginBottom: -5, height: 40, width: '100%', left: '100%'}}/> 
      </Parallax>
    </div>
    <div style={{position: 'absolute', width: '100%', height: 450, marginTop: 1980, backgroundColor: '#f66131'}}>

    <div style={{position: 'absolute', top:20, left: 1400}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 1200}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 1350}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 1550, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 1320, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1400, top: 10}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1290, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top:20, left: 1450}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 1600}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 1700}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>

<div style={{position: 'absolute', left: 1790, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top:20, left: 1850}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 1690}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 1700}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>


    <div style={{position: 'absolute', top:20, left: '10%'}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 1100}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 1000}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 1150, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 1120, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 850, top: 10}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top:20, left: 500}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 580}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 580}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 650, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 730, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
      <div style={{position: 'absolute', top:20, left: 30}}>

    <motion.img
    src={redCircle}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    style={{width: 30}}
    transition={{
      loop: Infinity,
      ease: "linear",
      duration: 4
    }}
    />
    </div>
    <div style={{position: 'absolute', top:20, left: 90}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 130}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
    <div style={{position: 'absolute', left: 100, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', left: 150, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
    <div style={{position: 'absolute', left: 200, top: 20}}>

    <motion.img
    src={redCircle}
    style={{width: 20}}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      loop: Infinity,
      ease: "easeOut",
      duration: 4
    }}
    />
    </div>
    </div>
    <div style={{position: 'absolute', width: '100%', marginTop: 2350}}>
      <Parallax tagOuter="figure"  x={[0,80]}>
        <img src={redHills} style={{position: 'absolute', marginBottom: -5, width: '100%' }}/>
        <img src={redHills} style={{position: 'absolute', marginBottom: -5, width: '100%', right: '100%'}}/> 
      </Parallax>
    </div>
    <div className={classes.red}>
      <div style={{position: 'absolute', top:20, left: 1000}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 1100}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 1000}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 1150, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 1120, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 850, top: 10}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top:20, left: 500}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:10, left: 580}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 580}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 650, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 730, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: 20}}>

<motion.img
src={redCircle}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
      <div style={{position: 'absolute', top:20, left: 30}}>

    <motion.img
    src={redCircle}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    style={{width: 30}}
    transition={{
      loop: Infinity,
      ease: "linear",
      duration: 4
    }}
    />
    </div>
    <div style={{position: 'absolute', top:20, left: 90}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:80, left: 130}}>

<motion.img
src={redCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
    <div style={{position: 'absolute', left: 100, top: 50}}>

<motion.img
src={redBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', left: 150, top: 50}}>

<motion.img
src={redBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
    <div style={{position: 'absolute', left: 200, top: 20}}>

    <motion.img
    src={redCircle}
    style={{width: 20}}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      loop: Infinity,
      ease: "easeOut",
      duration: 4
    }}
    />
    </div>
    {/** STart */}
    <div style={{position: 'absolute', top:-10, left: 1080}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 1000}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-40, left: 900}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 25}}
transition={{
loop: Infinity,
ease: "linear",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-60, left: 800}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1180, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1120, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 850, top: 20}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 10}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top: 30, left: 480}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-28, left: 560}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 500}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 15}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 550, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 730, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 620, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
      <div style={{position: 'absolute', top:-30, left: 25}}>

    <motion.img
    src={orangeCircle}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    style={{width: 30}}
    transition={{
      loop: Infinity,
      ease: "linear",
      duration: 6
    }}
    />
    </div>
    <div style={{position: 'absolute', top:20, left: 90}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-30, left: 130}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
    <div style={{position: 'absolute', left: 100, top: 50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', left: 150, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
    <div style={{position: 'absolute', left: 200, top: 20}}>

    <motion.img
    src={orangeCircle}
    style={{width: 20}}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      loop: Infinity,
      ease: "easeOut",
      duration: 4
    }}
    />
    </div>
        <div style={{position: 'absolute', top:-10, left: 1080}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 1000}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-40, left: 900}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 25}}
transition={{
loop: Infinity,
ease: "linear",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-60, left: 800}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1180, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1120, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 850, top: 20}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 700, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 10}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top: 30, left: 480}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-28, left: 560}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 500}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 15}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 550, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 730, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 620, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
      <div style={{position: 'absolute', top:-30, left: 25}}>

    <motion.img
    src={orangeCircle}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    style={{width: 30}}
    transition={{
      loop: Infinity,
      ease: "linear",
      duration: 6
    }}
    />
    </div>
    <div style={{position: 'absolute', top:20, left: 90}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-30, left: 130}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
    <div style={{position: 'absolute', left: 100, top: 50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', left: 150, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
    <div style={{position: 'absolute', left: 200, top: 20}}>

    <motion.img
    src={orangeCircle}
    style={{width: 20}}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      loop: Infinity,
      ease: "easeOut",
      duration: 4
    }}
    />
    </div>
    {/*here*/}
    <div style={{position: 'absolute', top:-10, left: 1580}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 1500}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-40, left: 1400}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 25}}
transition={{
loop: Infinity,
ease: "linear",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-60, left: 1300}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1680, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1620, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 2
}}
/>
</div>
<div style={{position: 'absolute', left: 1350, top: 20}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 1200, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 10}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 4
}}
/>
</div>
{/* END */}
    <div style={{position: 'absolute', top: 30, left: 1390}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 20}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 2
}}
/>
</div>
<div style={{position: 'absolute', top:-28, left: 1760}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
loop: Infinity,
ease: "linear",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-50, left: 1400}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 15}}
transition={{
loop: Infinity,
ease: "linear",
duration: 8
}}
/>
</div>
<div style={{position: 'absolute', left: 1350, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1430, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
loop: Infinity,
ease: "easeOut",
duration: 4
}}
/>
</div>
<div style={{position: 'absolute', left: 1520, top: -20}}>

<motion.img
src={orangeCircle}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
      <div style={{position: 'absolute', top:-30, left: 1325}}>

    <motion.img
    src={orangeCircle}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    style={{width: 30}}
    transition={{
      loop: Infinity,
      ease: "linear",
      duration: 6
    }}
    />
    </div>
    <div style={{position: 'absolute', top:20, left: 1590}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 4
}}
/>
</div>
<div style={{position: 'absolute', top:-30, left: 1200}}>

<motion.img
src={orangeCircle}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
style={{width: 10}}
transition={{
  loop: Infinity,
  ease: "linear",
  duration: 6
}}
/>
</div>
    <div style={{position: 'absolute', left: 1600, top: 50}}>

<motion.img
src={orangeBubble}
style={{width: 20}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 6
}}
/>
</div>
<div style={{position: 'absolute', left: 1750, top: -50}}>

<motion.img
src={orangeBubble}
style={{width: 25}}
animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
transition={{
  loop: Infinity,
  ease: "easeOut",
  duration: 2
}}
/>
</div>
    <div style={{position: 'absolute', left: 1820, top: 20}}>

    <motion.img
    src={orangeCircle}
    style={{width: 20}}
    animate={{ y: [50, 0], opacity: [0, 1, 0.8, 0] }}
    transition={{
      loop: Infinity,
      ease: "easeOut",
      duration: 4
    }}
    />
    </div>
    {/* Orange */}
    
      <img src={red} style={{marginBottom: -5, height: 300, width: '100%'}}/>
    </div>

    </> 
    
  );
}

export default Background;


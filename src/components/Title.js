import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as DownloadIcon } from '../images/file-download.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow_forward.svg';
import { Button } from "@material-ui/core";

import studentImg from '../images/kids-photo.jpg'
import createImg from '../images/create image.png'
import learnImg from '../images/learn image.png'
import shareImg from '../images/share image.png'

const useStyles = makeStyles({
    title: {
        fontFamily: 'Bungee, cursive',
        color: '#FFFFFF',
        textShadow: '0px 1.5px rgba(9, 20, 69, 0.5)'
    },
    subtitle: {
        fontFamily: 'Museo700-Regular',
        color: '#fdf235',
        width: '80%',
        fontSize: '1.3em',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)'
    },
    subtitleLg: {
        fontFamily: 'Museo700-Regular',
        color: '#fdf235',
        width: '80%',
        fontSize: 22,
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)'
    },
    emailText: {
        fontFamily: 'Museo500-Regular',
        color: '#fdf235',
        width: '80%',
        fontSize: 13,
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)'
    },
    textBody: {
        fontFamily: 'Museo700-Regular',
        marginTop: 10,
        color: 'white',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)',
        fontSize: 17
    },
    textBody2: {
        fontFamily: 'Museo500-Regular',
        marginTop: 10,
        color: 'white',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)',
        fontSize: '1rem'
    },
    textBodySm: {
        fontFamily: 'Museo500-Regular',
        // marginTop: 10,
        color: 'white',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)',
        fontSize: 13
    },
    overlay: {
        position: 'absolute',
        left: '55%',
        // width: '50%',
        // overflow: 'inherit',
        zIndex: 100,
    },
    element: {
        position: 'relative', 
        overflow: 'hidden',
        minWidth: 600,
        width: '100%',
        left: '-50%'
    },
    creamBox: {
        backgroundColor: '#fef8d2',
        minHeight: '10%',
        borderRadius: 5,
        padding: 5,
        boxShadow: '0px 1.5px rgba(9, 20, 69, 0.4)',
        margin: '5px 0 5px 0'
    },
    downloadIcon: {
        marginTop: 5,
        fill: '#db4636',
    },
    redText: {
        color: '#db4636',
        fontFamily: 'Museo700-Regular',
        fontSize: '0.8rem',
        marginLeft: 10,
        marginTop: 5
    },
    redTextSmall: {
        color: '#db4636bf',
        fontFamily: 'Museo500-Regular',
        marginLeft: 10,
        fontSize: '0.7em'
    },
    redButton: {
        fontFamily: 'Museo700-Regular',
        textDecoration: 'underline',
        textTransform: 'none',
        fontSize: 15,
        borderRadius: 2,
        backgroundColor: '#db4636',
        color: '#FFFFFF',
        '&:hover': {
            textDecoration: 'underline',
            backgroundColor: '#db4636',
        }
    }
});

function Background() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.overlay}>
            <div style={{marginTop: 50}} className={classes.element}>
                <Typography style={{marginBottom: 5}} className={classes.title} variant='h2'>TE HIKO TĀKARO</Typography>
                <Typography style={{minHeight: 50}} className={classes.subtitle}>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography>
            </div>
            <div style={{marginTop: 80}} className={classes.element}>
                <Typography className={classes.title} variant='h4'>THE DOWNLOAD ZONE</Typography>
                <Grid style={{width: '103%', marginTop: 10, overflow: 'hidden'}} container>
                    <Grid className={classes.creamBox} item xs={5}>
                              <a style={{textDecoration: 'none'}} href='https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/teHikoT%C4%81karo_gBook_print.pdf' target='_blank'>
                          <Grid container>

                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                              </a>
                    </Grid>
                    <Grid style={{marginLeft: 10}} className={classes.creamBox} item xs={5}>
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={10}>

                        <Typography className={classes.redText}>2. Designing and Developing Digital Outcomes</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid className={classes.creamBox} item xs={5}>
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>3. Teachers Guide</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid style={{marginLeft: 10}} className={classes.creamBox} item xs={5}>
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>4. Student Workbook</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Button className={classes.redButton} style={{width: '84.9%', marginTop: 10}} variant='contained'><ArrowIcon style={{fill: 'white'}}/>Read curriculum alignment guide.</Button>
                </Grid>
                {/* <Typography className={classes.subtitle} variant='h6'>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography> */}
            </div>
            <div style={{marginTop: 150}} className={classes.element}>
            <Typography className={classes.title} variant='h4'>HOW IT WORKS</Typography>
            <Typography style={{marginBottom: 20, width: '92%'}} className={classes.textBody}>Te Hiko Takaro is a kiwi made Games Based Learning solution made by game developers from Pōneke, and expert teachers.</Typography>
            <Grid container>
                <Grid item xs={5}>
                    <img style={{maxWidth: 330, width: '100%'}} src={studentImg}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography style={{ marginLeft: 20, marginTop: -5, width: '90%'}} className={classes.textBody2}>
                        To get started work you way through the booklets in the order they are listed. These resources will take you through learning some code, and designing your own unique games.
                    </Typography>
                </Grid>
            </Grid>
            </div>
            <div style={{marginTop: 170}} className={classes.element}>
                <Typography className={classes.title} variant='h4'>LEARNING METHODOLOGIES</Typography>
                <Grid style={{marginTop:20}}  container>
                    <Grid style={{marginRight:40}} item xs={3}>
                        <img style={{height: 106}} src={learnImg}/>
                        <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Learn</Typography>
                        <Typography style={{marginTop: 10, marginBottom: 10}} className={classes.textBodySm}>You and your students:</Typography>
                        <ul style={{paddingLeft: 15, marginTop: 0}}>
                            <li className={classes.textBodySm}><Typography className={classes.textBodySm}>CT Booklet - learn programming concepts.</Typography></li>
                            <li className={classes.textBodySm}><Typography className={classes.textBodySm}>DDDO Boolet - design your game.</Typography></li>
                        </ul>
                    </Grid>
                    <Grid style={{marginRight:40}} item xs={3}>
                    <img style={{height: 106}} src={createImg}/>
                    <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Create</Typography>
                    <Typography style={{marginTop: 10, marginBottom: 10}} className={classes.textBodySm}>Combinding your knowledge from DDDO with your CT skills to develop a unique piece of digital content.</Typography>
                    </Grid>
                    <Grid style={{marginRight:40}} item xs={3}>
    
                    <img style={{height: 106}}  src={shareImg}/>
        
                    <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Share</Typography>
                    <Typography style={{marginTop: 10, marginBottom: 10}} className={classes.textBodySm}>Share your complete Aotearoa-themed game with students, friends, and whānau. Do this online via Gamefroot. arcade.gamefroot.com</Typography>
                    </Grid>
                </Grid>
                </div>
                <div style={{marginTop: 70}} className={classes.element}>
                    <Typography className={classes.title} variant='h4'>Contact Us</Typography>
                    <Typography style={{marginTop: 10}} className={classes.textBodySm}>For more information, email <a className={classes.emailText} href="mailto: takaro@gamefroot.com">takaro@gamefroot.com</a></Typography>
                </div>
            
        </div>
    </div>
  );
}

export default Background;

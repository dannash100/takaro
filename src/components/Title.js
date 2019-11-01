import React from "react";
import {motion} from 'framer-motion'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as DownloadIcon } from '../images/file-download.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow_forward.svg';
import { Button } from "@material-ui/core";

import studentImg from '../images/kids-photo.jpg'
import createImg from '../images/create image.png'
import learnImg from '../images/learn image.png'
import shareImg from '../images/share image.png'

import taiarahia from '../images/tai.png'
import johnson from '../images/johnson.png'
import gerard from '../images/gerard.png'
import harko from '../images/harko.png'

import minEdu from '../images/min edu.png'
import tpk from '../images/tpk.png'
import pataka from '../images/pataka.png'
import tePapa from '../images/te papa.png'

const useStyles = makeStyles({
    title: {
        fontFamily: 'Bungee, cursive',
        color: '#FFFFFF',
        textShadow: '0px 1.5px rgba(9, 20, 69, 0.5)'
    },
    subtitle: {
        fontFamily: 'Museo700-Regular',
        color: '#fdf235',
        width: '100%',
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
        fontSize: 13.5,
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
        fontSize: '0.9rem'
    },
    overlay: {
        position: 'absolute',
        left: '50%',
        // width: '50%',
        // overflow: 'inherit',
        zIndex: 100,
    },
    element: {
        position: 'relative', 
        overflow: 'hidden',
        minWidth: 600,
        width: '120%',
        left: '-60%'
    },
    creamBox: {
        backgroundColor: '#fef8d2',
        height: 69,
        width: '48%',
        display: 'inline-block',
        borderRadius: 5,
        padding: 5,
        marginBottom: '1%',
        boxShadow: '0px 1.5px rgba(9, 20, 69, 0.4)',
        // margin: '5px 0 5px 0'
    },
    downloadIcon: {
        marginTop: 5,
        fill: '#db4636',
    },
    redText: {
        color: '#db4636',
        fontFamily: 'Museo700-Regular',
        fontSize: '0.9rem',
        marginTop: 6
    },
    redTextSmall: {
        color: '#db4636bf',
        fontFamily: 'Museo500-Regular',
        fontSize: '0.8rem'
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
                <Typography style={{minHeight: 93}} className={classes.subtitle}>A one stop Digital Technologies solution for teachers that weaves together coding, culture and creativity.</Typography>
            </div>
            <div style={{marginTop: 65}} className={classes.element}>
                <Typography className={classes.title} variant='h4'>THE DOWNLOAD ZONE</Typography>
                <div style={{marginRight: '1%', marginTop: 20}} className={classes.creamBox}>
                              <a style={{textDecoration: 'none'}} rel='noopener noreferrer' href='https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/teHikoT%C4%81karo_gBook_print.pdf' target='_blank'>
                          <Grid container>

                            <Grid item xs={2}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (47.0mb)</Typography>
                            </Grid>
                        </Grid>
                              </a>
                    </div>
                    <div  className={classes.creamBox} item xs={5}>
                    <a style={{textDecoration: 'none'}} rel='noopener noreferrer' href='https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/So%20you%20want%20to%20be%20a%20game%20designer_.pdf' target='_blank'>
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={10}>

                        <Typography className={classes.redText}>2. Designing and Developing Digital Outcomes</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </a>
                        </div>
                    <div style={{marginRight: '1%'}} className={classes.creamBox}>
                        <a style={{textDecoration: 'none'}} rel='noopener noreferrer' href='https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/So%20you%20want%20to%20teach%20digital%20technologies_.pdf' target='_blank'>
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>3. Teachers Guide</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.4mb)</Typography>
                            </Grid>
                        </Grid>
                        </a>
                        </div>
                    <div className={classes.creamBox}>
                        <a style={{textDecoration: 'none', width: 'inherit'}} rel='noopener noreferrer' href='https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/Game%20Design%20Workbook.pdf' target='_blank'> 
                        <Grid style={{overflow: 'hidden'}} container>
                            <Grid item xs={2}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>
                        <Typography className={classes.redText}>4. Student Workbook (beta)</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (2.5mb)</Typography>
                            </Grid>
                        </Grid>
                        </a>
                        </div> 
                        <Button onClick={() => window.open('https://gamefroot.s3.us-east-1.amazonaws.com/takaro.gamefroot.com/DTHM%20Curriculum%20Alignment%20Guide.pdf')} className={classes.redButton} style={{marginTop: 10, width: '99.65%'}} variant='contained'>
                            <ArrowIcon style={{fill: 'white'}}/>Read curriculum alignment guide.
                            </Button>
                {/* <Typography className={classes.subtitle} variant='h6'>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography> */}
            </div>
            <div style={{marginTop: 130, height: 327.672}} className={classes.element}>
            <Typography className={classes.title} variant='h4'>HOW IT WORKS</Typography>
            <Typography style={{marginBottom: 30, width: '100%'}} className={classes.textBody}>Te Hiko Tākaro is a kiwi made Games Based Learning solution co-created by game developers from Pōneke, and expert teachers.</Typography>
            <Grid container>
                <Grid item xs={5}>
                    <img alt='Students' style={{maxWidth: 330, width: '85%'}} src={studentImg}/>
                </Grid>
                <Grid item xs={7}>
                    <Typography style={{ marginTop: -5, width: '100%'}} className={classes.textBody2}>
                        To get started work you way through the booklets in the order they are listed. By using these resources you will learn new coding concepts, you will design your own unique games and start to think like a game designer.
                    </Typography>
                </Grid>
            </Grid>
            </div>
            <div style={{marginTop: 120}} className={classes.element}>
                <Typography className={classes.title} variant='h4'>LEARNING METHODOLOGIES</Typography>
                <Grid style={{marginTop:30, height: 385}}  container>
                    <Grid item xs={4}>
                        <img alt='Learn' style={{height: 120, marginLeft: 30}} src={learnImg}/>
                        <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Learn</Typography>
                        <Typography style={{marginTop: 10, marginBottom: 10, width: '95%'}} className={classes.textBodySm}>You and your students:</Typography>
                        <ul style={{paddingLeft: 15, marginTop: 0, width: '90%'}}>
                            <li className={classes.textBodySm}><Typography className={classes.textBodySm}>CT Booklet - learn programming concepts.</Typography></li>
                            <li className={classes.textBodySm}><Typography className={classes.textBodySm}>DDDO Booklet - design your game.</Typography></li>
                        </ul>
                    </Grid>
                    <Grid item xs={4}>
                    <img alt='Create' style={{height: 120}} src={createImg}/>
                    <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Create</Typography>
                    <Typography style={{marginTop: 10, marginBottom: 10,  width: '90%'}} className={classes.textBodySm}>Combinding your knowledge from DDDO with your CT skills to develop a unique piece of digital content.</Typography>
                    </Grid>
                    <Grid  item xs={4}>
                    <img alt='Share' style={{height: 120}}  src={shareImg}/>
                    <Typography style={{marginTop: 10}} className={classes.subtitleLg} variant='h4'>Share</Typography>
                    <Typography style={{marginTop: 10, marginBottom: 10}} className={classes.textBodySm}>Share your complete Aotearoa-themed game with students, friends, and whānau. Do this online via Gamefroot. arcade.gamefroot.com</Typography>
                    </Grid>
                </Grid>
                </div>
                <div style={{marginTop: 20, height: 300}} className={classes.element}>
                <Typography style={{marginBottom: 20}} className={classes.title} variant='h4'>OUR ADVISORS</Typography>
                    <Grid container>
                        <Grid container style={{marginBottom: 30}} item xs={6}>
                            <Grid item xs={3}>
                                <img style={{width: '100%', maxWidth: 100}} src={taiarahia}/>
                            </Grid>
                            <Grid item xs={9}>
                            <div style={{marginLeft: 20}}>
                                <Typography className={classes.subtitle}>Taiarahia Black</Typography>
                                <Typography className={classes.textBody}>Author + Te Reo Professor</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid  container item xs={6}>
                        <Grid item xs={3}>
                                <img style={{marginLeft: 60, width: '100%', maxWidth: 100}} src={johnson}/>
                            </Grid>
                            <Grid item xs={9}>
                                <div style={{marginLeft: 80}}>
                                <Typography className={classes.subtitle}>Dr Johnson Witehira</Typography>
                                <Typography className={classes.textBody}>Māori Artist + Designer</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item xs={6}>
                        <Grid item xs={3}>
                                <img style={{width: '100%', maxWidth: 100}} src={gerard}/>
                            </Grid>
                            <Grid item xs={9}>
                                <div style={{marginLeft: 20}}>
                                <Typography className={classes.subtitle}>Gerard MacManus</Typography>
                                <Typography className={classes.textBody}>Digital Technologies Expert</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container  item xs={6}>
                        <Grid item xs={3}>
                                <img style={{marginLeft: 60,width: '100%', maxWidth: 100}} src={harko}/>
                            </Grid>
                            <Grid item xs={9}>
                                <div style={{marginLeft: 80}}>
                                <Typography className={classes.subtitle}>Harko Brown</Typography>
                                <Typography className={classes.textBody}>Ngā Tākaro Teacher</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: 110}} className={classes.element}>
                <Typography style={{marginBottom: 20}} className={classes.title} variant='h4'>OUR PARTNERS</Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={minEdu} style={{width: '60%', marginBottom: 20, maxWidth: 260}}/>
                        </Grid>
                        <Grid  item xs={6}>
                        <img src={tpk} style={{marginLeft: 60, width: '60%', maxWidth: 260}}/>
                        </Grid>
                        <Grid item xs={6}>
                        <img src={pataka} style={{width: '60%', maxWidth: 260}}/>
                        </Grid>
                        <Grid  item xs={6}>
                        <img src={tePapa} style={{marginLeft: 60, width: '60%', maxWidth: 260}}/>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: 180}} className={classes.element}>
                    <Grid container>
                        <Grid item xs={6}>
                    <Typography className={classes.title} variant='h4'>Contact Us</Typography>
                    <Typography style={{marginTop: 10, width: '100%'}} className={classes.textBodySm}>For more information, email <a className={classes.emailText} href="mailto: dan@gamefroot.com">dan@gamefroot.com</a></Typography>
                        </Grid>
                        <Grid style={{paddingLeft: 60}} item xs={6}>
                        <Typography className={classes.title} variant='h4'>Hot Links</Typography>
                        <Typography style={{marginTop: 10}} className={classes.textBodySm}>> <a className={classes.emailText} target="_blank" href='https://make.gamefroot.com'>Game Editor</a></Typography>
                        <Typography style={{marginTop: 5}} className={classes.textBodySm}>> <a className={classes.emailText} target="_blank" href='https://www.stuff.co.nz/marlborough-express/113257377/marlborough-students-use-gaming-to-connect-dual-heritage-and-a-shared-future'>Connecting code and culture</a></Typography>
                        <Typography style={{marginTop: 5}} className={classes.textBodySm}>> <a className={classes.emailText} target="_blank" href='https://www.stuff.co.nz/entertainment/games/76363941/young-programmers-create-games-in-a-day'>Code a game a day</a></Typography>
                        <Typography style={{marginTop: 5}} className={classes.textBodySm}>> <a className={classes.emailText} target="_blank" href='https://vimeo.com/215943833'>Gamefroot on vimeo</a></Typography>
                        </Grid>
                    </Grid>
                </div>
            
        </div>
    </div>
  );
}

export default Background;

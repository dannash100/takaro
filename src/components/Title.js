import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as DownloadIcon } from '../images/file-download.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow_forward.svg';
import { Button } from "@material-ui/core";

import studentImg from '../images/kids-photo.jpg'


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
        fontSize: 17,
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)'
    },
    textBody: {
        fontFamily: 'Museo700-Regular',
        marginTop: 10,
        color: 'white',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)',
        fontSize: 16
    },
    textBody2: {
        fontFamily: 'Museo500-Regular',
        marginTop: 10,
        color: 'white',
        textShadow: '0px 1px rgba(9, 20, 69, 0.5)',
        fontSize: 15
    },
    overlay: {
        position: 'absolute',
        left: '50%',
        width: 600,
        zIndex: 100,
    },
    element: {
        position: 'relative', 
        left: '-50%'
    },
    creamBox: {
        backgroundColor: '#fef8d2',
        height: 70,
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
        fontSize: 12,
        marginLeft: 10,
        marginTop: 5
    },
    redTextSmall: {
        color: '#db4636bf',
        fontFamily: 'Museo500-Regular',
        marginLeft: 10,
        fontSize: 10
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
            <div style={{marginTop: '7%'}} className={classes.element}>
                <Typography style={{marginBottom: 5}} className={classes.title} variant='h2'>TE HIKO TĀKARO</Typography>
                <Typography className={classes.subtitle}>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography>
            </div>
            <div style={{marginTop: '14%'}} className={classes.element}>
                <Typography className={classes.title} variant='h5'>THE DOWNLOAD ZONE</Typography>
                <Grid style={{width: '105%', marginTop: 10}} container>
                    <Grid className={classes.creamBox} item xs={5}>
                          <Grid container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{marginLeft: 10}} className={classes.creamBox} item xs={5}>
                        <Grid container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>2. Designing and Developing Digital Outcomes</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid className={classes.creamBox} item xs={5}>
                        <Grid container>
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
                        <Grid container>
                            <Grid item xs={2}>
                        <DownloadIcon width='40px' height='40px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={9}>

                        <Typography className={classes.redText}>4. Student Workbook</Typography>
                        <Typography className={classes.redTextSmall}>Download PDF booklet (6.2mb)</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Button className={classes.redButton} style={{width: 535, marginTop: 10}} variant='contained'><ArrowIcon style={{fill: 'white'}}/>Read curriculum alignment guide.</Button>
                </Grid>
                {/* <Typography className={classes.subtitle} variant='h6'>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography> */}
            </div>
            <div style={{marginTop: '22%'}} className={classes.element}>
            <Typography className={classes.title} variant='h5'>HOW IT WORKS</Typography>
            <Typography style={{marginBottom: 20}} className={classes.textBody}>Te Hiko Takaro is a kiwi made Games Based Learning solution made by game developers from Pōneke, and expert teachers.</Typography>
            <Grid container>
                <Grid item xs={5}>
                    <img style={{width: '90%'}} src={studentImg}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography style={{ marginLeft: 15, marginTop: -5}} className={classes.textBody2}>
                        To get started work you way through the booklets in the order they are listed. These resources will take you through learning some code, and designing your own unique games.
                    </Typography>
                </Grid>
            </Grid>
            </div>
            <div style={{marginTop: '22%'}} className={classes.element}>
                <Typography className={classes.title} variant='h5'>LEARNING METHODOLOGIES</Typography>
                </div>
            
        </div>
    </div>
  );
}

export default Background;

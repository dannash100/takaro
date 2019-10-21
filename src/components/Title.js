import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import { ReactComponent as DownloadIcon } from '../images/file-download.svg';
import { ReactComponent as ArrowIcon } from '../images/arrow_forward.svg';
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
    title: {
        fontFamily: 'Bungee, cursive',
        color: '#FFFFFF',
        textShadow: '0px 3px rgba(9, 20, 69, 0.4)'
    },
    subtitle: {
        fontFamily: 'Museo700-Regular',
        color: '#fdf235',
        textShadow: '0px 2px rgba(9, 20, 69, 0.4)'
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
        borderRadius: 10,
        padding: 5,
        boxShadow: '0px 3px rgba(9, 20, 69, 0.4)',
        margin: '5px 0 5px 0'
    },
    downloadIcon: {
        marginTop: 5,
        fill: '#db4636',
    },
    redText: {
        color: '#db4636',
        fontFamily: 'Museo700-Regular',
        fontSize: 14
    },
    redButton: {
        fontFamily: 'Museo700-Regular',
        textDecoration: 'underline',
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
            <div style={{marginTop: '5%'}} className={classes.element}>
                <Typography className={classes.title} variant='h4'>TE HIKO TĀKARO - DT AOTEAROA</Typography>
                <Typography className={classes.subtitle} variant='h6'>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography>
            </div>
            <div style={{marginTop: '14%'}} className={classes.element}>
                <Typography className={classes.title} variant='h5'>THE DOWNLOAD ZONE</Typography>
                <Grid style={{width: '120%', marginTop: 10}} container>
                    <Grid className={classes.creamBox} item xs={5}>
                          <Grid container>
                            <Grid item xs={3}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={8}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{marginLeft: 10}} className={classes.creamBox} item xs={5}>
                        <Grid container>
                            <Grid item xs={3}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={8}>

                        <Typography className={classes.redText}>2. Designing and Developing Digital Outcomes.</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid className={classes.creamBox} item xs={5}>
                        <Grid container>
                            <Grid item xs={3}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={8}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid style={{marginLeft: 10}} className={classes.creamBox} item xs={5}>
                        <Grid container>
                            <Grid item xs={3}>
                        <DownloadIcon width='50px' height='50px' className={classes.downloadIcon}/>
                            </Grid>
                            <Grid item xs={8}>

                        <Typography className={classes.redText}>1. Computational Thinking</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Button className={classes.redButton} style={{width: 610, marginTop: 10}} variant='contained'><ArrowIcon style={{fill: 'white'}}/>Read curriculum alignment guide.</Button>
                </Grid>
                {/* <Typography className={classes.subtitle} variant='h6'>A one stop Digital Technologies solution that weaves together coding, culture and creativity</Typography> */}
            </div>
        </div>
    </div>
  );
}

export default Background;

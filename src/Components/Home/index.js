import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    divider:{
        marginTop: theme.spacing(2)
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant='subtitle1'>Urgent Quest Schedule</Typography>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=YWJoaW5hYmRhczE5OTZAZ21haWwuY29t&amp;src=cmMxYWY3bDFzdjNtdDk5NWh2anFwaTRxYjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%239E69AF&amp;mode=AGENDA&amp;showTitle=0&amp;showTabs=1&amp;showPrint=0&amp;showCalendars=0" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
            <Divider className={classes.divider} />
            <Typography variant='subtitle1'>Casino Boosts</Typography>
            <div>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=YWJoaW5hYmRhczE5OTZAZ21haWwuY29t&amp;src=OTNzMGZiNGcxdmF0djQzY3JjYXIzNjA2ZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmMxYWY3bDFzdjNtdDk5NWh2anFwaTRxYjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%23795548&amp;color=%239E69AF&amp;mode=AGENDA&amp;showTitle=0&amp;showPrint=0" style={{border:"solid 1px #777"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
            {/* <div>
                <Link to='/about'>
                    Go to about
                </Link>
            </div> */}
        </div>
    )
}

export default Home;
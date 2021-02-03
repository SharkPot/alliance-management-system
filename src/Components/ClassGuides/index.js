import React, { useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import GUIDE_LIST from './class_guide_setup';

const useStyles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	iframeDiv:{
		backgroundColor: theme.palette.text.primary
	}
}));

function ClassGuide(props) {
	const classes = useStyles();
	let location = useLocation();

	const [title,setTitle] = React.useState('');
	const [guide,setGuide] = React.useState([]);

    useEffect(() => {
		let titleKey = '';
        switch(location.pathname){
            case GUIDE_LIST.Hunter.path:
				titleKey = GUIDE_LIST.Hunter.name
				break;
            case GUIDE_LIST.Fighter.path:
				titleKey = GUIDE_LIST.Fighter.name
				break;
            case GUIDE_LIST.Ranger.path:
				titleKey = GUIDE_LIST.Ranger.name
				break;
            case GUIDE_LIST.Gunner.path:
				titleKey = GUIDE_LIST.Gunner.name
				break;
            case GUIDE_LIST.Force.path:
				titleKey = GUIDE_LIST.Force.name
				break;
            case GUIDE_LIST.Techer.path:
				titleKey = GUIDE_LIST.Techer.name
				break;
            case GUIDE_LIST.Braver.path:
				titleKey = GUIDE_LIST.Braver.name
				break;
            case GUIDE_LIST.Bouncer.path:
				titleKey = GUIDE_LIST.Bouncer.name
				break;
            case GUIDE_LIST.Summoner.path:
				titleKey = GUIDE_LIST.Summoner.name
				break;
            case GUIDE_LIST.Hero.path:
				titleKey = GUIDE_LIST.Hero.name
				break;
            case GUIDE_LIST.Phantom.path:
				titleKey = GUIDE_LIST.Phantom.name
				break;
            case GUIDE_LIST.Etoille.path:
				titleKey = GUIDE_LIST.Etoille.name
				break;
            case GUIDE_LIST.Luster.path:
				titleKey = GUIDE_LIST.Luster.name
				break;
			default:
				titleKey = '';
		}
		setTitle(titleKey);
		setGuide(GUIDE_LIST[titleKey].guide);
		props.onRoute('Class guide ' + title)
	},[props,location,title,guide])

    return (
        <div>
			{guide.map((val,index) =>(
				<div key={val.title}>
					<Hidden smUp implementation="css">
						<Typography variant='h5' gutterBottom>
							{val.title}
						</Typography>
						<Typography>
							For better mobile experience read it : <a href={val.url} target='_blank' rel='noreferrer'>here</a>
						</Typography>
						{ guide.length > 1 && guide.length !== index + 1 && <Divider className={classes.divider} />}
					</Hidden>
					<Hidden xsDown implementation="css">
						<Typography variant='h5' gutterBottom>
							{val.title}
						</Typography>
						<Typography>
							For better experience read it : <a href={val.url} target='_blank' rel='noreferrer'>here</a>
						</Typography>
						<div className={classes.iframeDiv}>
							{val.embedUrl && <iframe title={val.title} src={val.embedUrl} width='100%' height='750px'></iframe> }
						</div>
						{ guide.length > 1 && guide.length !== index + 1 && <Divider className={classes.divider} />}
					</Hidden>
            	</div>
			))}
        </div>
    )
}

export default ClassGuide;
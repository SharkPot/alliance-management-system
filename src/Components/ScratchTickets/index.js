import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { useLocation,useHistory } from 'react-router-dom';

import SCRATCH_LIST from './scratch-setup';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		background: theme.palette.background.default,
		marginTop: theme.spacing(1)
	},
	cardActionArea: {
		'&:hover':{
			background: theme.palette.action.selected
		}
	}

}));

function ScratchTicket(props) {
	const classes = useStyles();
	let location = useLocation();
	let history = useHistory();
	const [value, setValue] = React.useState(0);
	const [snackBarOpen, setSnackBarOpen] = React.useState(false);
	const [data, setData] = React.useState(SCRATCH_LIST.AC);

	const handleChange = (event, newValue) => {
		console.log('handleChange:event', event);
		console.log('handleChange:newValue', newValue);
		let route = '';
		switch (newValue) {
			case 0:
				route = '/scratch/ac';
				break;
			case 1:
				route = '/scratch/sg';
				break;
			case 2:
				route = '/scratch/fun';
				break;
			default:
				route = '/scratch/ac';
		}
		history.push(route);
		
	};

	useEffect(() => {
		let key = '';
		let index = 0;
		switch (location.pathname) {
			case '/scratch/ac':
				key = 'AC';
				index = 0;
				break;
			case '/scratch/sg':
				key = 'SG';
				index = 1;
				break;
			case '/scratch/fun':
				key = 'FUN';
				index = 2;
				break;
			default:
				key = 'AC';
		}
		setData(SCRATCH_LIST[key]);
		setValue(index);
		props.onRoute('Scratch Tickets')
	},[props,location,value,data])

	const handleCardClick = (url) => {
		if(!url) {
			setSnackBarOpen(true);
			return;
		}
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	const handleSnackBarClose = () => {
		setSnackBarOpen(false);
	}

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="secondary"
				textColor="secondary"
				centered
			>
				<Tab label="AC" />
				<Tab label="SG" />
				<Tab label="FUN" />
			</Tabs>
			<Grid container spacing={2}>
				{data.map((val, index) => (
					<Grid key={'id' + val.name + index} id={val.id} item xs={12} sm={6}>
						<Card className={classes.cardRoot}>
							<CardActionArea className={classes.cardActionArea} onClick={() => handleCardClick(val.route)}>
								<CardMedia
									component='img'
									alt={'img' + val.name}
									height='140'
									image={val.img}
									title={val.name}
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{val.name}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
			<Snackbar
				anchorOrigin={{vertical:'bottom',horizontal:'center'}}
				open={snackBarOpen}
				autoHideDuration={6000}
				onClose={handleSnackBarClose}
				message='No official PSO2 site can be located.'
			/>
		</div>
	);
}

export default ScratchTicket;
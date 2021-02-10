import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SCRATCH_LIST from './scratch-setup';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	cardRoot: {
		padding: theme.spacing(2)
	}
}));

function ScratchTicket(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [data, setData] = React.useState(SCRATCH_LIST.AC);

	const handleChange = (event, newValue) => {
		console.log('handleChange:event',event);
		console.log('handleChange:newValue',newValue);
		switch(newValue) {
			case 0:
				setData(SCRATCH_LIST.AC);
				break;
			case 1:
				setData(SCRATCH_LIST.SG);
				break;
			case 2:
				setData(SCRATCH_LIST.FUN);
				break;
			default:
				setData(SCRATCH_LIST.AC);
				newValue = 0;
		}
		setValue(newValue);
	};

	useEffect(() => {
		props.onRoute('Scratch Tickets')
	})

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
			<Grid container>
				{data.map((val) => (
					<Grid item xs={6}>
						{/* {JSON.stringify(val)} */}
						<Card className={classes.cardRoot}>
							<CardActionArea>
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
									<Typography variant='body2' color='textSecondary' component='p'>
										{val.route}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary'>
									Share
								</Button>
								<Button size='small' color='primary'>
									Learn More
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default ScratchTicket;
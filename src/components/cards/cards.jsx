import React from 'react';

import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import './cards.styles.css';
import CountUp from 'react-countup'

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
    if (!confirmed) {
        return '...Loading';
    }
    return (
        <div className="container">
        	<Grid container spacing={3} justify="center">
        		<Grid item component={ Card } xs={12} md={3} className = "card infected">
	        		<CardContent>
	        			<Typography color="textSecondary" gutterBottom></Typography>
	        			<Typography variant="h5">
	        				<CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
	        			</Typography>
	        			<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
	        			<Typography variant="body2">No. of Infected cases of COVID-19</Typography>
	        		</CardContent>
        		</Grid>

        		<Grid item component={ Card } xs={12} md={3} className = "card recoverd">
	        		<CardContent>
	        			<Typography color="textSecondary" gutterBottom></Typography>
	        			<Typography variant="h5">
	        				<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
	        			</Typography>
	        			<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
	        			<Typography variant="body2">No. of recoveries cases of COVID-19</Typography>
	        		</CardContent>
        		</Grid>

        		<Grid item component={ Card } xs={12} md={3} className = "card deaths">
	        		<CardContent>
	        			<Typography color="textSecondary" gutterBottom></Typography>
	        			<Typography variant="h5">
	        				<CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
	        			</Typography>
	        			<Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
	        			<Typography variant="body2">No. of deaths cases of COVID-19</Typography>
	        		</CardContent>
        		</Grid>
        	</Grid>
        </div>
    );
};

export default Cards;
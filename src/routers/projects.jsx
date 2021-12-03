import * as React from 'react';
import "./projects.css";
import {Box, Button, Chip, Stack, CssBaseline } from '@mui/material';


function Child() {
    return (<p>works</p>)
}
export default function myComponent(props) {
	const options = {
		size: 164,
		minSize: 43,
		gutter: 15,
		provideProps: true,
		numCols: 6,
		fringeWidth: 133,
		yRadius: 222,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}

	const children = props.data.map((data, i) => {
		 return <Child data={data} className="child" key={i} />
	});

	return (<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>)
};


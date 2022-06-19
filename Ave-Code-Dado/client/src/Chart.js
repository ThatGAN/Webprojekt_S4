import React, { Component } from 'react';
import Chart from 'chart.js/auto';

export default class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
        
        
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7"],
                
				datasets: [{ 
					data: [90,80,70,60,66,67,70],
                    label:"Titel",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
                    
					
				}
				]
			},
		});
	}
	render() {
		return (
			<div>   
                <canvas
				id="myChart"
				ref={this.chartRef}
				/>	
			</div>
			)
	}
}
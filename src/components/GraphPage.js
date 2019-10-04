import React  from 'react';
import CanvasJSReact from './../graphlib/canvasjs.react'
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class GraphPage extends Component {
    render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Travel"
            },
            height : 150,
			axisY: {
				title: "Amount",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Month of Year",
				prefix: "",
				interval: 2
			},
			data: [{
				type: "spline",
				toolTipContent: "Month {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 130 },
					{ x: 2, y: 210 },
					{ x: 3, y: 240 },
					{ x: 4, y: 175 },
					{ x: 5, y: 231 },
					{ x: 6, y: 189 },
					{ x: 7, y: 143 },
					{ x: 8, y: 190 },
					{ x: 9, y: 179 },
					{ x: 10, y: 54 }
					
				]
			}]
        }
        const optionsEntertainment = {
			animationEnabled: true,
			exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            height : 150,
			title:{
				text: "Entertainment"
			},
			axisY: {
				title: "Amount",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Month of Year",
				prefix: "",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Month {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 400 },
					{ x: 2, y: 213 },
					{ x: 3, y: 354 },
					{ x: 4, y: 120 },
					{ x: 5, y: 410 },
					{ x: 6, y: 333 },
					{ x: 7, y: 378 },
					{ x: 8, y: 290 },
					{ x: 9, y: 300 },
					{ x: 10, y: 120 }
					
				]
			}]
        }
        const optionsShopping = {
			animationEnabled: true,
			exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            height : 150,
			title:{
				text: "Shopping"
			},
			axisY: {
				title: "Amount",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Month of Year",
				prefix: "",
				interval: 2
			},
			data: [{
				type: "spline",
				toolTipContent: "Month {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 212 },
					{ x: 2, y: 123 },
					{ x: 3, y: 312 },
					{ x: 4, y: 200 },
					{ x: 5, y: 190 },
					{ x: 6, y: 185 },
					{ x: 7, y: 100 },
					{ x: 8, y: 121 },
					{ x: 9, y: 140 },
					{ x: 10, y: 100 }
					
				]
			}]
        }
        const optionsFood = {
			animationEnabled: true,
			exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            height : 150,
			title:{
				text: "Food & Restaurants"
			},
			axisY: {
				title: "Amount",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Month of Year",
				prefix: "",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Month {x}: {y}%",
				dataPoints: [
					{ x: 1, y: 432 },
					{ x: 2, y: 542 },
					{ x: 3, y: 222 },
					{ x: 4, y: 500 },
					{ x: 5, y: 490 },
					{ x: 6, y: 501 },
					{ x: 7, y: 550 },
					{ x: 8, y: 480 },
					{ x: 9, y: 399 },
					{ x: 10, y: 98 }
					
				]
			}]
		}
		return (
		<div>
            <div style={{width:"90%",margin:"auto"}}>
            <br></br>
			    <CanvasJSChart height="200" options = {options}/>
                <br></br>
			    <CanvasJSChart options = {optionsEntertainment}/>
                <br></br>
                <CanvasJSChart options = {optionsShopping}/>
                <br></br>
                <CanvasJSChart options = {optionsFood}/>
            </div>
		</div>
		);
	}
}

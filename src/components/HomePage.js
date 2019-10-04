import React, { Component } from 'react'
import Card from './Card';
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tiles: [{
                name: "Vinit"
            }, {
                name: "Bhaskar"
            }]
        }
    }
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" style={{ "backgroundColor": "#ffffff" }}>
                    <div class="container" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGpLYNFdN-NT54Hw317lc-pFdwiYHCR_cVzeIsqfuFf5Yvdc" style={{borderRadius:"1000px",width:"30%"}}></img>
                        <h1 class="display-4">$120,000</h1>
                        <p class="lead" style={{ fontSize: "12px" }}>Income :<span style={{ color: "#00ff00" }}>$35000</span>&nbsp;&nbsp;&nbsp;&nbsp;Expenses :<span style={{ color: "#ff0000" }}>$35000</span></p>
                    </div>
                </div>
                <div class="card-deck text-center">
                    {this.state.tiles.map(tile=><Card tile={tile}></Card>)}
                </div>
            </div>

        )
    }
}

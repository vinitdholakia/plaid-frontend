import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { "currentBalance": 43500, "tiles": [{ "name": "Income", "amount": 504.22, "color": "#228B22" }, { "amount": "500.01", "name": "Travel", "color": "#ff0000" }, { "amount": "500.01", "name": "Food and Drink", "color": "#ff0000" }, { "amount": "2078.50", "name": "Payment", "color": "#ff0000" }, { "amount": "500.00", "name": "Shops", "color": "#ff0000" }, { "amount": "5850.00", "name": "Transfer", "color": "#ff0000" }, { "amount": "78.50", "name": "Recreation", "color": "#ff0000" }] }
        // this.state = {
        //     currentBalance: 0,
        //     tiles: []
        // }
    }
    componentDidMount = () => {
        // axios.get('http://localhost:8000/balance').then((data) => {
        //     data = data.data || {};
        //     data.balance = data.balance || {};
        //     data.balance.accounts = data.balance.accounts || [];
        //     let c = 0;
        //     data.balance.accounts.map(e => {
        //         c = c + (e.balances || {}).available || 0
        //     })
        //     axios.get('http://localhost:8000/income').then((data) => {
        //         console.log(data.data);
        //         let income = ((data.data || {}).income || {}).income_streams || [];

        //         axios.get('http://localhost:8000/transactions').then((data) => {
        //             let transactions = ((((data || {}).data || {}).transactions || {}).transactions || []);
        //             let obj = {}
        //             obj["income"] = {
        //                 name: "Income",
        //                 amount: 0,
        //                 color: "#228B22"
        //             }
        //             transactions.map(e => {
        //                 if (e.amount >= 0) {
        //                     let name = e.category[0];
        //                     obj[name] = obj[name] || {};
        //                     obj[name]["amount"] = obj[name]["amount"] || 0;
        //                     obj[name]["amount"] = Number.parseFloat(obj[name]["amount"] + (e.amount)).toFixed(2);
        //                     obj[name]["name"] = obj[name]["name"] || name || null;
        //                     obj[name]["color"] = "#ff0000"
        //                 } else {
        //                     obj["income"].amount = obj["income"].amount + (-1 * e.amount);
        //                 }

        //             });

        //             this.setState({
        //                 currentBalance: c,
        //                 tiles: Object.values(obj)
        //             })
        //         }).catch(e => {
        //             console.error("Error Fetching Balance", e);
        //         })
        //     }).catch(e => {
        //         console.error("Error Fetching Balance", e);
        //     })
        // }).catch(e => {
        //     console.error("Error Fetching Balance", e);
        // });

    }
    render() {
        console.log(JSON.stringify(this.state));
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" style={{ "backgroundColor": "#ffffff", marginBottom: "0rem" }}>
                    <div class="container" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGpLYNFdN-NT54Hw317lc-pFdwiYHCR_cVzeIsqfuFf5Yvdc" style={{ borderRadius: "1000px", width: "30%" }}></img>
                        <h1 class="display-4">${this.state.currentBalance}</h1>
                        <p class="lead" style={{ fontSize: "16px" }}>Income :<span style={{ color: "#228B22" }}><b>$3500</b></span>&nbsp;&nbsp;&nbsp;&nbsp;Expenses :<span style={{ color: "#ff0000" }}><b>$670</b></span></p>
                    </div>
                </div>
                <div class="row">
                    {this.state.tiles.map(tile => <Card tile={tile}></Card>)}
                </div>
            </div>

        )
    }
}

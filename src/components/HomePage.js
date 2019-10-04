import React, { Component } from 'react'
import Card from './Card';
import axios from 'axios';
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBalance: 0,
            tiles: []
        }
    }
    componentDidMount = () => {
        axios.get('http://localhost:8000/balance').then((data) => {
            data = data.data || {};
            data.balance = data.balance || {};
            data.balance.accounts = data.balance.accounts || [];
            let c = 0;
            data.balance.accounts.map(e => {
                c = c + (e.balances || {}).available || 0
            })
            axios.get('http://localhost:8000/income').then((data) => {
                console.log(data.data);
                let income = ((data.data || {}).income || {}).income_streams || [];

                axios.get('http://localhost:8000/transactions').then((data) => {
                    let transactions = ((((data || {}).data || {}).transactions || {}).transactions || []);
                    let obj = {}
                    obj["income"] = {
                        name: "Income",
                        amount: 0
                    }
                    transactions.map(e => {
                        if (e.amount >= 0) {
                            let name = e.category[0];
                            obj[name] = obj[name] || {};
                            obj[name]["amount"] = obj[name]["amount"] || 0;
                            obj[name]["amount"] = Number.parseFloat(obj[name]["amount"] + (e.amount)).toFixed(2);
                            obj[name]["name"] = obj[name]["name"] || name || null;
                        } else {
                            obj["income"].amount = obj["income"].amount + (-1 * e.amount);
                        }

                    });

                    this.setState({
                        currentBalance: c,
                        tiles: Object.values(obj)
                    })
                }).catch(e => {
                    console.error("Error Fetching Balance", e);
                })
            }).catch(e => {
                console.error("Error Fetching Balance", e);
            })
        }).catch(e => {
            console.error("Error Fetching Balance", e);
        });

    }
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" style={{ "backgroundColor": "#ffffff", marginBottom: "0rem" }}>
                    <div class="container" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGpLYNFdN-NT54Hw317lc-pFdwiYHCR_cVzeIsqfuFf5Yvdc" style={{ borderRadius: "1000px", width: "30%" }}></img>
                        <h1 class="display-4">${this.state.currentBalance}</h1>
                        <p class="lead" style={{ fontSize: "16px" }}>Income :<span style={{ color: "#228B22" }}><b>$35000</b></span>&nbsp;&nbsp;&nbsp;&nbsp;Expenses :<span style={{ color: "#ff0000" }}><b>$35000</b></span></p>
                    </div>
                </div>
                <div class="card-deck text-center">
                    {this.state.tiles.map(tile => <Card tile={tile}></Card>)}
                </div>
            </div>

        )
    }
}

import React, { Component } from 'react'

export default class GoalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: {
                title: "Marriage",
                icon: "fa fa-heart",
                target: "20000",
                fulfilled: "4000",
                transactions: "24",
                due: "10/10/2020"
            }
        }
    }
    getPercentagevalue = () => {
        return parseInt(parseInt(this.state.goal.fulfilled)*100 / parseInt(this.state.goal.target)) ;
    }
    getPercentage = () => {
        return {
            width: this.getPercentagevalue() + "%"
        }
    }
    render() {
        let goal = this.state.goal;
        return (
            <div>
                <div class="jumbotron jumbotron-fluid" style={{ "backgroundColor": "#ffffff", marginBottom: "0rem" }}>
                    <div class="container" >
                    <h4 class="display"><i class={this.state.goal.icon} style={{ color: 'pink' }}></i></h4>
                        <h4 class="display">{this.state.goal.title}</h4>
                    <div class="progress" style={{ margin: "auto 30px" }}>
                        <div class="progress-bar bg-success" role="progressbar" style={this.getPercentage()} aria-valuemin="0" aria-valuenow={this.getPercentagevalue()} aria-valuemax={this.state.goal.target}>${this.state.goal.fulfilled}</div>
                    </div>
                        <small>Target : ${this.state.goal.target}</small>
                        <br></br>
                        <small>Due : {this.state.goal.due}</small>
                    </div>
                </div>
                <div>
                    <h6>Recent Transactions</h6>
                </div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        January salary savings
                        <span class="badge badge-pill">14</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Entertainment Limit Exceeded
                        <span class="badge badge-pill" style={{ color: "red" }}> -2</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        February salary savings
                        <span class="badge badge-pill">1</span>
                    </li>
                </ul>
                <div>
                    <small><i>Non Recurring Event</i></small>
                </div>
                <button type="button" class="btn btn-secondary btn-circle btn-lg" style={{ position: "fixed", bottom: "20px", right: "20px" }}><i class="fa fa-edit"></i>
                </button>
            </div>

        )
    }
}

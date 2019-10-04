import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class GoalListItem extends Component {
    constructor(props) {
        super(props);
    }
    getPercentagevalue = () => {
        return parseInt(parseInt(this.props.goal.fulfilled)*100 / parseInt(this.props.goal.target)) ;
    }
    getPercentage = () => {
        return {
            width: this.getPercentagevalue() + "%"
        }
    }
    render() {
        const goal = this.props.goal;
        return (
            <div>
                <Link to="/goals/details" class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><i class={goal.icon} style={{ color: 'pink' }}></i>&nbsp; {goal.title}</h5>
                        <small class="text-muted">Due : {goal.due}</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">{goal.transactions} transactions</p>
                        <small class="text-muted">Target : ${goal.target}</small>
                    </div>
                    <div class="progress" style={{ margin: "auto" }}>
                        <div class="progress-bar bg-success" role="progressbar" style={this.getPercentage()} aria-valuemin="0" aria-valuenow={this.getPercentagevalue()} aria-valuemax={goal.target}>${goal.fulfilled}</div>
                    </div>
                </Link>
            </div>
        )
    }
}
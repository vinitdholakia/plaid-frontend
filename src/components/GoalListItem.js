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
                <Link to={`/goals/${goal.id}`} class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><i class={goal.icon} style={{ color: 'pink' }}></i>&nbsp; {goal.title}</h5>
                        <small class="text-muted">Due : {goal.due}</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1">{goal.transactions} transactions</p>
                        <small class="text-muted">Target : ${goal.target}</small>
                    </div>
                    <div class="progress" style={{ margin: "auto" }}>
                        {goal.fulfilled < 0 ? <div class="progress-bar bg-success" role="progressbar" style={{width:"0%"}} aria-valuemin="0" aria-valuenow="0" aria-valuemax={goal.target}>-${-1*goal.fulfilled}</div>:<div class="progress-bar bg-success" role="progressbar" style={this.getPercentage()} aria-valuemin="0" aria-valuenow={this.getPercentagevalue()} aria-valuemax={goal.target}>${goal.fulfilled}</div>}
                        
                    </div>
                    <small>{goal.warn > 0 ? <span style={{color:"red"}}>Event pushed by {goal.warn} days</span> : (goal.warn < 0? <span style={{color:"#228B22"}}>Saving {-1 * goal.warn} days</span>:'On Track')}</small>
                </Link>
            </div>
        )
    }
}
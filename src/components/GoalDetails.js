import React, { Component } from 'react'
import axios from 'axios';
export default class GoalDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: {}
        }
    }
    componentDidMount = () => {
        let id = this.props.location.pathname.split("/");
        id = id[id.length - 1];
        axios.get('http://localhost:8000/api/goals/' + id).then(d => {
            this.setState({
                goal: d.data
            })
        })
        setInterval(() => {
            axios.get('http://localhost:8000/api/goals/' + id).then(d => {
                this.setState({
                    goal: d.data
                })
            })
        }, 5000)

    }
    getPercentagevalue = () => {
        return parseInt(parseInt(this.state.goal.fulfilled) * 100 / parseInt(this.state.goal.target));
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
                        <i class={goal.icon} style={{ color: 'pink' }}></i>
                        <h4 class="display">{goal.title}</h4>
                        <div class="progress" style={{ margin: "auto 30px" }}>
                            {goal.fulfilled < 0 ? <div class="progress-bar bg-success" role="progressbar" style={{ width: "0%" }} aria-valuemin="0" aria-valuenow="0" aria-valuemax={goal.target}>-${-1 * goal.fulfilled}</div> : <div class="progress-bar bg-success" role="progressbar" style={this.getPercentage()} aria-valuemin="0" aria-valuenow={this.getPercentagevalue()} aria-valuemax={goal.target}>${goal.fulfilled}</div>}

                        </div>
                        <small>Target : ${goal.target}</small>
                        <br></br>
                        <small>Due : {goal.due}</small>
                    </div>
                </div>
                <div>
                    <h6>Recent Transactions</h6>
                </div>
                <ul class="list-group">
                    {((goal || {}).transactionsArr || []).reverse().splice(0, 4).map(e => {
                        return <li class="list-group-item ">
                            <div class="d-flex justify-content-between align-items-center">
                                <small>{e.name}</small>
                                <span class="badge badge-pill">{e.amount}</span>
                            </div>
                            <small style={{ float: 'left' }}>{e.message}</small>
                        </li>

                    }
                    )}
                </ul>
                <div>
                    <small>{goal.warn > 0 ? <span style={{ color: "red" }}>Event pushed by {goal.warn} days</span> : (goal.warn < 0 ? <span style={{ color: "#228B22" }}>Saving {-1 * goal.warn} days</span> : 'On Track')}</small>
                    <br></br>
                    <small><i>Non Recurring Event</i></small>
                </div>
                <button type="button" class="btn btn-secondary btn-circle btn-lg" style={{ position: "fixed", bottom: "20px", right: "20px" }}><i class="fa fa-edit"></i>
                </button>
            </div>

        )
    }
}

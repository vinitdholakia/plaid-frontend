import React, { Component } from 'react'
import GoalListItem from './GoalListItem';
import axios from 'axios';
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export default class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: [],
            newItem: {
                recurring: true
            }
        }
    }
    componentDidMount= ()=>{
        axios.get('http://localhost:8000/api/goals').then(d=>{
            this.setState({
                goals:d.data
            })
        })
        setInterval(()=>{
            axios.get('http://localhost:8000/api/goals').then(d=>{
            this.setState({
                goals:d.data
            })
        })
        },5000)
        
    }
    render() {
        let dates = [];
        for (let index = 1; index < 31; index++) {
            dates.push(index);
        }
        let years = [];
        for (let index = new Date().getFullYear(); index < 2051; index++) {
            years.push(index);
        }
        return (
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New Goal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-left">
                                <form>
                                    <div class="form-group">
                                        <label for="goaltitle">Title</label>
                                        <input type="text" class="form-control" id="goaltitle" placeholder="Goal Title" />

                                    </div>
                                    <div class="form-group">
                                        <label for="goallimit">Amount</label>
                                        <input type="number" class="form-control" id="goallimit" aria-describedby="goalLimitDesc" placeholder="Amount" />
                                        <small id="goalLimitDesc" class="form-text text-muted">The amount you want to save up by the due date.</small>
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1"><small>Recurrinig Every Month</small></label>
                                    </div>
                                    <label for="goaldue">Due Date</label>
                                    <div class="form-row">
                                        <br></br>
                                        <select class="custom-select custom-select-md mb-3" style={{ width: "30%", margin: "auto" }} placeholder="Month">
                                            {months.map((e, i) => <option value={i + 1}>{e}</option>)}
                                        </select>
                                        <select class="custom-select custom-select-md mb-3" style={{ width: "30%", margin: "auto" }}>
                                            {dates.map((e, i) => <option value={e}>{e}</option>)}
                                        </select>
                                        {!this.state.newItem.recurring ? <select class="custom-select custom-select-md mb-3" style={{ width: "30%", margin: "auto" }}>
                                            {years.map((e, i) => <option value={e}>{e}</option>)}
                                        </select> : ""}
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list-group">
                    {this.state.goals.map(e => <GoalListItem goal={e}/>)}
                </div>
                <button type="button" class="btn btn-secondary btn-circle btn-lg" data-toggle="modal" data-target="#exampleModal" style={{ position: "fixed", bottom: "20px", right: "20px" }}><i class="fa fa-plus"></i>
                </button>

            </div>
        )
    }
}

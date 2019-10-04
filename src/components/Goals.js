import React, { Component } from 'react'
import GoalListItem from './GoalListItem';
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export default class Goals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: [{
                title : "Marriage",
                icon:"fa fa-heart",
                target : "20000",
                fulfilled : "4000",
                transactions : "24",
                due:"10/10/2020"
            },{
                title : "Car",
                icon:"fa fa-car",
                target : "35000",
                fulfilled : "17320",
                transactions : "103",
                due:"10/11/2020"
            },{
                title : "Home",
                icon:"fa fa-home",
                target : "835000",
                fulfilled : "117000",
                transactions : "401",
                due:"10/11/2024"
            }],
            newItem: {
                recurring: true
            }
        }
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

                                        {/* <div class="col-md-4 col-sm-2 mb-2" >
                                            <input type="number" class="form-control" id="validationTooltip03" placeholder="Month" required />
                                        </div>
                                        <div class="col-md-4 col-sm-4 mb-2" style={{ width: "30%" }}>
                                            <input type="number" class="form-control" id="validationTooltip03" placeholder="Date" required />
                                        </div>
                                        <div class="col-md-4 col-sm-4 mb-2" style={{ width: "30%" }}>
                                            <input type="number" class="form-control" id="validationTooltip03" placeholder="Year" required />
                                        </div> */}
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

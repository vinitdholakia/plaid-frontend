import React, { Component } from 'react'
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dates = [];
export default class Goals extends Component {
    constructor(props){
        super(props);
        this.state = {
            newItem : {
                recurring : true
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
                    <a href="#" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1"><i class="fa fa-heart" style={{ color: 'red' }}></i>&nbsp; Marriage</h5>
                            <small class="text-muted">Due : 10/10/2020</small>
                        </div>

                        <br></br>
                        <div class="d-flex w-100 justify-content-between">
                            <p class="mb-1">24 transactions</p>
                            <small class="text-muted">Target : $500</small>
                        </div>
                        <div class="progress" style={{ margin: "auto" }}>
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">$300</div>
                        </div>
                        {/* <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small class="text-muted">Donec id elit non mi porta.</small> */}
                    </a>

                </div>
                <button type="button" class="btn btn-secondary btn-circle btn-lg" data-toggle="modal" data-target="#exampleModal" style={{ position: "fixed", bottom: "20px", right: "20px" }}><i class="fa fa-plus"></i>
                </button>

            </div>
        )
    }
}

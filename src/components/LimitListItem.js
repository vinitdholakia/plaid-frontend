import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class LimitListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const limitItem = this.props.limitItem;
        return (
            <div>
                <Link to="#" class="list-group-item list-group-item-action">
                    <div class="d-flex  justify-content-between">
                        <h6 class="mb-7">{limitItem.name}</h6>
                        <p class="text-muted">Set to : ${limitItem.amount}</p>
                    </div>
                    <div class="d-flex  justify-content-between">
                        <h6 class="mb-7"></h6>
                        {(parseInt(limitItem.amount) - parseInt(limitItem.current)) > 0 ? <small style={{color:"#aaa"}}>You have ${(parseInt(limitItem.amount) - parseInt(limitItem.current))} left for the month</small>: <small style={{color:"#ff0000"}}>Monthly limit crossed by ${-1*(parseInt(limitItem.amount) - parseInt(limitItem.current))}</small>}
                        
                    </div>
                    
                    
                    
                </Link>
            </div>
        )
    }
}
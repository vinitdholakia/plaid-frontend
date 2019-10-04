import React, { Component } from 'react'
import LimitListItem from './LimitListItem';
import axios from 'axios';
export default class LimitPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limits: [],
            
        }
    }
    componentDidMount= ()=>{
        axios.get('http://localhost:8000/api/limits').then(d=>{
            this.setState({
                limits:(d||{}).data || []
            })
        });
    }
    render() {
        return (
            <div>
                <div class="list-group">
                    {this.state.limits.map(e => <LimitListItem limitItem={e}/>)}
                </div>
                <button type="button" class="btn btn-secondary btn-circle btn-lg" style={{ position: "fixed", bottom: "20px", right: "20px" }}><i class="fa fa-plus"></i>
                </button>

            </div>
        )
    }
}

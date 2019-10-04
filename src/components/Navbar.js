import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import Goals from './Goals';
export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">My Savings App</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Router>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/goals">Goals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Trend</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </Router>
            </nav>
        )
    }
}

import React, { Component } from 'react'
import Media from 'react-media';
function Card(props) {
    const tile = props.tile;
    return (
        <Media queries={{ small: { maxWidth: 599 } }}>
            {matches =>
                matches.small ?
                    (
                        <div class="card text-center" style={{ width: "90%", margin: "auto", marginBottom: '20px' }}>
                            <div class="card-body">
                                <h5 class="card-title">{tile.name}</h5>
                                <p>${tile.amount}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div class="card text-center">
                            <div class="card-body ">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div class="card-footer text-muted">
                                {tile.name}
                            </div>
                        </div>
                    )
            }
        </Media>

    )
}
export default Card;
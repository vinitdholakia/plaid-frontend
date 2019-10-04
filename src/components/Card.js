import React, { Component } from 'react'
import Media from 'react-media';
function Card(props) {
    const tile = props.tile;
    console.log(tile)
    return (
        <div class="card col-sm text-center" style={{ width: "46%", margin: "5px auto", backgroundColor: '#F0F0F0' }}>
            <div class="card-body">
                <h6 class="card-title">{tile.name.length > 8 ? `${tile.name.slice(0,8)}...` : tile.name}</h6>
                <p style={{ color: `${tile.color}` }}>${tile.amount}</p>
            </div>
        </div>
    )
}
export default Card;
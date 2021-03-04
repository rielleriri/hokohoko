import React from 'react'
import './Item.css'

function Item() {
    return (
        <div className='item'>
            <div className='row'>
                <div class="column left">Platform</div>
                <div class="column middle">Lazada</div>
                <div class="column right"><button>></button></div>
            </div>
        </div>
    )
}

export default Item

import React from 'react'

function InfoElementBlock (){
    return (
        <div className='wrapper-block infoElementBlock'>
            <div className='infoElementBlock-content'>
                <p id='user'>Selected user: <span></span></p>
                <p id='description'>Description: <span></span></p>
                <p id='address'>Residence address: <span></span></p>
                <p id='city'>City: <span></span></p>
                <p id='state'>Province/State: <span></span></p>
                <p id='index'>Index: <span></span></p>
            </div>
        </div>
    )
}

export default InfoElementBlock
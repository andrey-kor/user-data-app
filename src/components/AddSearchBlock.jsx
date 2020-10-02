import React from 'react'

function AddSearchBlock (){
    return (
        <div className='wrapper-block addSearchBlock'>
            <div className='wrapper-block-addItemWrapper'>
                <button className='button addItemWrapper__button'>Add</button>
            </div>
            <div className='wrapper-block-searchWrapper'>
                <form className='searchWrapper__form'>
                    <input className='searchWrapper__input' type="text"/>
                    <button className='button searchWrapper__button'>Find</button>
                </form>
            </div>
        </div>
    )
}

export default AddSearchBlock
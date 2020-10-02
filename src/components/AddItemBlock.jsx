import React from 'react'

function AddItemBlock (){
    return (
        <div className='addItemBlock'>
            <div className='addItemBlock-title'>
                <p>Add new user</p>
            </div>
            <div className='addItemBlock-inputs-wrapper'>
                <form id='addItemForm'>
                    <div className='addProp-wrapper'>
                        <div className='addProp__title'><span>id:</span></div>
                        <div className='addProp-input-wrapper'>
                            <input type='text' className='addProp__input' id='addId' autoComplete='off' required />
                        </div>
                    </div>
                    <div className='addProp-wrapper'>
                        <div className='addProp__title'><span>first name:</span></div>
                        <div className='addProp-input-wrapper'>
                            <input type='text' className='addProp__input' id='addFirstName' autoComplete='off' required/>
                        </div>
                    </div>
                    <div className='addProp-wrapper'>
                        <div className='addProp__title'><span>last name:</span></div>
                        <div className='addProp-input-wrapper'>
                            <input type='text' className='addProp__input' id='addLastName' autoComplete='off' required/>
                        </div>
                    </div>
                    <div className='addProp-wrapper'>
                        <div className='addProp__title'><span>email:</span></div>
                        <div className='addProp-input-wrapper'>
                            <input type='text' className='addProp__input' id='addEmail' autoComplete='off' required/>
                        </div>
                    </div>
                    <div className='addProp-wrapper'>
                        <div className='addProp__title'><span>phone:</span></div>
                        <div className='addProp-input-wrapper'>
                            <input type='text' className='addProp__input' id='addPhone' autoComplete='off' required/>
                        </div>
                    </div>
                    <div className='addItemBlock-addButton-wrapper'>
                        <button className='button addItemBlock__addButton'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItemBlock
import React from 'react'
import arrowLeft from '../img/arrow-l.png'
import arrowRight from '../img/arrow-r.png'
import arrowUp from '../img/arrow-up.png'
import arrowDown from '../img/arrow-down.png'

function TableBlock (){
    
    return (
        <div className='wrapper-block tableBlock'>
            <div className='wrapper-block-table'>
                <table className='wrapper-block__table'>
                    <thead>
                        <tr>
                            <th>id <div className='sortIcon'><img className='sortIcon__img' src={arrowDown} alt="arrow-up"/></div></th>
                            <th>firstName <div className='sortIcon'><img className='sortIcon__img' src={arrowDown} alt="arrow-up"/></div></th>
                            <th>lastName <div className='sortIcon'><img className='sortIcon__img' src={arrowDown} alt="arrow-up"/></div></th>
                            <th>email <div className='sortIcon'><img className='sortIcon__img' src={arrowDown} alt="arrow-up"/></div></th>
                            <th>phone <div className='sortIcon'><img className='sortIcon__img' src={arrowDown} alt="arrow-up"/></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id='id'>1</td>
                            <td id='firstName'>Egor</td>
                            <td id='lastName'>Ivanov</td>
                            <td id='email'>al@mail.ru</td>
                            <td id='phone'>+79999999999</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='wrapper-block-navig'>
                <div className='navig-wrapper'>
                    <div className='navig-wrapper-imgL'>
                        <img className='navig-wrapper__imgL' src={arrowLeft} alt="arrow-left"/>
                    </div>
                    <div className='navig-wrapper-pages'>
                        <div className='navig-wrapper__page' id='page-1'><span>1</span></div>
                    </div>
                    <div className='navig-wrapper-imgR'>
                        <img className='navig-wrapper__imgR' src={arrowRight} alt="arrow-right"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableBlock
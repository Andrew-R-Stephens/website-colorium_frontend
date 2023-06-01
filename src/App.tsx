import React, {Fragment, useEffect, useState} from 'react'
import './App.sass'

import {transform} from '@svgr/core'
import MinimizedPaletteGallery from "./MinimizedPalette/MinimizedPaletteGallery.tsx";
import HeroTitle from "./HeroTitle/HeroTitle.tsx";
import Footer from "./Footer/Footer.tsx";

function App() {
    //const tempSvg='<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path fill="none" stroke="#176758" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M5.5,36.5	C5.5,31.253,9.753,26,15,26"/><path fill="none" stroke="#176758" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3.078" d="M43,18.5	c0,5.247-4.477,9.5-10,9.5"/><line x1="17.5" x2="17.5" y1="36.5" y2="44.5" fill="none" stroke="#176758" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/><line x1="30.5" x2="30.5" y1="36.5" y2="44.5" fill="none" stroke="#176758" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/><linearGradient id="KCrKGkj9qYHZn5H8~Dm8La" x1="14.78" x2="21.011" y1=".549" y2="15.384" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#55c8aa"/><stop offset=".544" stop-color="#4cc0a6"/><stop offset="1" stop-color="#41b6a1"/></linearGradient><path fill="url(#KCrKGkj9qYHZn5H8~Dm8La)" d="M35.667,40H12.333C11.044,40,10,39.079,10,37.941V7.059C10,5.921,11.044,5,12.333,5h23.333	C36.956,5,38,5.921,38,7.059v30.882C38,39.079,36.956,40,35.667,40z"/><linearGradient id="KCrKGkj9qYHZn5H8~Dm8Lb" x1="21.286" x2="26.034" y1="3.44" y2="24.539" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f6f6f6"/><stop offset=".228" stop-color="#edeeef"/><stop offset=".595" stop-color="#d6d9db"/><stop offset="1" stop-color="#b4bbc0"/></linearGradient><path fill="url(#KCrKGkj9qYHZn5H8~Dm8Lb)" d="M33.778,23H14.222C13.548,23,13,22.483,13,21.846V9.154C13,8.517,13.548,8,14.222,8h19.556	C34.452,8,35,8.517,35,9.154v12.692C35,22.483,34.452,23,33.778,23z"/><path fill="#272727" d="M14,25h12c0.552,0,1,0.448,1,1v0c0,0.552-0.448,1-1,1H14c-0.552,0-1-0.448-1-1v0	C13,25.448,13.448,25,14,25z"/><circle cx="34" cy="26" r="1" fill="#272727"/><path fill="#fac600" d="M20.5,32H19v-1.5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276,0-0.5,0.224-0.5,0.5V32h-1.5	c-0.276,0-0.5,0.224-0.5,0.5v1c0,0.276,0.224,0.5,0.5,0.5H17v1.5c0,0.276,0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5V34h1.5	c0.276,0,0.5-0.224,0.5-0.5v-1C21,32.224,20.776,32,20.5,32z"/><path fill="#c22300" d="M31,31c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2c1.105,0,2-0.895,2-2C33,31.895,32.105,31,31,31z"/><circle cx="18" cy="14" r="1" fill="#272727"/><circle cx="30" cy="14" r="1" fill="#272727"/><path fill="#272727" d="M24,17.42c-2.22,0-4-0.92-4,0c0,0.67,0.49,1.67,1.83,2.21C22.37,19.24,23.14,19,24,19	s1.63,0.24,2.17,0.63c1.34-0.54,1.83-1.54,1.83-2.21C28,16.5,26.21,17.42,24,17.42z"/><path fill="#d75b60" d="M26.17,19.63C25.61,19.86,24.89,20,24,20s-1.61-0.14-2.17-0.37C22.37,19.24,23.14,19,24,19	S25.63,19.24,26.17,19.63z"/><path fill="#151515" d="M33.778,8C34.452,8,35,8.517,35,9.154v12.692C35,22.483,34.452,23,33.778,23H14.222 C13.548,23,13,22.483,13,21.846V9.154C13,8.517,13.548,8,14.222,8H33.778 M33.778,7H14.222C12.997,7,12,7.966,12,9.154v12.692 C12,23.034,12.997,24,14.222,24h19.556C35.003,24,36,23.034,36,21.846V9.154C36,7.966,35.003,7,33.778,7L33.778,7z" opacity=".05"/><path fill="#151515" d="M18.5,30c0.276,0,0.5,0.224,0.5,0.5V32h1.5c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5 H19v1.5c0,0.276-0.224,0.5-0.5,0.5h-1c-0.276,0-0.5-0.224-0.5-0.5V34h-1.5c-0.276,0-0.5-0.224-0.5-0.5v-1 c0-0.276,0.224-0.5,0.5-0.5H17v-1.5c0-0.276,0.224-0.5,0.5-0.5H18.5 M18.5,28.8h-1c-0.937,0-1.7,0.763-1.7,1.7v0.3h-0.3 c-0.937,0-1.7,0.763-1.7,1.7v1c0,0.937,0.763,1.7,1.7,1.7h0.3v0.3c0,0.937,0.763,1.7,1.7,1.7h1c0.937,0,1.7-0.763,1.7-1.7v-0.3h0.3 c0.937,0,1.7-0.763,1.7-1.7v-1c0-0.937-0.763-1.7-1.7-1.7h-0.3v-0.3C20.2,29.563,19.437,28.8,18.5,28.8L18.5,28.8z" opacity=".05"/><path fill="#151515" d="M31,31c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2s-2-0.895-2-2C29,31.895,29.895,31,31,31 M31,30 c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S32.654,30,31,30L31,30z" opacity=".05"/><path fill="#151515" d="M33.778,8C34.452,8,35,8.517,35,9.154v12.692C35,22.483,34.452,23,33.778,23H14.222 C13.548,23,13,22.483,13,21.846V9.154C13,8.517,13.548,8,14.222,8H33.778 M33.778,7.5H14.222c-0.95,0-1.722,0.742-1.722,1.654 v12.692c0,0.912,0.773,1.654,1.722,1.654h19.556c0.95,0,1.722-0.742,1.722-1.654V9.154C35.5,8.242,34.727,7.5,33.778,7.5 L33.778,7.5z" opacity=".05"/><path fill="#151515" d="M18.5,30c0.276,0,0.5,0.224,0.5,0.5V32h1.5c0.276,0,0.5,0.224,0.5,0.5v1c0,0.276-0.224,0.5-0.5,0.5 H19v1.5c0,0.276-0.224,0.5-0.5,0.5h-1c-0.276,0-0.5-0.224-0.5-0.5V34h-1.5c-0.276,0-0.5-0.224-0.5-0.5v-1 c0-0.276,0.224-0.5,0.5-0.5H17v-1.5c0-0.276,0.224-0.5,0.5-0.5H18.5 M18.5,29.4h-1c-0.607,0-1.1,0.493-1.1,1.1v0.9h-0.9 c-0.607,0-1.1,0.493-1.1,1.1v1c0,0.607,0.493,1.1,1.1,1.1h0.9v0.9c0,0.607,0.493,1.1,1.1,1.1h1c0.607,0,1.1-0.493,1.1-1.1v-0.9h0.9 c0.607,0,1.1-0.493,1.1-1.1v-1c0-0.607-0.493-1.1-1.1-1.1h-0.9v-0.9C19.6,29.893,19.107,29.4,18.5,29.4L18.5,29.4z" opacity=".05"/><path fill="#151515" d="M31,31c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2s-2-0.895-2-2C29,31.895,29.895,31,31,31 M31,30.5 c-1.378,0-2.5,1.122-2.5,2.5c0,1.379,1.122,2.5,2.5,2.5s2.5-1.121,2.5-2.5C33.5,31.622,32.378,30.5,31,30.5L31,30.5z" opacity=".05"/></svg>'
    //const transformSvg= await transform(tempSvg,{icon:false},{componentName:'tempBmo'})

    /**
     * TODO - Issue #4:
     * Steven, please refactor your code into container components. See example from MinimizedPalette directory.
     */
    return (
        <Fragment>
            {/* TODO - Issue #4 : Start */}
            <div className='hero-container'>
                <div className='nav-wrapper'>
                    <ul>
                        <li className='nav-link'>Link 1</li>
                        <li className='nav-link'>Link 2</li>
                        <li className='nav-link'>Link 3</li>
                        <li className='nav-link'>Link 4</li>
                    </ul>
                </div>
                <div className='heading-wrapper'>
                    {/* HeroTitle element accepts a title and textColor. Change these as desired. */}
                    <HeroTitle title='Colorium' textColor='#000000'/>
                </div>
            </div>
{/*
            <div className='overview-container'>
                <div className='overview-left'>
                    <ul className='feature-ov-list'>
                        <li className='ov-liItem'>A</li>
                        <li className='ov-liItem'>C</li>
                        <li className='ov-liItem'>D</li>
                        <li className='ov-liItem'>E</li>
                    </ul>
                </div>
                <div className='overview-right'/>
            </div>*/}
            {/* TODO - Issue #4 : End */}

            <MinimizedPaletteGallery/>

            <Footer/>
        </Fragment>
    )
}

export default App

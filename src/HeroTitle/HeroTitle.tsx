import {Fragment, useEffect, useState} from "react";
import "./HeroTitle.sass"

/**
 * Accepts two props by JSON tag: title / textColor
 * @param props.title - The text to be shown
 * @param props.textColor - The final color of the text. Works best with alpha at 100%.
 * @constructor
 */
function HeroTitle(props:any) {


    function getCSSProperties(data: any[]) {
        if(data === undefined || data == null || data.length == 0) {
            return "";
        }
        let cssProperty:any = {};
        data.map((item:any)=>{
            cssProperty[item.variable] = item.value;
        })

        return cssProperty;
    }

    return (
        <Fragment>
            <div className={'hero-title-wrapper'}>
                <label className={'hero-title-animated'} id={'test-palette'}>
                    {
                        Array.from(props.title as string).map((letter:string)=>{
                            return <span className={'hero-title-animated-letter'}>{letter}</span>
                        })
                    }
                    <label className={'hero-title-foreground'} id={'test-palette'}
                           style={getCSSProperties([{variable:'--final-color', value: props.textColor}])}>
                        {
                            Array.from(props.title as string).map((letter:string)=>{
                                return <span className={'hero-title-foreground-letter'}>{letter}</span>
                            })
                        }
                    </label>
                </label>
            </div>
        </Fragment>
    )

}

export default HeroTitle
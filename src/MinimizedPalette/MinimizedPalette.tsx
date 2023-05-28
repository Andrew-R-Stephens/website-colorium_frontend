import {Fragment, useEffect, useState} from "react";
import "./MinimizedPalette.sass"

function MinimizedPalette(props:any) {

    const {data} = props.props

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
            <div className={'minimized-palette-parent'}>
                <div className={'minimized-palette-name-wrapper'}>
                    <div className={'minimized-palette-name'}>{data?.author}</div>
                </div>
                <div className={'minimized-palette-color-parent'}>
                    <div className={'minimized-palette-color-wrapper'}>
                        {
                            data.colors?.map((color:string, colorIndex:number)=>{
                                return <div
                                    id={'palette-color-' + colorIndex}
                                    className={'minimized-palette-color'}
                                    style={
                                        getCSSProperties(
                                            [{variable:'--bg-color', value:color}]
                                        )
                                    }
                                />
                            })
                        }
                    </div>
                </div>
                <div className={'minimized-palette-date-wrapper'}>
                    <div className={'minimized-palette-date'}>{data?.date}</div>
                </div>
            </div>
        </Fragment>
    );

}

export default MinimizedPalette;
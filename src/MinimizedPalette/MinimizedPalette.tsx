import {Fragment} from "react";
import "./MinimizedPalette.sass"

function MinimizedPalette(props:any) {

    const {colors, author, date} = props

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
                    <div className={'minimized-palette-name'}>{author}</div>
                </div>
                <div className={'minimized-palette-color-parent'}>
                    <div className={'minimized-palette-color-wrapper'}>
                        {
                            colors?.map((color:string, colorIndex:number)=>{
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
                    <div className={'minimized-palette-date'}>{date}</div>
                </div>
            </div>
        </Fragment>
    );

}

export default MinimizedPalette;
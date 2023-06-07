import React, {useState} from 'react'
import {Color, RGBColor, SketchPicker} from 'react-color'

function ColorPicker() {

    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1"
    } as any);
    const onClickMethod = () => {
        setDisplay(!display);
    };

    const onCloseMethod = () => {
        setDisplay(false);
    };

    const onChangeColor = (color:any) => {
        setColor({ ...color.rgb });
    };

    const popover:{} = {
            position: "absolute",
            zIndex: "3"
    };

    const cover:{} = {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
    };

    return (
        <div style={{display:"flex", margin:"auto", width:"fit-content", height:"fit-content", background: "mediumvioletred",
            padding:"1svmin", border:"0px transparent solid", borderRadius: "1svmin"}}>
            <a className="colorSelector" onClick={onClickMethod} style={{color:'snow', fontWeight:"bold"}}>
                select color
            </a>
            {display ? (
                <div style={popover}>
                    <div style={cover} onClick={onCloseMethod} />
                    <SketchPicker color={color} onChange={onChangeColor} />
                </div>
            ) : null}
        </div>
    );

}

export default ColorPicker
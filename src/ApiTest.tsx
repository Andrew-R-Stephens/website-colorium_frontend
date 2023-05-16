import axios from "axios";
import {Fragment, useEffect, useState} from "react";

function ApiTest() {

    const [testResponse, setTestResponse] = useState<string>("-");

    useEffect(() => {
        axios.get("http://localhost:5000/pilot")
            .then(r=>{
                console.log(r.data.answer)
                setTestResponse(r.data.answer)
            })
    }, [])

    return (
        <Fragment>
            <div>
                <label style={{color:"cornflowerblue"}}>Local API response test:</label>
                <div style={{color:"orangered", display:"flex"}}></div>
                    <div style={{margin:'auto'}}>
                        <table style={{width:'100%'}}>
                            <tbody>
                                <tr><td><label>Correct response:</label></td><td>piloting</td></tr>
                                <tr><td><label>Actual response:</label></td><td>{testResponse}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            <label style={{color:"orangered"}}>Note: Flask must be running locally.</label>
        </Fragment>
    );
}

export default ApiTest;
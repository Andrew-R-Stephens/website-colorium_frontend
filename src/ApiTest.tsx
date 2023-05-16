import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import SpinLoader from "./LoadingSpinElement";

function ApiTest() {

    const [testResponseA, setTestResponseA] = useState<string>();
    const [testResponseB, setTestResponseB] = useState<string>();

    useEffect(() => {
        apiCallA().then(r => console.log("A finished"));
        apiCallB().then(r => console.log("B finished"));
    }, [])

    async function apiCallA() {
        axios.get("http://localhost:5000/pilot")
            .then(r=>{
                const {answer} = r.data;
                console.log(answer)
                setTestResponseA(answer);
            }).catch((r=>{
                setTestResponseA('-')
        }))
    }

    const apiCallB = async () => {
        axios.get("https://api.tritium-studios.com/")
            .then(r => {
                const {answer} = r.data;
                console.log(answer)
                setTestResponseB(answer);
            }).catch(r=>{
                setTestResponseB('-')
            }
        )
    }

    return (
        <Fragment>
            <div>
                <label style={{color:"cornflowerblue"}}>Local API response test:</label>
                <div style={{color:"orangered", display:"flex"}}></div>
                    <div style={{margin:'auto'}}>
                        <table style={{width:'100%'}}>
                            <thead><th><label></label></th><th><div>Test A (Local)</div></th><th><div>Test B (Server)</div></th></thead>
                            <tbody>
                                <tr><td><label>Correct response:</label></td><td>piloting</td><td>data</td></tr>
                                <tr><td><label>Actual response:</label></td>
                                    <td>{(testResponseA) ?? <SpinLoader/>}</td>
                                    <td>{(testResponseB) ?? <SpinLoader/>}</td>
                                </tr>
                                <tr><td style={{borderBottom:"none", borderLeft:"none", borderRight: "none"}}></td>
                                    <td style={{borderBottom:"none", borderLeft:"none", borderRight: "none"}}>
                                        <button onClick={apiCallA} disabled={!testResponseA || testResponseA!==''}>Retry</button></td>
                                    <td style={{borderBottom:"none", borderLeft:"none", borderRight: "none"}}>
                                        <button onClick={apiCallB} disabled={!testResponseB || testResponseB!==''}>Retry</button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            <label style={{color:"orangered"}}>Note: Flask must be running locally for Test A.</label>
        </Fragment>
    );
}

export default ApiTest;
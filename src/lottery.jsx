import { useState } from "react"
import "./lottery.css"
import {genTicket,sum} from "./helper"
function Game(){
    let[ticket,setticket]=useState(genTicket(3));
    let isWinning= sum(ticket)===15
    function update(){
        setticket(genTicket(3))
    }
    return(
        <div>
            <h1>lottery game !</h1>
            <div className="ticket">
                <spam>{ticket[0]}</spam>
                <spam>{ticket[1]}</spam>
                <spam>{ticket[2]}</spam>
            </div>
           &nbsp; &nbsp; &nbsp;
            <button onClick={update}>buy ticket</button>
            
            <h1>{isWinning&&"congratulation you won"}</h1>
        </div>
    )
}
export default Game
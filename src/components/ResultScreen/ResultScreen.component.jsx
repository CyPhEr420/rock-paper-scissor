/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ItemSign from "../ItemSign/ItemSign.component"

import './resultScreen.styles.css'

// eslint-disable-next-line react/prop-types
const ResultScreen = ({ playerChoice, computerChoice, winner, handleReset, handleScore }) => {
    const [showComputerChoice, setShowComputerChoice] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [winnerClass, setWinnerClass] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => setShowComputerChoice(true), 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowResult(true)
            setWinnerClass(winner)
            if (winner === "YOU WIN") {
                handleScore();
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [winner]);



    console.log(winnerClass === winner, winnerClass, winner)

    return (
        <div className={`${showResult ? "widden" : ""} result-screen`} >

            <div className="player-choice choice">
                <h2>You Picked</h2>
                <ItemSign sign={playerChoice.name} img={playerChoice.img} classes={`${showComputerChoice ? `big` : ""} ${winnerClass === "YOU WIN" ? 'winner' : ""} `} />
            </div>

            {
                showResult &&
                <div className="result">
                    <h1 className="result-title">{
                        winner
                    }</h1>

                    <div className="reset-btn" onClick={handleReset} >Play Again</div>

                </div>
            }


            <div className="computer-choice choice">
                <h2>The House Picked</h2>
                <div className={`${showComputerChoice ? "" : "computer-choice-circle"}`}></div>
                {showComputerChoice &&
                    (<ItemSign sign={computerChoice.name} img={computerChoice.img} classes=
                        {`${showComputerChoice ? `big` : ""} 
                    ${winnerClass === "YOU LOSE" ? 'winner'
                                : ""} `} />)
                }

            </div>

        </div>
    )
}

export default ResultScreen
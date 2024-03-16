import { useEffect, useState } from 'react'
import ItemSign from '../ItemSign/ItemSign.component'
import './mainGame.styles.css'
import ResultScreen from '../ResultScreen/ResultScreen.component'


const ITEM_SIGNS = [
    {
        name: "rock",
        img: "/pics/icon-rock.svg",
        key: "1"
    },
    {
        name: "paper",
        img: "/pics/icon-paper.svg",
        key: "2"

    },
    {
        name: "scissor",
        img: "/pics/icon-scissors.svg",
        key: "3",
        classes: "span-2"

    }
]



// eslint-disable-next-line react/prop-types
const MainGame = ({handleScore}) => {
    let [playerChoice, setPlayerChoice] = useState(null);
    let [computerChoice, setComputerChoice] = useState(null);

    let [winner, setWinner] = useState(null);

    const handleResetGame = () => {
        setPlayerChoice(null);
        setComputerChoice(null);
        setWinner(null)
    }

    const handlePlayerChoice = (item) => {
        setPlayerChoice(item);
        const randomIndex = Math.floor(Math.random() * ITEM_SIGNS.length);
        setComputerChoice(ITEM_SIGNS[randomIndex]);

    }

    const determineWinner = (userChoice, computerChoice) => {

        if (userChoice === computerChoice) {
            setWinner('TIE');
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            setWinner('YOU WIN');
        } else {
            setWinner('YOU LOSE');
        }
    };

    useEffect(() => {
        determineWinner(playerChoice?.name, computerChoice?.name)
    }, [playerChoice, computerChoice])

    return (
        <div className={` ${playerChoice ? 'selected' : ''}  game-container`}>

            {
                playerChoice === null &&
                ITEM_SIGNS.map((item) => {
                    return (
                        <ItemSign handleChoice={() => handlePlayerChoice(item)} id={item.name} img={item.img} sign={item.name} key={item.name} classes={item?.classes} />
                    )
                })
            }

            {
                playerChoice &&
                <ResultScreen handleScore={handleScore} handleReset={handleResetGame} winner={winner} playerChoice={playerChoice} computerChoice={computerChoice} />
            }

        </div>
    )
}

export default MainGame
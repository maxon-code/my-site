import {useEffect, useState} from 'react'
import './App.css'
import SimpleCard from "./SimpleCard.tsx";
import type {Card} from "./types.ts";
import {Navigation} from "../Navigation.tsx";






// добавил id
const cardImages: Card[] = [
    {
        id: 1,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/4PSvROMQwTMiwxQLRK6Tyl/44a0d9d7e9c33ed487a04857be1bf733/undead.png?fm=webp&w=1681",
        matched: false
    },
    {
        id: 2,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/4GT5A4Ghm2eCp62NH1IJXy/7bbabfa43119edf27dfbd9e032c5f4b3/avenger.png?fm=webp&w=1681",
        matched: false
    },
    {
        id: 3,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/1J1hZW76ogiEWQyxmIZEnR/7c71401ada817fe882d9abf4b7af3b2e/brawler.png?fm=webp&w=1681",
        matched: false
    },
    {
        id: 4,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/1fy7AT5sWcsJFcfD2j4pv3/7e2c8dc1f44ecf257e46da6738ddbdaf/goblin.png?fm=webp&w=1681 ",
        matched: false
    },
    {
        id: 5,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/5FGyNjdgNPwVMEKzclN9a2/042ab612c8ba685793eaed613036e959/ranger.png?fm=webp&w=1681",
        matched: false
    },
    {
        id: 6,
        "src": "https://clashroyale.inbox.supercell.com/9jtsgmsiuthj/69VZyd2tHVTrFLHEmqzOOj/1b18cb924b8a2e84e19f8072b76ff4e2/noble.png?fm=webp&w=1681 ",
        matched: false
    }
]

function MemoryGame() {
    // Состояние
    const [cards, setCards] = useState<Card[]>([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // Функции
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    const handleChoice = (card: Card) => {
        if (!choiceOne) {
            setChoiceOne(card);
        } else if (choiceTwo === null && card.id !== choiceOne.id) {
            setChoiceTwo(card);
        }
    }

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }

    // Эффекты

    useEffect(() => {
        if (choiceOne && choiceTwo) {
        setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

                        // TIME COUNTER (IN PROCESS...)
        // const [seconds, setSeconds] = useState(0);
        // const [minutes, setMinutes] = useState(0);
        //
        //
        // useEffect(() => {
        //     const interval = setInterval(() => {
        //         setSeconds(prevSeconds => {
        //             if (prevSeconds === 59) {
        //                 setMinutes(prevMinutes => prevMinutes + 1);
        //                 return 0;
        //             } else {
        //                 return prevSeconds + 1;
        //             }
        //         });
        //     }, 1000);
        //
        //     return () => clearInterval(interval);
        // }, []);




    return (
        <>
            <Navigation/>
            <div className="App">
                <h1>Memory-game</h1>
                <button onClick={shuffleCards}>New Game</button>
                <div className="card-grid">
                    {cards.map((card) => (
                        <SimpleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                            disabled={disabled}
                        />
                    ))}
                </div>
                <p>Turns: {turns}</p>
                {/*<p>Time: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>*/}
            </div>
        </>
    )
}

export default MemoryGame;

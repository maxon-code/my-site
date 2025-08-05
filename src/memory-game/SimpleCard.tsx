import "./SimpleCard.css"



export default function SimpleCard( { card, handleChoice, flipped, disabled } ) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }
return (
    <div className="card" onClick={handleClick}>
        <img
            src={flipped ? card.src : "https://i.pinimg.com/1200x/9c/d0/39/9cd0390853ca36d1286cc4967ee05a41.jpg"}
            alt="card"
            className={flipped ? "flipped" : ""}
        />
    </div>
);
};
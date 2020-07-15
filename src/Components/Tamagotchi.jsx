import React, {useState} from 'react';

const DisplayTamagotchi = props => {
    const {fullness,happiness, meals, energy, message, image} = props;

    return (
            <div className="display">
                <div className="row">
                    <div className="col">
                    <h1>Kim's Stats:</h1>
                    <h5>Fullness: {props.fullness}</h5>
                    <h5>Happiness: {props.happiness}</h5>
                    <h5>Meals: {props.meals}</h5>
                    <h5>Energy: {props.energy}</h5>
                    <h5>{props.message}</h5>
                    </div>
                    <div className="col">
                    <img src={props.image} alt=""/>
                </div>
            </div>
        </div>
    )
}

const Tamagotchi = props => {

    const [fullness, setFullness] = useState(20);
    const [happiness, setHappiness] = useState(20);
    const [meals, setMeals] = useState(3);
    const [energy, setEnergy] = useState(50);
    const [message, setMessage] = useState("Welcome, to my game! You'll have to do everything for me. xoxo Kim ");
    const [image, setImage] = useState("Images/KimHi.gif");

    function work() {
        var energyRemaining = energy;
        var chance = randomMeals()*1
        if(energyRemaining >= 5) {
            setMeals(meals + chance);
            setMessage("Kim worked hard for the money.");
            setEnergy(energy - 5);
            setImage("Images/workKim.gif");
        }
        else {
            setMessage("Kim is too exhausted to go to work.");
            setImage("Images/KimEnergy.gif");
            setMeals(meals);
        }
        checkWin();
    }

    function play() {
        var energyRemaining = energy;
        var playchance = getRandomNum() *1;
        var playliked = randomLiked()*1;
        if(energyRemaining >= 5) {
            if(playliked === 1){
                setEnergy(energy - 5);
                setHappiness(happiness + playchance);
                setMessage("That made Kim Happy");
                setImage("Images/happyKim.gif");
            }
        else {
            setEnergy(energy - 5);
            setMessage("Kim did not want to play with you.");
            setHappiness(happiness);
            setImage("Images/cryKim.gif");
            }
        }
        else {
            setMessage("Kim is literally too tired.");
            setHappiness(happiness);
            setImage("Images/KimTired.gif");
        }
        checkWin();
    }

    function feed() {
        var mealsRemaining = meals;
        var feedchance = getRandomNum()*1;
        var feedLiked = randomLiked()*1;
        if( mealsRemaining >= 1){
            if(feedLiked == 1){
                setMeals(meals - 1);
                setFullness(fullness + feedchance);
                setMessage("That food is up to Kim's standards");
                setImage("Images/kimEating.gif");
            }
        else {
            setMeals(meals - 1);
            setMessage("Kim will not eat your gross food.");
            setImage("Images/ewwKim.gif");
        }
    }
        else {
            setMessage("You are literally starving Kim.");
            setMeals(meals);
            setImage("Images/hungryKim.gif");
        }
        checkWin();
    }

    function sleep() {
        setHappiness(happiness - 5);
        setFullness(fullness -5);
        setEnergy(energy + 15);
        setMessage("Kim really needed that nap");
        setImage("Images/napKim.gif");
        checkWin();
    }

    function getRandomNum() {
        var min = 5;
        var max = 10;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
    }

    function randomMeals() {
        var min = 1;
        var max = 3;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
        }

    function randomLiked() {
        var min = 1;
        var max = 4;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + min;
        return random;
    }

    function checkWin(){
        if((energy >= 100) && (fullness >= 100) && (happiness >= 100)){
            setMessage("you win!");
            setImage("Images/WinningKim.gif");
        }
        else {
            if((fullness <= 0) || (happiness <= 0)) {
                setMessage("you lose!");
                setImage("Images/LostKim.gif");
            }
        }
    }
    function reset(){
        setHappiness(20);
        setEnergy(5);
        setFullness(20);
        setMeals(3);
        setMessage("Welcome, to my game! You'll have to do everything for me. xoxo Kim");
        setImage("Images/KimHi.gif");
    }

    return (
        <div className="dashboard">
            <DisplayTamagotchi 
            happiness={happiness} 
            energy={energy}
            fullness={fullness}
            meals={meals}
            message={message}
            image={image}/>
            {
                message === "you win!" || message === "you lose!" ? 
            <div>
                <button onClick={reset}>Reset</button> </div> :
            <div> 
                <button className="btn btn-dark" onClick={work}> Work </button>
            <button className="btn btn-dark" onClick={sleep}>Sleep</button>
            <button className="btn btn-dark" onClick={feed}>Eat</button>
            <button className="btn btn-dark" onClick={play}>Play</button>
            </div>
            }
        </div>

        )
}


export default Tamagotchi
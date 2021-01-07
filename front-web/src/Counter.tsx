import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);


    const handleIncrease = () =>{
        setCounter(counter + 1);
        console.log('Incrementar')
    }

    const handleDecrease = () => {
        setCounter(counter - 1);
        console.log('Decrementar')
    }

    return(
        <div>
        <button onClick={handleIncrease}>Incrementar</button>
        <button onClick={handleDecrease}>Decrementar</button>
        <h1>Valor do contador: {counter} </h1>
        </div>
    )
}

export default Counter;
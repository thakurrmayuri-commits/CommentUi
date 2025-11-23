import { useReducer } from "react";
interface Action {
    type: string;
    payload?: number;
}

function calculatorReducer(state: any, action: Action) {

    switch (action.type) {
        case "ADD":
            return { ...state, result: state.inputValue1 + state.inputValue2 };
        case "SUBSTRACT":
            return { ...state, result: state.inputValue1 - state.inputValue2 };

        case "MULTIPLY":
            return { ...state, result: state.inputValue1 * state.inputValue2 };
        case "DIVIDE":
            return { ...state, result: state.inputValue1 / state.inputValue2 };
        case "UPDATE-INPUT1":
            return { ...state, inputValue1: action.payload };
        case "UPDATE-INPUT2":
            return { ...state, inputValue2: action.payload };
        case "RESET":
            return { result: 0, inputValue1: 0, inputValue2: 0 };

    }
    return state;
};


const initState = {
    result: 0,
    inputValue1: 0,
    inputValue2: 0,
};

const CalculatorReducer = () => {
    const [state, dispatch] = useReducer(calculatorReducer, initState);



    return (
        <>

            <div className="w-full h-full gap-4 flex flex-col item-center justify-center">
                <h1 className="text-2xl font-bold">Calculator</h1>
                <div className="flex flex-row">
                    <p>
                        <input type="number" className="border p-2 rounded-lg w-1/3"
                            value={state.inputValue1}
                            onChange={(e) => dispatch({ type: "UPDATE-INPUT1", payload: (Number(e.target.value)) })}
                        /></p><p>
                        <input type="number" className="border p-2 rounded-lg w-1/3"
                            value={state.inputValue2}
                            onChange={(e) => dispatch({ type: "UPDATE-INPUT2", payload: (Number(e.target.value)) })}
                        /></p>
                </div>

                <div className="flex gap-2 item-center">
                    <button className="border p-2 rounded bg-pink-500 text-white cursor-pointer hover:bg-blue-500"

                        onClick={() => dispatch({ type: "ADD" })}>Addition</button>
                    <button className="border p-2 rounded bg-yellow-500 text-white cursor-pointer hover:bg-blue-500"
                        onClick={() => dispatch({ type: "SUBSTRACT" })}>Substraction</button>
                    <button className="border p-2 rounded bg-green-500 text-white cursor-pointer hover:bg-blue-500"
                        onClick={() => dispatch({ type: "MULTIPLY" })}>Multiplication</button>
                    <button className="border p-2 rounded bg-orange-500 text-white cursor-pointer hover:bg-blue-500"
                        onClick={() => dispatch({ type: "DIVIDE" })}>Division</button>
                    <button className="border p-2 rounded bg-purple-500 text-white cursor-pointer hover:blue-500"
                        onClick={() => dispatch({ type: "RESET" })}>Reset</button>
                </div>
                <h2>The result is: <span className="font-bold">{state.result}</span>
                </h2>
            </div ></>
    )
}
export default CalculatorReducer;
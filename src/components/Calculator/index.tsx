import { useState } from "react";

const Calculator = () => {
    const [inputValue, setInput] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handleAddition = () => {
        setResult((prev) => prev + inputValue)
    }
    const handleSubstraction = () => {
        setResult((prev) => prev - inputValue)
    }
    const handleMultiplication = () => {
        setResult((prev) => prev * inputValue)
    }
    const handleDivision = () => {
        setResult((prev) => prev / inputValue)
    }

    return (

        <div className="w-full h-full flex flex-col gap-4 item-center justify-center">
            <h1 className="text-2xl font-bold">Calculator</h1>
            <input type="number" className="border p-2 rounded-lg w-1/3"
                value={inputValue}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <div className="flex gap-2 item-center">
                <button className="border p-2 rounded bg-pink-500 text-white cursor-pointer hover:bg-blue-500"

                    onClick={handleAddition}>Addition</button>
                <button className="border p-2 rounded bg-yellow-500 text-white cursor-pointer hover:bg-blue-500"
                    onClick={handleSubstraction}>Substraction</button>
                <button className="border p-2 rounded bg-green-500 text-white cursor-pointer hover:bg-blue-500"
                    onClick={handleMultiplication}>Multiplication</button>
                <button className="border p-2 rounded bg-orange-500 text-white cursor-pointer hover:bg-blue-500"
                    onClick={handleDivision}>Division</button>
            </div>
            <h2>The result is: <span className="font-bold">{result}</span>
            </h2>
        </div>
    )
}
export default Calculator;
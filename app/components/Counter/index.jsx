import { useState } from "react";
/**
 * Counter Component
 * 
 * @returns jsx
 */
const Counter = () => {

    const [count, setCount] = useState(0);
    
    /**
     * Handle counter increament
     * 
     * @returns void
     */
    const increase = () => {
        setCount((prev) => prev + 1)
    }

    /**
     * Handle decrement
     * 
     * @returns void
     */
    const decrease = () => {
        if (count <= 0) {
            return
        }
        setCount((prev) => prev - 1)
    }

    return (
        <>
            <div className="container flex w-full">
                <button className="
                    bg-indigo-500 px-6 py-0 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300
                "
                onClick={increase}
                >+</button>
                <p className="m-10">
                    {count}
                </p>
                <button className="
                    bg-indigo-500 px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300
                "
                onClick={decrease}
                >-</button>
            </div>
        </>
    );
}

export default Counter;
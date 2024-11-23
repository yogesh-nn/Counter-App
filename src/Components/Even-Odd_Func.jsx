import { useState } from "react"

export default function EvenOddFunc() {
    const [number, setNumber] = useState(0);
    const handleChange = (num) => {
        setNumber(num.target.value);
    };


    return (
        <div>
            <input type="number" name="number" onChange={handleChange} value={number} />
            {number % 2 === 0 ? "Even" : "Odd"}
        </div>
    );
}
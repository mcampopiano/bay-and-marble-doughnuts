import React, { useState } from "react"

export const Home = (props) => {
    const [num, setNum] = useState(1)
    const bakers = ["Kyle's gmom", "Buddy", "Kaylee"]

    const takeNumber = () => {
        setNum(num + 1)
    }

    return (
        <>
            <h1>Welcome to Bay and Marble, {props.user.name}!</h1>
            <h2>Our bakers:</h2>
            <ul>
                {bakers.map((b, i) => <li className="baker" key={i}>{b}</li>)}
            </ul>
            <h2>Currently serving ticket: {num}</h2>
            <h2>Take a ticket</h2>
            <button onClick={takeNumber}>get number</button>
        </>
    )
}
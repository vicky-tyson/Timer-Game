import React, { useState, useRef } from 'react'

export default function Player() {

const [playerName, setPlayerName] = useState(null);
const player = useRef();

function handleSubmitChange(){
    setPlayerName(player.current.value);
    player.current.value = "";
}

  return (
    <section id="player">
        <h2>Welcome {playerName ?? "Unknown Entity"}</h2>
        <p>
          <input ref={player} type="text"/>
          <button onClick={handleSubmitChange}>Set Name</button>
        </p>
      </section>
  )
}

import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const Result = forwardRef(function Result({ onReset, targetTime, remainingTime }, ref) {
const dialog = useRef();
const userLost = remainingTime <= 0;
const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

useImperativeHandle(ref, () => {
    return {
        open() {
            dialog.current.showModal();
        }
    }
})


  return (
    <dialog ref={dialog} className="result-modal">
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>The target Time was <strong>{targetTime} Seconds.</strong></p>
        <p>You Stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default Result;
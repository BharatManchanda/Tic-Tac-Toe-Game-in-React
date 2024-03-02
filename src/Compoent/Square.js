import React from "react";

export default function Square({ value, index, handleValue, winner }) {
    console.log(`d-flex align-items-center justify-content-center fs-6 cursor-pointer ${(winner != null && value == '') ? 'disable-color' : ''}`);
    return (

        <div onClick={() => { handleValue(index) }} className={`d-flex align-items-center justify-content-center fs-6 cursor-pointer ${(winner != null && value == '') ? 'disable-color' : 'background-white'}`} style={{ width: '100px', height: '100px', border: '1px solid #000' }}>
            {value}
        </div>
    );
}
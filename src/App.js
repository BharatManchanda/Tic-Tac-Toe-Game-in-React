import { useEffect, useState } from "react";
import Square from "./Compoent/Square";
import './app.css'

function App() {
  const [array, setArray] = useState(Array(9).fill(''));
  const [XORO, setXORO] = useState('X');
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    let temWinner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < temWinner.length; i++) {
      let [a, b, c] = temWinner[i];
      if (array[a] !== '' && array[a] === array[b] && array[a] === array[c]) {
        setWinner(array[a]);
      }
    }
  }

  const handleValue = (key) => {
    console.log(array[key], winner,"array[key], winner");
    if (array[key] === '' && winner === null) {
      if (XORO === 'X') {
        const newArray = [...array];
        newArray[key] = XORO;
        setArray([...newArray]);
        setXORO('O');
      } else {
        const newArray = [...array];
        newArray[key] = XORO;
        setArray([...newArray]);
        setXORO('X');
      }
    }
  }
  
  useEffect(() => {
    checkWinner()
  }, [array])


  return (
    <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-direction-column m-0 p-0" style={{background:'#800080'}}>
        <div className="d-flex">
          <Square winner={winner} value={array[0]} index={0} handleValue={handleValue} />
          <Square winner={winner} value={array[1]} index={1} handleValue={handleValue} />
          <Square winner={winner} value={array[2]} index={2} handleValue={handleValue} />
        </div>
        <div className="d-flex">
          <Square winner={winner} value={array[3]} index={3} handleValue={handleValue} />
          <Square winner={winner} value={array[4]} index={4} handleValue={handleValue} />
          <Square winner={winner} value={array[5]} index={5} handleValue={handleValue} />
        </div>
        <div className="d-flex">
          <Square winner={winner} value={array[6]} index={6} handleValue={handleValue} />
          <Square winner={winner} value={array[7]} index={7} handleValue={handleValue} />
          <Square winner={winner} value={array[8]} index={8} handleValue={handleValue} />
        </div>
        <div className="bg-white w-300px mt-2 p-3 d-flex justify-content-space-evenly align-items-center">
          <h4>Winner: {winner}</h4>
          <button style={{background: 'orange'}} onClick={() => {setArray(Array(9).fill('')); setWinner(null)}}>Refresh</button>
        </div>
      </div>
    </>
  );
}

export default App;
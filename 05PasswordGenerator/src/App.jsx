import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passRef = useRef(null);

  const passwordGen = useCallback(()=>{
    let pass = "";
    // let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+<>?,./;:'\"[]{}\\|~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);      
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassToClipBoard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 9);      // Selects the text under spcified range
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() =>{passwordGen()}, [length, numAllowed, charAllowed, passwordGen]);

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full px-3 py-1 bg-white'
          placeholder='Your Password'
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyPassToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer 
          hover:bg-blue-600 hover:text-sm'>
            copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setlength(e.target.value);}}
           />
           <label>Length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={numAllowed}
           id="numInput"
           className='cursor-pointer'
           onChange={() =>{
              setnumAllowed((prev) => !prev);
           }}
            />
            <label htmlFor="numInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id="charInput"
           className='cursor-pointer'
           onChange={() =>{
              setcharAllowed((prev) => !prev);
           }}
            />
            <label htmlFor="charInput">Special Chars</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [specailCharAllowed , setSpecialCharAllowed] = useState(false);
  const [password , setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(specailCharAllowed){
      str+= "!@#$%^&*(){}[]~`+-=<>?/:;.,|"
    }

    for(let i=1 ; i<= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);
  } , [length , numberAllowed , specailCharAllowed, setPassword])  //in useCallback we set dependencies to stored in cache run accordingly to optimizing the method to run

  // {give setPassword rather than password because on change of previouly set password the code will re-run , if we give them password we get tied in the infinite loop because if we run the code on basis of password we the password is generate again a new password is goes to generate}

  const copyPasswordToClipBoard = useCallback( () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => { passwordGenerator() } , [length , numberAllowed , specailCharAllowed, passwordGenerator])
  //here dependencies are used to re-run on the basis of change in any of the dependencies
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400 text-orange-500 '>
        <h1 className='text-4xl text-center font-bold text-white mb-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref = {passwordRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            COPY
          </button>
        </div>
        <div className='fles text-sm gap-x-2'>
          {/* For setting the length of password */}
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='text-black'>Length: {length}</label>
          </div>
          {/* Checkbox for including number to the password */}
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput" className='text-black'>Numbers</label>
          </div>
          {/* Checkbox for including special character to the password */}
          <div className="flex items-center gap-x-1">
           <input
              type="checkbox"
              defaultChecked={specailCharAllowed}
              id="characterInput"
              onChange={() => {
                  setSpecialCharAllowed((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput" className='text-black'>Special Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

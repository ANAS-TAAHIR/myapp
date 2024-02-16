import './App.css'
import { useFirebase } from './context/Firebase'
import { useState } from 'react';
import SignUp from './pages/signup'
import SignIn from './pages/signin'

function App() {
  return (
    <>
      <h1>My App</h1>
      <SignUp/>
      <SignIn/>
    </>
  )
}
export default App
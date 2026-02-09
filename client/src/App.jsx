import { Outlet } from "react-router-dom";
import { useAppSelector } from "./hooks/useAppSelector";
import {useAppDispatch} from './hooks/useAppDispatch'
import { useEffect } from "react";
import { Login } from "./features/users/user.slice";

function App() {
const dispatch = useAppDispatch()


  const isAuthenticated = useAppSelector(
    (state) => state.user.isAuthenticated
  );

  console.log("AUTH STATE:", isAuthenticated);

  useEffect(
    ()=>{
dispatch(Login)
    }, []
  )

  return (
    <div>
      {/* global  */}
      <Outlet />
    </div>
  );
}

export default App;

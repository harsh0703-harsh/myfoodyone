import React, {createContext , useReducer} from 'react'
import Homepage  from './components/Homepage';
import Contact from './components/Contact';
import { Route,Switch } from 'react-router-dom';
import Error from "./components/Error"
import MyItem from './components/FoodInfo';
import userDashboard from './components/userDashboard';
import {initialState,reducer } from "./reducer/UseReducer"
import Logout from "./components/Logout"
import Warning from './components/Warning';

export const UserContext = createContext();
const App = ()=>{

  const [state, dispatch] = useReducer(reducer, initialState)
  return(
      
    <>
<UserContext.Provider value={{state,dispatch}}>
<Switch>
    <Route exact  path="/" component={Homepage} ></Route>
    <Route exact  path="/alert" component={Warning} ></Route>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/account/dashboard" component={userDashboard} />
    <Route path="/item/:name" render={e=>{
    const {Food_name,price,Ranking,Ingredients,image_url,_id,arrOfData} = e.location.state.details;
        return <MyItem name={Food_name} price={price} id={_id} arrOfData={arrOfData} rank={Ranking} ingredients={Ingredients} url={image_url}></MyItem>
      }} ></Route>
    <Route component={Error} />
    </Switch>
    </UserContext.Provider>
    </>
  )
  
}
export default App;
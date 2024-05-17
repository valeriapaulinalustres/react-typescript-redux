
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import {store} from '../src/redux/store'
import { Provider } from "react-redux";
import Login from "./pages/Login";


export const App = () : JSX.Element =>{
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App container">        
            <Routes>
              <Route path="/" element={<Login />} />            
            </Routes>      
          </div>
        </BrowserRouter>
      </Provider>
    
    )
}

export default App
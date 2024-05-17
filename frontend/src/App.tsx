
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


export const App = () : JSX.Element =>{
    return (
        <BrowserRouter>
          <div className="App container">        
            <Routes>
              <Route path="/" element={<Home />} />            
            </Routes>      
          </div>
        </BrowserRouter>
    
    )
}

export default App
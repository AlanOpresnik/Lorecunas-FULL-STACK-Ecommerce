import { useEffect, useState } from "react";
import "./App.css";


function App() {
  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  
}

export default App;

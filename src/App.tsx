import { useState } from "react"
import { Home } from "./pages/home";
import { Contato } from "./pages/contato";
import { Navbar } from "./components/Navbar";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />
        break;
      case 'contato':
        return <Contato />
    }
  }

  return (
    <body className="bg-main-color">   
      <Navbar setCurrentSection={setCurrentSection}/> 
      <div className="mx-20">
      {renderSection()}
      </div>
    </body>
  )
}

export default App

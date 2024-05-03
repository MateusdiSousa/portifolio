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
      case 'contato':
        return <Contato />
    }
  }

  return (
    <body className="bg-main-color">   
      <Navbar setCurrentSection={setCurrentSection}/> 
      <div className="px-5 sm:px-7 md:px-9 lg:px-10">
      {renderSection()}
      </div>
    </body>
  )
}

export default App

import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
// import Skills  from "./components/Skills"

function App() {
    return (
        <div className="text-gray-50 bg-black font-workSans overflow-x-hidden">
                <Home/>
                <Works/>
                <Contact/>
        </div>
    );
}

export default App;
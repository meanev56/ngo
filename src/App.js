import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import StyleGuide from "./components/StyleGuide";
import EventReadMore from "./components/EventReadMore";

 
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<StyleGuide />} />
                    <Route exactb path="/event" element={<EventReadMore />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import StyleGuide from "./components/StyleGuide";
import EventReadMore from "./components/EventReadMore";
import ProjectReadMore from "./components/ProjectReadMore";

 
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<StyleGuide />} />
                    <Route exact path="project-read-more" element={<ProjectReadMore />} />
                    <Route exactb path="/event-read-more" element={<EventReadMore />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
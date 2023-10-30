import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import StyleGuide from "./components/StyleGuide";
import EventReadMore from "./components/EventReadMore";
import ProjectReadMore from "./components/ProjectReadMore";
import Homepage from "./components/Homepage";

 
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="project-read-more" element={<ProjectReadMore />} />
                    <Route exact path="/event-read-more" element={<EventReadMore />} />
                    <Route exact path='/style-guide ' element={<StyleGuide />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
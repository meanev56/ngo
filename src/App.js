import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import StyleGuide from "./components/StyleGuide";
import EventReadMore from "./components/EventReadMore";
import ProjectReadMore from "./components/ProjectReadMore";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import WhatWeDo from "./components/WhatWeDo";

 
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="project-read-more" element={<ProjectReadMore />} />
                    <Route exact path="/event-read-more" element={<EventReadMore />} />
                    <Route exact path='/style-guide ' element={<StyleGuide />} />
                    <Route exact path="/about-us" element={<AboutPage />} />
                    <Route exact path="/what-we-do" element={<WhatWeDo />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
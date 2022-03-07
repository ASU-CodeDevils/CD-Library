import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import { Layout } from "./components";
import CodeStandards from "./pages/codeStandards";
import Contributing from "./pages/contributing";
import Home from "./pages/home";
import Resources from "./pages/resources";

function App() {
  return (
    <Router basename="/CD-Library">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="contribute" element={<Contributing />} />
          <Route path="code-standards" element={<CodeStandards />} />
          <Route path="resources" element={<Resources />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

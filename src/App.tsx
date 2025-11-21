import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StructureSection from './pages/StructureSection';
import LanguageSection from './pages/LanguageSection';
import FormsSection from './pages/FormsSection';
import LinksSection from './pages/LinksSection';
import KeyboardSection from './pages/KeyboardSection';
import ColorSection from './pages/ColorSection';
import ImagesSection from './pages/ImagesSection';
import ComponentsSection from './pages/ComponentsSection';
import TestingSection from './pages/TestingSection';
import CognitiveSection from './pages/CognitiveSection';
import ErgonomicsSection from './pages/ErgonomicsSection';
import EnvironmentSection from './pages/EnvironmentSection';
import AdvancedComponentsSection from './pages/AdvancedComponentsSection';

function App() {
  return (
    <BrowserRouter basename="/designforall">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/structure" element={<StructureSection />} />
          <Route path="/section/language" element={<LanguageSection />} />
          <Route path="/section/forms" element={<FormsSection />} />
          <Route path="/section/links" element={<LinksSection />} />
          <Route path="/section/keyboard" element={<KeyboardSection />} />
          <Route path="/section/color" element={<ColorSection />} />
          <Route path="/section/images" element={<ImagesSection />} />
          <Route path="/section/components" element={<ComponentsSection />} />
          <Route path="/section/testing" element={<TestingSection />} />
          <Route path="/section/cognitive" element={<CognitiveSection />} />
          <Route path="/section/ergonomics" element={<ErgonomicsSection />} />
          <Route path="/section/environment" element={<EnvironmentSection />} />
          <Route path="/section/advanced" element={<AdvancedComponentsSection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

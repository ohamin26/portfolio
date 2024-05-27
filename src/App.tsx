import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globalStyle.css.ts';
import { RendingPage } from './routes/rendingPage.tsx';
import './styles/fonts/font.css';
import { IntroducePage } from './routes/introducePage.tsx';

function App() {
  return (
    <div>
      <Router basename={import.meta.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<RendingPage />}></Route>
          <Route path="/introduce" element={<IntroducePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

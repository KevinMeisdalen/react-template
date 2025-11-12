import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import muiTheme from './styles/muiTheme.js';
import {Home} from "./components/pages/home.jsx";

function App() {
  return (
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
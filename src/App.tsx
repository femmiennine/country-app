import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom" 
import Home from "./pages/Home";
import Country from "./pages/Country";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const [mode, setMode] = useState<string>("light");
  const darkMode = useSelector<any>((state) => state.theme.darkMode);
  
  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() =>
      createTheme({
        palette: {
          // @ts-ignore
          mode,
        },
      }),
    [mode],
  );

  return (
    <div className="app__container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryId" element={<Country />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
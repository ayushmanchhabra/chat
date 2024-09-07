import { StyledEngineProvider } from "@mui/material";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            hi
        </StyledEngineProvider>
    );
}

export default App;

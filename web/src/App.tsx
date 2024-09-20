import { StyledEngineProvider } from "@mui/material";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Landing } from './screens';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Router>
                <Routes>
                    <Route
                        element={<Landing />}
                        path='/'
                    />
                </Routes>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;

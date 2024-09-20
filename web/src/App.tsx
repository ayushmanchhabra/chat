import { StyledEngineProvider } from "@mui/material";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Landing } from './screens';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
]);

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <RouterProvider router={router} />
        </StyledEngineProvider>
    );
}

export default App;

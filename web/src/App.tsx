import { StyledEngineProvider } from "@mui/material";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Screens from './screens';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Screens.Landing />,
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

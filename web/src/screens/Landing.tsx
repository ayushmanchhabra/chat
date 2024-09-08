import { Box, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import style from './Landing.module.css';

function Landing() {

    const navigate = useNavigate();

    return (
        <Box className={style.Box}>
            <Typography variant="h4">Chat</Typography>
            <Typography>A hosted chat app solution.</Typography>
            <Typography className={style.Typography}>
                <Button className={style.Button} variant="contained">Sign Up</Button>
                <Button className={style.Button} variant="contained">Sign In</Button>
            </Typography>
        </Box>
    );
}

export default Landing;

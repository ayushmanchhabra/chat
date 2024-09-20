import { Box, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import content from './Landing.content';
import style from './Landing.module.css';

function Landing() {

    const navigate = useNavigate();

    return (
        <Box className={style.Box}>
            <Typography data-testid="landing-title" variant="h4">{content.TITLE}</Typography>
            <Typography data-testid="landing-description">{content.DESCRIPTION}</Typography>
            <Typography className={style.Typography}>
                <Button data-testid="landing-button-signin" className={style.Button} variant="contained">{content.BUTTON_SIGN_IN}</Button>
            </Typography>
        </Box>
    );
}

export default Landing;

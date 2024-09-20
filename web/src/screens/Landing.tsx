import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from 'providers/hooks';

import content from './Landing.content';
import style from './Landing.module.css';

function Landing() {

    const navigate = useNavigate();
    const { user } = useUser();

    const handleButtonClick = React.useCallback(() => {
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/signin');
        }
    }, [navigate, user]);

    return (
        <Box className={style.Box}>
            <Typography data-testid="landing-title" variant="h4">{content.TITLE}</Typography>
            <Typography data-testid="landing-description">{content.DESCRIPTION}</Typography>
            <Typography className={style.Typography}>
                <Button
                    className={style.Button}
                    data-testid="landing-button-signin"
                    onClick={handleButtonClick}
                    variant="contained"
                >
                    {user ? content.BUTTON_DASHBOARD : content.BUTTON_SIGN_IN}
                </Button>
            </Typography>
        </Box>
    );
}

export default Landing;

import { Box, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

import { Avatar } from 'assets';

type Channel = {
    name: string,
};

const chats: Channel[] = [{
    name: 'Ayushman Chhabra'
}];

function Dashboard(): JSX.Element {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <List>{chats.map((chat: Channel) => (
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={Avatar} />
                    </ListItemAvatar>
                    <ListItemText primary={chat.name} />
                </ListItemButton>
            ))}</List>
        </Box>
    );
}

export default Dashboard;

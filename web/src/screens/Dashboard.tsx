import { Avatar, Box, List, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";

type Channel = {
    name: string,
    preview: string,
};

const chats: Channel[] = [
    {
        name: 'Admin',
        preview: 'Looks like there is no activity...',
    },
];

function Dashboard(): JSX.Element {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                Inbox
            </Typography>
            <List>{chats.map((chat: Channel, idx: number) => (
                <ListItemButton key={idx}>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" />
                    </ListItemAvatar>
                    <ListItemText primary={chat.name} secondary={chat.preview} />
                </ListItemButton>
            ))}</List>
        </Box>
    );
}

export default Dashboard;

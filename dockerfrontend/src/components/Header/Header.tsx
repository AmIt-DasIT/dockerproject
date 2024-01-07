import { Box } from "@mui/joy";
import ModeToggle from "../Common/ModeToggle";

export default function Header() {
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            py: 3,
            px: {xs: 10, sm: 12, md:20, lg: 35}
        }}>
            <Box>Logo</Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',

            }}>
                <Box>Home</Box>
                <Box>Gallery</Box>
                <Box>Blog</Box>
                <Box>Contact</Box>
            </Box>
            <Box>
                <ModeToggle />
            </Box>
        </Box>
    )
}
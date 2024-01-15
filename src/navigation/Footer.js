// mui
import { AppBar, Box } from '@mui/material';

function Footer() {
  return (
    <AppBar position="relative" sx={{ opacity: 0.9 }}>
      <Box sx={{ padding: 1, paddingRight: 2, display: "flex" }}>
        <Box sx={{ flexGrow: 1 }} />
        ©{new Date().getFullYear()} Chris French
      </Box>
    </AppBar>
  )
}

export default Footer;

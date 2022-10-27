import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { asyncToggleTheme } from "../features/themeSlice";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../styles/Nav.css"

const Nav = () => {
    const dispatch = useAppDispatch();
    const theme = useTheme();

  return (
    <div>
        <nav className="nav__container">
            <ul className="icons">
                <li>Home</li>
                <li>Favourites</li>
            </ul>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                }}
            >
                <IconButton
                    onClick={() => dispatch(asyncToggleTheme())}
                    color="inherit"
                    >
                    {theme.palette.mode === "dark" ? (
                        <Brightness7Icon />
                    ) : (
                        <Brightness4Icon />
                    )}
                </IconButton>
            </Box>     
        </nav>
    </div>
  )
}

export default Nav
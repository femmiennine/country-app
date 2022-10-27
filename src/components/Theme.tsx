// import { Typography, Box, IconButton } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { asyncToggleTheme } from "../features/themeSlice";
// import { useDispatch } from "react-redux";

// const Theme = () => {
//     const dispatch = useDispatch();
//     // @ts-ignore
//     const darkMode = useSelector((state) => state.theme.darkMode);
//     const theme = useTheme();
    
//   return (
//     <Box
//         sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//         }}
//     >
//         <Typography>{darkMode ? "Dark" : "Light"} Mode</Typography>
//         <IconButton
//         sx={{ ml: 1 }}
//         // @ts-ignore
//         onClick={() => dispatch(asyncToggleTheme())}
//         color="inherit"
//         >
//         {theme.palette.mode === "dark" ? (
//             <Brightness7Icon />
//         ) : (
//             <Brightness4Icon />
//         )}
//         </IconButton>
//     </Box> 

//   )
// }

export {}
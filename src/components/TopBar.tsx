import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Link, NavLink, useNavigate } from "react-router";
import { IconButton } from "@mui/material";
import { useDebouncedCallback } from "use-debounce";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface Props {
  title?: string;
  showHomeButton?: boolean;
  searchCallback: (searchTerm: string) => void;
}

export default function TopBar({
  title,
  showHomeButton = false,
  searchCallback,
}: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };

  const debounced = useDebouncedCallback(
    // function
    (searchTerm) => {
      searchCallback(searchTerm);
    },
    // delay in ms
    500
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {showHomeButton && (
            <IconButton onClick={onClick}>
              <HomeIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 3, display: { xs: "none", sm: "block" }, ml: 1 }}
          >
            {title ? title : "Lean Techniques Photo Gallery"}
          </Typography>
          <Search sx={{ flexGrow: 1, mr: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => debounced(event.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

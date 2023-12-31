import * as React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { FaSortDown } from "react-icons/fa";
import { FaHamburger } from 'react-icons/fa';
 
import { FaSortUp } from 'react-icons/fa';
import { IoHammerOutline } from "react-icons/io5";


import ellipse from '../../../assets/images/CustomerSupport/Ellipse.png'
import profilePic from '../../../assets/images/CustomerSupport/profilepic.png'


// for navbar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



const pages = ['Support Tickets', 'Chats', 'Settings'];
const settings = ['Profile', 'Logout', 'LogIn'];


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // inside nav n side bars - main screen
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar() {


  const navigate = useNavigate();
  const [toggleSortIcon, SetToggleSortIcon] = React.useState(false)
  /*
  
  const [profilePic, setProfilePic] = React.useState('')
  
  const baseURL = 'http://localhost:3000'

  // getting name from local storage
  const firstName = localStorage.getItem("firstName")
  const lastName = localStorage.getItem("lastName")

  // getting profile image
  React.useEffect(() => {

    const getImage = async () => {
      try {
        const img = await viewProfileImage();
        setProfilePic(baseURL + img.location)
      }
      catch (e) {
        if (e.response.status == 403) {
          console.log('Refreshing Token Failed')
        }
        if (e.response.status == 400) {
          console.log('No Image is present')
          setProfilePic(null)
        }
        // console.error(e) // annoying
        console.log(e)
      }
    }

    getImage();
  }, [])
*/


  // for navbar
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    SetToggleSortIcon(true)
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Collapsed Navbar
  const handleCloseNavMenu = (page) => {

    if (page == "Settings") {
      navigate("/view_personal_info")
    }
    else if (page == "Support Tickets") {
      navigate("/")
    }
    setAnchorElNav(null);

  };


  const handeDropDownMenu = (page) => {

    SetToggleSortIcon(false)
    if (page == "Settings") {
      navigate("/view_personal_info")
    }
    else if (page == "Support Tickets") {
      navigate("/")
    }
    else (page == "Chats")
    {
      alert("Chats")
    }
    setAnchorElNav(null);

  };




  const logout = async () => {
    alert("Logging out")
    // await logoutUser()

  }
  const handleCloseUserMenu = (setting) => {
    // alert(setting)
    if (setting == "Logout") {
      // logout();
      // navigate("/signin")
    }
    setAnchorElUser(null);

  };




  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ color: "black", backgroundColor: "white", paddingRight: 20, paddingLeft: 20, display: "flex" }} open={open}>
        <Toolbar sx={{ flexGrow: 1 }}>
          {/* logo */}
          <IoHammerOutline size={30} sx={{ display: { xs: 'flex', sm: 'flex' }, mr: 1, ml: { xs: 0, sm: 2, md: 5, lg: 7, xl: 10 } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div style={{ fontWeight: "400", fontSize: "24px", marginLeft: 10 }} ><span style={{ fontWeight: "800", fontSize: "24px" }}>TapN</span>Hire</div>
          </Typography>

          {/* Nav Menu Dropdown */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignSelf: { xs: 'center' }, flexGrow: 1, }}>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {
                !toggleSortIcon ? <FaSortDown /> : <FaSortUp />
              }
              {/* <FaHamburger /> */}
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ ":hover": { color: "#FFB600" }, }}>{page}</Typography>
                </MenuItem>,

                <MenuItem>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <p>Messages</p>
                </MenuItem>,
                <MenuItem key={page} sx={{ ":hover": { color: "#FFB600" }, }} onClick={() => handeDropDownMenu(page)}
                >
                  {/* <IconButton
                    size="large"
                    aria-label="go to following page"
                    color="inherit"

                  >
                  </IconButton> */}
                  <p>{page}</p>
                </MenuItem>

              ))}
            </Menu>
          </Box>

          {/* Pages in the navbar CS, Chats Settings etc*/}

          <Box sx={{ ml: 5, flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ fontFamily: 'monospace', mx: { md: 1, lg: 2 }, color: 'black', display: 'flex', fontWeight: { md: '600', lg: '600' }, fontSize: { md: '14px', lg: '14px' }, ":hover": { color: "#FFB600" }, }}
              >
                {page}
              </Button>
            ))}
          </Box >

          {/* Search Bar in the Nav */}

          {/* <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexGrow: 1 }}>
            <Search>
              <Search sx={{ flexGrow: 1 }} >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Search>
          </Box> */}

          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <Box sx={{ flexGrow: 0, ml: 2, }}>
            <Tooltip title="Open Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profilePic} />
                <p className='text-sm ml-2 whitespace-nowrap'>Hi, Welcome<p className='font-black'>{"Abdullah"} {"Tanveer"}</p></p>
                <image alt="user-profile-pic" src={ellipse} width={50} height={50} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  )
}

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 278;

const drawerClosedWidth= 99;

const useStyles = makeStyles(theme => ({
  sharpenerLogo : {
    backgroundColor: "white", 
    marginLeft: 23,
    height: 48,
    marginTop:24,
    marginBottom:24,
    width: 48,
  },
  sharpener: {
    fontFamily: "Josefin Sans",
    fontWeight: 600,
    fontSize:23,
    color: "white",
    marginRight:29,
    marginTop:30.75,
    marginBottom:30.75,
    textShadow: '3px 2px 0px rgba(0,0,0,0.2)',
  },
  nickname :{
    fontWeight: 500,
    color: 'white',
    marginLeft:8,
  },
  role:{
    color: 'white',
  },
  logo: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:96,
  },
  grid: {
    backgroundColor: theme.palette.primary.light,
    overflowX: 'hidden',
    overflowY: 'hidden',
    height: 96,
  },
  listItem: {
    color: 'white',
    fontSize: 20,
  },
  listIcon: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 18,
    padding:20,
    marginRight:20,
  },
  avatar:{ 
    width:48,
    height:48,
    margin:24,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: drawerClosedWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
  },
  paper: {
    background: theme.palette.primary.main,
    height:"100%",
    display: 'flex',
    direction: 'column',
    overflowX: 'hidden',
    overflowY: 'hidden',
    justifyContent: 'space-between',
  }, 
  userContainer: {
    display: 'flex', 
    alignItems: 'baseline',
  },
  gridContainer: {
    height: '100%',
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  divider: {
    background: "#64b7e6", 
  },
  cli: {
    color: "#cfeeff",
    fontWeight: 500,
    fontSize: 16,
    lineHeight:  1.19,
  }, 
  clipboard : {
    display: "inline-block",
    alignItems: 'baseline',
    color: "#9ddbff",
    margin:4,
    fontSize: 14,
    lineHeight:  1.14,
  }, 
  cliSection: {
    margin:40,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles;

import React from 'react';
import { NavLink } from 'redux-first-router-link'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BookIcon from '@material-ui/icons/Book';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import useClipboard from "react-use-clipboard";

import { GithubIcon, SharpenerIcon } from 'Icons';
import useStyles  from './styles';

const miscDrawerSections = [
  {
    name: 'Ajuda',
    Icon: HelpOutline,
    link: "/help",
  },
  {
    name: 'Logout',
    Icon: ExitToApp,
    link: "/logout",
  },
]

const drawerSections = [
  {
    name: 'Dashboard',
    Icon: DashboardIcon,
    link: "/home",
  },
  {
    name: 'Turmas',
    Icon: PeopleIcon, link: "/classes",
  },
  {
    name: 'Trilhas',
    Icon: BookIcon,
    link: "/tracks",
  },
  {
    name: 'Exercícios',
    Icon: AssignmentIcon,
    link: "/exercises",
  },
];

const CLIToken = ({ token, classes, open, toClipboard}) => open ?(
  <div className={classes.cliSection} onClick={toClipboard}> 
    <Typography className={classes.cli}> 
      CLI Token
    </Typography> 
    <div className={classes.userContainer}> 
      <FileCopyIcon className={classes.clipboard} />
      <Typography noWrap className={classes.clipboard}>
        { token }
      </Typography>
    </div>
  </div>
) : null

const DrawerGroup = ({sections, classes}) => (
  <List>
    {
      sections.map(({name, Icon, link }, index) => (
        <NavLink 
          className={classes.link}
          to={link}>
          <ListItem button key={name}>
            <ListItemIcon className={classes.listIcon}> 
              <React.Fragment>
                <Icon />
              </React.Fragment>
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={name}/>
          </ListItem>
        </NavLink>
      ))
    }
  </List>
);

const UserInfo = ({classes, nickname, avatar, isTeacher}) => (
  <Grid 
    container 
    className={classes.grid} 
    alignItems="center"
  > 
    <Avatar className={classes.avatar} alt={nickname} src={avatar} />
    <Grid>
      <Grid className={classes.userContainer}>
        <GithubIcon/>
        <Typography className={classes.nickname}>
          {nickname}
        </Typography>
      </Grid>
      <Typography className={classes.role}>
        {isTeacher? "Professor" : "Aluno"}
      </Typography>
    </Grid>
  </Grid>
);

const Logo = ({classes, open}) => (
  <Grid 
    container 
    className={classes.logo}
    alignItems="center"
  >
    <div className={classes.sharpenerCircle}>
      <Avatar className={classes.sharpenerLogo}>
        <SharpenerIcon />
      </Avatar>
    </div>
    <Typography className={classes.sharpener}>
      SHARPENER 
    </Typography>
  </Grid>
);


const SharpenerDrawer = ({
  avatar, 
  nickname, 
  isTeacher,
  isLoggedIn,
  token,
  enqueueSnackbar,
}) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [, setCopied] = useClipboard(token);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toClipboard = () => {
    setCopied();
    enqueueSnackbar({
      message:"A token foi copiada!",
      options:{
        key: token,
        variant: 'info',
        preventDuplicate: true,
      }
    });
  }

  return(
    isLoggedIn? 
      <Drawer
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
          [classes.paper]: true,
        })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              [classes.paper]: true,
            }),
          }}
            open={open}
          >
            <div>
              <Logo classes={classes} open={open} />
              <UserInfo 
                classes={classes}
                isTeacher={isTeacher}
                nickname={nickname}
                avatar={avatar}
              />
              <DrawerGroup 
                classes={classes} 
                sections={drawerSections} />
              </div>
              <div> 
                <CLIToken 
                  token={token}
                  classes={classes}
                  open={open}
                  toClipboard={toClipboard}
                />
                <Divider className={classes.divider}/> 
                <DrawerGroup 
                  classes={classes} 
                  sections={miscDrawerSections} />
                </div>
              </Drawer>
    : null
  )};


export default SharpenerDrawer;

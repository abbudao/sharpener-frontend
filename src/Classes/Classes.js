import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ClassesTable from 'ClassesTable';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
  title: {
    color: "#1679b7",
    fontFamily: "JosefinSans",
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.19,
    marginRight: 24,
  },
  newClass:{
    maxWidth:132,
    color: "#969696",
    fontWeight: 700,
    fontSize: 14,
    padding:"8px 12px",
    lineHeight: 1.14,
  },
  titleGrid: {
    marginBottom:33,
  },
  content: {
    width:"100%",
  }})
);



const Classes = () => {
  const classes =  useStyles();
  console.log(classes.title);
  return(
    <React.Fragment>
      <Grid 
        container 
        alignItems="center"
        className={classes.titleGrid}
      >
        <Typography className={classes.title}>
          Turmas 
        </Typography>
        <Button 
          variant="outlined"
          className={classes.newClass}> 
          NOVA TURMA
        </Button>
      </Grid>
      <ClassesTable />
    </React.Fragment>
  )
}
export default Classes;

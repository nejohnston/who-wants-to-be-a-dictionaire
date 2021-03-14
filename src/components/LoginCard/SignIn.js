import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from '../../config/firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');

  const handleSubmit = async (e) => {
    console.log('login email: ' + email);
    console.log('login password ' + password);
    e.preventDefault();
    try {
        const response = await firebase.login(email, password).then(response => {return response.user});
        console.log(response);
    } 
    catch(error) {
        console.log(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
        <form className={classes.form} noValidate>
            <TextField
            autoComplete="email"
            name="Email"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
            value={email} 
            onChange={e => setEmail(e.target.value)}
              />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {() =>
          <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            
              href={`/game`}
          >
            Sign In
          </Button></div>
          
          }
          

        </form>
    </Container>
  );
};

export default SignIn;
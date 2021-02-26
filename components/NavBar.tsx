import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style:{ [key: string]: React.CSSProperties} = {
  icon: {
    marginRight: '1rem',
  }
};

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <AccountCircleIcon style={style.icon}/>
        <Typography variant="h6" color="inherit" noWrap>
          Floyd Jones
          </Typography>
      </Toolbar>
    </AppBar>
  )
}
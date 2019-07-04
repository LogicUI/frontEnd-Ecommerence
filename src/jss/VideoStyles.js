import { makeStyles } from '@material-ui/core/styles';

const VideoStyles = makeStyles({
  root: {
    display: 'flex',
    margin: '2rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"column-reverse",
    textAlign:"center",
    '& section': {
      width: 'calc(1/2*100% - (1-1/2)*20px)'
    },
    '&:nth-child(even)': {
      flexDirection: 'column-reverse',
    },
    '@media(min-width: 768px)':{
      flexDirection:"row",
      "&:nth-child(even)":{
        flexDirection:"row-reverse"
      }
    }
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  }
});

export default VideoStyles;

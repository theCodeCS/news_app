import React, {useState, useEffect} from 'react'
import useStyles from './style';


export default function Header(props) {

    const classes = useStyles();

    const [time, setTime] = useState(null);

    useEffect(() => {
        const now = new Date().toLocaleTimeString();

    
        const interval = setInterval(() => {
          setTime(now)
          
        }, 1000);
  
        return () => clearInterval(interval)
        
    })

    return (
        <div className={classes.container}>
            <h1>News Application</h1>
            <h1 className={classes.time}>{time}</h1>
        </div>
    )
}

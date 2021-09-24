import React, {useState, useEffect} from 'react'
import axios from "../../axois"
import Newscards from '../NewsCards/NewsCards';
import Header from '../Header/Header'
import { Button, ButtonGroup, FormGroup, TextField } from '@material-ui/core';
import useStyles from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

export default function App() {

    const classes = useStyles();

    const API_KEY = 'eec9f5ffeae74128bfb4bd2ef9345e70';

    const [source, setSource] = useState('');
    const [head, setHead] = useState('');
    const [query, setQuery] = useState('');
    const [page, setPage] = useState([]);

    const getSource = async () => {
        await axios
        .get(`/${head}?q=${query}&sources=${source}&apiKey=${API_KEY}`)
        .then((response) => {
            setPage(response.data.articles)
            console.log(response.data.articles)
        })
        .catch((error) => {
            console.error(error)
        });}
    // https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY

    const handleSubmit = (e) => {
        e.preventDefault();
        getSource();
    }

    useEffect(() => {
        setHead('everything');
        setSource('engadget');
    }, []);

    

    return (
        <div>
            <Header />
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup >
                    <TextField id="outlined-basic" label="Search Topic" variant="filled" onChange={(e) => setQuery(e.target.value)} ></TextField>
                    <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>Submit</Button><br/>
                </FormGroup>
            </form>
            <form className={classes.headContainer} onSubmit={(e) => handleSubmit(e)}>
                <ButtonGroup variant="contained" aria-label="outlined secondary button group">
                    <Button color="secondary" type='submit' onClick={() => setHead('everything')}>Everything</Button>
                    <Button color="primary" type='submit' onClick={() => setHead('top-headlines')}>Top-Headlines</Button>
                </ButtonGroup>
            </form>
            <form className={classes.mainContainer} onSubmit={(e) => handleSubmit(e)}>
                <ButtonGroup variant="contained" aria-label="outlined secondary button group">
                    <Button color="primary" type='submit' onClick={() => setSource('techcrunch')}>Techcrunch</Button>
                    <Button color="secondary" type='submit' onClick={() => setSource('bloomberg')}>Bloomberg</Button>
                    <Button color="primary" type='submit' onClick={() => setSource('abc-news')}>ABC News</Button>
                    <Button color="secondary" type='submit' onClick={() => setSource('cnn')}>CNN</Button>
                    <Button color="primary" type='submit' onClick={() => setSource('bbc-news')}>BBC News</Button>
                    <Button color="secondary" type='submit' onClick={() => setSource('fox-news')}>FOX News</Button>
                </ButtonGroup>
            </form>
            <Newscards news={page}/>
        </div>
    )
}

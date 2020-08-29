import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, InputGroupAddon, InputGroup, Input, Button } from "reactstrap";
import { FaSistrix } from "react-icons/fa";
import Axios from "axios";
import InfoCard from "../Components/InfoCard";



const Home = () => {

    const[query, setQuery] = useState('')
    const[res, setRes] = useState({})
    const key = process.env.REACT_APP_API_KEY

    const fetchdetail = async ()=>{
        try {
            const {data} = await Axios.get(`https://www.omdbapi.com/?apikey=${key}=${query}`)
            setRes(data)
        } catch (error) {
           console.log(error)
        }
    }


    return(
        <div className="my-3">
        <Container>
    
        <InputGroup>
            <Input id="input" type="text" value={query} onChange={e=> setQuery(e.target.value)} placeholder="Search for a movie"></Input>
                <InputGroupAddon addonType="append">
                    <Button onClick={fetchdetail}><FaSistrix></FaSistrix></Button>
                </InputGroupAddon>
        </InputGroup>

        {res.Title?(<InfoCard data={res}></InfoCard>):(null)}
 
        </Container>
        </div>
    )
}

export default Home;
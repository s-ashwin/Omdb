import React from "react";
import { Row, Col } from "reactstrap";

const InfoCard = ({data}) => {
    return(
        <div className="my-3 profile">
            <Row>
                <Col md="4">
                <div className="image text-center">
                    <img className="img img-fluid" src={data.Poster} alt={data.Poster}></img>
                </div>
                <div className="info my-3 text-center">
                    <div ><b>{data.Title}</b></div>
                    <div className="text-secondary ">{data.Year}</div>
                </div>
                </Col>

                <Col md="8">
                <div className="adinfo my-2 text-left">
                    {data.Director!=="N/A"?(<div><b>Director: </b>{data.Director}</div>):(null)}
                    {data.Genre!=="N/A"?(<div><b>Genre: </b>{data.Genre}</div>):(null)}
                    {data.Plot!=="N/A"?(<div><b>Plot: </b>{data.Plot}</div>):(null)}
                    {data.Actors!=="N/A"?(<div><b>Actors: </b>{data.Actors}</div>):(null)}
                    {data.Released!=="N/A"?(<div><b>Released: </b>{data.Released}</div>):(null)}
                    {data.Language!=="N/A"?(<div><b>Language: </b>{data.Language}</div>):(null)}
                    {data.BoxOffice!=="N/A"?(<div><b>Box Office: </b>{data.BoxOffice}</div>):(null)}
                    {data.imdbRating!=="N/A"?(<div><b>IMDb Rating: </b>{data.imdbRating} / 10</div>):(null)}      
                </div>
                </Col>
            </Row>
        </div> 

        )
}

export default InfoCard;
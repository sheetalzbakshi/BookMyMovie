import React from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import DetailsImage from "../../common/detailsImage/DetailsImage";
import DetailsDescription from "../../common/detailsDescription/DetailsDescription";

const DetailsPage = ({ history }) => {
    const onBackClicked = () => {
      history.push("/")      
    }; 
    const movie = history.location.state;

    return (
        <React.Fragment>
            <Header />
            <div className="backButton">
                <span className="backButtonText" onClick={onBackClicked}>
                    &lt; Back to Home
                </span>
            </div>
            <div className="detailsContent">
                <div className="detailsContentLeft">
                    <DetailsImage
                        url={movie ? movie.poster_url : ""}
                        title={movie ? movie.title : ""}
                    />
                </div>
                <div className="detailsContentCenter">
                    <DetailsDescription movie={movie} />
                </div>
                <div className="detailsContentRight">HHH</div>
            </div>
        </React.Fragment>
    );
};

export default DetailsPage;

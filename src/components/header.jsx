import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';

function Header(props) {
    const { navHeight } = props;
    return (
        <header id="header" >
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <FadeIn delay={100}>
                                    <h1>
                                        {props.data ? props.data.header : "Loading"}

                                        <span></span>
                                    </h1>
                                    <p>{props.data ? props.data.name : "Loading"}</p>

                                    <p id="header_para" className="page-scroll">{props.data ? props.data.header_para : "Loading"}</p>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
import React from "react";

const NavigationBar = React.forwardRef((props, ref) => {
    return (
        <nav id="menubar" className="navbar navbar-default navbar-fixed-top" ref={ref}>
            <div className="container">
                <div className="navbar-header">
                    {/* collapse navbar button */}
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {/* accessibility component */}
                        <span className="sr-only">Toggle Navigation</span>
                        {/* toggle bars */}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>
                    {/* normal view component */}
                    <a className="navbar-brand page-scroll" href="#page-top" id="brand-name" >Avinash Jha</a>
                </div>

                {/* navigation buttons */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="" className="page-scroll">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="" className="page-scroll">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className="page-scroll">
                                Service
                            </a>
                        </li>
                        <li>
                            <a href="" className="page-scroll">
                                Gallery
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
});

export default NavigationBar;

import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import ScrollAnimation from 'react-animate-on-scroll';


function About(props) {
    return (
        <div id='about' >
            <div className='container'>
                <div className='row'>
                    <ScrollAnimation animateIn="fadeIn" duration={0.6} animateOnce={true} animatePreScroll={false}>
                        <div className='col-xs-12 col-md-6'>
                            <img src='img/about.jpg' className='img-responsive' alt='' />
                        </div>

                        <div className='col-xs-12 col-md-6'>
                            <div className='about-text'>
                                <h2>About me?</h2>
                                <p>{props.data ? props.data.paragraph : 'Loading...'}</p>
                                <h3>Why choose me?</h3>
                            </div>
                            <div className='list-style'>
                                <div className='col-md-6 col-sm-6 col-xs-12'>
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((data, index) => (
                                                <li key={`${data}-${index}`}> {data} </li>
                                            ))
                                            : 'loading...'}
                                    </ul>
                                </div>
                                <div className='col-xs-12 col-md-6 col-sm-6'>
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((data, index) => (
                                                <li key={`${data} - ${index}`}>
                                                    {data}
                                                </li>
                                            )) : 'loading...'}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default About
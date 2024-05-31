import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

function Testimonials(props) {
    return (
        <div id='testimonials'>
            <div className='container'>
                <ScrollAnimation animateIn="fadeIn" duration={0.5} animateOnce={true} animatePreScroll={false}>
                    <div className='section-title text-center'>
                        <h2>What do my clients say</h2>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true} animatePreScroll={false}>
                    <div className='row'>
                        {props.data ? (props.data.map((data, index) => (
                            <div className='col-md-4' key={`${data.name} - ${index}`}>
                                <div className='testimonial'>
                                    <div className='testimonial-image'>
                                        <img src={data.img} alt='' />
                                    </div>
                                    <div className='testimonial-content'>
                                        <p>"{data.text}"</p>
                                        <div className='testimonial-meta' > - {data.name} </div>
                                    </div>
                                </div>
                            </div>
                        ))) : 'loading...'}
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default Testimonials
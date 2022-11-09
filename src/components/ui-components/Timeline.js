import React, { Component } from 'react';
import "./Timeline.css"
export default class Card extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="fadeIn">
                <section id={"timeline"}>
                    <h1>Timeline</h1>
                    <p className="leader">The timeline below shows my studies, work, projects, etc. after high school graduation. All of these experiences made me want to improve the lives of all people through information technology, and these experiences also gave me both design thinking and technical ability to make every ideal possible from requirement discovery to product delivery.</p>
                    <div className="demo-card-wrapper fadeIn first">
                        <div className="demo-card demo-card--step1">
                            <div className="head">
                                <div className="number-box">
                                    <span>01</span>
                                </div>
                                <h2><span className="small">Subtitle</span> Technology</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn second">
                            <div className="head">
                                <div className="number-box">
                                    <span>02</span>
                                </div>
                                <h2><span className="small">Subtitle</span> Confidence</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step3 fadeIn third">
                            <div className="head">
                                <div className="number-box">
                                    <span>03</span>
                                </div>
                                <h2><span className="small">Subtitle</span> Adaptation</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step4 fadeIn four">
                            <div className="head">
                                <div className="number-box">
                                    <span>04</span>
                                </div>
                                <h2><span className="small">Subtitle</span> Consistency</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn fifth">
                            <div className="head">
                                <div className="number-box">
                                    <span>05</span>
                                </div>
                                <h2><span className="small">Subtitle</span> Conversion</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
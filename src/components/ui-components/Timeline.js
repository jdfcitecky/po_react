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
                    <h1>A Flexbox Timeline</h1>
                    <p class="leader">All cards must be the same height and width for space calculations on large screens.</p>
                    <div class="demo-card-wrapper fadeIn first">
                        <div class="demo-card demo-card--step1">
                            <div class="head">
                                <div class="number-box">
                                    <span>01</span>
                                </div>
                                <h2><span class="small">Subtitle</span> Technology</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step2 fadeIn second">
                            <div class="head">
                                <div class="number-box">
                                    <span>02</span>
                                </div>
                                <h2><span class="small">Subtitle</span> Confidence</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step3 fadeIn third">
                            <div class="head">
                                <div class="number-box">
                                    <span>03</span>
                                </div>
                                <h2><span class="small">Subtitle</span> Adaptation</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step4 fadeIn four">
                            <div class="head">
                                <div class="number-box">
                                    <span>04</span>
                                </div>
                                <h2><span class="small">Subtitle</span> Consistency</h2>
                            </div>
                            <div class="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img src="http://placehold.it/1000x500" alt="Graphic" />
                            </div>
                        </div>

                        <div class="demo-card demo-card--step5 fadeIn fifth">
                            <div class="head">
                                <div class="number-box">
                                    <span>05</span>
                                </div>
                                <h2><span class="small">Subtitle</span> Conversion</h2>
                            </div>
                            <div class="body">
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
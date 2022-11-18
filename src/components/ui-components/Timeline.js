import React, { Component } from 'react';
import { Book, Edit3 } from 'react-feather';
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
                    <div className="">
                        <p className="leader px-5 mx-5">The timeline below shows my studies, work, projects, etc. after high school graduation. All of these experiences made me want to improve the lives of all people through information technology, and these experiences also gave me both design thinking and technical ability to make every ideal possible from requirement discovery to product delivery.</p>
                    </div>

                    <div className="demo-card-wrapper fadeIn first">
                        <div className="demo-card demo-card--step1">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2016</span>Graduation</h2>
                            </div>
                            <div className="body">
                                <p>In the summer of 2016, I graduated from Taipei City Jianguo High School. During my studies, I had outstanding performance in the field of art and literature, and also maintained stable results in other fields. Finally graduated with grades in about the top ten percent.</p>
                                <img src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-1.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step1 fadeIn second">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2016</span>Admission</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn third">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2016</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-2.png`} alt="Graphic" />
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
import React, { Component } from 'react';
import { Book, Edit3, Dribbble } from 'react-feather';
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
                                <p>Most of the courses in the architecture department are taught around the design class. After experiencing the first copying job for practicing AutoCAD use and model making, we started the first design of the temporary shelter.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-1.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn four">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2016</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>In the last work we have tried to consider the user's living habits. In this work, we have to add the analysis of the environment to design. It was also in this work that I first learned to use PhotoShop to edit pictures and arrange posters.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn fifth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-3.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn sixth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>The last work received quite good feedback, but I did not stop pursuing the quality of the graphics. Therefore, I used proxy rendering in this work to increase the richness of the environment. In addition, I also used a lot of surface design and 3D printing to make models for the first time.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-4.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn seventh">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After using 3D printing to make the model, I have more time to modify the design and graphics. In the last work of the freshman year, I put forward a fairly complete design plan for users and the environment, and presented very high-quality graphics and openable models. This is also the first time I have achieved the first grade.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-5.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn eighth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>With the design experience in the first year of university, I think that I must adopt a more automated and data-dependent modeling method to show my design thinking, so I learned a lot of Rhino and Grasshopper technology during the summer vacation and made my first work in the second year of university put into use.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-6.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step3 fadeIn ninth">
                            <div className="head">
                                <div className="number-box">
                                    <Dribbble className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Activity</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-7.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn tenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-8.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn eleventh">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-9.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twelveth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-10.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn threeteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-11.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn fourteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-1.png`} alt="Graphic" />
                            </div>
                        </div>


                        <div className="demo-card demo-card--step2 fadeIn fifteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn sixteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-3.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn seventeenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-4.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn eighteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-5.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn nineteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-6.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn twentyth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-7.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn twentyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pybasic.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pyxl.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentythreeth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pydjango.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentyfourth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pyflask.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentyfiveth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_htmlb.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentysixth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jscanvasb.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentyseventh">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jscanvasg.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentyeighth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn twentyninth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtythreeth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyfourth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyfiveth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>


                        <div className="demo-card demo-card--step2 fadeIn thirtysixth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyseventh">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtyeightth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn thirtynineth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn fourtyth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2017</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jsweb.png`} alt="Graphic" />
                            </div>
                        </div>





                    </div>
                </section>
            </div>
        );
    }
}
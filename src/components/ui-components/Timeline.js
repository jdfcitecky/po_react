import React, { Component } from 'react';
import { Book, Edit3, Dribbble, Briefcase, Feather } from 'react-feather';
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
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-acti-1.png`} alt="Graphic" />
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
                                <p>In the last design work in 2017, with my proficient modeling technology and analysis ability, I designed a library under the park. This library not only meets the needs of the community for green space, but also uses the original underground parking lot. This design also allowed me to win the first place for the second time.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-7.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn eleventh">
                            <div className="head">
                                <div className="number-box">
                                    <Feather className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>A year later, I participated in the 2017 Decor House Awarad again. This time I combine modern ideas with traditional architectural forms, and use realistic renderings and logical design explanations. This time I won the preferred award.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-award-dec-1.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twelveth">
                            <div className="head">
                                <div className="number-box">
                                    <Briefcase className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>In addition to training design thinking and software skills, I also learned about environmental control and building materials. In this work, I used Revit for thermal environment analysis and modeling to demonstrate the ability to apply building information models.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-8.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step4 fadeIn threeteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Briefcase className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Work Experience</h2>
                            </div>
                            <div className="body">
                                <p>When I was in high school, I participated in the architectural design experience course offered by the school. In 2018, I was asked by the teacher of this course to return to high school to give lectures. I added more analytical logic teaching to the courses that focused on creativity, so that more students can use analytical methods to solve practical problems.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline//tl-work-1.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn fourteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After nearly two years of professional training in architecture, I have established my own design workflow. In this work, in addition to completing the exhibition site that integrates local culture and vision, I also completed the design of the external environment, which is enough to demonstrate my extraordinary work ability.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-9.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step3 fadeIn ninth">
                            <div className="head">
                                <div className="number-box">
                                    <Dribbble className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Activity</h2>
                            </div>
                            <div className="body">
                                <p>With the accumulation of design experience, I gradually noticed the problems in the traditional construction industry. So I turned my attention to how to use programming language to manipulate data to generate models. In this summer work camp, we use these software to simulate the complete assembly process of a structure and actually build it.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-acti-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step4 fadeIn threeteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Briefcase className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Work Experience</h2>
                            </div>
                            <div className="body">
                                <p>In order to further understand the actual situation of the construction industry, I came to a lecturer's architect firm for an internship. During the internship, I participated in the design of several library spaces and assisted in communicating with customers. Although the results of the work were quite satisfactory to the supervisor, the work did not satisfy me.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline//tl-work-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn seventeenth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-10.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step5 fadeIn eleventh">
                            <div className="head">
                                <div className="number-box">
                                    <Feather className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>A year later, I participated in the 2017 Decor House Awarad again. This time I combine modern ideas with traditional architectural forms, and use realistic renderings and logical design explanations. This time I won the preferred award.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-6.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn eleventh">
                            <div className="head">
                                <div className="number-box">
                                    <Feather className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>A year later, I participated in the 2017 Decor House Awarad again. This time I combine modern ideas with traditional architectural forms, and use realistic renderings and logical design explanations. This time I won the preferred award.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-7.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step2 fadeIn twentyth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After failing to participate in the 2016 Decor House Awarad for my previous work, I focused on improving the quality of graphics and design methods. Therefore, in this work, I use Vray and PS for virtual-real integrated rendering and emphasize a more logical design method.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-11.png`} alt="Graphic" />
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
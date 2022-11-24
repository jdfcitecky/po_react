import React, { Component } from 'react';
import { Book, Edit3, Dribbble, Briefcase, Feather, Award, BookOpen } from 'react-feather';
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
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-1.png`} alt="Graphic" />
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
                                    <Award className="feather-timeline" />
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

                        <div className="demo-card demo-card--step3 fadeIn fifteenth">
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

                        <div className="demo-card demo-card--step4 fadeIn sixteenth">
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
                                <p>I also often use what I have learned in the structure course to design. In this work, I used shell structure, membrane structure and cable structure to show a compact and light appearance in a small base.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-10.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step5 fadeIn eighteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>After the third year of college, I was no longer satisfied with doing design assignments in the school classroom. I try to participate in various local and international competitions to exercise my design ability. In this tree house competition held in Taichung City, besides getting an honorable mention, I also learned how to make a budget.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-6.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn nineteenth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>After completing the tree house design competition, I immediately participated in the competition for the Tainan Riverside Exhibition Hall. In this competition, although I came up with a fairly complete design, in the end I only won a good one. Such a result gave me a good understanding of the dark side of the design industry.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-7.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step5 fadeIn twentyth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>In addition to design based on real site, I prefer to do conceptual designs. I have realized that the development of information technology will change the way of life of human beings, so I put forward corresponding solutions for shared space and flexible space. Finally, it won two awards of the 2018 Architecture Master Prize for architecture and landscape living space.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/am-1.png`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-1.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step2 fadeIn twentyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2018</span>Design Work</h2>
                            </div>
                            <div className="body">
                                <p>After I focused on the competition, the university design assignments became routine instead. I can always analyze the environment and user needs very quickly and give corresponding solutions. But I am still very grateful to the partners who worked with me in this assignment, and perhaps such a relationship is more important than any award.</p>
                                <a className="timeline-card-hidden-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/one/YAMINGANDCHOHSIN.jpg`}><div className='timeline-card-hidden-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-11.png`} alt="Graphic" />

                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn twentytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>Although the Tainan Riverside Exhibition Hall competition made me quite worried about the design industry, this work still won the honorary nomination of the 2018 Decor House Awarad for its fairly complete planning and realistic rendering.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-award-dec-2.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn twentythreeth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>In order to get more awards, I also packaged the homework in the usual courses. I add background issues to these assignments and make more detailed construction and use case diagrams. This also made the two refuge houses originally designed for the architectural structure class win the 2019 International Design Award Gold Award and Silver Award a total of 5 awards.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/ida-gold-2.png`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-3.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step5 fadeIn twentyfourth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>In order to get more awards, I also packaged the homework in the usual courses. I add background issues to these assignments and make more detailed construction and use case diagrams. This also made the two refuge houses originally designed for the architectural structure class win the 2019 International Design Award Gold Award and Silver Award a total of 5 awards.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/ida-gold-1.png`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-4.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn twentyfiveth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>Although I have won many international awards, creating in the field of design can no longer satisfy me. So I decided to come to the information system training course offered by National Taiwan University. The first course I took was Python Basics. In the final report of this course, I showed the application of Python language in architectural design.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/ntu_pythonb.jpg`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pybasic.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn twentysixth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>In order to fully understand information engineering related knowledge from the basics, besides Python, I learned C and C++ languages. Through this course, in addition to understanding the basics and methods of C and C++, I also have a better understanding of memory operations and input and output.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/ntu_c++b.jpg`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_c++b.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step7 fadeIn twentyseventh">
                            <div className="head">
                                <div className="number-box">
                                    <Edit3 className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>Certificate</h2>
                            </div>
                            <div className="body">
                                <p>Studying in the information system training course at National Taiwan University is not only for acquiring comprehensive knowledge, but also for applying for a master's degree in computer science. In order to apply for this degree, I also took the TOEFl and GRE exams, and finally got a TOEFL mybest score of 93.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/tl-toefl.jpg`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-toefl.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step5 fadeIn twentyeighth">
                            <div className="head">
                                <div className="number-box">
                                    <Award className="feather-timeline" />
                                </div>
                                <h2><span className="small">2019</span>Award</h2>
                            </div>
                            <div className="body">
                                <p>In the fall of 2019, I won the 2019 Red Dot Design Award for my wooden structure house inspired by remote working life. At National Taiwan University of Science and Technology, it only takes a few international awards to earn a Master of Architecture degree. However, I already received more awards than this requirement in my senior year.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/reddot.png`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-arch-ex-5.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn twentyninth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>In addition to the basics of programming languages, I also studied algorithmic problem-solving courses because I deeply understand the importance of efficiency. In this course, I learned about the difference and use of data structures through the actual topics from Leetcode. And I also learned DFS, BFS, divide and conquer, 2pointer, dynamic programming and other algorithm concepts.</p>
                                <a className="timeline-card-link" target="_blank" href={`http://${process.env.REACT_APP_API_ADDRESS}/static/documents/ntu_pythons.jpg`}><div className='timeline-card-link-div'></div></a>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pythons.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>The goal of learning information engineering-related knowledge and technologies is still to create actual products. So in order to learn how to obtain data and make web applications, I also took courses on Python Excel and line chatbot. In this course, I learned how to implement crawlers in different ways and save the data in excel, and then present the information to users through linebot.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pyxl.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pydjango.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pyflask.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtythreeth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_htmlb.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyfourth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jscanvasb.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyfiveth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_jscanvasg.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtysixth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pythonsadv.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyseventh">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_pythonadv.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtyeightth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_mlb.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step8 fadeIn thirtynineth">
                            <div className="head">
                                <div className="number-box">
                                    <BookOpen className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>NTU CSIE Training</h2>
                            </div>
                            <div className="body">
                                <p>After having a more comprehensive modeling ability, I started to participate in various activities to focus on various issues and exercise design thinking. The first activity is to provide renovation solutions for the old communities in Taipei. This activity also allowed me to gain experience in collective housing and community environment design one year in advance.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ntu_linux.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step1 fourtyth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>Graduation</h2>
                            </div>
                            <div className="body">
                                <p>In the summer of 2016, I graduated from Taipei City Jianguo High School. During my studies, I had outstanding performance in the field of art and literature, and also maintained stable results in other fields. Finally graduated with grades in about the top ten percent.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-diploma-ntust.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step1 fadeIn fourtyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>Admission</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-ucdavislogo.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step6 fadeIn fourtytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-transcript-ucdavis.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step6 fadeIn fourtythreeth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2020</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ms265.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step6 fadeIn fourtyfourth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-transcript-ucdavis.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step6 fadeIn fourtyfiveth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/msos.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step6 fadeIn fourtysixth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ms252.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step6 fadeIn fourtyseventh">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-transcript-ucdavis.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step6 fadeIn fourtyeightth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ms222a.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step6 fadeIn fourtynineth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ms289k.png`} alt="Graphic" />
                            </div>
                        </div>
                        <div className="demo-card demo-card--step6 fadeIn fiftyth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2021</span>M.S Course</h2>
                            </div>
                            <div className="body">
                                <p>After the winter university entrance examination, because National Taiwan University of Science and Technology has a better geographical location and a more free learning atmosphere, I chose National Taiwan University of Science and Technology to study.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/ms230.png`} alt="Graphic" />
                            </div>
                        </div>


                        <div className="demo-card demo-card--step1 fadeIn fiftyoneth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2022</span>Graduation</h2>
                            </div>
                            <div className="body">
                                <p>In the summer of 2016, I graduated from Taipei City Jianguo High School. During my studies, I had outstanding performance in the field of art and literature, and also maintained stable results in other fields. Finally graduated with grades in about the top ten percent.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-diploma-ucdavis.png`} alt="Graphic" />
                            </div>
                        </div>

                        <div className="demo-card demo-card--step9 fadeIn fiftytwoth">
                            <div className="head">
                                <div className="number-box">
                                    <Book className="feather-timeline" />
                                </div>
                                <h2><span className="small">2022</span>Side project</h2>
                            </div>
                            <div className="body">
                                <p>In the summer of 2016, I graduated from Taipei City Jianguo High School. During my studies, I had outstanding performance in the field of art and literature, and also maintained stable results in other fields. Finally graduated with grades in about the top ten percent.</p>
                                <img className="timeline-card-imageFit" src={`http://${process.env.REACT_APP_API_ADDRESS}/static/timeline/tl-sideproject-1.png`} alt="Graphic" />
                            </div>
                        </div>











                    </div>
                </section >
            </div >
        );
    }
}
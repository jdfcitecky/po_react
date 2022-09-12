//this will be chatroom
import React, { Component } from 'react';
export default class ChatRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: window.location.href,

        }
    }
    render() {
        // console.log(document.documentElement.clientHeight, document.body.scrollHeight)
        // if (document.documentElement.clientHeight < document.body.scrollHeight) {
        //     return (
        //         <div>
        //             <footer className="navbar-fixed-bottom blog-footer fixed-bottom">

        //                 <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        //                 <p>
        //                     <a href="" className='text-primary' onClick={() => { document.documentElement.scrollTop = 0 }}>Back to top</a>
        //                 </p>
        //             </footer>
        //         </div>

        //     );
        // }
        return (
            <div>

                <div className="col-md-6 col-lg-7 col-xl-8">

                    <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                        style="position: relative; height: 400px">

                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Lorem ipsum
                                    dolor
                                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore
                                    magna aliqua.</p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minim veniam,
                                    quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                        </div>

                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Duis aute
                                    irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Excepteur sint occaecat
                                    cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                        </div>

                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Sed ut
                                    perspiciatis
                                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                    rem
                                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                                    dicta
                                    sunt explicabo.</p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Nemo enim ipsam
                                    voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                                    qui
                                    ratione voluptatem sequi nesciunt.</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                        </div>

                        <div className="d-flex flex-row justify-content-start">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                            <div>
                                <p className="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Neque porro
                                    quisquam
                                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                    numquam
                                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <p className="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                            </div>
                        </div>

                        <div clasNames="d-flex flex-row justify-content-end">
                            <div>
                                <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Ut enim ad minima veniam,
                                    quis
                                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                                    commodi
                                    consequatur?</p>
                                <p className="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                            </div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar 1" style="width: 45px; height: 100%;" />
                        </div>

                    </div>

                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                            alt="avatar 3" style="width: 40px; height: 100%;" />
                        <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                            placeholder="Type message" />
                        <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                        <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                        <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                    </div>

                </div>
            </div>

        );
    }
}
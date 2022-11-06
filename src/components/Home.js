import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ height: document.documentElement.clientHeight - 200 }} className='container fadeIn'>
                    <Jumbotron />
                    <div className='row mb-2'>
                        <Card color='primary' category='Backend' text='aaaaaa' link='/search/backend' linkwords='See more' picture='' />
                        <Card color='success' category='Frontend' text='aaaaaa' link='/search/frontend' linkwords='See more' picture='' />
                    </div>
                    <div className='row mb-2'>
                        <Card color='info' category='M.S Project' text='aaaaaa' link='/search/m.s.%20project' linkwords='See more' picture='' />
                        <Card color='warning' category='Design' text='aaaaaa' link='/search/design' linkwords='See more' picture='' />
                    </div>

                </div>
            </div>
        );
    }
}

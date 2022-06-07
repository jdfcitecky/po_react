import React, { Component } from 'react';
import Jumbotron from './ui-components/Jumbotron';
import Card from './ui-components/Card';
import Timeline from './ui-components/Timeline';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Jumbotron />
                    <div className='row mb-2'>
                        <Card color='primary' category='Frontend' text='aaaaaa' link='#' linkwords='See more' />
                        <Card color='success' category='Backend' text='aaaaaa' link='#' linkwords='See more' />
                    </div>
                    <div className='row mb-2'>
                        <Card color='info' category='M.S Project' text='aaaaaa' link='#' linkwords='See more' />
                        <Card color='warning' category='Design' text='aaaaaa' link='#' linkwords='See more' />
                    </div>

                </div>
                <Timeline />
            </div>
        );
    }
}

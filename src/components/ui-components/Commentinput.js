import React, { Component } from 'react';
import Comment from './Comment';
export default class Commentinput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textValue: "",
        }
    }
    render() {
        return (
            <div className='row'>
                <div className="col-md-12">
                    <div class="coment-bottom bg-white p-2 px-4">
                        <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                            <input value={this.state.textValue} onChange={(event) => this.setState({ textValue: event.target.value })} type="text" class="form-control mr-3" placeholder="Add comment" />
                            <button class="btn btn-primary my-2" type="button">Comment</button>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
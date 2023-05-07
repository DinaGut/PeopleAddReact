import React from 'react';

class NameForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-4'>
                    <input value={this.props.firstName} onChange={this.props.onFirstName} type='text' placeholder='First Name' className='form-control' />
                </div>
                <div className='col-md-4'>
                    <input value={this.props.lastName} onChange={this.props.onLastName} type='text' placeholder='Last Name' className='form-control' />
                </div>
                <div className='col-md-2'>
                    <input value={this.props.age} onChange={this.props.onAge} type='text' placeholder='Age' className='form-control' />
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-outline-info w-100'>Add</button>

                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onClearClick} className='btn btn-outline-danger w-100'>ClearAll</button>
                </div>

            </div>
        );
    }
}

export default NameForm;
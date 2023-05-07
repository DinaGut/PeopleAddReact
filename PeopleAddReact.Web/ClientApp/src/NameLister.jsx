import React from 'react';
import NameForm from './NameForm';
import NameDisplay from './NameDisplay';

class NameLister extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstName = (e) => {
        this.setState({ firstName: e.target.value });
    }
    onLastName = (e) => {
        this.setState({ lastName: e.target.value });
    }
    onAge = (e) => {
        this.setState({ age: e.target.value });
    }

    onClearClick = () => {
        this.setState({ people: '' });
    }

    onAddClick = () => {
        const copy = [...this.state.people];
        copy.push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        });
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    render() {
        return (
            <div className='container mt-3'>
                <NameForm onAddClick={this.onAddClick} firstName={this.state.firstName}
                    lastName={this.state.lastName} age={this.state.age}
                    onFirstName={this.onFirstName} onLastName={this.onLastName}
                    onAge={this.onAge} onClearClick={this.onClearClick} />
                {this.state.people.length === 0 ?
                    <h1>No people added yet, add some people!!</h1> :
                    <div>
                        <table className="container mt-3 table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <NameDisplay people={this.state.people} />
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        )
    }
}

export default NameLister;
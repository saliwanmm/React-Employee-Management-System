import { Component } from "react";

import "./employees-add-form.css";

// The component is responsible for adding new employees via a form
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        // Local state to save user-entered data (name and salary)
        this.state = {
            name: "",  // Field to store the name of the new employee
            salary: ""  // Field for saving the salary of a new employee
        }
    }

    // This method updates the corresponding fields in the state when the values ​​in the form change
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // The method handles the form submit event
    onSubmit = (e) => {
        e.preventDefault();
        // Validation of user input fields
        if (this.state.name.length > 2 && this.state.salary) {
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: "",
                salary: ""
            })
        }
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <p>the length of the name must be more than 3 letters </p>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="full name"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
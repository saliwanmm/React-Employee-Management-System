import { Component } from "react";

import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

// The main component of the App application that is responsible for managing the state and display of all other components
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Employee data is stored in the state
            data: [
                { name: "John", salary: 450, increase: false, raise: false, id: 1 },
                { name: "Patron", salary: 1430, increase: false, raise: true, id: 2 },
                { name: "Idiotovich", salary: 1000, increase: false, raise: false, id: 3 },
            ],
            // Variable to search for employees
            term: "",
            // Variable for filtering employees
            filter: "all"
        }
        // Unique ID for new employees
        this.maxId = 4;
    }

    // Method to delete an employee by id
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    // Method to add a new employee
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            raise: false,
            id: this.maxId++ // Assign a unique id to the new employee
        }

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr // Update the state by adding a new employee to the list
            }
        });
    }

    // Method for switching employee properties (increase or raise)
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    // Switch the value of the property (true/false)
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    // Method to find employees by name
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            // Return employees whose name contains the search input text
            return item.name.indexOf(term) > -1
        })
    }

    // update search state
    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    // Method of filtering employees according to the selected filter
    filterPost = (items, filter) => {
        switch (filter) {
            // Return the promoted employees
            case "raise":
                return items.filter(item => item.raise);
            // Return employees whose salary is greater than 500$
            case "moreThan1000":
                return items.filter(item => item.salary > 500);
            // Return all employees
            default:
                return items
        }
    }

    // Update filter in state
    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, term, filter } = this.state
        const employees = data.length; // Total number of employees
        const increased = data.filter(item => item.increase === true).length // Number of employees who received a salary increase
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // Search and filter employees

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;
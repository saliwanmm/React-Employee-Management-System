import "./employees-list.css";
import EmployeesListItem from "../employees-list-item/employees-list-item";

// The component is responsible for displaying the list of employees
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
    // Generate an array of elements based on employee data
    const elements = data.map(item => {
        // We extract the id and the rest of the employee's properties
        const { id, ...itemProps } = item;
        return (
            // Render the component for each employee
            <EmployeesListItem
                key={id}  // Unique key for each element of the list
                {...itemProps}  // We transfer all other properties of the employee
                onDelete={() => onDelete(id)}  // Deleting an employee by id
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} // Switch properties (increase, raise)
            />
        )
    })

    return (
        // Display the list of employees as a list of <ul> elements
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
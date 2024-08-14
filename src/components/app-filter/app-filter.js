import "./app-filter.css";

// The component is responsible for filtering employees according to various criteria
const AppFilter = (props) => {
    // Array of data for filter buttons, each of which has a unique name (name) and label (label)
    const buttonsData = [
        { name: 'all', label: "All employees" },
        { name: 'raise', label: "On promote" },
        { name: 'moreThan1000', label: "Salary is more than 1000" }
    ];

    // Generate an array of buttons based on the buttonsData data
    const buttons = buttonsData.map(({ name, label }) => {
        // Determine whether the button is active by comparing its name with the current filter
        const active = props.filter === name;
        // Depending on the activity of the button, we set the appropriate class for styling
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        // Display a group of buttons for filtering employees
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
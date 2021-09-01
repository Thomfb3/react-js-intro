const Person = (props) => {
    const personStyles = {
        border: "1px solid grey",
        borderRadius: "5px",
        margin: "20px",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif"
    }


    const shortName = (name, numOfChar) => {
        return name.length > 6 ? name.slice(0, numOfChar) + '...' : name;
    }

    return (
        <div style={personStyles}>
            <h3>{shortName(props.name, 6)}</h3>
            <h4>{props.age < 18 ? "You must be 18 years old" : "Please go Vote!"}</h4>
            <div>
                <h4>Hobbies:</h4>
                <ul>{props.hobbies.map(h => <li key={h.id}>{h.text}</li>)}</ul>
            </div>
        </div>
    )
}

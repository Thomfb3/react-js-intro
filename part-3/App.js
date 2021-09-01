const App = () => (
    <div>
        <Person
            name="Jonathan"
            age={15}
            hobbies={["running", "walking", "jumping"]}
        />
        <Person
            name="Thomas"
            age={18}
            hobbies={["running", "walking", "jumping"]}
        />
        <Person
            name="Abraham"
            age={14}
            hobbies={["running", "walking", "jumping"]}
        />
        <Person
            name="Bob"
            age={50}
            hobbies={["running", "walking", "jumping"]}
        />

    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
const App = () => (
    <div>
        <Person
            name="Jonathan"
            age={15}
            hobbies={[{id: 1, text: "running"}, {id: 2, text: "walking"}, {id: 3, text: "jumping"}]}
        />
        <Person
            name="Thomas"
            age={18}
            hobbies={[{id: 1, text: "running"}, {id: 2, text: "walking"}, {id: 3, text: "jumping"}]}
        />
        <Person
            name="Abraham"
            age={14}
            hobbies={[{id: 1, text: "running"}, {id: 2, text: "walking"}, {id: 3, text: "jumping"}]}
        />
        <Person
            name="Bob"
            age={50}
            hobbies={[{id: 1, text: "running"}, {id: 2, text: "walking"}, {id: 3, text: "jumping"}]}
        />

    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
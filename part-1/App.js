const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Tom" />
    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
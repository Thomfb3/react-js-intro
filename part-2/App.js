const App = () => (
    <div>
        <Tweet 
            username="Tom123" 
            name="Tom"
            date="08/31/2021"
            tweet="Hey everybody, this is my tweet."
        />
        <Tweet 
            username="John456" 
            name="John"
            date="07/31/2021"
            tweet="Hey everybody, Tom's a liar."
        />
        <Tweet 
            username="Bob789" 
            name="Bob"
            date="06/31/2021"
            tweet="Hey everybody, I agree John456"
        />

    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))
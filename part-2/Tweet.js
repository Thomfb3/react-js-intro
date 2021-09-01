const Tweet = (props) => {
    const tweetStyles = {
        border: "1px solid grey",
        borderRadius: "5px",
        margin: "20px",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif"
    }
    return (
        <div style={tweetStyles}>
            <h3>{props.tweet}</h3>
            <p>{props.date}</p>
            <h5>{props.name} / {props.username}</h5>

        </div>
    )
}

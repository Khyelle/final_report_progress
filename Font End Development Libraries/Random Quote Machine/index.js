function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuotes, setRandomQuotes] = React.useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuotes(data[randIndex])
        }
        fetchData();

    }, [])

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
        setRandomQuotes(quotes[randIndex])
    }

    return (
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body"></div>
                    {randomQuotes ? (
                        <>
                        <h5 className="card-title" >- {randomQuotes.author|| "No author"}</h5>
                        <p className="card-text">&quot;{randomQuotes.text}&quot;</p>
                        </>
                    ) :(
                        <h2>Loading</h2>
                    )}
                    <div className="row"></div>
                    <button onClick={getNewQuote} className="btn btn-primary">New Quote</button>
                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                encodeURIComponent(
                    '"' + randomQuotes.text + '"' + randomQuotes.author
                )
                } target="_blank" className="btn btn-warning">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href={"https://www.tumblr.com/widget/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
                    encodeURIComponent(randomQuotes.author) + 
                    "&content=" +
                    encodeURIComponent(randomQuotes.text) +
                    "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbutton&shareSource=tumblr_share_button"
                } target="_blank" className="btn btn-danger">
                        <i className="fa fa-tumblr"></i>
                    </a>

                </div>
            </div>



        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
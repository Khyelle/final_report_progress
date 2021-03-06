function App() {
    const [displayTime, setDisplayTime] = React.useState(25 * 60);
    const [breakTime, setBreakTime] = React.useState(5 * 60);
    const formatTime = (time) => {
        let minutes = Math.floor (time/60);
        let seconds = time % 60;

        return (
            [minutes < 10 ? "0" + minutes : minutes] + 
            ":" +
            [seconds < 10 ? "0" + seconds : seconds]
        );

    }

    const changeTime = (amount, type) => {
        if (type == 'break') {
            setBreakTime((prev) => prev + amount);
        }
    }

    return (
        <div>
            <Length 
            title={"break length"}
            changeTime={changeTime} 
            type={"break"} 
            time={breakTime} 
            formatTime={formatTime}/>
            <h1>{formatTime(displayTime)}</h1>
        </div>
    );

};

    function Length({title, changeTime, type, time, formatTime}) {
        return(
            <div>
                <h3>{title}</h3>
                <div className="time-sets"></div>
                <button 
                className="btn-small deep-purple lighten-2"
                onclick={() => changeTime(-60, type)}
                >
                    <i className="material-icons">arrow_downwards</i>
                </button>
                <h3>{formatTime(time)}</h3>
                <button className="btn-small deep-purple lighten-2">
                    <i className="material-icons">arrow_upward</i>
                </button>
            </div>

        );
    }

ReactDOM.render(<App />, document.getElementById("root"));
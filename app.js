class App extends React.Component {
    state = {
        name: "",
        commentaire: "",
        comments: []
    }

    addName = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value

        })

    }



    render() {
        return (

            <div>
                <h1>say something</h1>
                <form>
                    <input type="text" /><br></br>
                    <textarea name="" id="" cols="21" rows="5"></textarea><br></br>
                    <input type="submit" value="comment >" />




                </form>


            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
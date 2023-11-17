// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function StarWars({starship}) {
    // we are using { movie } instead of props so that we can access it
    // by just using movie, instead of props.movie

    const loaded = () => {
        return (
            <div className="starwars">
                                
                
                {starship.results.map (result => {
                    return (<h4>{result.name}</h4>
                    )
                })  }
            </div>
        )
    }

    const loading = () => {
        return <h1>starship to Display</h1>
    }
    //The component must return some JSX
    return starship ? loaded() : loading();
}
// We must export the component to use it in other files
export default StarWars;
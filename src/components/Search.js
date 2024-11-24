function Search() {
    return (
        <div className="h-96 text-center bg-blue-500 flex flex-col justify-center items-center space-y-4 font-serif">
            <h1 className="text-5xl font-bold">Discover New Opportunities</h1>
            <p>Find internships, volunteering activities, and events in one place</p>
            <form>
                <input className="h-8 px-2" type="text" name="search" placeholder="Seach for opportunities"/>
                <br/>
                <button className="mt-2 border-2 px-4 rounded-md text-white" type="button">Search</button>
            </form>
        </div>
    )
}

export default Search;
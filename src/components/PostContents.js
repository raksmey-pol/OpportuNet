import code from "../assets/code.jpg"

const smallMedia = "640 px"

function PostContents() {
    return (
        <div className="lg:h-[70vh] text-center bg-slate-100 justify-center items-center space-y-4 font-serif grid lg:grid-cols-2">
            <div>
                <div>
                    <h2 className="font-bold text-4xl py-2">
                        Post an Opportunity
                    </h2>
                    <p>Share a new opportunity with the community</p>
                </div>
                <div className="py-10">
                    <form className="grid lg:grid-cols-1 gap-6 text-center">
                        <div>
                            <label className="pr-2">Title:</label><br/>
                            <input className="w-[30vh] mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Enter opportunity title"></input>
                            <p>Maximum 50 characters</p>
                        </div>
                        <div>
                            <label>Description:</label><br/>
                            <textarea className="w-[30vh] mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Tell us more about the opportunity"></textarea>
                            <p>Provide details and requirements</p>
                        </div>
                    </form>
                    <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Post Opportunity</button>
                </div>
            </div>
            <div className="px-10">
                <img src={code} className="lg:h-96 sm:h-56"></img>
            </div>
        </div>
    )
}

export default PostContents
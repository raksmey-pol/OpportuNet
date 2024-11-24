import picture from "../assets/code.jpg"


function CardLatest(props) {
    const {title, type, description, byUser, imgUrl} = props.detail

    return (
        <div className="bg-blue-50 rounded-lg shadow p-4 lg:flex">
            <img className="w-36 h-36 object-cover rounded-lg" src={imgUrl} alt="placeholder picture"></img>
            <div className="ml-4">
                <h2 className="text-lg font-semibold">
                    {title}
                </h2>
                <p className="text-sm text-gray-500">Type: {type}</p>
                <p className="mt-2 text-gray-700">Description: {description}</p>
                <p className="mt-2 text-gray-700">By: {byUser}</p>
            </div>
        </div>
    )
}

export default CardLatest;
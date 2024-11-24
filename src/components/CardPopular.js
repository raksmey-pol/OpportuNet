function CardPopular(props) {
    const {icon, title, type} = props.detail;
    return (
        <div>
            <div className="bg-slate-300 rounded-full">
                <h1 className="text-9xl">{icon}</h1>
            </div>
            <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default CardPopular;
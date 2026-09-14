function ProblemCard({
    title,
    topic,
    difficulty,
    status,
    onStatusChange,
    onOpen
}) {
    return (
        <div className="problem-card">

            <div
                className="problem-content"
                onClick={onOpen}
            >
                <h3>{title}</h3>
                <p>{topic}</p>
            </div>

            <div className="problem-info">

                <span>{difficulty}</span>

                <button onClick={onStatusChange}>
                    {status}
                </button>

            </div>

        </div>
    );
}

export default ProblemCard;
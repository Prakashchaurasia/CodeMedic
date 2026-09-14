function TopicCard({ topic, status }) {
    return (
        <div className="topic-card">
            <div>
                <p>DSA Topic</p>
                <h3>{topic}</h3>
            </div>

            <span>{status}</span>
        </div>
    );
}

export default TopicCard;
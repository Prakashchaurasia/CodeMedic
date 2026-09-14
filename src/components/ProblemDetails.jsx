function ProblemDetails({ problem, onBack, onAnalyze }) {

    return (
        <section className="problem-details">

            <button
                className="back-button"
                onClick={onBack}
            >
                ← Back to Problems
            </button>


            <div className="problem-details-card">

                <p>{problem.topic}</p>

                <h2>{problem.title}</h2>

                <span>{problem.difficulty}</span>


                <h3>Problem Description</h3>

                <p>
                    {problem.description}
                </p>


                <button
                    onClick={() => onAnalyze(problem)}
                >
                    Analyze Your Code
                </button>

            </div>

        </section>
    );
}

export default ProblemDetails;
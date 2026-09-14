function Welcome({ userName }) {
    return (
        <section className="welcome">

            <h1>
                Welcome back, {userName || "Student"}! 👋
            </h1>

            <p>
                Let's improve your DSA skills with CodeMedic.
            </p>

        </section>
    );
}

export default Welcome;
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Hey, I'm Chris</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero-section-description">
                        I go to UCSD as a master's student, major in ECE.
                        <br />
                        I am looking for a full stack developer intern.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero-section-img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}
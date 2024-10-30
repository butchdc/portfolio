const About = () => {
    return (
        <div className="container my-5">
        <h1 className="display-4 text-center">About Me</h1>
        <section className="my-5">
          <h2>Professional Background</h2>
          <p>
            With a career spanning over a decade, I've held key roles in IT application support, project management, and technical support for high-profile companies. My most recent work includes leading
            projects in blockchain for secure digital solutions and supporting the largest health insurance provider in the UAE as a Lead IT Application Support Specialist.
          </p>
        </section>
  
        <section className="my-5">
          <h2>My Vision & Passion</h2>
          <p>
            I am passionate about developing technology-driven solutions that improve user experiences, enhance data security, and drive operational efficiency. From application support to blockchain development,
            I believe in utilizing innovative tools and technologies to solve real-world challenges.
          </p>
        </section>
  
        <section className="my-5">
          <h2>Personal Interests</h2>
          <p>
            Outside of work, I enjoy keeping up with emerging tech trends, working on open-source projects, and exploring the scenic landscapes of New Zealand. When I'm not coding, you'll likely find me hiking, 
            trying out new recipes, or diving into a good sci-fi book.
          </p>
        </section>
  
        <section className="my-5 text-center">
            <h2>Let’s Connect!</h2>
            <p>
                If you’re interested in collaborating or learning more about my journey, feel free to reach out!
            </p>
            <a 
                href="https://www.linkedin.com/in/butch-dela-cruz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
            >
                Connect on LinkedIn
            </a>
            </section>
      </div>
    );
}
 
export default About;
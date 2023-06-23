import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-bio">
        <h2>BIO</h2>
        <p>
          As a responsible individual, I have always tried to do my job to the
          best of my ability throughout my career. I've had various positions
          that have helped me enhance my leadership, problem-solving, time
          management, flexibility, and communication skills. I'd like to further
          my own growth as a web developer. I believe that the field of
          information technology is an ideal fit for me and my career is going
          to flourish in this field of work. 
        </p>
        <p>
          I've successfully completed IT school training to acquire the skills and competencies I need while I am currently pursuing a career in full-stack web development.
        </p>
        <p>
          As a driven professional, I am eager to take on new challenges and learning new technologies and tools.I look forward to applying my skills and expertise to full-stack web development and collaborating with industry professionals to create innovative and effective solutions.
        </p>
        <p>
          My ambition is to make a significant contribution to projects while
          simultaneously building myself into a well-rounded full-stack
          developer. <strong>Anyone who keeps learning stays young !</strong>
        </p>
      </div>
      <div className="about-experience">
        <div className="about-job">
          <h4 className="job-title">Technical and Logistic Manager</h4>
          <h4 className="job-company">PAD Global Co. UK, Istanbul</h4>
          <h5 className="job-year">July 2020 – May 2022</h5>
          <p>
          Dealt with technical issues of vending machines which are working with AI, also managed the manufacturing planning and distribution strategies.
          </p>
        </div>
        <div className="about-job">
          <h4 className="job-title">Search Engine Evaluator</h4>
          <h4 className="job-company">Appen, Australia</h4>
          <h5 className="job-year">Sep 2019 - April 2020</h5>
          <p>
          Analyzed contents, images, videos and advertisings, provided feedback that measures the accuracy of web searched results.
          </p>
        </div>
        <div className="about-job">
          <h4 className="job-title">Foreign Trade Manager</h4>
          <h4 className="job-company">Possafe Computer and Automation Systems Ltd Co,  Istanbul	</h4>
          <h5 className="job-year">Jan 2018 - April 2020</h5>
          <p>
          Managed a $150.000 annual import budget by developing purchase strategies based on local user demands and enhanced the profit rate by 5%.
          </p>
        </div>
        {/* <div className="about-job">
          <h4 className="job-title">Deputy Inspector</h4>
          <h4 className="job-company">Turkish General Directorate of Security, Kırklareli	</h4>
          <h5 className="job-year">June 2014 - Nov 2016</h5>
          <p>
          Led a staff of 40 in a city of 120,000 inhabitants and dealt with approximately 100 criminal cases per month.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default About;

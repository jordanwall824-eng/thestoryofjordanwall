import "./projects.css";
import vanguard from "./vanguard.png"; 
import bankofAmerica from "./bankOfAmerica.png"; 
import medtronic from "./medtronic.png"; 

function Projects() {
  return (
    <section className="projectsSection">

  {/* Logo container */}
  <div className="projectLogo">
    <img src={vanguard} alt="Vanguard Logo" />
  </div>

  {/* Case-study card */}
  <div className="projectCard">
    <p className="projectLabel">Co-op • Sep 2025 – Jan 2026</p>

    <h2>Application Engineer</h2>

    <p className="projectBlurb">
      Worked as an Application Engineer at Vanguard where I contributed to UI enhancement <br /> 
      for an Artifical Intelligence powered chatbot used to deesclate Jira tickets and solve problems for over 20,000 vanguard employees 
      across the company. Through my time here I utlized Angular and Typescript to enhance the User Experience, AWS 
      Bedrock to create a response for the chatbot and used Git to commit and push code changes. I learned what it is like 
      to work with Artifical Intelligence and how to implement it into real world applications.
    </p>

    <ul className="projectList">
      <li>Built front-end components with Angular and TypeScript.</li>
      <li>Improved User Experience and created a wireframe using Figma.</li>
      <li>Learned about backend services with AWS such as S3 and Bedrock tools.</li>
    </ul>

    <p className="projectTech">
      <strong>Tech:</strong> Angular, TypeScript, Figma, Git, AWS <br /> 
      <strong>IDE Used:</strong> IntelliJ
    </p> 
    </div>

    <div className="BOALogo">
  <img src={bankofAmerica} alt="Bank of America Logo" />
</div>
  

{/* Bank of America Project Card */}
<div className="projectCard">
  <p className="projectLabel">Internship • June 2025 – Aug 2025</p>

  <h2>Software Engineer</h2>

  <p className="projectBlurb">
    Worked as a Software Engineering Intern on the Merrill Wealth team, where I built a
    React.js web interface with AG Grid features that improved data accessibility for
    over 10 million users. My work focused on enhancing portfolio analysis workflows,
    optimizing UI performance, and integrating modern APIs to replace legacy interfaces. 
    I learned how to scale applications for millions of users while ensuring a seamless user experience.
  </p>

  <ul className="projectList">
    <li>
      Developed an interactive React.js data grid with infinite scrolling, Excel/PDF export,
      and customizable layouts to improve portfolio analysis efficiency.
    </li>
    <li>
      Designed and implemented a responder API using Axios to fetch and populate live grid data
      from a legacy UI, enabling real-time financial data access.
    </li>
    <li>
      Created and executed Postman test cases to validate API endpoints, ensure data accuracy,
      and streamline debugging during integration.
    </li>
  </ul>

  <p className="projectTech">
    <strong>Tech:</strong> React.js, AG Grid, JavaScript, Axios, REST APIs, Postman, Git <br /> 
    <strong>IDE Used:</strong> VS Code
  </p>
</div> 

<div className="medtronicLogo">
    <img src={medtronic} alt="Medtronic Logo" />
</div>

{/* Medtronic Project Card */}
<div className="projectCard">
  <p className="projectLabel">Internship • Sep 2024 - May 2025</p>

  <h2>Project Management Associate</h2>

  <p className="projectBlurb">
    Worked as a Project Management Intern supporting enterprise-level remediation
    and compliance initiatives. My role focused on improving project documentation,
    stakeholder alignment, and data-driven reporting to support execution and
    decision-making across cross-functional teams.
  </p>

  <ul className="projectList">
    <li>
      Collaborated with cross-functional stakeholders to develop project charters
      and status reports, aligning scope, timelines, and deliverables to support
      successful project execution and stakeholder approval.
    </li>
    <li>
      Analyzed historical remediation data to identify gaps and coordinate resolution
      strategies, helping close outstanding stakeholder-assigned tasks and improve
      overall project compliance and audit readiness.
    </li>
    <li>
      Leveraged Power BI to store, visualize, and track remediation data trends,
      improving visibility into risk areas and progress across remediation efforts.
    </li> 
    <li>
        Led weekly team meetings to communicate project updates, address roadblocks,
        and ensure alignment on next steps among cross-functional team members.
    </li>
  </ul>

  <p className="projectTech">
    <strong>Tools:</strong> Power BI, Excel, Word, ServiceNow, Stakeholder Management <br />
  </p>
</div> 

<div className="medtronicLogo2">
    <img src={medtronic} alt="Medtronic Logo" />
</div> 

{/* Medtronic Software Engineering Intern Card */}
<div className="projectCard">
  <p className="projectLabel">Internship • June 2024 - August 2024</p>

  <h2>Software Engineer</h2>

  <p className="projectBlurb">
    Worked on the CIAM engineering team to develop a unified customer registration
    application used across Medtronic’s digital platforms worldwide. The system
    streamlined account creation for patients, clinicians, and partners, supporting
    more than 5 million global users.
  </p>

  <ul className="projectList">
    <li>
      Developed front-end features using JavaScript to support user onboarding,
      form validation, and authentication workflows within the registration system.
    </li>
    <li>
      Structured and managed application data using JSON files to handle user input,
      identity attributes, and API integration responses.
    </li>
    <li>
      Assisted with CIAM platform integrations to ensure consistent authentication
      behavior across multiple Medtronic digital applications.
    </li>
  </ul>

  <p className="projectTech">
    <strong>Tech:</strong> JavaScript, JSON, REST APIs, Git, Postman <br /> 
    <strong>IDE Used:</strong> VS Code
  </p>
</div>

</section>


    
  );
}

export default Projects;

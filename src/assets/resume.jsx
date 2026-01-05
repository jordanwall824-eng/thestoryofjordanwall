import resumePdf from "./JordanAWallResume2026.pdf";
import "./resume.css";

function Resume() {
  return (
    <section className="resumeSection">
      <div className="resumeHeader">
        <h2 className="resumeTitle">Resume</h2>
        <p className="resumeSubtitle">
          View my resume below or download a copy for later.
        </p>

        <div className="resumeActions">
          <a
            href={resumePdf}
            download="JordanWall_Resume.pdf"
            className="resumeButton primary"
          >
            Download PDF
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="resumeButton"
          >
            Open in New Tab
          </a>
        </div>
      </div>

      <div className="resumeViewer">
        <iframe
          src={resumePdf}
          title="Jordan Wall Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </section>
  );
}

export default Resume;


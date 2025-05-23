import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">INVIDI Technologies</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              Polished my skills as a <b>Full Stack</b> and <b>Devops</b> intern for 16 months, worked with <b>AWS, Terraform, Kubernetes, Kotlin,
               Vue.js, Postgres, Snyk, Datadog, Artifactory</b> and many more industry-standard tools
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Teaching Assistant</h3>
            <h5 className="vertical-timeline-element-subtitle">University of Alberta</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              I was one of the Lead TAs for CMPUT 201-Practical Programming Methodology. I gave lab lectures to students on topics of 
              <b> Bash</b>, <b>C</b>, working with VMs and implemations of Data structures and Algorithms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Feb 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Geek Squad Agent</h3>
            <h5 className="vertical-timeline-element-subtitle">Bestbuy</h5>
            <h5 className="vertical-timeline-element-subtitle">Edmonton, AB</h5>
            <p>
              Learnt hands on skills with devices by performing <b>hardware repairs</b>, <b>software debugging</b>, <b>system troubleshooting</b>.
              Worked on <b>communication</b> and <b>sales</b> skills by servicing thousands of customers 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2021 - May 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h5 className="vertical-timeline-element-subtitle">NEE YOU Trading</h5>
            <h5 className="vertical-timeline-element-subtitle">Johannesburg, South Africa</h5>
            <p>
            Worked on <b>Statistical Analysis, Automation, Data Governance, Data pipelines</b> using <b>R, Python, MongoDB, Java</b> and other tools
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUN 2019 - Current"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Private Tutor</h3>
            <h5 className="vertical-timeline-element-subtitle">Self-Employed</h5>
            <h5 className="vertical-timeline-element-subtitle">Remote</h5>
            <p>
              I worked as a private tutor for the over <b>5 years</b> now! I am very proud to say that I have taught over <b>100</b> students ranging from grade 3 all the way
              up to second year university students
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Other</h3>
            <h5 className="vertical-timeline-element-subtitle">Check out my <a href="https://www.linkedin.com/in/wjshi/">Linkedin</a> for details</h5>
            <p>
              I held multiple student leader and part time positions these past few years, including but not limited to: <b>Residence Floor Coordinator,
               Vice President of Schaffer Residence, VP External for UACS</b> and <b>VP Admin for UACS</b>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
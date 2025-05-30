import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Tableau",
    "Power BI",
    "Scikit-learn"
];

const labelsSecond = [
    "Snowflake",
    "Informatica IICS",
    "dbt",
    "Airflow",
    "AWS",
    "Azure",
    "GitLab CI/CD"
];

const labelsThird = [
    "OpenAI",
    "LLMs",
    "RAG Pipelines",
    "Hugging Face",
    "LlamaIndex",
    "Snowflake Cortex"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x" />
                    <h3>Data Engineering & Analytics</h3>
                    <p>I specialize in building scalable data pipelines, performing exploratory data analysis, and transforming complex datasets into actionable insights for stakeholders across domains including healthcare and enterprise.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x" />
                    <h3>Cloud Data Stack & Automation</h3>
                    <p>Experienced in designing ELT pipelines and automating data workflows using modern tools like Snowflake, dbt, and Airflow. I have implemented DevOps and CI/CD practices using GitLab and Informatica IICS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Platforms:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <h3>GenAI & LLM Integrations</h3>
                    <p>I have built enterprise-grade GenAI solutions using LLMs and Retrieval-Augmented Generation (RAG) to enhance access to clinical and business data. My work leverages tools like OpenAI, Hugging Face, and Snowflake Cortex.</p>
                    <div className="flex-chips">
                        <span className="chip-title">GenAI Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;

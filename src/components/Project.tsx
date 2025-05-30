import React from "react";
import mock01 from '../assets/images/mock01.png'; // Replace or add relevant images
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Professional Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={mock01} className="zoom" alt="ELT Pipeline" width="100%" />
                    <h2>End-to-End ELT Pipeline</h2>
                    <p><strong>Tech Stack:</strong> dbt, Snowflake, Airflow, SQL</p>
                    <p>
                        Built a complete ELT pipeline from scratch using Airflow for orchestration, Snowflake for warehousing, and dbt for transformations; designed staging, fact, and data mart layers with dimensional modeling.
                        Developed dbt macros and test suites, implemented Snowflake RBAC for secure access, and deployed DAGs in Airflow to automate model execution and enable robust monitoring.
                    </p>
                </div>

                <div className="project">
                    <img src={mock02} className="zoom" alt="Stock Market Analysis" width="100%" />
                    <h2>Stock Market Real-Time Data Analysis</h2>
                    <p><strong>Tech Stack:</strong> AWS (S3, Glue, Athena), SQL, Python, Apache Kafka</p>
                    <p>
                        Engineered a real-time data pipeline on AWS, using S3, Glue, and Athena for seamless data ingestion and transformation. Integrated Apache Kafka for streaming and developed Power BI dashboards connected to AWS data sources, delivering actionable insights to stakeholders.
                    </p>
                </div>

                <div className="project">
                    <img src={mock03} className="zoom" alt="Diabetes Readmission Prediction" width="100%" />
                    <h2>Predicting Readmission Rates for Diabetic Patients</h2>
                    <p><strong>Tech Stack:</strong> PySpark, SQL, GCP, Databricks</p>
                    <p>
                        Leveraged PySpark on Databricks and machine learning algorithms such as Random Forest, Linear Regression, and XGBoost to predict hospital readmission rates among diabetic patients. Utilized SMOTE to address class imbalance, achieving 87% model accuracy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;

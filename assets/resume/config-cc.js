// configuration file

const cvData = {
    // Personal info
    personalInfo: {
        name: "Juan C. Huillcas",
        title: "Junior Cloud Engineer | AWS | Infrastructure & Automation",
        email: "juan.huillcas.a@uni.pe",
        phone: "+51 989891835",
        linkedin: "https://www.linkedin.com/in/juan-carlos-huillcas/",
        github: "https://github.com/Carlos93U",
        website: "https://carlos93u.github.io/",
        location: "Lima, Peru",
    },

    // Profesional Profile
    profile:
        "Junior Cloud Engineer with an Electrical Engineering background and strong focus on cloud computing and infrastructure on AWS. Hands-on experience designing, deploying, and automating cloud-native architectures using services such as S3, EC2, IAM, CloudFront, and Infrastructure as Code. Familiar with serverless architectures, monitoring, and security best practices, with an emphasis on scalability, reliability, and cost optimization. Highly motivated to grow in cloud engineering, automation, and DevOps-oriented environments.",

    // Experience > to update later
    experience: [
        {
            position: "IA Cloud Solution Architect",
            company: "TechCorp Solutions",
            location: "Lima, Peru",
            period: "March 2022 - Present",
            achievements: [
                "Designed multi-cloud AI/ML architectures integrating AWS SageMaker, Azure ML, and Vertex AI, improving scalability and reducing costs by 30%",
                "Led the implementation of generative AI solutions (LLMs and RAG) for customer support and document analysis on AWS and Azure",
                "Developed hybrid MLOps pipelines with Kubeflow and MLflow, enabling automated deployment of over 25 production models",
                "Designed infrastructure following the AWS Well-Architected Framework with a focus on security, resilience, and operational efficiency"
            ]
        },
        {
            position: "Cloud & MLOps Engineer",
            company: "DataInnovate SAC",
            location: "Lima, Peru",
            period: "January 2020 - February 2022",
            achievements: [
                "Implemented MLOps platforms on AWS and Azure, reducing the model training and deployment cycle from weeks to hours",
                "Collaborated with data architects to design data lakes and AI pipelines using Glue, BigQuery, and Databricks",
                "Automated model versioning and monitoring with MLflow and Prometheus, improving traceability and regulatory compliance",
                "Integrated Infrastructure as Code (IaC) practices using Terraform and CloudFormation to standardize multi-environment deployments"
            ]
        },
        {
            position: "Data Engineer",
            company: "Analytics Pro",
            location: "Lima, Peru",
            period: "June 2018 - December 2019",
            achievements: [
                "Built ETL/ELT pipelines in Spark and AWS Glue processing over 1TB of data daily",
                "Developed demand forecasting and predictive maintenance models in collaboration with data science teams",
                "Optimized storage architectures and queries in Redshift and BigQuery"
            ]
        }
    ],

    // Certifications
    certifications: [
        {
            degree: "AWS Certified Solutions Architect Associate",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: June 03, 2026"
        },
        {
            degree: "AWS Certified Cloud Practitioner",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: September 09, 2025"
        },
        {
            degree: "AWS Certified AI Practitioner",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: October 01, 2025"
        }
    ],

    // Education
    education: [
        {
            degree: "Computer Science",
            institution: "Universidad Nacional de Ingeniería",
            location: "Lima, Peru",
            period: "2023 - Present",
            //additional: "Thesis: Design of Scalable Architectures for Machine Learning Models in the Cloud"
        },
        {
            degree: "Electrical Engineering",
            institution: "Universidad Nacional del Centro del Peru",
            location: "Junín, Peru",
            period: "2011-2015"
        }
    ],

    // Technical Skills
    skills: {
        "Cloud Platforms": [
            "AWS (EC2, S3, IAM, Lambda, CloudFront, CloudWatch, CloudFormation)",
            "Azure Fundamentals",
            "Google Cloud Platform Basics"
        ],
        "Cloud Architecture & Infrastructure": [
            "Infrastructure as Code (CloudFormation, Terraform – basics)",
            "Serverless Architectures, Scalable Cloud Architectures",
            "High Availability, Fault Tolerance, Cost Optimization"
        ],
        "DevOps & Automation": [
            "Automation Scripting, CI/CD Fundamentals",
            "Infrastructure Deployment, Configuration Management"
        ],
        "CI/CD & Observability": [
            "GitHub Actions, GitLab CI (basics), Jenkins (basics)",
            "Monitoring & Logging, AWS CloudWatch",
            "Prometheus (basics), Grafana (basics)"
        ],
        "Containers & Virtualization": [
            "Docker",
            "Containers",
            "Containerized Applications",
        ],
        "Programming & Scripting": [
            "Python",
            "Bash",
            "YAML"
        ],
        "Databases & Storage": [
            "PostgreSQL, MySQL, Amazon DynamoDB (basics)",
            "Cloud Storage Architectures"
        ],
        "Security & Networking (Foundational)": [
            "IAM Policies & Roles, Cloud Security Best Practices",
            "Networking Fundamentals (VPC concepts, access control)"
        ]
    },

    // Featured Projects
    projects: [
        {
            name: "Global Static Website on AWS (S3 & CloudFront)",
            description: "Deployed a secure, globally distributed static website on AWS using Infrastructure as Code. Implemented CDN caching with CloudFront, origin access control, and edge security with AWS WAF. Configured monitoring and logging with CloudWatch to ensure high availability and low latency content delivery across multiple regions.",
            technologies: "AWS S3, CloudFront, AWS WAF, CloudFormation, CloudWatch, Infrastructure as Code (IaC), CDN, Monitoring, HTML, CSS, JavaScript"
        },
        {
            name: "Serene Bot – Serverless Automation on AWS",
            description: "Developed a serverless automation bot deployed on AWS, leveraging managed cloud services to execute event-driven workflows. Implemented secure IAM roles and permissions, automated execution logic, and cloud-based deployment for reliable and scalable operation. Focused on automation, cloud integration, and maintainable infrastructure.",
            technologies: "AWS Lambda, IAM, Python, Serverless Architecture, Cloud Automation, Event-Driven Systems"
        },
        {
            name: "Cloud-Deployed PDF Query Application on AWS",
            description: "Designed and deployed a cloud-hosted application on AWS enabling secure PDF storage and query processing. Containerized the application with Docker and deployed it on AWS infrastructure, integrating REST APIs and caching mechanisms to improve performance and scalability. Focused on cloud deployment, automation, and secure access to cloud resources.",
            technologies: "AWS Lightsail, Docker, Flask, Python, Redis, REST APIs, Cloud Deployment, Automation"
        }
    ],

    // Additional Certifications
    additional_certifications: [
        "Udacity - AWS AI Practitioner Challenge",
        "CTIC UNI - AWS Architect 1",
        "CTIC UNI - Cloud Computing - AWS, Azure, Google Cloud",
        "AWS Academy Graduate - Machine Learning Foundations",
        "IBM SkillsBuild - Agile Explorer",
        "AWS Educate -  Introduction to Generative AI",
        "OpenCV - Mastering OpenCV with Python",
        "OpenCV - OpenCV Bootcamp",
        "IBM SkillsBuild - Artificial Intelligence Fundamentals",
        "Datapath - Machine Learning Engineer",
        "Datacamp - Deep Learning with PyTorch",
        "Datacamp - Transformer Models with PyTorch",
        "Association for Computing Machinery (ACM) - AWS AI Practitioner",
    ],

    // Languages
    languages: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "Intermediate" }
    ]
};

// Don't modify this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cvData;
}

// configuration file

const cvData = {
    // Personal info
    personalInfo: {
        name: "Juan C. Huillcas",
        title: "Junior Cloud & AI Engineer | AWS | Automation",
        email: "juan.huillcas.a@uni.pe",
        phone: "+51 989891835",
        linkedin: "https://www.linkedin.com/in/juan-carlos-huillcas/",
        github: "https://github.com/Carlos93U",
        website: "https://carlos93u.github.io/",
        location: "Lima, Peru",
    },

    // Profesional Profile
    profile:
        "Electrical Engineering professional specializing in Computer Science, focused on designing and deploying cloud-native and AI-powered solutions on AWS. I work with scalable architectures, automation, security controls, and data processing. Through personal and academic projects, I build end-to-end cloud architectures integrating AI inference, serverless services, monitoring, and best practices in cost, performance, resilience, and security. Motivated by learning, experimentation, and the impact of cloud-driven innovation.",

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
        "AI & Machine Learning": [
            "Python (NumPy, Pandas, Scikit-learn)",
            "Embeddings, RAG, text classification",
            "Computer vision basics, model evaluation"
        ],
        "MLOps (Foundational)": [
            "Docker",
            "Experiment tracking",
            "Metrics monitoring",
            "Model training pipelines",
            "CI/CD fundamentals"
        ],
        "Cloud Platforms": [
            "AWS (EC2, S3, IAM, Lambda, CloudFront, CloudWatch, CloudFormation)",
            "Azure Fundamentals",
            "GCP Basics"
        ],
        "Cloud Architecture & DevOps": [
            "Infrastructure as Code (Terraform basics, CloudFormation templates)",
            "Automation scripting",
            "Logging / Observability",
            "Scalable architectures"
        ],
        "CI/CD & Observability": [
            "GitHub Actions",
            "GitLab CI",
            "Jenkins (basics)",
            "Prometheus (basics)",
            "Grafana (basics)"
        ],
        "Programming & Scripting": [
            "Python",
            "Bash",
            "YAML"
        ],
        "Data & Analytics": [
            "SQL",
            "ETL concepts",
            "Data preprocessing",
            "Cloud storage architectures",
            "Basic data modeling"
        ],
        "Databases": [
            "PostgreSQL",
            "MySQL",
            "DynamoDB (basics)"
        ],
        "Core Competencies": [
            "cloud security",
            "cost optimization",
            "scalability",
            "observability",
            "automation",
            "CI/CD",
            "IaC",
            "serverless",
            "containerization",
            "monitoring"
        ]
    },

    // Featured Projects
    projects: [
        {
            name: "RAG-Enhanced PDF Query Application",
            description: "Developed a cloud-hosted application enabling PDF upload, text chunking and semantic search using RAG. Implemented embeddings, vector retrieval, and LLM-based context generation, improving knowledge extraction speed and accuracy. Containerized with Docker and deployed on AWS for scalable inference, integrating Flask APIs, Redis caching, and prompt optimization techniques.",
            technologies: "AWS Lightsail, Docker, Flask, Python, OpenAI API, Redis, Semantic Search, LLMs, Vector Indexing"
        },
        {
            name: "Global Static Website on AWS (S3 & CloudFront)",
            description: "Deployed a secure, globally-distributed static website on AWS using IaC (CloudFormation), implementing CDN caching, WAF edge protection, origin access control, and observability via CloudWatch, achieving low-latency delivery to US, CA, PE.",
            technologies: "AWS S3, CloudFront, AWS WAF, CloudFormation, CloudWatch, JavaScript, HTML, CSS"
        },
        {
            name: "Serene Bot – Serverless Automation on AWS",
            description: "Developed a serverless automation bot deployed on AWS, leveraging managed cloud services to execute event-driven workflows. Implemented secure IAM roles and permissions, automated execution logic, and cloud-based deployment for reliable and scalable operation. Focused on automation, cloud integration, and maintainable infrastructure.",
            technologies: "AWS Lambda, IAM, Python, Serverless Architecture, Cloud Automation, Event-Driven Systems"
        }
    ],

    // Additional Certifications
    additional_certifications: [
        "Udacity - AWS AI Practitioner Challenge",
        "CTIC UNI - AWS Architect 1",
        "AWS Academy Graduate - Machine Learning Foundations",
        "AWS Educate -  Introduction to Generative AI",
        "OpenCV - Mastering OpenCV with Python",
        "OpenCV - OpenCV Bootcamp",
        "CTIC UNI - Cloud Computing - AWS, Azure, Google Cloud",
        "IBM SkillsBuild - Artificial Intelligence Fundamentals",
        "IBM SkillsBuild - Agile Explorer",
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

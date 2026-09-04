// configuration file

const cvData = {
    // Personal info
    personalInfo: {
        name: "Juan C. Huillcas",
        title: "Junior AI Engineer | Generative AI | Machine Learning",
        email: "juan.huillcas.a@uni.pe",
        phone: "+51 989891835",
        linkedin: "https://www.linkedin.com/in/juan-carlos-huillcas/",
        github: "https://github.com/Carlos93U",
        website: "https://carlos93u.github.io/",
        location: "Lima, Peru",
    },

    // Profesional Profile
    profile:
        "Junior AI Engineer with an Electrical Engineering background and strong focus on machine learning, deep learning, and generative AI. Hands-on experience developing and deploying AI-driven applications, including computer vision models, retrieval-augmented generation (RAG) systems, and end-to-end inference pipelines. Proficient in Python-based ML frameworks and model evaluation, with experience deploying AI workloads on cloud platforms. Highly motivated to grow in applied AI, model development, and production-ready AI systems.",

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
            degree: "AWS Certified Machine Learning Associate",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: August 31, 2026"
        },
        {
            degree: "AWS Certified Solutions Architect Associate",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: June 03, 2026"
        },
        {
            degree: "AWS Certified AI Practitioner",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: October 01, 2025"
        },
        {
            degree: "AWS Certified Cloud Practitioner",
            institution: "Amazon Web Services",
            location: "Online",
            period: "Date issued: September 09, 2025"
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
            "Machine Learning algorithms",
            "Model training and evaluation",
            "Text classification",
            "Natural Language Processing (NLP)",
            "Embeddings and semantic search",
            "Retrieval-Augmented Generation (RAG)"
        ],
        "Deep Learning & Generative AI": [
            "Neural Networks",
            "Convolutional Neural Networks (CNN)",
            "Transformer-based models",
            "Large Language Models (LLMs)",
            "PyTorch",
            "TensorFlow / Keras",
            "Prompt engineering",
            "Inference pipelines"
        ],
        "Computer Vision": [
            "Image preprocessing",
            "Feature extraction",
            "Digit and object recognition",
            "OpenCV basics"
        ],
        "MLOps (Foundational)": [
            "Docker",
            "Model deployment",
            "Inference services",
            "Metrics monitoring",
            "CI/CD fundamentals for ML workflows"
        ],
        "Cloud Platforms": [
            "AWS (Lambda, S3, EC2, IAM)",
            "Serverless AI deployments",
            "Cloud-based inference"
        ],
        "Programming & Scripting": [
            "Python",
            "Bash",
            "YAML"
        ],
        "Data & Databases": [
            "SQL",
            "PostgreSQL",
            "MySQL",
            "Amazon DynamoDB (basics)",
            "Data preprocessing and handling"
        ],
        "DevOps & Automation (Supporting)": [
            "Git",
            "GitHub Actions",
            "Basic CI/CD pipelines",
            "Automation scripting"
        ]
    },

    // Featured Projects
    projects: [
        {
            "name": "RAG-Enhanced PDF Query Application",
            "description": "Developed an AI-powered application for PDF ingestion and semantic search using Retrieval-Augmented Generation (RAG). Implemented embeddings, vector-based retrieval, and LLM-driven responses, and deployed a containerized inference pipeline on AWS for scalable and reliable execution.",
            "technologies": "Python, RAG, Embeddings, Vector Retrieval, LLMs, OpenAI API, Semantic Search, Docker, Flask, Redis, AWS Lightsail"
        },
        {
            "name": "Serverless Education Content Moderation API",
            "description": "Built a serverless AI-driven content moderation API using NLP techniques for text classification. Deployed scalable inference endpoints on AWS with a focus on low-latency, security, and maintainability.",
            "technologies": "Python, Natural Language Processing (NLP), Text Classification, AWS Lambda, API Gateway, Serverless Architecture, Cloud Deployment"
        },
        {
            "name": "Serene Bot – Serverless Automation on AWS",
            "description": "Developed a serverless automation bot using event-driven architecture and Python-based workflows. Implemented secure IAM roles and deployed scalable automation services on AWS.",
            "technologies": "Python, Serverless Architecture, AWS Lambda, IAM, Event-Driven Systems, Cloud Automation"
        }
    ],

    // Additional Certifications
    additional_certifications: [
        "Udacity - AWS AI Practitioner Challenge",
        "Datapath – Machine Learning Engineer",
        "Datacamp – Deep Learning with PyTorch",
        "Datacamp – Transformer Models with PyTorch",
        "AWS Academy Graduate – Machine Learning Foundations",
        "AWS Educate – Introduction to Generative AI",
        "IBM SkillsBuild – Artificial Intelligence Fundamentals",
        "OpenCV – Mastering OpenCV with Python",
        "OpenCV – OpenCV Bootcamp",
        "Association for Computing Machinery (ACM) – AWS AI Practitioner",
        "CTIC UNI – Cloud Computing (AWS, Azure, Google Cloud)",
        "CTIC UNI – AWS Architect 1",
        "IBM SkillsBuild – Agile Explorer"
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

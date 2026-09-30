const baseUrl = import.meta.env.BASE_URL || '/';
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const portfolioData = {
  personal: {
    name: "S.B.M. Reazul Karim",
    initials: "RK",
    role: "Software Engineer",
    specialization: "Java, Spring Boot, Grails, ERP & Reporting Solutions",
    location: "Dhaka, Bangladesh",
    phone: "+880 1303-045825",
    email: "sbmreazul@gmail.com",
    linkedin: "Reazul Karim",
    linkedinUrl: "https://www.linkedin.com/search/results/all/?keywords=S.B.M.%20Reazul%20Karim",
    github: "Reazul94",
    githubUrl: "https://github.com/Reazul94",
    currentAffiliation: "Institute of Information and Communication Technology (IICT), BUET",
    resumeUrl: `${cleanBase}cv/S_B_M_Reazul_Karim_CV.pdf`,
    image: `${cleanBase}images/Reaz_Image.jpg`,
    summary:
      "Software Engineer with 4.5+ years of experience developing, enhancing, and supporting enterprise ERP, billing, customer-management, and reporting applications. Hands-on experience with Java, Spring Boot, Grails, Hibernate/GORM/JPA, Oracle, PL/SQL, Angular, and reporting technologies. Experienced in translating business and regulatory requirements into application features, database logic, reports, and production deployments, with a strong background in utility ERP systems, billing workflows, VAT/NBR-related solutions, database development, reporting, and production support."
  },

  stats: [
    {
      value: "4.5+",
      label: "Years Experience",
      detail: "Enterprise software, utility billing & reporting"
    },
    {
      value: "5",
      label: "Enterprise Platforms",
      detail: "KGDCL, BGDCL, SGCL, Billing Portal & Bizzness Roots"
    },
    {
      value: "3",
      label: "State Gas Utilities",
      detail: "Critical national utility systems via IICT, BUET"
    },
    {
      value: "2",
      label: "Organizations",
      detail: "IICT, BUET & The Databiz Software Limited"
    }
  ],

  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["Java", "Groovy", "C#", "JavaScript", "SQL", "PL/SQL"]
    },
    {
      category: "Backend & APIs",
      skills: ["Spring Boot", "Spring MVC", "Grails", ".NET", "REST API Development & Testing"]
    },
    {
      category: "Frameworks & ORM",
      skills: ["Hibernate", "GORM", "JPA", "Angular", "Thymeleaf"]
    },
    {
      category: "Databases & Data Objects",
      skills: [
        "Oracle 11g",
        "Microsoft SQL Server 2012",
        "Complex SQL Queries",
        "PL/SQL Functions & Procedures",
        "Database Views",
        "Materialized Views"
      ]
    },
    {
      category: "Enterprise Reporting",
      skills: ["Jasper Studio", "Jasper Reports", "iReport", "Crystal Reports"]
    },
    {
      category: "Tools & Deployment",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Linux Server", "WAR Deployment"]
    },
    {
      category: "Domain Knowledge",
      skills: [
        "Enterprise ERP",
        "Utility Billing Workflows",
        "Customer Management",
        "VAT/NBR Compliance",
        "Accounts Receivable",
        "Legal Case Tracking",
        "Production Client Support"
      ]
    }
  ],

  experiences: [
    {
      role: "Programmer",
      company: "Institute of Information and Communication Technology (IICT), BUET",
      location: "Dhaka, Bangladesh",
      period: "Sep 2022 - Present",
      type: "Full-Time",
      description:
        "Developing and maintaining enterprise ERP and billing functionality for Karnaphuli Gas Distribution Company Ltd. (KGDCL) and other gas distribution companies, supporting business-critical customer and operational workflows.",
      highlights: [
        "Develop and maintain enterprise ERP and billing functionality for Karnaphuli Gas Distribution Company Ltd. (KGDCL) and other gas distribution companies, supporting business-critical customer and operational workflows.",
        "Implemented customer management processes covering billing, disconnection, reconnection, load changes, customer type changes, and related service activities while preserving data consistency across interconnected modules.",
        "Designed and delivered a comprehensive Law Suit Management module for case registration, case status tracking, court information, panel-area management, lawyer registration, and follow-up activities.",
        "Created and customized operational and financial reports — including sales reports, ledgers, and accounts-receivable statements — using Jasper Studio and iReport according to client and management requirements.",
        "Developed and maintained configurable SMS and email templates for customer notifications, service updates, and other automated communications.",
        "Worked with Oracle databases and PL/SQL objects, including complex queries, functions, views, and materialized views, to support application features and reporting needs.",
        "Provided ongoing production support, investigated user-reported issues, coordinated with stakeholders, and delivered enhancements as business rules and client requirements evolved.",
        "Participated in Linux server deployment activities, including WAR deployment and application update verification."
      ],
      technologies: [
        "Java",
        "Groovy",
        "Grails",
        "Spring Boot",
        "Oracle 11g",
        "PL/SQL",
        "Hibernate/GORM",
        "Jasper Studio",
        "iReport",
        "Linux Server"
      ]
    },
    {
      role: "Programmer",
      company: "The Databiz Software Limited",
      location: "Mirpur DOHS, Dhaka",
      period: "Nov 2021 - Sep 2022",
      type: "Full-Time",
      description:
        "Contributed to Bizzness Roots 2.0, an ERP solution supporting sales, purchase, VAT, and other core business processes for multiple clients.",
      highlights: [
        "Contributed to Bizzness Roots 2.0, an ERP solution supporting sales, purchase, VAT, and other core business processes for multiple clients.",
        "Designed and developed client-specific operational and management reports using Crystal Reports, translating business requirements into accurate report layouts and data logic.",
        "Worked on VAT-related features and reports to support National Board of Revenue (NBR) requirements and client compliance workflows.",
        "Developed new sales, purchase, and related ERP features based on customer requirements and existing application architecture.",
        "Implemented CRUD operations and data-grid functionality to improve the efficiency of master-data and transaction management.",
        "Provided technical support to clients, diagnosed application and reporting issues, and delivered fixes or configuration updates."
      ],
      technologies: [
        "C#",
        ".NET",
        "Microsoft SQL Server 2012",
        "T-SQL",
        "Crystal Reports",
        "Data Grids",
        "VAT / NBR Workflows"
      ]
    }
  ],

  projects: [
    {
      id: "kgdcl-erp",
      title: "KGDCL ERP System",
      client: "Karnaphuli Gas Distribution Company Ltd.",
      url: "https://erp.kgdcl.gov.bd/",
      scope:
        "Enterprise ERP platform for Karnaphuli Gas Distribution Company Ltd., supporting customer administration, billing-related service workflows, legal-case management, operational reporting, notifications, and day-to-day production support.",
      techStack: [
        "Groovy",
        "Grails Framework",
        "Oracle Database",
        "PL/SQL",
        "Hibernate/GORM",
        "Thymeleaf",
        "Jasper Studio",
        "iReport",
        "Linux Server",
        "WAR Deployment"
      ],
      contributions: [
        "Develop and enhance customer-service workflows including billing activities, disconnection, reconnection, load changes, customer-type changes, and related utility operations.",
        "Perform application-facing Oracle database work, including complex SQL and PL/SQL queries, functions, views, materialized views, data investigation, and database logic required by ERP modules and reports.",
        "Implemented the Law Suit Management module for case registration, status updates, court information, panel-area administration, lawyer registration, and follow-up tracking.",
        "Design and customize operational and financial reports with Jasper Studio and iReport, including sales, ledger, and accounts-receivable reports based on stakeholder requirements.",
        "Maintain server-rendered screens with Thymeleaf, support Groovy/Grails backend functionality, troubleshoot production issues, and deploy application updates as WAR files on Linux servers."
      ],
      isLive: true
    },
    {
      id: "kgdcl-billing-portal",
      title: "KGDCL Billing Portal",
      client: "Karnaphuli Gas Distribution Company Ltd.",
      url: "https://billing.kgdcl.gov.bd/",
      scope:
        "Web-based billing portal that provides KGDCL customers with access to billing information and supports related online service operations.",
      techStack: [
        "Java",
        "Spring Boot",
        "Thymeleaf",
        "Oracle Database",
        "Spring MVC/JPA",
        "REST APIs",
        "Server-Side Rendered Web Interfaces"
      ],
      contributions: [
        "Develop and maintain Spring Boot components that connect portal workflows with billing data stored in Oracle Database.",
        "Build and update Thymeleaf-based user interfaces for presenting billing information and supporting customer-facing service actions.",
        "Write and optimize Oracle queries used by portal features, investigate data discrepancies, and coordinate application and database fixes.",
        "Support API development, functional testing, issue resolution, deployment verification, and continuous enhancement of the production portal."
      ],
      isLive: true
    },
    {
      id: "sgcl-erp",
      title: "SGCL ERP System",
      client: "Sundarban Gas Company Limited",
      url: "https://erp.sgcl.org.bd/",
      scope:
        "Enterprise ERP platform for Sundarban Gas Company Limited, supporting customer and operational processes, reporting, and ongoing application support.",
      techStack: [
        "Java",
        "Spring Boot",
        "Angular",
        "Oracle Database",
        "Spring MVC/JPA",
        "REST APIs",
        "Jasper Reporting Tools"
      ],
      contributions: [
        "Develop backend services and business functionality with Spring Boot and expose REST APIs for integration with the Angular frontend.",
        "Contribute to Angular screens and data-driven workflows used in customer-management and operational modules.",
        "Develop and maintain Oracle SQL/PL/SQL queries and database objects needed for application processing, reporting, and issue investigation.",
        "Create or update business reports, test end-to-end functionality, resolve client issues, and support production enhancements."
      ],
      isLive: true
    },
    {
      id: "bgdcl-erp",
      title: "BGDCL ERP System",
      client: "Bakhrabad Gas Distribution Company Ltd.",
      url: null,
      scope:
        "ERP implementation and continuing application support for Bakhrabad Gas Distribution Company Ltd., adapting shared gas-utility processes to organization-specific operational and reporting requirements.",
      techStack: [
        "Groovy",
        "Grails Framework",
        "Oracle Database",
        "PL/SQL",
        "Hibernate/GORM",
        "Thymeleaf",
        "Jasper Studio",
        "iReport",
        "Linux Server",
        "WAR Deployment"
      ],
      contributions: [
        "Develop and maintain customer, service, and operational functionality using the existing Grails-based ERP architecture.",
        "Handle Oracle database activities for application features and reporting, including SQL/PL/SQL development, query analysis, functions, views, materialized views, and data-level troubleshooting.",
        "Prepare and modify iReport/Jasper reports to reflect BGDCL-specific business rules, formats, and management information needs.",
        "Investigate client-reported issues, implement organization-specific enhancements, validate fixes, and support production releases and ongoing system operation."
      ],
      isLive: false
    },
    {
      id: "bizzness-roots",
      title: "Bizzness Roots 2.0",
      client: "The Databiz Software Limited (Commercial Clients)",
      url: null,
      scope:
        "Commercial ERP solution supporting sales, purchase, VAT, reporting, and client-specific business processes for multiple organizations.",
      techStack: [
        "C#",
        ".NET",
        "Microsoft SQL Server 2012",
        "T-SQL",
        "Crystal Reports",
        "Data-Grid Business Interfaces"
      ],
      contributions: [
        "Developed sales, purchase, VAT, and related ERP features according to client requirements and the application’s existing .NET architecture.",
        "Implemented CRUD operations and data-grid workflows for master data and business transactions.",
        "Designed and customized Crystal Reports by translating operational requirements into report layouts, SQL queries, calculations, and business-ready outputs.",
        "Worked with SQL Server data and queries to support application logic, reporting, issue diagnosis, and client-specific enhancements, including NBR-aligned VAT requirements.",
        "Provided technical support, reproduced application and reporting problems, delivered fixes, and assisted clients with day-to-day system use."
      ],
      isLive: false
    }
  ],

  domainSolutions: [
    {
      title: "Utility Billing & Lifecycle Management",
      icon: "Gauge",
      description:
        "End-to-end customer operations including billing calculations, disconnection, reconnection, load adjustments, and customer category shifts while ensuring data consistency across interdependent modules."
    },
    {
      title: "Law Suit Management System",
      icon: "Scale",
      description:
        "Comprehensive legal case registration, court information tracking, lawyer records, panel-area administration, status updates, and hearing follow-up activities."
    },
    {
      title: "NBR VAT & Regulatory Compliance",
      icon: "ShieldCheck",
      description:
        "Implementation of sales, purchase, and transactional features and reports compliant with National Board of Revenue (NBR) statutory standards."
    },
    {
      title: "High-Performance Data & Reporting Engines",
      icon: "FileSpreadsheet",
      description:
        "Architecting complex Oracle PL/SQL materialized views, functions, stored procedures, and financial statements (ledgers, accounts receivable, sales reports) in Jasper Studio, iReport, and Crystal Reports."
    }
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "International Islamic University Chittagong (IIUC)",
      location: "Chittagong, Bangladesh",
      period: "2016 - 2021",
      result: "CGPA: 3.647 out of 4.00",
      highlights: [
        "Rigorous coursework in algorithms, data structures, database management systems, software engineering, and mathematical analysis.",
        "Completed thesis on Machine Learning for customer churn forecasting."
      ]
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Feni Polytechnic Institute",
      location: "Feni, Bangladesh",
      period: "2007 - 2011",
      result: "CGPA: 3.12 out of 4.00",
      highlights: [
        "Foundation in engineering principles, technical drafting, mechanics, and analytical troubleshooting."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Ghorashal Urea Sar Karkhana High School and College",
      location: "Bangladesh",
      period: "2007",
      result: "GPA: 4.06 out of 5.00",
      highlights: ["Science curriculum with emphasis on mathematics and physics."]
    }
  ],

  research: {
    title: "Forecasting Customer Churn with Machine Learning Approaches",
    role: "Undergraduate Thesis / Research",
    institution: "International Islamic University Chittagong",
    points: [
      "Studied machine-learning approaches for predicting customer churn and developed a predictive-system concept for identifying customers with a higher likelihood of churn."
    ]
  },

  certifications: [
    {
      title: "ASP.NET Web Application Course",
      organization: "BITM, BASIS",
      location: "Golpahar, Chittagong",
      period: "Aug 2018 - Oct 2018",
      topics: [
        "Advanced C#",
        "Object-Oriented Programming (OOP)",
        "ASP.NET Windows Applications",
        "ASP.NET Web Forms",
        "ASP.NET MVC"
      ]
    }
  ],

  additionalExperience: [
    {
      role: "Teaching Assistant",
      institution: "International Islamic University Chittagong",
      location: "Kumira, Chittagong",
      period: "Jul 2021 - Dec 2021",
      supervisor: "Dr. Jamshed Alam Patwary, Assistant Professor",
      summary: "Supported academic assessment, laboratory sessions, practical coursework, and student presentations.",
      keySubjects: ["Technical Writing and Presentation", "Mathematical Analysis", "Computer Science"],
      highlights: [
        "Supported academic assessment, laboratory sessions, practical coursework, and student presentations.",
        "Evaluated examination papers and supported academic assessment activities.",
        "Assisted students during laboratory sessions and helped facilitate practical coursework.",
        "Supervised student presentations during laboratory examinations."
      ]
    }
  ]
};

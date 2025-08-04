//system-design
import systemDesignCertificate from "../assets/img/trainings/system-design/certificate.jpg"
import requirementsGatheringImg from "../assets/img/trainings/system-design/requirements-gathering.png"
import qualityAttributesImg from "../assets/img/trainings/system-design/quality-attributes.png"
import architectureBuildingBlocksImg from "../assets/img/trainings/system-design/architecture-building-blocks.png"
import apiDesignImg from "../assets/img/trainings/system-design/api-design.png"
import softwareArchitecturesImg from "../assets/img/trainings/system-design/software-architectures.png"
import dataStorageGlobalScaleImg from "../assets/img/trainings/system-design/data-storage-global-scale.png"
import eventStreamProcessingImg from "../assets/img/trainings/system-design/event-stream-proccessing.png"
import bigDataArchitecturePatternsImg from "../assets/img/trainings/system-design/big-data-architecture-patterns.png"

//meta-frontend
import metaFrontendCertificate from "../assets/img/trainings/meta-frontend/certificate.jpeg"
import accesibility from "../assets/img/trainings/meta-frontend/accessibility.jpg"
import apiIntegration from "../assets/img/trainings/meta-frontend/api-integration.png"
import git from "../assets/img/trainings/meta-frontend/git.png"
import github from "../assets/img/trainings/meta-frontend/github.jpg"
import reactStateManagement from "../assets/img/trainings/meta-frontend/react-state-management.gif"
import responsiveWebDesign from "../assets/img/trainings/meta-frontend/responsive-web-design.gif"
import unitTesting from "../assets/img/trainings/meta-frontend/unit-testing.webp"
import semanticHTML from "../assets/img/trainings/meta-frontend/semantic-html.png"

//meta-backend
import metaBackendCertificate from "../assets/img/trainings/meta-backend/certificate.jpeg"
import databaseDesign from "../assets/img/trainings/meta-backend/database-design.webp"
import djangoRESTFramework from "../assets/img/trainings/meta-backend/django-rest-framework.png"
import djangoWebFramework from "../assets/img/trainings/meta-backend/django-web-framework.webp"
import python from "../assets/img/trainings/meta-backend/python.png"
import restAPIDesign from "../assets/img/trainings/meta-backend/resi-api-design.jpg"
import pytest from "../assets/img/trainings/meta-backend/pytest.svg"

//ibm-node-express
import IBMNodeExpressCertificate from "../assets/img/trainings/ibm-node-express/certificate.jpeg"
import expressWebFramework from "../assets/img/trainings/ibm-node-express/express-web-framework.jpg"
import nodeArchitecture from "../assets/img/trainings/ibm-node-express/node-architecture.png"
import npm from "../assets/img/trainings/ibm-node-express/npm.png"
import syncAndAsyncProgramming from "../assets/img/trainings/ibm-node-express/syncAndAsyncProgramming.png"


const trainings = [
  {
    name: "Design of Large Scale Systems",
    about: `The Design of Large Scale Systems is a rigorous course that teaches learners how to architect real-life systems that scale to millions of daily users, as well as process and store petabytes of data. By the end of the course, the learners are equipped to take an ambiguous and high-level requirement and go through all the stages of a system design, all the way to its final Software Architecture.`,
    certificate: systemDesignCertificate,
    certificateURL: "https://www.udemy.com/certificate/UC-3c2d9817-da3e-4e16-88af-691be227ecf0/",
    skills: [
      {
        name: "Requirements Gathering",
        about: "Translating vague product needs into formal system requirements by identifying functional and non-functional requirements and setting clear system goals.",
        img: requirementsGatheringImg,
      },
      {
        name: "Most Important Quality Attributes",
        about: "Key system quality attributes such as performance, scalability, availability and fault tolerance, and how they shape architectural decisions.",
        img: qualityAttributesImg,
      },
      {
        name: "API Design",
        about: "Gained practical knowledge of designing robust, intuitive, and scalable APIs that serve as the contracts between system components and external consumers. Different API Architectures such as RPC, REST",
        img: apiDesignImg,
      },
      {
        name: "Building Blocks of Large Scale Systems",
        about: "Core components of large scale systems — Load Balancers, API Gateway, Content Delivery Networks(CDNs), Message Brokers, and more—and how they achieve system quality attributes.",
        img: architectureBuildingBlocksImg,
      },
      {
        name: "Data Storage at Global Scale",
        about: "Trade-offs in distributed storage systems, covering replication, sharding, and consistency models such as Strong Consistency VS Eventual Consistency and when each is appropriate. Stategies for storing unstructured data on large scale such Distributed File System(DFS) and Object Storage",
        img: dataStorageGlobalScaleImg,
      },
      {
        name: "Software Architecture Patterns",
        about: "Various architectural patterns like 3 Tier Architecture (monololith), microservices, event-driven architecture, and how to choose the right one depending on the system.",
        img: softwareArchitecturesImg,
      },
      {
        name: "Event Stream Processing",
        about: "Stategies for processing infinite streams of events such as Tumbling Window, Hopping Window, Sliding Window and Session Window. Late Event handling strategies such as Discarding, Grace Period and Watermarking.",
        img: eventStreamProcessingImg,
      },
      {
        name: "Big Data Architecture Patterns",
        about: "Patterns such as batch processing for historical analysis of data, real time processing for real time analytics and the lambda architecture that utilizes both batch processing and real time processing.",
        img: bigDataArchitecturePatternsImg,
      },
    ],
    capstone: {}
  },
  {
    name: "Meta Frontend Developer",
    about: `The Meta Front-End Developer Professional Certificate is a series of 9 in-depth courses covering modern front-end web development. It focuses on HTML, CSS, JavaScript, and the React library. The program concludes with a hands-on capstone project demonstrating real-world skills.`,
    certificate: metaFrontendCertificate,
    certificateURL: "https://www.coursera.org/account/accomplishments/professional-cert/LX943UK8UA78",
    skills: [
      {
        name: "Semantic HTML",
        about: "Use of meaningful HTML tags to improve accessibility and SEO, enhancing both human and machine understanding of web content.",
        img: semanticHTML,
      },
      {
        name: "Responsive Web Design",
        about: "Adaptive layouts using media queries and flexible units to ensure seamless experiences across various screen sizes and devices.",
        img: responsiveWebDesign,
      },
      {
        name: "State Management in React",
        about: "Complex state management using hooks such as useState, useReducer, and the Context API to create dynamic interfaces.",
        img: reactStateManagement,
      },
      {
        name: "API Integration",
        about: "Integration of frontend with backend using the fetch browser API",
        img: apiIntegration,
      },
      {
        name: "Accesibility",
        about: "Inclusive web experiences using semantic tags and ARIA roles, and keyboard navigation support for users with limited abilities.",
        img: accesibility,
      },
      {
        name: "Version Control",
        about: "Version control with git, managing project history in collaborative development environments.",
        img: git,
      },
      {
        name: "GitHub",
        about: "Remote hosting of git repositories and collaboration",
        img: github,
      },
      {
        name: "Unit Testing",
        about: "Unit testing of React components using Jest and React Testing Library to ensure reliability, catch bugs, and maintain code quality.",
        img: unitTesting,
      },
    ],
    capstone: {
      github: "https://github.com/ASPhilemon/meta-frontend-capstone.git",
      live: "https://meta-frontend.asphilemon.com",
    },
  },
  {
    name: "Meta Backend Developer",
    about: `The Meta Back-End Developer Professional Certificate consists of 9 courses focused on backend development using Python, the Django Web Framework, Django REST Framework, and MySQL. The curriculum ends with a practical capstone project.`,
    certificate: metaBackendCertificate,
    certificateURL: "https://www.coursera.org/account/accomplishments/professional-cert/DNNNULUMUGF4",
    skills: [
      {
        name: "Programming in Python",
        about: "Gained mastery of Python fundamentals, object-oriented programming, error handling, and scripting for backend services.",
        img: python,
      },
      {
        name: "Django Web Framework",
        about: "Development of full-featured web applications using Django's built-in tools for routing, templating, forms, and authentication.",
        img: djangoWebFramework,
      },
      {
        name: "Django REST Framework",
        about: "Development of scalable REST APIs with Django REST Framework, including serialization, viewsets, and token-based authentication.",
        img: djangoRESTFramework,
      },
      {
        name: "Database Design",
        about: "Database normalization for efficient transactional data storage and retrieval, Django Object Relation Mapper(ORM) built in tool to abstract raw SQL",
        img: databaseDesign,
      },
      {
        name: "REST API Design",
        about: "Learned best practices in structuring and documenting REST APIs, including endpoint conventions and HTTP status codes.",
        img: restAPIDesign,
      },
      {
        name: "Unit Testing",
        about: "Unit testing with Pytest to validate backend logic, models, and endpoints, ensuring system correctness.",
        img: pytest,
      },
    ],
    capstone: {
      github: "https://github.com/ASPhilemon/meta-backend-capstone.git",
    },
  },
  {
    name: "IBM Developing Backend Apps With Nodejs & Express",
    about: `This intermediate-level IBM course equips learners with practical skills in building server-side applications using Node.js and the Express.js framework. It emphasizes the architecture of Node and core backend concepts.`,
    certificate: IBMNodeExpressCertificate,
    certificateURL: "https://coursera.org/verify/pywwsdpv3tln",
    skills: [
      {
        name: "Nodejs Architecture",
        about: "Learned Node.js internals such as the call stack, event loop, event queue, and the libuv thread pool for non-blocking I/O.",
        img: nodeArchitecture,
      },
      {
        name: "Asyncronous Programming",
        about: "Asynchronous I/O operation using callback based APIs, Promises, and async/await patterns.",
        img: syncAndAsyncProgramming,
      },
      {
        name: "Express Web Framework",
        about: "Route handling, middlewares and global error handling in Express apps",
        img: expressWebFramework,
      },
      {
        name: "Package Management",
        about: "Management of project dependencies with npm, setting up and running scripts via package.json.",
        img: npm,
      },
    ],
    capstone: {},
  },
];


export default trainings
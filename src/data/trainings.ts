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
    name: "Meta Frontend Developer",
    about: `The Meta Front-End Developer Professional Certificate is a series of 9 in-depth courses covering modern front-end web development. It focuses on HTML, CSS, JavaScript, and the React library. The program concludes with a hands-on capstone project demonstrating real-world skills.`,
    certificate: metaFrontendCertificate,
    skills: [
      {
        name: "Semantic HTML",
        about: "Applied meaningful HTML tags to improve accessibility and SEO, enhancing both human and machine understanding of web content.",
        img: semanticHTML,
      },
      {
        name: "Responsive Web Design",
        about: "Implemented adaptive layouts using media queries and flexible units to ensure seamless experiences across various screen sizes and devices.",
        img: responsiveWebDesign,
      },
      {
        name: "State Management in React",
        about: "Handled complex state in React applications using hooks like useState, useReducer, and the Context API to create dynamic, responsive interfaces.",
        img: reactStateManagement,
      },
      {
        name: "API Integration",
        about: "Integrated RESTful APIs into React apps using fetch and async/await to handle real-time data fetching and client-server communication.",
        img: apiIntegration,
      },
      {
        name: "Accesibility",
        about: "Built inclusive web experiences by applying ARIA roles, semantic tags, and keyboard navigation support for users of all abilities.",
        img: accesibility,
      },
      {
        name: "Version Control",
        about: "Utilized Git for source control—tracking changes, branching, and managing project history in collaborative development environments.",
        img: git,
      },
      {
        name: "GitHub",
        about: "Collaborated on projects using GitHub by managing repositories, handling pull requests, and participating in code reviews.",
        img: github,
      },
      {
        name: "Unit Testing",
        about: "Wrote unit tests for React components using Jest and React Testing Library to ensure reliability, catch bugs, and maintain code quality.",
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
    skills: [
      {
        name: "Programming in Python",
        about: "Gained mastery of Python fundamentals, object-oriented programming, error handling, and scripting for backend services.",
        img: python,
      },
      {
        name: "Django Web Framework",
        about: "Built full-featured web applications using Django’s built-in tools for routing, templating, forms, and authentication.",
        img: djangoWebFramework,
      },
      {
        name: "Django REST Framework",
        about: "Developed scalable RESTful APIs with Django REST Framework, including serialization, viewsets, and token-based authentication.",
        img: djangoRESTFramework,
      },
      {
        name: "Database Design",
        about: "Designed normalized relational databases and structured schemas for efficient data retrieval and integrity using SQL and Django ORM.",
        img: databaseDesign,
      },
      {
        name: "REST API Design",
        about: "Learned best practices in structuring and documenting REST APIs, including endpoint conventions and HTTP status codes.",
        img: restAPIDesign,
      },
      {
        name: "Unit Testing",
        about: "Wrote and executed unit tests with Pytest to validate backend logic, models, and endpoints, ensuring system reliability.",
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
    skills: [
      {
        name: "Nodejs Architecture",
        about: "Explored Node.js internals such as the call stack, event loop, event queue, and the libuv thread pool for non-blocking I/O.",
        img: nodeArchitecture,
      },
      {
        name: "Synchronous & Asyncronous Programming",
        about: "Handled both synchronous and asynchronous operations using callbacks, Promises, and async/await patterns in Node.js.",
        img: syncAndAsyncProgramming,
      },
      {
        name: "Express Web Framework",
        about: "Built RESTful APIs and middleware pipelines using Express.js, handling routes, errors, and server responses.",
        img: expressWebFramework,
      },
      {
        name: "Package Management",
        about: "Managed project dependencies using npm, configured scripts via package.json, and worked with common Node.js packages.",
        img: npm,
      },
    ],
    capstone: {},
  },
];


export default trainings
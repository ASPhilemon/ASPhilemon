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
    about: `The Meta Front-End developer professional
    certificate is a series of 9 courses on front-endweb
    development with an in-depth dive into HTML, CSS,
    JavaScript and the React library.The certificate culminates
    in a hands-on capstone project.`,
    certificate: metaFrontendCertificate,
    skills:[
      {
        name: "Semantic HTML",
        about: "Using the right HTML jobs for the right job, making pages more understandable to both humans and machines",
        img: semanticHTML
      },
      {
        name: "Responsive Web Design",
        about: "Adapting the layout of a website for different screen sizes and resolutions",
        img: responsiveWebDesign
      },
      {
        name: "State Management in React",
        about: "How to manage state changes in a react app with hooks like useState, useReducer and the context API",
        img: reactStateManagement
      },
      {
        name: "API Integration",
        about: "How to integrate a react app with a REST API.",
        img: apiIntegration
      },
      {
        name: "Accesibility",
        about: "Making web content available to users of all abilities",
        img: accesibility
      },
      {
        name: "Version Control",
        about: "Source control using GIT",
        img: git
      },
      {
        name: "GitHub",
        about: "How to collaborate effectively with a team on GitHub",
        img: github
      },
      {
        name: "Unit Testing",
        about: "Carrying out unit tests of react components using Jest and React Testing Library ",
        img: unitTesting
      },
    ],
    capstone: {
      github: "https://github.com/ASPhilemon/meta-frontend-capstone.git",
      live: "https://meta-frontend.asphilemon.com"
    }

  },
  {
    name: "Meta Backend Developer",
    about: `The Meta Back-End developer professional certificate is
    a series of 9 courses on backendweb development with a focus on python,
    Django Web framework, Django Rest Framework& MySQL database.
    The certificate culminates in a hands-on capstone project`,
    certificate: metaBackendCertificate,
    skills:[
      {
        name: "Programming in Python",
        about: "Basic to adavanced python concepts, object oriented programming in python",
        img: python
      },
      {
        name: "Django Web Framework",
        about: "How to work with Django Web Framework",
        img: djangoWebFramework
      },
      {
        name: "Django REST Framework",
        about: "How to work with Django REST Framework",
        img: djangoRESTFramework
      },
      {
        name: "Database Design",
        about: "How to design a database",
        img: databaseDesign
      },
      {
        name: "REST API Design",
        about: "How to Design a REST API",
        img: restAPIDesign
      },
      {
        name: "Unit Testing",
        about: "Carrying out unit tests with Pytest",
        img: pytest
      },
    ],
    capstone: {
      github: "https://github.com/ASPhilemon/meta-backend-capstone.git",
    }

  },
  {
    name:"IBM Developing Backend Apps With Nodejs & Express",
    about: `The IBM ​Developing Back-End Apps with Node.js and Express is
    an intermediate-level course designed to equip learners with
    practical skills in building server-side applications using 
    Node.js and Express.js.`,
    certificate: IBMNodeExpressCertificate,
    skills:[
      {
        name: "Nodejs Architecture",
        about: "The differeng components of a nodejs runtime; the event queue, callstack, the event loop and libuv thread pool",
        img: nodeArchitecture
      },
      {
        name: "Synchronous & Asyncronous Programming",
        about: "How to work with synchronous and asynchronous code in nodejs using callbacks, promises & async/await",
        img: syncAndAsyncProgramming
      },
      {
        name: "Express Web Framework",
        about: "How to work with Express Web Framework",
        img: expressWebFramework
      },
      {
        name: "Package Management",
        about: "How to work with package.json and npm package manager",
        img: npm
      },
    ],
    capstone: {}
  },
  
]

export default trainings
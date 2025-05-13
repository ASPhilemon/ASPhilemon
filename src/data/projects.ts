import growthspring from "../assets/img/projects/growthspring.png"
import skilline from "../assets/img/projects/skilline.png"

const projects = [
  {
    name: "GrowthSpring Records Management System",
    overview: "GrowthSpring is an internal investment club composed of 50 - 100 members focussed on saving collectively on monthly basis and giving out loans at lower rates to it’s members.",
    objective: "The project involved building a REST API backend to handle user requests, a personalized member dashboard and an admin dashboard for managing member records.",
    stack:[
      {
        name: "Node",
        purpose: "The backend was developed in the Javascript language and executed with Node.js Runtime",
      },
      {
        name: "Express",
        purpose: "Express.js web framework was utlized for routing and middleware support during the request lifecycle.",
      },
      {
        name: "MongoDB",
        purpose: "MongoDB flexible schema database was utilized for persisting user data: profile data, loans, deposits etc",
      },
      {
        name: "React",
        purpose: "Utlilized React & React Bootstrap for building components for the member and admin dashboard UIs",
      },
      {
        name: "Jest",
        purpose: "Utlilized Jest for unit testing of components.",
      },
      {
        name: "React Testing Library",
        purpose: "Utlilized React Testing Library for unit testing react components.",
      },

    ],
    github: "https:github.com/ASPhilemon/dash-growthspring",
    live: "https://dash.growthspringers.com",
    photo: growthspring
  },
  {
    name: "Skilline Landing Page",
    overview: "Skilline is an engaging platform that enhances learning through interactive and immersive experiences.",
    objective: "The project involved transating figma landing page for Skilline Educational platform into a resposive web page",
    stack:[
      {
        name: "React",
        purpose: "Utlilized React and React Bootstrap for building page components ",
      },
      {
        name: "React Testing Library",
        purpose: "Utlilized React Testing Library and Jest for unit testing react components.",
      },
    ],
    github: "https:github.com/ASPhilemon/skilline",
    live: "https://skilline.asphilemon.com",
    photo: skilline
  },
]

export default projects
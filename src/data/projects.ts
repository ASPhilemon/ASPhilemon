import growthspring from "../assets/img/projects/growthspring.png"
import skilline from "../assets/img/projects/skilline.png"

const projects = [
  {
    name: "GrowthSpring Records Management System",
    overview: "GrowthSpring is a private investment club with 50–100 members, focused on collective monthly savings and issuing low-interest loans to members.",
    objective: "This project involved building a full-stack web application, including a robust REST API for managing user requests, a personalized dashboard for members, and an admin panel for overseeing all club operations.",
    stack: [
      {
        name: "Node",
        purpose: "Implemented the backend using JavaScript executed in the Node.js runtime for efficient and scalable performance.",
      },
      {
        name: "Express",
        purpose: "Used Express.js for structuring server routes, handling middleware, and simplifying the API development process.",
      },
      {
        name: "MongoDB",
        purpose: "Leveraged MongoDB's flexible schema to store and manage dynamic data such as user profiles, loan records, savings history, and transactions.",
      },
      {
        name: "React",
        purpose: "Built responsive and dynamic member/admin dashboards using React and React Bootstrap for a clean, user-friendly experience.",
      },
      {
        name: "Jest",
        purpose: "Implemented unit testing with Jest to ensure component stability and catch regressions early in development.",
      },
    ],
    github: "https://github.com/ASPhilemon/api-growthspring",
    live: "https://dash.growthspringers.com",
    photo: growthspring,
  },
  {
    name: "Skilline Landing Page",
    overview: "Skilline is an innovative education platform designed to make learning more engaging through interactive, modern design.",
    objective: "This project entailed transforming a Figma prototype into a pixel-perfect, responsive landing page for Skilline’s educational platform.",
    stack: [
      {
        name: "React",
        purpose: "Utilized React and React Bootstrap to build modular, responsive UI components with clean and maintainable code.",
      },
      {
        name: "Jest",
        purpose: "Employed Jest with React Testing Library to write unit tests that ensured component reliability and user interface consistency.",
      },
    ],
    github: "https://github.com/ASPhilemon/skilline",
    live: "https://skilline.asphilemon.com",
    photo: skilline,
  },
];


export default projects
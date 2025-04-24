import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Trainings from "./components/trainings";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page(){
  return(
    <>
      <Header/>
      <About/>
      <Projects/>
      <Trainings/>
      <Contact/>
      <Footer/>
    </>
  )
}
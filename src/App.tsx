import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Projects from "./components/Projects";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="h-auto w-full bg-gradient-to-tl from-orange-100 to-sky-100 mx-auto text-center">
      <Navbar />
      <div
        className="h-dvh lg:relative lg:-top-20 w-full text-center"
        data-aos="fade-up"
      >
        <div className="flex items-center text-center h-full w-full justify-center">
          <div className="text-md font-normal lg:text-2xl  lg:mx-48 items-center flex flex-col">
            <span className="">Bem-vindos(as) ao meu portfólio. </span>
            <span className="">
              Me chamo João Augusto e sou desenvolvedor Full Stack com React e Typescript.
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center ">
        <h2 className="text-2xl font-semibold">Essas são algumas das tecnologias que tenho familiaridade:</h2>
        <ul className="text-start grid-cols-2 grid gap-x-4 [&>*]:text-xl my-12">
          <li>React</li>  
          <li>Typescript (Javascript)</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          <li>Linux</li>
          <li>Git</li>
          <li>CI/CD (GitHub Actions)</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="flex flex-col text-center h-64 w-full lg:text-2xl items-center">
        <div className="">
          <h3 className="text-3xl font-medium">Objetivo</h3>
        </div>
        <div className="my-auto text-md font-normal mx-12">
          <span className="">
            Meu objetivo é desenvolver soluções que resolvam as situações propostas diante de mim,
            aprendendo ao longo do caminho.
          </span>
        </div>
      </div>
      <div className="text-center h-full w-full mb-5">
        <h3 className="text-3xl font-medium mb-12">Projetos</h3>
        <Projects />
      </div>
      <div className="text-center h-96">
        <h3 className="text-3xl font-medium mb-6">Formas de contato</h3>
        <div className="w-full h-48 flex flex-col lg:mx-auto justify-center pl-14 lg:pl-0 gap-6 lg:gap-7">
          <div className="flex justify-start lg:justify-center gap-5">
            <EmailIcon fontSize="large" />
            <p>joao.augustonn1@gmail.com</p>
          </div>
          <div className="flex justify-start lg:justify-center">
            <a
              href="https://www.linkedin.com/in/joao-augustonn/"
              className="flex gap-5 hover:font-semibold hover:text-sky-500"
            >
              <LinkedInIcon fontSize="large" />
              <p>joao-augustonn</p>
            </a>
          </div>
          <div className="flex justify-start lg:justify-center gap-5">
            <CallIcon fontSize="large" />
            <p>+55 (11) 96599-9744</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

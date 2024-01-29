import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="h-auto w-full bg-gradient-to-tl from-orange-100 to-sky-100 mx-auto">
      <nav className="flex items-center justify-end flex-wrap bg-sky-50 p-6 sticky top-0 bg-opacity-90 z-50">
        <div className="flex items-center flex-shrink-0 text-slate-600 mr-6">
          <span className="font-semibold text-xl tracking-tight">
            João Augusto do Nascimento Neto
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex justify-end text-md lg:flex-grow">
            <a
              href="https://www.linkedin.com/in/joao-augustonn/"
              className="block mt-4 lg:inline-block lg:mt-0 text-sky-800 hover:text-sky-600 mr-4"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/jann712"
            className="block mt-4 lg:inline-block lg:mt-0 text-sky-800 hover:text-sky-600 mr-4">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </nav>
      <div
        className="h-64 lg:h-screen lg:relative lg:-top-20 w-full text-center"
        data-aos="fade-up"
      >
        <div className="flex items-center text-center h-full w-full ">
          <div className="mx-12 text-md font-normal lg:text-2xl  lg:mx-48">
            <p className="">Olá 👋, bem-vindo ao meu portfólio. </p>
            <p className="">
              Me chamo João Augusto e sou desenvolvedor Full Stack utilizando
              principalmente as tecnologias TypeScript com React.js e Node.js.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center h-64 w-full lg:text-2xl items-center">
        <div className="">
          <h3 className="text-3xl font-medium">Objetivo</h3>
        </div>
        <div className="my-auto text-md font-normal mx-12">
          <p className="">
            Meu objetivo é desenvolver soluções que resolvam as necessidades do
            cliente e melhorem as minhas habilidades.
          </p>
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

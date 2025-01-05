import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Navbar() {
    return (
        <nav className="flex items-center justify-center flex-wrap bg-sky-50 p-5 sticky top-0 bg-opacity-90 z-50 ">
            <span className="font-semibold text-xl">JANN</span>
            <div className="flex justify-end right-5 absolute">
                <a
                    href="https://www.linkedin.com/in/joao-augustonn/"
                    className="block mt-4 lg:inline-block lg:mt-0 text-sky-800 hover:text-sky-600 transition-all mr-4"
                >
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/jann712"
                    className="block mt-4 lg:inline-block lg:mt-0 text-sky-800 hover:text-sky-600 transition-all mr-4">
                    <GitHubIcon />
                </a>
            </div>
            {/* <div className="flex items-center flex-shrink-0 text-slate-600 mr-6 bg-blue-400">
                <span className="font-semibold text-xl tracking-tight">
                    JANN
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
            </div> */}
        </nav>
    )
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { techIcons } from "../../images/tools/techIcons.js";
import { FiGithub } from "react-icons/fi";

const ProjectSingle = ({ name, title, category, image, techs }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={"/projects/" + name} aria-label="Single Project">
        <div className="rounded-xl shadow-lg p-1 hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-psingle dark:bg-ternary-dark of-auto hover:scale">
          <div>
            <img
              src={image}
              className="psingle-img rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-semibold text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-sm text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
          <div className="">
            {/* <a
              href={"https://bruh.com"}
              target="__blank"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-3xl"><FiGithub/></i>
            </a> */}
            <div className="flex-wrap text-sm gap-2 mt-2 work ml-4 mr-4">
              {techs.slice(0, 4).map((tech, index) => (
                <div
                  className="flex-wrap text-center light-tech-container dark:dark-tech-container mb-0"
                  key={index}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;

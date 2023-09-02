import { useContext } from "react";
import { FiClock, FiLink, FiGithub } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = ({data}) => {
//   const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div>
      <p className="font-general-bold text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {data.Title}
      </p>
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center mr-10 mt-2 sm:mt-0">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {data.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center mr-10 mt-4 sm:mt-0">
          <FiLink className="text-lg text-indigo-600 dark:text-indigo-400" />
          <a
            className="font-general-regular ml-2 leading-none hover:underline text-indigo-600 dark:text-indigo-400 duration-300"
            href={data.ProjectHeader.projectLink}
            target="_blank"
          >
            project link
          </a>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <FiGithub className="text-lg text-indigo-600 dark:text-indigo-400" />
          <a
            className="font-general-regular ml-2 leading-none hover:underline text-indigo-600 dark:text-indigo-400 duration-300"
            href={data.ProjectHeader.githubLink}
            target="_blank"
          >
            github repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;

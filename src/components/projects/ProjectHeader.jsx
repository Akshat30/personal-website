import { useContext } from "react";
import { FiClock, FiLink, FiGithub } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData.ProjectHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center mr-10">
          <FiLink className="text-lg text-indigo-600 dark:text-indigo-400" />
          <a
            className="font-general-regular ml-2 leading-none hover:underline text-indigo-600 dark:text-indigo-400 duration-300"
            href={singleProjectData.ProjectHeader.projectLink}
            target="_blank"
          >
            Project Link
          </a>
        </div>
        <div className="flex items-center">
          <FiGithub className="text-lg text-indigo-600 dark:text-indigo-400" />
          <a
            className="font-general-regular ml-2 leading-none hover:underline text-indigo-600 dark:text-indigo-400 duration-300"
            href={singleProjectData.ProjectHeader.githubLink}
            target="_blank"
          >
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;

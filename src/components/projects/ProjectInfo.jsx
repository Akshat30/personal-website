import { techIcons } from "../../images/tools/techIcons.js";
const ProjectInfo = ({ data }) => {
  //   const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div>
      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="font-general-medium text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
              description
            </p>
            <ul className="font-general-regular text-ternary-dark dark:text-ternary-light">
              {data.ProjectInfo.Description}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className="mb-7">
            <p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              context
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
              {data.ProjectInfo.Context}
            </p>
          </div>

          {/* Single project technologies */}
          <div className="mb-7">
            <p className="font-general-medium text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
              technologies
            </p>
            <div className="flex flex-wrap text-sm gap-2 mt-2">
              {data.ProjectInfo.Technologies.techs.map((tech, index) => (
                <div className="flex-wrap text-center light-tech-container dark:dark-tech-container" key={index}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Single project social sharing */}
          {/* <div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{data.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{data.ProjectInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div> */}
        </div>

        {/*  Single project right section */}
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
            work
          </p>
          {data.ProjectInfo.Work.map((line, index) => {
            return (
              <li
                key={index}
                className="font-general-light mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {line}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;

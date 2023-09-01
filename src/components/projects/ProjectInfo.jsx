import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            Description
          </p>
          <ul className="font-general-regular text-ternary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Description}
          </ul>
        </div>

        {/* Single project objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            Context
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleProjectData.ProjectInfo.Context}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleProjectData.ProjectInfo.Technologies[0].title}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
            {singleProjectData.ProjectInfo.Technologies.map((tech, index) => (
              <div className="mb-10 sm:mb-0" key={index}>
                <img
                  src={tech.techs[0]} // Assuming techs is an array or a valid image URL
                  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Single project social sharing */}
        {/* <div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleProjectData.ProjectInfo.SocialSharing.map(
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
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Work
        </p>
        {singleProjectData.ProjectInfo.Work.map((lines) => {
          return (
            <li
              key={lines.id}
              className="font-general-light mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {lines.point}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import glean from "../../images/gleansquare.jpeg";

const ProfessionalCard = ({date, img, name, description, techs}) => {
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
      <div className="flex flex-col sm:flex-row rounded-xl shadow-lg hover:shadow-xl cursor-default mb-10 bg-ternary-light dark:bg-ternary-dark">
        <div className="sm:w-1/4">
          <div className="flex h-full">
            <div className="flex w-full work mt-6 sm:mt-0">
              <img
                src={img}
                className="work-img-small sm:work-img border-none"
                alt="Single Project"
              ></img>
            </div>
          </div>
        </div>
        <div className="ml-4 sm:ml-0 sm:w-3/4">
          <div className="font-general-semibold  text-left text-xl sm:text-2xl text-ternary-dark dark:text-ternary-light mt-4 mb-4 ">
            {name}
          </div>
          <div className="font-general-medium-italic text-left text-md sm:text-lg text-ternary-dark dark:text-ternary-light mt-4 mb-4">
            {date}
          </div>
          <div className="font-general-regular lowercase text-left text-md sm:text-lg text-ternary-dark dark:text-ternary-light mr-8 mb-6">
            {description.map((line, index) => (
              <p key={index} className="mb-2">
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap text-sm gap-2 mt-2 mb-8">
            {techs.map((tech, index) => (
              <div
                className="flex-wrap text-center light-tech-container dark:dark-tech-container"
                key={index}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalCard;

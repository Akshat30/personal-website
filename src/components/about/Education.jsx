import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import geisel from "../../images/geisel.jpeg";
import tcg from "../../images/tcg.jpeg";
import akpsi from "../../images/akpsi.jpeg";
import { courses } from "../../data/courses.js";

const Education = () => {
  return (
    <section className="container mx-auto py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        {/* border-b border-primary-light dark:border-secondary-dark pb-8 */}
        <p className="font-general-semibold text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light">
          education
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.15,
        }}
      >
        <div className="flex flex-col sm:flex-row rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark">
          <div className="sm:w-1/4">
            <a
              href="https://ucsd.edu/"
              aria-label="Single Project"
              target="_blank"
            >
              <img
                src={geisel}
                className="education-img rounded-b-xl rounded-t-xl border-none"
                alt="Single Project"
              />
            </a>
          </div>
          <div className="sm:w-3/4">
            <div className="font-general-semibold  text-left text-xl sm:text-2xl text-ternary-dark dark:text-ternary-light mt-4 ml-8 mb-2 ">
              university of california, san diego
            </div>
            <div className="font-general-medium text-left text-md sm:text-lg text-ternary-dark dark:text-ternary-light ml-8 mb-2">
              class of 2025
            </div>
            <div className="font-general-italic text-left text-md sm:text-lg text-ternary-dark dark:text-ternary-light ml-8 mb-6">
              b.s. computer science
            </div>
            <div className="flex flex-wrap text-sm gap-2 ml-8 mb-6  mr-8">
              {courses.map((course, index) => (
                <div
                  className="lowercase flex-wrap text-center light-tech-container dark:dark-tech-container"
                  key={index}
                >
                  {course}
                </div>
              ))}
            </div>
            {/* <div className="font-general-regular  text-left text-md text-ternary-dark dark:text-ternary-light mt-4 ml-8">
              relevant courses:
            </div>
            <div className="font-general-regular text-sm lowercase text-center text-ternary-dark dark:text-ternary-light mt-4 ml-8 mr-8 mb-4">
              <div className="grid sm:grid-cols-4 gap-3">
                {courses.map((name, index) => (
                  <div
                    key={index}
                    className="courses-box rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0 bg-primary-light dark:bg-primary-dark"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
            <div className="font-general-regular  text-left text-md text-ternary-dark dark:text-ternary-light mt-4 ml-8 mb-4">
              organizations:
            </div>
            <div className="font-general-regular text-sm lowercase text-center text-ternary-dark dark:text-ternary-light mt-4 ml-8 mr-8 mb-4">
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="flex flex-row rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0 bg-primary-light dark:bg-primary-dark">
                  <div className="w-12">
                    <a
                      href="https://ucsd.edu/"
                      aria-label="Single Project"
                      target="_blank"
                    >
                      <img
                        src={akpsi}
                        className="education-img rounded-b-xl rounded-t-xl border-none"
                        alt="Single Project"
                      />
                    </a>
                  </div>
                  <p className="sm:w-3/4 py-4"> Alpha Kappa Psi</p>
                </div>
                <div className="flex flex-row rounded-xl shadow-lg hover:shadow-xl cursor-pointer sm:mb-0 bg-primary-light dark:bg-primary-dark">
                  <div className="sm:w-1/5">
                    <a
                      href="https://ucsd.edu/"
                      aria-label="Single Project"
                      target="_blank"
                    >
                      <img
                        src={tcg}
                        className="education-img rounded-b-xl rounded-t-xl border-none"
                        alt="Single Project"
                      />
                    </a>
                  </div>
                  <p className="sm:w-3/4 py-4"> Triton Consuling Group</p>
                </div>
              </div> */}
            {/* </div> */}
          </div>
          {/* <div className="grid grid-cols-5 gap-2 mt-2">
            {techs.map((tech, index) => (
              <div className="text-center light-logo-container" key={index}>
                <img className="" src={techIcons[tech]} alt={tech} />
              </div>
            ))}
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

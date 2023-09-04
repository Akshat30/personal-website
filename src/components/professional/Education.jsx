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
        <p
          className="font-general-semibold text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light border-b border-primary-light
                        dark:border-secondary-dark pb-8"
        >
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
        <div className="flex flex-row rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark">
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
            <div className="flex flex-row">
              <p className="w-1/2 font-general-semibold  text-left text-lg sm:text-2xl text-ternary-dark dark:text-ternary-light mt-4 ml-8 mb-2">
                university of california, san diego
              </p>
              <p className="w-1/2 font-general-semibold text-right text-lg sm:text-2xl text-ternary-dark dark:text-ternary-light mt-4 mr-8 mb-2">
                b.s. computer science
              </p>
            </div>

            <span className="font-general-italic  text-left text-md text-ternary-dark dark:text-ternary-light ml-8">
              june '25
            </span>
            <div className="font-general-regular  text-left text-md text-ternary-dark dark:text-ternary-light mt-4 ml-8">
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
              </div>
            </div>
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

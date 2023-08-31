import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import monitor from "../../images/monitor.png";
import front from "../../images/front.eps";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-12"
    >
      <div className="w-full md:w-full text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-josefin-bold text-3xl sm:text-5xl text-center sm:text-center text-ternary-dark dark:text-primary-light"
        >
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("hello world, i'm aj!")
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(1000)
                .start();
            }}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-josefin-light mt-8 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-center leading-normal text-gray-500 dark:text-gray-200"
        >
          akshat jain | code aficionado
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-regular mt-8 text-lg md:text-xl lg:text-xl xl:text-2xl text-left sm:text-center leading-normal text-gray-500 dark:text-gray-200"
        >
          <li>
            20 year old <span className="font-semibold">software engineer</span>{" "}
            from the silicon valley, ca
          </li>
          <li>
            computer science at university of california, san diego
          </li>
          <li>
              software engineering, web development, video game development
          </li>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center"
        >
          <a
            download="AkshatJain-Resume.pdf"
            href="https://drive.google.com/uc?export=download&id=11GY4YLWIAZaS8gu9Ew3rnIYCEmef5EoI"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              My Resume
            </span>
          </a>
        </motion.div>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img src={monitor} alt="Developer" />
      </motion.div> */}
    </motion.section>
  );
};

export default AppBanner;

import { FiArrowDownCircle } from "react-icons/fi";
import geisel from "../../images/geisel.jpeg";
import ggb from "../../images/goldengatebridge.jpg";
import { motion } from "framer-motion";
import caidaRec from "../../images/caida-rectangle.png";
import InfoCard from "../reusable/InfoCard";

const AppBanner = () => {

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
          className="font-general-bold mt-2 text-3xl sm:text-5xl text-center sm:text-center text-ternary-dark dark:text-primary-light"
        >
          hello, i'm aj!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-josefin-regular mt-8 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-center leading-normal text-gray-500 dark:text-gray-200"
        >
          &#123;akshat jain&#125;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-regular mt-10 text-lg md:text-xl lg:text-xl xl:text-2xl text-left sm:text-center leading-normal text-gray-500 dark:text-gray-200"
        >
          <div className="flex flex-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            <InfoCard
              title={""}
              body={
                <div>
                  <div className="font-general-bold">software engineer</div>
                  <div className="mt-2 text-sm">bay area, ca</div>
                </div>
              }
              image={ggb}
              link={"/"}
            />
            <InfoCard
              title={""}
              body={
                <div>
                  <div className="font-general-bold">computer science</div>
                  <div className="mt-2 text-sm">
                    university of california, san diego
                  </div>
                </div>
              }
              image={geisel}
              link={"/"}
            />
            <InfoCard
              title={""}
              body={
                <div>
                  <div className="font-general-bold">front end dev</div>
                  <div className="mt-2 text-sm">center for applied internet data analysis</div>
                </div>
              }
              image={caidaRec}
              link={"/"}
            />
          </div>
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
            download="Akshat_Jain_resume.pdf"
            href="/files/Akshat_Jain_resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg font-general-medium duration-100">
              my resume
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

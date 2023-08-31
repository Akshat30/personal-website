import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InfoCard = ({ title, body, image, link}) => {
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
      <Link to={link} aria-label="Information">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div className="text-center px-4 py-6">
            <p className="font-josefin-semibold text-lg sm:text-3xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-ternary-dark dark:text-ternary-light">
              {body}
            </span>
          </div>
          <div>
            <img 
              src={image}
              className="rounded-b-xl border-none"
              alt="Information"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default InfoCard;

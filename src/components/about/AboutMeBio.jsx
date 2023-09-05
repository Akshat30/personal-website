import profileImage from "../../images/pfp.png";
import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";

const AboutMeBio = () => {
  const { aboutMe } = useContext(AboutMeContext);

  return (
    <div>
      <div className="container mx-auto mt-5 sm:mt-10">
        <div className="text-center">
          <p
            className="font-general-semibold text-2xl sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light border-b border-primary-light
                        dark:border-secondary-dark pb-8"
          >
            me!
          </p>
        </div>
      </div>
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={profileImage} className="rounded-lg w-96 mx-auto" alt="" />
        </div>

        <div className="font-general-regular w-full sm:w-3/4 text-left">
          {aboutMe.map((bio) => (
            <p
              className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeBio;

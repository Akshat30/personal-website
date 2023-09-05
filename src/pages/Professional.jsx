import ProfessionalCard from "../components/professional/ProfessionalCard.jsx";
import { workData } from "../data/prof";

const Professional = () => {
  return (
    <div>
      <section className="container mx-auto py-5 sm:py-10 mt-5 sm:mt-10 mb-4">
        <div className="mb-8">
          <p className="font-general-semibold text-2xl text-center sm:text-4xl mb-4 text-ternary-dark dark:text-ternary-light ">
            work history
          </p>
        </div>
        {workData.map((job) => (
          <ProfessionalCard
            date={job.Time}
            img={job.Logo}
            name={job.Title}
            description={job.Description}
            key={job.id}
            techs={job.Technologies}
          ></ProfessionalCard>
        ))}
      </section>
    </div>
  );
};

export default Professional;

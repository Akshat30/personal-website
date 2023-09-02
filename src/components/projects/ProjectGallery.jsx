import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = ({data}) => {
//   const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="mt-12">
      <div className="mb-6 sm:mb-0" key={data.CoverImage.id}>
        <a href={data.CoverImage.creditLink} target="_blank">
          <img
            src={data.CoverImage.src}
            className="cover-img rounded-xl cursor-default shadow-lg sm:shadow-none"
            alt={data.CoverImage.title}
            key={data.CoverImage.id}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectGallery;

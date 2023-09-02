import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { useParams } from "react-router-dom";


const ProjectSingle = () => {
    const { name } = useParams();
    const project = projectsData.find((project) => project.Name === name);

	return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 0.6 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleProjectProvider>
        <ProjectHeader data={project} />
        <ProjectGallery data={project} />
        <ProjectInfo data={project} />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectSingle;

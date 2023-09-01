// Import images
import verum1 from '../images/verum/verum1.jpg';
import verum2 from "../images/verum/verum2.jpg";
import verum3 from "../images/verum/verum3.jpg";
import html from "../images/tools/html.png";
import css from "../images/tools/css.png";

export const singleProjectData = {
  ProjectHeader: {
    title: "Verum Political Analysis",
    publishDate: "August 2023 - Present",
    projectLink: "https://github.com/Akshat30/personal-website",
    githubLink: "https://github.com/Akshat30/personal-website",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: verum1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: verum2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: verum3,
    },
  ],
  ProjectInfo: {
    Description:
      "In order to improve access to information, Verum provides users with friendly UX to receive an in-depth analysis of any political text/speech of their choosing.",
    Context:
      "Designed and developed for the All Inclusive Hackathon on DevPost.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          html, css
        ],
      },
    ],
    Work: [
      {
        id: 1,
        point:
          "Designed and developed JavaScript backend to process text from a given link using HTML extraction and external API",
      },
      {
        id: 2,
        point:
          "Created pathway to summarizing API for summarization of very long transcripts",
      },
      {
        id: 3,
        point:
          "Formulated a thorough prompt for political analysis, sent to OpenAI using JS for GPT-3.5-Turbo",
      },
      {
        id: 4,
        point: "Connected backend to React front-end for development",
      },
    ],
  },
};

// Import images
import verumImg from "../images/covers/verum.jpg";
import ebizImg from "../images/covers/ebiz.jpg";
import netflix from "../images/covers/netflix.jpg";


export const projectsData = [
  {
    id: 1,
    Name: "verum",
    Title: "verum political analysis",
    ProjectSingle: {
      src: verumImg,
      desc: "LLM-based speech/article analyzer with strong UX to promote voter inclusion",
    },
    ProjectHeader: {
      publishDate: "august 2023 - present",
      projectLink: "https://github.com/Akshat30/personal-website",
      githubLink: "https://github.com/Akshat30/personal-website",
    },
    CoverImage: {
      title: "Verum",
      creditLink:
        "https://www.pexels.com/photo/book-close-up-focus-glass-208452/",
      src: verumImg,
    },
    ProjectInfo: {
      Description:
        "In order to improve access to information, Verum provides users with friendly UX to receive an in-depth analysis of any political text/speech of their choosing.",
      Context:
        "Designed and developed for the All Inclusive Hackathon on DevPost.",
      Technologies: {
        techs: ["html", "css", "react"],
        additional: ["rapid api, gpt-3.5-turbo"],
      },
      Work: [
        "Designed and developed JavaScript backend to process text from a given link using HTML extraction and external API",
        "Created pathway to summarizing API for summarization of very long transcripts",
        "Formulated a thorough prompt for political analysis, sent to OpenAI using JS for GPT-3.5-Turbo",
        "Connected backend to React front-end for development",
      ],
    },
  },
  {
    id: 2,
    Name: "invicta",
    Title: "invicta rental website",
    ProjectSingle: {
      src: ebizImg,
      desc: "e-commerce shopping website with beautiful front end and functional back end for formal clothing rentals",
    },
    ProjectHeader: {
      publishDate: "jan - mar 2020",
      projectLink: "https://bit.ly/akshatweb",
      githubLink: "https://github.com/Akshat30/Invicta",
    },
    CoverImage: {
      title: "ebiz",
      creditLink:
        "https://unsplash.com/photos/dgOJDAv96s8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      src: ebizImg,
    },
    ProjectInfo: {
      Description:
        "Beautiful rental website for formal clothing, allows users to browse through different types of pages for formal clothing and add to cart to rent.",
      Context:
        "Designed and developed for the Future Business Leaders of America E-Business Competition",
      Technologies: {
        techs: ["html", "css", "javascript", "github"],
        additional: [],
      },
      Work: [
        "Designed apparel rental website with 10+ pages, followed design process and used structured feedback in design choices",
        "Used HTML, CSS, JavaScript to code front-end, with 5+ animations per page, seamlessly displaying backend functions",
        "Worked with a team of three to design, develop, form back-end, make a business pitch, and present in a competition",
      ],
    },
  },
  {
    id: 2,
    Name: "netflix",
    Title: "netflix prize algorithm",
    ProjectSingle: {
      src: netflix,
      desc: "first place winner - weighted algorithm that predicts user's movie reviews through existing review data",
    },
    ProjectHeader: {
      publishDate: "mar - apr 2019",
      projectLink: "https://github.com/Akshat30/NetflixPrize",
      githubLink: "https://github.com/Akshat30/NetflixPrize",
    },
    CoverImage: {
      title: "ebiz",
      creditLink:
        "https://unsplash.com/photos/J39X2xX_8CQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      src: netflix,
    },
    ProjectInfo: {
      Description:
        "Advanced Java algorithm that uses trained weights to read existing user reviews for movies and predicts the ratings of users who never watched the movie.",
      Context:
        "First Place. Designed and developed for the Netflix Prize Algorithm contest in AP Computer Science course.",
      Technologies: {
        techs: ["java", "github"],
        additional: [],
      },
      Work: [
        "1st Place in 150 student CS class for most accurate movie recommender, 84.5% accuracy for users without ratings",
        "Developed Java, JUnit tests to accurately process 100+ past ratings and recommend from 1000+ movie database",
      ],
    },
  },
];

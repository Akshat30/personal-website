// Import images
import verumImg from "../images/covers/verum.jpg";
import ebizImg from "../images/covers/ebiz.jpg";
import netflixImg from "../images/covers/netflix.jpg";
import carromImg from "../images/covers/carrom.jpg";
import bay4jImg from "../images/covers/bay4j.png";
import tiktokImg from "../images/covers/tiktok.jpg";
import websiteImg from "../images/covers/website.jpg";
import websiteIcon from "../images/covers/website.png";
import slackpluginIcon from "../images/covers/slackplugintest.png";
import tronImg from "../images/covers/tron.jpeg";
import prolexImg from "../images/covers/prolex.jpg";
import spotifyplayground from "../images/covers/spotifyplayground.png"

export const projectsData = [
  {
    Name: "spotifyplayground",
    Title: "front end for spotify api",
    ProjectSingle: {
      src: spotifyplayground,
      desc: "nextjs website that allows a user to sign in and view cool data about their spotify listening",
    },
    ProjectHeader: {
      publishDate: "august 2023 - present",
      projectLink: "https://ajspotify.vercel.app",
      githubLink: "https://github.com/Akshat30/spotify-api",
    },
    CoverImage: {
      title: "spotifyplayground",
      creditLink: "",
      src: spotifyplayground,
    },
    ProjectInfo: {
      Description:
        "A NextJS website that uses React and Tailwind CSS to allow users to sign in and view data about their Spotify listening. Also displays currently playing songs, and has a recommendation page as well.",
      Context:
        "Developed as a fun project to learn NextAuth, NextJS, TypeScript, and Spotify API.",
      Technologies: {
        techs: [
          "nextjs",
          "nextauth",
          "ts",
          "spotify",
          "react",
          "tailwindcss",
          "html",
        ],
      },
      Work: [
        "Designed a front end website using NextJS, using a minimalist color palette and display spotify playing information",
        "Used NextAuth to allow a given user to sign into website, allowing usage of an accessing token",
        "Created Next API Routes to allow easy API calls to Spotify endpoints, to get data",
      ],
    },
  },
  {
    Name: "slackplugin",
    Title: "slack plugin for chatgpt",
    ProjectSingle: {
      src: slackpluginIcon,
      desc: "plugin that allows chatgpt to provide detailed information for a slack workspace",
    },
    ProjectHeader: {
      publishDate: "august 2023 - present",
      projectLink: "",
      githubLink: "https://github.com/Akshat30/slack-plugin",
    },
    CoverImage: {
      title: "slackplugin",
      creditLink:
        "https://www.pexels.com/photo/book-close-up-focus-glass-208452/",
      src: slackpluginIcon,
    },
    ProjectInfo: {
      Description:
        "A plugin for chatgpt that allows it to interpret user messages related to slack and answer those effectively by accessing the user's slack workspace with queries.",
      Context: "Developed for Glean during software engineering internship.",
      Technologies: {
        techs: [
          "python",
          "javascript",
          "openai",
          "nodejs",
          "json",
          "slack api",
        ],
      },
      Work: [
        "Used existing todo list plugin from chatgpt to design software structure for plugin that accesses Slack",
        "Developed a python file that interprets the query from chatgpt to perform calls to Slack API",
        "Trained gpt-4 model using specific instructions on how to generate queries for python file",
        "Performed extensive analysis of the efficiency of different Slack API calls: search.messages and channel.messages",
      ],
    },
  },
  {
    Name: "website",
    Title: "this website :)",
    ProjectSingle: {
      src: websiteIcon,
      desc: "react based personal portfolio for akshat jain, with media gallery to come",
    },
    ProjectHeader: {
      publishDate: "august 2023 - present",
      projectLink: "https://akshatj.vercel.app",
      githubLink: "https://github.com/Akshat30/personal-website",
    },
    CoverImage: {
      title: "website",
      creditLink:
        "https://www.pexels.com/photo/book-close-up-focus-glass-208452/",
      src: websiteIcon,
    },
    ProjectInfo: {
      Description:
        "A personal portfolio for Akshat Jain, that displays his work history, projects, general information, and a gallery (soon to come).",
      Context: "Modified and developed for personal use.",
      Technologies: {
        techs: ["react", "tailwind", "javascript", "vercel", "css", "html"],
      },
      Work: [
        "Used existing react portfolio to build base, then modified heavily to create my own design",
        "Developed code using React's best practices: components, hooks, and generating pages from json data files (like this one)",
        "Wireframed over 5 new designs and formulated using Tailwind CSS",
        "Reconfigured project directory structure to allow for dynamic page generation",
        "Deployed application through the use of Vercel",
      ],
    },
  },
  {
    Name: "verum",
    Title: "verum political analysis",
    ProjectSingle: {
      src: verumImg,
      desc: "LLM-based speech/article analyzer with strong UX to promote voter inclusion",
    },
    ProjectHeader: {
      publishDate: "august 2023 - present",
      projectLink: "",
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
        techs: [
          "javascript",
          "python",
          "openai",
          "html",
          "css",
          "react",
          "rapid api",
          "gpt-3.5-turbo",
        ],
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
    Name: "invicta",
    Title: "invicta rental website",
    ProjectSingle: {
      src: ebizImg,
      desc: "e-commerce website with strong front+back end for formal clothing rentals",
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
    Name: "netflix",
    Title: "netflix prize algorithm",
    ProjectSingle: {
      src: netflixImg,
      desc: "weighted algorithm accurately predicts user's movie reviews through existing review data",
    },
    ProjectHeader: {
      publishDate: "mar - apr 2019",
      projectLink: "",
      githubLink: "https://github.com/Akshat30/NetflixPrize",
    },
    CoverImage: {
      title: "ebiz",
      creditLink:
        "https://unsplash.com/photos/J39X2xX_8CQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      src: netflixImg,
    },
    ProjectInfo: {
      Description:
        "Advanced Java algorithm that uses trained weights to read existing user reviews for movies and predicts the ratings of users who never watched the movie.",
      Context:
        "First Place. Designed and developed for the Netflix Prize Algorithm contest in AP Computer Science course.",
      Technologies: {
        techs: ["java", "javadocs", "csv"],
        additional: [],
      },
      Work: [
        "1st Place in 150 student CS class for most accurate movie recommender, 84.5% accuracy for users without ratings",
        "Developed Java, JUnit tests to accurately process 100+ past ratings and recommend from 1000+ movie database",
      ],
    },
  },
  {
    Name: "prolex",
    Title: "cyberbullying prevention",
    ProjectSingle: {
      src: prolexImg,
      desc: "chrome extension with friendly ux that detects hate speech, to prevent cyberbullying",
    },
    ProjectHeader: {
      publishDate: "mar - apr 2019",
      projectLink: "",
      githubLink: "https://github.com/Akshat30/Prolex",
    },
    CoverImage: {
      title: "ebiz",
      creditLink:
        "https://unsplash.com/photos/J39X2xX_8CQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      src: prolexImg,
    },
    ProjectInfo: {
      Description:
        "Chrome extension that scans the locally scans the user's message before being sent, recommending changes to prevent hate speech.",
      Context: "Designed and developed for the Los Altos Hacks 2019 Hackathon.",
      Technologies: {
        techs: ["javascript", "chrome", "java"],
        additional: [],
      },
      Work: [
        "Developed back end structure that efficiently parses string in order to be used for hate speech detection",
        "Speech is checked for hate speech from a database of over 500 words",
        "Created friendly front end to make extension usage easier for the user",
      ],
    },
  },
  {
    Name: "carrom",
    Title: "carrom video game",
    ProjectSingle: {
      src: carromImg,
      desc: "simulates carrom (pool variant) using processing api, allows for LAN multiplayer",
    },
    ProjectHeader: {
      publishDate: "apr - jun 2019",
      projectLink: "",
      githubLink: "https://github.com/Akshat30/Carrom",
    },
    CoverImage: {
      title: "carrom",
      creditLink:
        "https://unsplash.com/photos/J39X2xX_8CQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      src: carromImg,
    },
    ProjectInfo: {
      Description:
        "Carrom is an ancient board game that I converted into a playable, virtual version with beautiful graphics, that allows for multiplayer.",
      Context:
        "Designed and developed as a final project for Computer Science course.",
      Technologies: {
        techs: [
          "processing api",
          "java",
          "github",
          "canva",
          "javadocs",
          "java-networking",
        ],
        additional: [],
      },
      Work: [
        "Developed a multiplayer game about Carrom, a simulation of a board with 10+ moving pieces similar to Pool, in Java",
        "Created LAN 2-4 multiplayer gameplay using Java’s networking library, allowing game to run in sync on every device",
      ],
    },
  },
  {
    Name: "bay4j",
    Title: "website for justice organization",
    ProjectSingle: {
      src: bay4jImg,
      desc: "interactive website for youth justice org displayes information + forms of art media",
    },
    ProjectHeader: {
      publishDate: "jun - nov 2020",
      projectLink: "https://bay4j.com",
      githubLink: "https://github.com/bay4j/website",
    },
    CoverImage: {
      title: "bay4j",
      creditLink: "",
      src: bay4jImg,
    },
    ProjectInfo: {
      Description:
        "bay4j is a youth organization promoting justice for important social issues, and this website helped them form an online presence",
      Context: "Designed and developed as a website for Bay4j",
      Technologies: {
        techs: [
          "javascript",
          "canva",
          "gh pages",
          "html",
          "css",
          "github pages",
        ],
        additional: [],
      },
      Work: [
        "Designed static website with 10+ pages, primarily focusing on front end dev. Used HTML, CSS, GitHub, GitHub Pages",
        "Through dev process, mentored a student with very little programming experience, helping her becoming capable in web dev",
        "Followed design process to highlight information in a user accessible format, while also keeping creativity",
      ],
    },
  },
  {
    Name: "tron",
    Title: "tron: legacy video game",
    ProjectSingle: {
      src: tronImg,
      desc: "video game representation of tron: legacy's icon bike races, made with processing api",
    },
    ProjectHeader: {
      publishDate: "mar - may 2018",
      projectLink: "",
      githubLink: "https://github.com/Akshat30/tron",
    },
    CoverImage: {
      title: "trin",
      creditLink: "",
      src: tronImg,
    },
    ProjectInfo: {
      Description:
        "Tron:legacy's bike races depicted as a multiplayer game that users can play, racing and competing against other players. With music from the movie and graphics representing the bikes.",
      Context: "Designed and developed as a final project for a Java class.",
      Technologies: {
        techs: ["java", "processing api", "javadocs"],
        additional: [],
      },
      Work: [
        "Designed the game mechanics after 10+ different designs, experimenting with an engaging method of playability while being practical on a 2d screen",
        "Developed backend graphics using kinematics and animations from processing api, ensuring that playability is smooth",
        "Used design process to develop game graphics and icons, such as the bikes, menu screen, and playing field",
        "Effectively led a team of three, having knowledge in all three portions (backend, frontend, publication), allowing me to contribute profusely",
      ],
    },
  },
  {
    Name: "tiktok",
    Title: "tiktok features design",
    ProjectSingle: {
      src: tiktokImg,
      desc: "business presentation for feature addition to tikok, with a research-based prototype",
    },
    ProjectHeader: {
      publishDate: "oct - nov 2022",
      projectLink: "",
      githubLink: "",
    },
    CoverImage: {
      title: "tiktok",
      creditLink: "",
      src: tiktokImg,
    },
    ProjectInfo: {
      Description:
        "tiktok has issues with engaging people outside their current age demographic, designed features to allow different age groups to find content suitable to them on tiktok",
      Context: "Designed and presented for a mock business competition.",
      Technologies: {
        techs: ["figma", "app development"],
        additional: [],
      },
      Work: [
        "Hypothetically product designed 3 changes to TikTok UX, wireframed through Figma and created business presentation",
        "Prototyped low-fidelity model to display one selected change, with 3 visual differences from standard TikTok application",
      ],
    },
  },
];

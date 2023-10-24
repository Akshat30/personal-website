// Import images
import glean from "../images/gleansquare.jpeg";
import soflo from "../images/soflo.png";
import scio from "../images/SCIO.png";
import caida from "../images/caida.png";

export const workData = [
  {
    id: 1,
    Title: "front end developer",
    Logo: caida,
    Time: "oct 23 - present",
    Description: [
      "Working as a Research Experience for Undergraduates (REU) intern",
      "Using React to develop and maintain front end for large scale data catalog",
      "Following best practices for GitHub Issues, Pull Requests, Approvals, Double Branch Protection",
    ],
    Technologies: ["react", "javascript", "githsub project", "scss"],
  },
  {
    id: 2,
    Title: "software engineer intern",
    Logo: glean,
    Time: "jul 23 - present",
    Description: [
      "Co-led a team of 4 interns in producing plugins for ChatGPT to access Slack, Google Drive, Jira, Confluence",
      "Developed an exhaustive plugin for ChatGPT to provide functionality for accessing slack workspace",
      "Designed algorithm for processing query from ChatGPT and convert to a request for Slack API",
    ],
    Technologies: ["python", "javascript", "yaml", "openai api", "slack api"],
  },
  {
    id: 3,
    Title: "administrative intern",
    Logo: soflo,
    Time: "nov 20 - feb 21",
    Description: [
      "Developed in Java to aid in sorting 150+ SAT videos for optimal uploading to WordPress, saving over 50% more time",
      "Utilized WordPress to create 10+ SAT blog pages, making 4 front-end design changes to improve blog user interface",
      "Computed weekly finances for payment to 50+ tutors, pipelining data from Excel sheet to Java algorithm, different rates",
    ],
    Technologies: ["java", "wordpress", "airtable", "excel", "web design"],
  },
  {
    id: 4,
    Title: "software engineer intern",
    Logo: scio,
    Time: "jun 19 - jul 19",
    Description: [
      "Wrote 15+ JUnit tests to run on Java methods of Chrome extension, making sure to validate every practical aspect",
      "Debugged with JUnit tests by running on functions, adjusting them, reporting failed tests, reducing error by 10-15%",
    ],
    Technologies: [
      "java",
      "junit",
      "intellij",
      "chrome extensions",
      "unit testing",
    ],
  },
];

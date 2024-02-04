import emoji from "react-easy-emoji";
//  TODO Update front facing site. Expertise section is also outdated.

export const greetings = {
  name: "Rumi Alexander Allbert",
  title: "Hi, I'm Rumi",
  description:
    "I enjoy solving complex problems. As a data enthusiast, I unravel problems utilizing present-day techniques & methods in data mining, data visualization, graphical analysis, and statistical solutions. In my free time, I am a scholar of history, philosophy, art, and music. 🙇🏽‍♂️",
  resumeLink:
    "https://docs.google.com/document/d/1fBDyIWfaiCZU0uR8F6W8cwbwOO-t279H0j2cr9B-deU/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "RumiAllbert",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/RumiAllbert",
  linkedin: "https://www.linkedin.com/in/rumi-allbert/",
};

export const skillsSection = {
  title: "Expertise",
  subTitle: "Data Scientist & ML Engineer",
  skills: [
    "📈 Data exploration, cleaning, and analysis",
    "🔍 Statistical analysis, hypothesis testing, and modeling",
    "📊 Creation and deployment of data-driven models",
    "👷🏽 Development and maintenance of data pipelines",
    "🔮 Deep learning techniques and applications",
    "💻 Big data tools (Spark, Hadoop)",
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "vscode-icons:file-type-mysql",
    },
    {
      skillName: "Go",
      //   fontAwesomeClassname: "vscode-icons:file-type-golang",
      fontAwesomeClassname: "vscode-icons:file-type-go",
    },
    {
      skillName: "Rstudio",
      fontAwesomeClassname: "vscode-icons:file-type-r",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "logos:tableau",
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "vscode-icons:file-type-excel",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos:aws",
    },

    {
      skillName: "Git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Data Analysis", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
  {
    Stack: "Full Stack",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Ralston College",
    subHeader: "Master of Art in Humanities",
    duration: "August 2023 - May 2024",
    desc: "Greek & Philosophy Scholar",
    descBullets: [
      "Study of ancient texts",
      "Aquisition of modern and ancient Greek",
    ],
  },
  {
    schoolName: "Fei Tian College Middletown",
    subHeader: "Bachelor of Science in Data Science",
    duration: "August 2019 - May 2023",
    desc: "Deans List Student",
    descBullets: [
      "Academic Excellence Award",
      "First Place Hackathon Champion",
      "President of Health & Wellness Club",
      "Tresurer of Falun Dafa Club",
    ],
  },
  // {
  //   schoolName: "Primavera High School",
  //   subHeader: "AdvancED Diploma",
  //   duration: "June 2017 - May 2018",
  //   desc: "Early Graduation with 4.0 GPA.",
  // },
];

export const experience = [
  {
    role: "Data Scientist",
    company: "The Epoch Times",
    companylogo: "/img/icons/common/eet.jpg",
    date: "Jan 2022 – Present",
    descBullets: [
    "Spearheaded the analysis of complex datasets with statistical and graphical techniques, delivering insightful reports that informed strategic decisions for stakeholders and senior management.",
    "Engineered and launched automated data pipelines leveraging Python and Hive, catalyzing a 25% increase in operational efficiency and reducing data leakage.",
    "Pioneered the integration of machine learning models, including deploying BERT and clustering algorithms for NLP tasks, to analyze data and predict trends, leading to a notable 20% decline in subscriber churn rates.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University of Delaware",
    companylogo: "/img/icons/common/University_of_Delaware.svg",
    date: "Dec 2021 – Dec 2022",
    descBullets: [
    "Conducted in-depth statistical analysis using Python to drive key insights, informing the research team's strategic decisions.",
    "Authored and refined a suite of Python scripts for the efficient integration and transformation of complex datasets within PsychoPy, effectively accelerating the analysis pipeline and reducing processing bottlenecks by 30%.",

    ],
  },
  {
    role: "Data Science Intern",
    company: "LiteSpeed Technologies",
    companylogo: "/img/icons/common/litespeed.png",
    date: "May 2021 – Nov 2021",
    // desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
    "Developed data-driven reports for the VP & CEO, highlighting key findings from extensive data mining efforts.",
    "Optimized data mining and pipeline scripts by ~200% using MySQL and Python, resulting in a 50% reduction in processing time.",
    "Implemented statistical models and big data algorithms with parallel architecture to 5+ company data streams, leveraging Linux and Python for robust data handling.",
    ],
  },
  {
    role: "Web Developer & Assistant Creative Director",
    company: "The Werking Title Gallery",
    companylogo: "/img/icons/common/werkingtitlegallery.png",
    date: "Feb 2020 – May 2020",
    // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Designed and developed a user-friendly website. Design included font choice, images, formatting, and layout.",
      "Worked as a positive and productive member of the gallery to inform and promote creative ideas.",
      "Fixed bugs and enhanced website functionality.",
    ],
  },
  {
    role: "NASA a World Bridge Alumni",
    company: "NASA",
    companylogo: "/img/icons/common/NASA.svg",
    date: "Aug 2019 – June 2020",
    // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
    "Applied data science skills to real-world projects, including statistical analysis, data forecasting, and collaborative project management.",
    "Created user-friendly data visualizations and accessible USGS geospatial maps under the mentorship of NASA, the United Nations, USGS, and other organizations.",
    ],
  },
  {
    role: "Graphic Designer & Assistant Creative Director",
    company: "The AI Organization",
    companylogo: "/img/icons/common/aiorg.jpeg",
    date: "Jan 2019 – July 2020",
    // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Collaborated with internal and external stakeholders to gather and define business requirements, establish scopes and managed project milestones.",
      "Created images and layouts for over 10 projects utilizing Adobe software, and contributed design ideas in early planning stages with customers and project managers.",
    ],
  },
  //   {
  //     role: "Business Owner & Executive Chef",
  //     company: "Local Espacio Común",
  //     companylogo: "/img/icons/common/local.png",
  //     date: "Apr 2018 – Jan 2019",
  //     // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     descBullets: [
  //       "Coordinated analysis and planning of restaurant profitability and sales levels.",
  //       "Developed recipes and menus by applying understanding of market demand and culinary trends.",
  //       "Hired, trained and managed all kitchen staff, including employee development, issuing disciplinary action and conducting performance reviews.",
  //       "Collaborated with vendors to source desired recipe ingredients while maintaining tight cost controls.",
  //     ],
  //   },
];

export const projects = [
  {
    name: "Whisper GUI - Python",
    desc: "This is a simple GUI for OpenAI's Whisper model that allows users to transcribe audio files.",
    github: "https://github.com/RumiAllbert/whisper-stream",
    link: "https://simple-transcriber.streamlit.app/",
  },
  {
    name: "Slack NLP Bot - Go",
    desc: "This is a Slack bot that uses the Slack API to interact with the Slack messaging platform. It takes the message, or query from the user, then it uses the Wit.ai API to extract the intent and entities from the message.",
    github: "https://github.com/RumiAllbert/go-nlp-bot",
  },
  {
    name: "Airbnb In NYC Responsive Dashboard - Tableau",
    desc: "Created, designed, and built a responsive, user-friendly dashboard for Airbnb listings in NYC.",
    link: "https://prod-useast-a.online.tableau.com/t/businessdataanalyticssummer2020feitiancollegemiddletown/views/FinalProjectRumiAllbert2/NYCAirbnbDashboard?:origin=card_share_link&:embed=n",
  },
  {
    name: "Monty Hall Probability Problem - Rstudio & Shiny App",
    desc: "Shiny application in R to play and simulate the monty hall probability problem",
    github: "https://github.com/RumiAllbert/monty-hall-probability-problem",
    link: "https://rumiallbert.shinyapps.io/monty-hall-probability-problem-shiny/",
  },
  {
    name: "FIFA Linear Analysis",
    desc: "This is a project to analyse FIFA data using linear regression and diagonstic methods to fit the best reduced model. The model aims at predicting the value of a player based on his attributes.",
    github: "https://github.com/RumiAllbert/FIFA-Linear-Analysis",
    link: "https://github.com/RumiAllbert/FIFA-Linear-Analysis/blob/master/reports/Rumi%20Allbert%20-%20FIFA%20Player%20Analysis.pdf",
  },
  {
    name: "Sign Language Recognition - Python",
    desc: "Built a sign language recognition model using Pytorch. The model is trained on the ASL alphabet and can recognize the letters A-E.",
    github:
      "https://github.com/RumiAllbert/American-Sign-Language-Recogniztion-CNN",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];

import emoji from "react-easy-emoji";

export const greetings = {
  name: "Rumi Allbert Elias Calles",
  title: "Hi, I'm Rumi",
  description: emoji(
    "I enjoy solving complex problems. As a data enthusiast, I unravel problems utilizing present-day techniques & methods in data mining, data visualization, graphical analysis, and statistical solutions. In my free time, I am a scholar of history, philosophy, art, and music. 🙇🏽‍♂️"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1LaFMQ9ZomoJOEiOwxl2q-oeToi0jYR_vMPd6P-oKz_w/edit?usp=sharing",
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
    emoji("📈 Data exploration, cleaning, and analysis"),
    emoji("🔍 Statistical analysis, hypothesis testing, and modeling"),
    emoji("📊 Creation and deployment of data-driven models"),
    emoji("👷🏽 Development and maintenance of data pipelines"),
    emoji("🔮 Deep learning techniques and applications"),
    emoji("💻 Big data tools (Spark, Hadoop)"),
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
  {
    schoolName: "Primavera High School",
    subHeader: "AdvancED Diploma",
    duration: "June 2017 - May 2018",
    desc: "Early Graduation with 4.0 GPA.",
  },
];

export const experience = [
  {
    role: "Junior Data Scientist",
    company: "The Epoch Times",
    companylogo: "/img/icons/common/eet.jpg",
    date: "Jan 2022 – Present",
    descBullets: [
      "Utilized statistical and graphical techniques to interpret and analyze data, providing regular reports to stakeholders and upper management.",
      "Implemented automated data pipelines using Python to streamline business processes, resulting in a 25% increase in efficiency and decreased data leakage.",
      "Developed and deployed advanced machine learning algorithms, including Deep Neural Network Natural Language Processing (NLP), to identify patterns and predict outcomes within company data streams and customer feedback, resulting in a 20% reduction in unsubscriptions.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University of Delaware",
    companylogo: "/img/icons/common/University_of_Delaware.svg",
    date: "Dec 2021 – Present",
    descBullets: [
      "Analyze data utilizing Python (Pandas, NumPy) and various statistical methods.",
      "Write Python scripts to integrate and transform data for further analysis in PsychoPy.",
      "Conduct research and summarize findings on project findings.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "LiteSpeed Technologies",
    companylogo: "/img/icons/common/litespeed.png",
    date: "May 2021 – Nov 2021",
    // desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Built data-driven reports for VP & CEO of analysis performed and data mining generated results.",
      "Optimized data mining scripts 10x using SQL and Python knowledge.",
      "Deploy statistical models and big data algorithms to various company data streams using Linux shells and Python scripts.",
      "Structured data queries and data mining through the MongoDB (NoSQL) database using Python, and its Pandas package.",
      "Write a program to fetch, tidy, and process more than 100 million data points using Python and MySQL.",
      // "Learned the basics of LAMP stack development to deploy, build, and customize a website.",
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
      "Developed foundational understandings of Data Science skills directly applied to solving real projects, including computer programming, statistical analysis, data forecasting, and collaborative project management.",
      "Created user-friendly data visualizations and publicly accessible USGS geospatial maps under mentorship of NASA, United Nations, United States Geological Survey (USGS), and more.",
      "Assembled Earthquake Signal Precursors by developing a grounded understanding and hands-on application of electrical systems, circuits, and proficient soldering techniques.",
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

<script setup lang="ts">
import { slideType } from "./../common/dataType.ts";
import Skills from "./../components/Skills.vue";
import SlideShow from "./../components/SlideShow.vue";
import TimelineItem from "./../components/TimelineItem.vue";
import { reactive, onMounted, onUnmounted } from "vue";
import store from "./../store";

type miniEventType = {
  type: string;
  title: string;
  organization: string;
  startDate: number;
  endDate: number;
  slides: Array<slideType>;
};

const state = reactive({
  timelineShowing: false,
  currentSlides: <Array<slideType>>[],
  skills: [
    {
      title: "HTML",
      amount: 0,
      project: 11,
      exp: 8,
      work: 20,
      knowledge: 30,
    },
    {
      title: "CSS",
      amount: 0,
      project: 11,
      exp: 8,
      work: 20,
      knowledge: 30,
    },
    {
      title: "JavaScript",
      amount: 0,
      project: 11,
      exp: 8,
      work: 20,
      knowledge: 30,
    },
    {
      title: "Java",
      amount: 0,
      project: 5,
      exp: 7,
      work: 20,
      knowledge: 30,
    },
    {
      title: "Vue JS",
      amount: 0,
      project: 6,
      exp: 4,
      work: 20,
      knowledge: 25,
    },
    {
      title: "SQL",
      amount: 0,
      project: 4,
      exp: 8,
      work: 15,
      knowledge: 20,
    },
    {
      title: "Microservices Architecture",
      amount: 0,
      project: 4,
      exp: 6,
      work: 20,
      knowledge: 20,
    },
    {
      title: "Spring Boot",
      amount: 0,
      project: 4,
      exp: 2,
      work: 20,
      knowledge: 20,
    },
    {
      title: "Augmented Reality",
      amount: 0,
      project: 2,
      exp: 3,
      work: 20,
      knowledge: 25,
    },
    {
      title: "React JS",
      amount: 0,
      project: 3,
      exp: 4,
      work: 15,
      knowledge: 20,
    },
    {
      title: "Python",
      amount: 0,
      project: 6,
      exp: 4,
      work: 10,
      knowledge: 15,
    },
    {
      title: "Angular JS",
      amount: 0,
      project: 2,
      exp: 4,
      work: 15,
      knowledge: 20,
    },
    {
      title: "MongoDB",
      amount: 0,
      project: 4,
      exp: 2,
      work: 10,
      knowledge: 15,
    },
    {
      title: "C++",
      amount: 0,
      project: 1,
      exp: 6,
      work: 5,
      knowledge: 10,
    },
    {
      title: "TypeScript",
      amount: 0,
      project: 1,
      exp: 1,
      work: 5,
      knowledge: 10,
    },
    {
      title: "FastAPI",
      amount: 0,
      project: 1,
      exp: 0.33,
      work: 5,
      knowledge: 10,
    },
    {
      title: "Open3D",
      amount: 0,
      project: 1,
      exp: 0.33,
      work: 5,
      knowledge: 10,
    },
    {
      title: "Docker",
      amount: 0,
      project: 1,
      exp: 0.33,
      work: 5,
      knowledge: 10,
    },
    {
      title: "C",
      amount: 0,
      project: 0,
      exp: 1,
      work: 5,
      knowledge: 10,
    },
  ],
});

const events = [
  {
    type: "EDU",
    title: "Master of Computer Science",
    organization: "University of Ottawa",
    startDate: 1693526400000, // Sep 1, 2023
    endDate: 1756684800000, // Apr 1, 2025
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "uOttawa.png",
      },
      {
        type: "text",
        text: "Completed Master of Computer Science degree at the University of Ottawa, Ontario, Canada.",
      },

      // Fall 2023
      {
        type: "header",
        text: "Fall 2023",
      },
      {
        type: "list",
        title: "Courses",
        listItems: [
          "Software Usability — A+",
          "Algorithms for Data Science — A",
        ],
      },
      {
        type: "list",
        title: "🛠 Skills",
        listItems: [
          "Human-computer interaction",
          "usability testing",
          "advanced algorithm design",
          "data science foundations",
        ],
      },

      // Winter 2024
      {
        type: "header",
        text: "Winter 2024",
      },
      {
        type: "list",
        title: "Courses",
        listItems: [
          "Advanced Data Structures — A+",
          "Combinatorial Algorithms — B",
          "Principles of Distributed Computing — A",
        ],
      },
      {
        type: "list",
        title: "🛠 Skills",
        listItems: [
          "Trees",
          "heaps",
          "hashing",
          "graph traversal",
          "distributed systems",
          "concurrency models",
        ],
      },

      // Fall 2024
      {
        type: "header",
        text: "Fall 2024",
      },
      {
        type: "list",
        title: "Courses",
        listItems: [
          "Theory of Computing — A-",
          "Machine Learning — A+",
          "Algorithm Analysis and Design — B+",
        ],
      },
      {
        type: "list",
        title: "🛠 Skills",
        listItems: [
          "Multiagent systems",
          "ML algorithms",
          "PAC learning",
          "complexity analysis",
          "theoretical CS",
        ],
      },

      // Winter 2025 (Ongoing Project)
      {
        type: "header",
        text: "Winter 2025",
      },
      {
        type: "header",
        text: "🛠 Intensive Graduate Project",
      },
      {
        type: "text",
        text: "🚀 Building an AR-based e-commerce platform using microservices architecture.",
      },
      {
        type: "list",
        title: "Technologies",
        listItems: [
          "Java Spring Boot",
          "Python FastAPI",
          "React",
          "Open3D",
          "OpenMVS",
          "Colmap",
          "Blender",
          "Kafka",
          "Docker",
        ],
      },
    ],
  },
  {
    type: "JOB",
    title: "Software Engineer",
    organization: "Quinbay Pvt. Ltd.",
    startDate: 1619827200000, // May 1, 2021
    endDate: 1682899200000, // May 1, 2023
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "quinbay.jpeg",
      },
      {
        type: "text",
        text: "Worked in the merchant-facing team of a large-scale e-commerce platform.",
      },
      {
        type: "header",
        text: "Key Responsibilites",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Owned and built UI modules using Vue.js and React for the merchant and internal team dashboard.",
          "Refactored legacy AngularJS modules into Vue components.",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Collaborated closely with backend teams to integrate APIs.",
          "Participated in code reviews, sprint planning, and feature estimation.",
        ],
      },
      {
        type: "header",
        text: "Hackathon Project",
      },
      {
        type: "text",
        text: "🏆 Participated in an internal company hackathon and built an AR model viewer web application.",
      },
      {
        type: "list",
        title: "Hackathon Highlights",
        listItems: [
          "Developed a web app to render 3D models in AR using WebXR and Model Viewer.",
          "Integrated a Vue JS frontend with AR rendering support.",
          "Collaborated with a cross-functional team to prototype and present in under 48 hours.",
        ],
      },
      {
        type: "header",
        text: "Tech Stack",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Vue.js",
          "Vuex",
          "React.js",
          "Redux",
          "AngularJS",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3 / SCSS",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "REST APIs",
          "Git",
          "JIRA",
          "Social Share",
          "Augmented Reality",
          "Model Viewer",
        ],
      },
      {
        type: "list",
        title: "Soft Skills & Culture",
        listItems: [
          "Agile methodology",
          "Team collaboration",
          "Mentorship",
          "Problem-solving under tight deadlines",
        ],
      },
      {
        type: "header",
        text: "Key Takeaways",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Reduced load time by 40% by optimizing component rendering.",
          "Built and documented a reusable component library for Vue-based projects.",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Mentored 2 junior developers during onboarding.",
          "Implemented a Social Sharing feature for promotional pages, enabling merchants to share offers directly via social media platforms.",
        ],
      },
      {
        type: "text",
        text: "This role shaped my practical understanding of frontend development at scale, solidified my React and Vue expertise, and enhanced my cross-team collaboration skills.",
      },
    ],
  },
  {
    type: "JOB",
    title: "Software Engineer Intern",
    organization: "Quinbay Pvt. Ltd.",
    startDate: 1609459200000, // Jan 1, 2021
    endDate: 1617235200000, // Apr 1, 2021
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "quinbay.jpeg",
      },
      {
        type: "text",
        text: "Joined Quinbay as an intern and transitioned to full-time software engineer.",
      },
      {
        type: "header",
        text: "Training Projects",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Built a mini e-commerce platform with user authentication and product listing.",
          "Worked on a CRM dashboard with user management and lead tracking features.",
          "Created a Spring Boot application using Kafka, SQL and Mongo DB.",
        ],
      },
      {
        type: "list",
        title: "Key Contributions",
        listItems: [
          "Contributed to UI and backend logic in collaborative group projects.",
          "Wrote API endpoints, handled form validations, and built frontend interfaces.",
          "Worked in different functional groups to simulate real agile team setups.",
        ],
      },
      {
        type: "header",
        text: "Key Responsibilities",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Worked on UI screens for merchant dashboard components.",
          "Fixed bugs, built reusable components, and performed unit testing.",
          "Learned company-wide development practices and agile methodologies.",
        ],
      },
      {
        type: "header",
        text: "Tech Stack",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Vue.js",
          "Vuex",
          "React.js",
          "JavaScript",
          "HTML/CSS",
          "SCSS",
          "Firebase",
          "Figma (for UI references)",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Spring Boot",
          "SQL",
          "Mongo DB",
          "REST APIs",
          "Kafka",
          "ElasticSearch",
          "Git",
        ],
      },
      {
        type: "header",
        text: "Skills Gained",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Full-stack development fundamentals",
          "Backend API creation with Spring Boot",
          "Team-based agile collaboration",
          "Version control with Git",
          "Code reviews",
          "Attention to detail in UI implementation",
        ],
      },
      {
        type: "header",
        text: "Key Takeaway",
      },
      {
        type: "text",
        text: "This internship not only gave me real-world frontend experience by giving me a solid foundation in Vue.js and collaborative workflows but also introduced me to backend development with Spring Boot and full project lifecycle management.",
      },
    ],
  },
  {
    type: "EDU",
    title: "B.Tech. in Computer Science",
    organization: "SRM IST",
    startDate: 1504224000000, // Sep 1, 2017
    endDate: 1617235200000, // Apr 1, 2021
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "srm.png",
      },
      {
        type: "text",
        text: "Graduated with a Bachelor of Technology in Computer Science and Engineering.",
      },
      {
        type: "text",
        text: "Completed with First Class with Distinction in June 2021.",
      },
      {
        type: "header",
        text: "CGPA: 91.37%",
      },

      // Year 1: Semesters 1–2
      {
        type: "header",
        text: "Year 1",
      },
      {
        type: "text",
        text: "Foundations in math, physics, and programming.",
      },
      {
        type: "list",
        title: "Courses:",
        listItems: [
          "Calculus",
          "Solid Geometry",
          "C Programming",
          "Electrical & Mechanical Engineering Basics",
          "Labs in Physics, Chemistry, and Programming",
        ],
      },
      {
        type: "list",
        title: "🔧 Skills",
        listItems: [
          "C",
          "basic electronics",
          "problem-solving",
          "computational thinking",
        ],
      },

      // Year 2: Semesters 3–4
      {
        type: "header",
        text: "Year 2",
      },
      {
        type: "text",
        text: "Core Computer Science fundamentals.",
      },
      {
        type: "list",
        title: "Courses",
        listItems: [
          "Data Structures",
          "OOP in C++",
          "Digital Systems",
          "Algorithms",
          "Java Programming",
          "Microprocessors",
          "Queuing Theory",
        ],
      },
      {
        type: "list",
        title: "🔧 Skills",
        listItems: [
          "C++",
          "Java",
          "DS & Algo",
          "circuit design",
          "complexity analysis",
        ],
      },

      // Year 3: Semesters 5–6
      {
        type: "header",
        text: "Year 3",
      },
      {
        type: "text",
        text: "Specialized systems and dev skills.",
      },
      {
        type: "list",
        title: "Courses",
        listItems: [
          "Computer Networks",
          "DBMS",
          "Discrete Math",
          "Theory of Computation",
          "Mobile App Development",
        ],
      },
      {
        type: "list",
        title: "🔧 Skills",
        listItems: [
          "MySQL",
          "Android",
          "mobile development",
          "TCP/IP stack",
          "formal languages",
        ],
      },

      // Year 4: Semesters 7–8
      {
        type: "header",
        text: "Year 4",
      },
      {
        type: "list",
        title: "Deep dives",
        listItems: [
          "AI",
          "Software Engineering",
          "Compiler Design",
          "Network Security",
          "Web Programming",
          "Capstone Project",
        ],
      },
      {
        type: "list",
        title: "🔧 Skills",
        listItems: [
          "Python",
          "ML",
          "AI",
          "full-stack web dev",
          "cybersecurity basics",
          "SDLC",
        ],
      },
      {
        type: "text",
        text: "🔬 Project: Built a Face Mask and Distance Detection system using Python and ML during the pandemic.",
      },
    ],
  },
  {
    type: "JOB",
    title: "Software Intern",
    organization: "Verzeo",
    startDate: 1593561600000, // Jul 1, 2020
    endDate: 1596240000000, // Aug 1, 2020
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "verzeo.png",
      },
      {
        type: "text",
        text: "Short-term internship focused on foundational machine learning practices.",
      },
      {
        type: "header",
        text: "Key Responsibilities",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Trained ML models using scikit-learn for binary classification tasks.",
          "Handled dataset preprocessing including missing values and normalization.",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Visualized training performance using Matplotlib.",
          "Presented final model outcomes and accuracy reports to mentors.",
        ],
      },
      {
        type: "header",
        text: "Skills Developed",
      },
      {
        type: "list",
        title: "Tech Stack",
        listItems: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
      },
      {
        type: "list",
        title: "Skills",
        listItems: [
          "Supervised learning",
          "Python scripting",
          "Model evaluation",
        ],
      },
      {
        type: "header",
        text: "Key Takeaway",
      },
      {
        type: "text",
        text: "This internship introduced me to practical ML workflows and gave me confidence to explore real-world AI applications later in my academic projects.",
      },
    ],
  },
  {
    type: "JOB",
    title: "Intern",
    organization: "JK Tech Pvt. Ltd.",
    startDate: 1559347200000, // Jun 1, 2019
    endDate: 1561852800000, // Jul 1, 2019
    slides: <Array<slideType>>[
      {
        type: "image",
        image: "JKT.jpg",
      },
      {
        type: "text",
        text: "Early internship experience learning software engineering and industry workflows.",
      },
      {
        type: "header",
        text: "Key Responsibilities",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Participated in the design and development of a Library Management System.",
          "Worked with Advanced Java, Servlet for frontend and JDBC for backend database connectivity with SQL as the database.",
        ],
      },
      {
        type: "list",
        title: "",
        listItems: [
          "Wrote reusable components for user login, book inventory, and transaction modules.",
          "Collaborated with peers on version control using Git.",
        ],
      },
      {
        type: "header",
        text: "Skills Developed",
      },
      {
        type: "list",
        title: "Tech Stack",
        listItems: ["Advanced Java", "Servlet", "JDBC", "SQL", "Git"],
      },
      {
        type: "list",
        title: "Soft Skills",
        listItems: [
          "Team collaboration",
          "Basic project planning",
          "Version control with Git",
          "Technical documentation",
        ],
      },
      {
        type: "header",
        text: "Key Takeaways",
      },
      {
        type: "list",
        title: "",
        listItems: [
          "First hands-on experience in building a full-stack application.",
          "Learned how to break down features into small tasks and collaborate effectively.",
          "Gained confidence working with Java in a real-world project setting.",
        ],
      },
    ],
  },
];

function addSkillAmount() {
  state.skills.forEach((skill) => {
    const projectCount = skill.project <= 5 ? skill.project : 5;
    skill.amount = Math.round(
      skill.exp * 2.5 + projectCount * 5 + skill.work + skill.knowledge
    );
  });
}

function getEventDate(eventDate: number) {
  let date = new Date(eventDate);
  return (
    date.toLocaleString("default", { month: "short" }) +
    " " +
    String(date.getFullYear())
  );
}

function scrollHandler() {
  const element = <HTMLElement>(
    document.getElementsByClassName("about__timeline-slides")[0]
  );
  if (
    element !== null &&
    !store.getters.getLayoutValue &&
    window.scrollY >= element.offsetTop
  ) {
    state.timelineShowing = true;
  } else {
    state.timelineShowing = false;
  }
}

function showSlideshow(miniEvent: miniEventType) {
  state.currentSlides = miniEvent.slides;
}

function closeSlideshow() {
  state.currentSlides = [];
}

onMounted(() => {
  addSkillAmount();
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div class="about">
    <h1>About Me</h1>
    <div class="about__summary">
      <p>
        Hey, I'm Swetha Narayan — a software engineer with 2 years of hands-on
        experience in developing e-commerce platforms. Throughout my academic
        and professional journey, I’ve had the opportunity to explore various
        areas of software development, from front-end design to backend systems,
        as well as projects involving Artificial Intelligence and Augmented
        Reality. I’m always eager to learn, and I thrive on solving complex
        problems with creative, out-of-the-box solutions.
      </p>
      <p>
        Previously, I worked as a front-end developer at Blibli, a leading
        Indonesian e-commerce company, where I contributed to building scalable
        web interfaces using Vue.js, AngularJS, and React.js. I also gained
        backend development experience with Spring Boot and Advanced Java,
        giving me a full-stack perspective on building robust web applications.
        Outside of traditional web development, I’ve also explored emerging
        technologies. My recent academic projects include developing AR-based
        e-commerce solutions using Open3D, OpenMVS, Blender, Colmap, FastAPI,
        and Model Viewer, merging immersive 3D experiences with modern web
        architecture.
      </p>
    </div>
    <h1>Skills</h1>
    <div class="about__skills">
      <Skills
        v-for="skill in state.skills"
        :amount="skill.amount"
        :title="skill.title"
        :project="skill.project"
        :exp="skill.exp"
      >
      </Skills>
    </div>
    <h1>Timeline</h1>
    <div class="about__timeline">
      <div class="about__timeline-slides">
        <div
          :class="{ 'about__timeline-slides__fixed': state.timelineShowing }"
        >
          <SlideShow
            :key="state.currentSlides.length"
            :slides="state.currentSlides"
          ></SlideShow>
        </div>
      </div>
      <div class="about__timeline-structure">
        <template v-for="event in events">
          <TimelineItem
            v-if="event.type == 'EDU'"
            :organization="event.organization"
            :title="event.title"
            @showSlideshow="showSlideshow(event)"
            @closeSlideshow="closeSlideshow"
          ></TimelineItem>
          <div class="about__timeline-structure__dates" v-else>
            {{ getEventDate(event.startDate) }} -
            {{ getEventDate(event.endDate) }}
          </div>
          <div
            class="about__timeline-structure__connector"
            :class="
              event.type == 'EDU'
                ? 'about__timeline-structure__connector-left'
                : 'about__timeline-structure__connector-right'
            "
          ></div>
          <div
            class="about__timeline-structure__dates"
            v-if="event.type == 'EDU'"
          >
            {{ getEventDate(event.startDate) }} -
            {{ getEventDate(event.endDate) }}
          </div>
          <TimelineItem
            v-else
            :organization="event.organization"
            :title="event.title"
            @showSlideshow="showSlideshow(event)"
            @closeSlideshow="closeSlideshow"
          ></TimelineItem>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../style.scss";
$horizontalLine: 3rem;
$verticalLine: 6.5rem;
.about {
  &__summary {
    width: 80%;
    padding: 0 1rem;
    border: 1px solid var(--secondary);
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 2px 2px 8px var(--tertiary);
  }
  &__timeline {
    display: flex;
    justify-content: space-around;
    &-slides {
      position: relative;
      width: 18rem;
      &__fixed {
        position: fixed;
        top: 0px;
      }
    }
    &-structure {
      display: grid;
      grid: repeat(6, auto) / 40% 20% 40%;
      row-gap: 0.5rem;
      place-items: center;
      margin-top: 4rem;
      &__connector {
        position: relative;
        width: 1rem;
        aspect-ratio: 1;
        border-radius: 50%;
        border: 1px solid var(--secondary);
        background-color: var(--primary);
        &::before {
          position: absolute;
          content: "";
          height: 1px;
          width: $horizontalLine;
          background-color: var(--secondary);
          top: 0.5rem;
        }
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: $verticalLine;
          background-color: var(--secondary);
          top: -$verticalLine;
          left: 0.5rem;
        }
        &-left::before {
          left: -$horizontalLine;
        }
        &-right::before {
          left: 1rem;
        }
      }
    }
  }
}
@media (max-width: 900px) {
  $verticalLine: 5rem;
  .about {
    &__skills {
      width: 95%;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    &__timeline {
      display: block;
      &-slides {
        z-index: 3;
        margin: auto;
        width: 95%;
      }
      &-structure {
        margin: 1rem auto;
        &__connector {
          &::after {
            height: $verticalLine;
            top: -$verticalLine;
          }
        }
      }
    }
  }
}
</style>

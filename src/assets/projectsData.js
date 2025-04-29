const images = import.meta.glob("/src/assets/projectImages/*.webp", {
  eager: true,
  import: "default",
});
const getImage = (filename) =>
  images[`/src/assets/projectImages/${filename}`] ?? null;
const projectData = [
  {
    name: "Anjaneya Arena GMS",
    techStack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "DataTables",
      "HTML",
      "CSS",
    ],
    githubUrl: "https://github.com/Abhishek-soni6904/Anjaneya-Arena-GMS",
    liveUrl: "http://anjaneya-arena.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A fitness center management system with membership tracking, transactions, announcements, and responsive dashboards for admins and members.",
    image: getImage("anjaneyaArena.webp"),
  },
  {
    name: "React Recipe App",
    techStack: ["React", "Forkify API", "React Router", "Tailwind CSS"],
    githubUrl: "https://github.com/Abhishek-soni6904/React-Recipe-App",
    liveUrl: "https://abhishek-soni6904.github.io/React-Recipe-App",
    summary:
      "A smooth recipe search and save app built with React, offering responsive design and API-powered recipe data.",
    image: getImage("recipeApp.webp"),
  },
  {
    name: "React Weather App",
    techStack: ["React", "Weather API", "Geolocation"],
    githubUrl: "https://github.com/Abhishek-soni6904/React-Weather-App",
    liveUrl: "https://abhishek-soni6904.github.io/React-Weather-App/",
    summary:
      "A real-time weather app featuring geolocation, dynamic search, and animated weather displays using React.",
    image: getImage("weatherApp.webp"),
  },
  {
    name: "BookNest - Online Bookstore",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tiny Slider"],
    githubUrl: "https://github.com/Abhishek-soni6904/BookNest-Book-Store",
    liveUrl: "https://booknest.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A responsive online bookstore for browsing, buying, and managing orders with secure customer and admin panels.",
    image: getImage("booknest.webp"),
  },
  {
    name: "RailBooker",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/Abhishek-soni6904/RailBooker-RTS",
    liveUrl: "http://railbooker.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A web-based railway reservation system supporting user bookings, train management, and full CRUD operations.",
    image: getImage("railbooker.webp"),
  },
  {
    name: "Employee Hub - EMS",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/Abhishek-soni6904/Employee-Hub-EMS",
    liveUrl: "http://employee-hub.devbyabhishek.infinityfreeapp.com/",
    summary:
      "An employee management system featuring record management, authentication, reporting, and admin dashboards.",
    image: getImage("employeeHub.webp"),
  },
  {
    name: "InfernoBook Landing Page",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/Abhishek-soni6904/SkillCraft-Internship-Projects-Oct-Nov-2024/tree/main/SCT_WD_1_Landing_Page",
    liveUrl: "http://infernobook.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A responsive and interactive landing page built for SkillCraft internship, showcasing frontend development skills.",
    image: getImage("infernobook.webp"),
  },
  {
    name: "Stopwatch Application",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/Abhishek-soni6904/SkillCraft-Internship-Projects-Oct-Nov-2024/tree/main/SCT_WD_2_Stopwatch",
    liveUrl: "http://stopwatch.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A stopwatch app featuring lap recording, reset functionality, and local storage, with a clean and responsive design.",
    image: getImage("stopwatch.webp"),
  },
  {
    name: "Tic-Tac-Toe Game",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/Abhishek-soni6904/SkillCraft-Internship-Projects-Oct-Nov-2024/tree/main/SCT_WD_3_Tic-Tac-Toe_Game",
    liveUrl: "http://tic-tac-toe.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A fully responsive tic-tac-toe game with turn tracking, win announcements, sound effects, and reset options.",
    image: getImage("tictactoe.webp"),
  },
  {
    name: "To-Do Web App",
    techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
    githubUrl:
      "https://github.com/Abhishek-soni6904/SkillCraft-Internship-Projects-Oct-Nov-2024/tree/main/SCT_WD_4_To-Do_Web_App",
    liveUrl: "http://todo-app.devbyabhishek.infinityfreeapp.com/",
    summary:
      "A feature-rich to-do web app allowing task addition, editing, completion tracking, and persistent local storage.",
    image: getImage("todoApp.webp"),
  },
  {
    name: "React Component Collection",
    techStack: ["React", "Local Storage", "Custom Hooks", "CSS"],
    githubUrl: "https://github.com/Abhishek-soni6904/React-Practice",
    liveUrl: "https://abhishek-soni6904.github.io/React-Practice/",
    summary:
      "A curated collection of reusable React components and mini-projects like modals, QR code generator, tic-tac-toe, GitHub profile finder, and more.",
    image: null,
  },
  {
    name: "AudioSphere",
    techStack: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "Tiny Slider"],
    githubUrl: "https://github.com/Abhishek-soni6904/AudioSphere",
    liveUrl: null,
    summary:
      "A modern PHP-based e-commerce site for browsing, filtering, and purchasing premium audio gear online.",
    image: null,
  },
  {
    name: "Number Guessing Game",
    techStack: ["Python"],
    githubUrl: "https://github.com/Abhishek-soni6904/Number-Guessing-Game",
    liveUrl: null,
    summary:
      "A simple Python-based number guessing game providing interactive CLI gameplay.",
    image: null,
  },
  {
    name: "Snake-Water-Gun Game",
    techStack: ["Python"],
    githubUrl:
      "https://github.com/Abhishek-soni6904/Snake-Water-Gun-Game-using-Python",
    liveUrl: null,
    summary:
      "A Python implementation of the classic Snake-Water-Gun game with easy-to-follow command-line gameplay.",
    image: null,
  },
];

export default projectData;

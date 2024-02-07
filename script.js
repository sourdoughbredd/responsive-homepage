// Function to create project cards
// const projectCards = projects.map((project) => {
//   return card;
// });

// List of projects
const projects = [
  {
    name: "EcoTracker",
    image: "EcoTracker.png",
    description:
      "EcoTracker is a web application designed to help individuals track their carbon footprint and learn ways to live more sustainably. It provides personalized tips, tracks progress over time, and encourages users through challenges and achievements.",
    github: "https://github.com/user/EcoTracker",
    link: "https://ecotracker.example.com",
  },
  {
    name: "CodeSnipHub",
    image: "CodeSnipHub.png",
    description:
      "CodeSnipHub is an online repository where developers can share and discover code snippets in various programming languages. It features a tagging system, user ratings, and integration with popular IDEs to facilitate easy code reuse.",
    github: "https://github.com/user/CodeSnipHub",
    link: "https://codesniphub.example.com",
  },
  {
    name: "HealthBeat",
    image: "HealthBeat.png",
    description:
      "HealthBeat is a mobile app that tracks physical activity, heart rate, and sleep patterns. It offers insights and recommendations to improve users' health based on data collected from wearable devices.",
    github: "https://github.com/user/HealthBeat",
    link: "https://healthbeat.example.com",
  },
  {
    name: "MarketMaven",
    image: "MarketMaven.png",
    description:
      "MarketMaven is an AI-powered tool that analyzes market trends and predicts stock performance. It's designed for both novice and experienced investors, offering detailed reports, risk assessments, and investment suggestions.",
    github: "https://github.com/user/MarketMaven",
    link: "https://marketmaven.example.com",
  },
  {
    name: "ArtistryHub",
    image: "ArtistryHub.png",
    description:
      "ArtistryHub is a platform for digital artists to showcase their work, receive feedback, and connect with potential clients. It features artist portfolios, a commission system, and community-driven events.",
    github: "https://github.com/user/ArtistryHub",
    link: "https://artistryhub.example.com",
  },
  {
    name: "QuestBoard",
    image: "QuestBoard.png",
    description:
      "QuestBoard is a gamified task management app that turns daily chores and tasks into quests. Users can earn rewards, level up, and compete with friends to make productivity more enjoyable.",
    github: "https://github.com/user/QuestBoard",
    link: "https://questboard.example.com",
  },
];

// Function to load the project cards to the page
const container = document.querySelector(".projects-container");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img class="project-image" src="./assets/projects/${project.image}" alt="" />
    <div class="project-info">
      <div class="project-header">
        <h3>${project.name}</h3>
        <div class="project-links">
          <a href="${project.github}" class="github-link">
            <i class="devicon-github-original project-icon github-icon"></i>
          </a>
          <a href="${project.link}" class="external-link">
            <img
              src="./assets/external-link.svg"
              alt=""
              class="project-icon external-icon"
            />
          </a>
        </div>
      </div>
      <p class="project-description">${project.description}</p>
    </div>
  `;

  container.appendChild(card);
});

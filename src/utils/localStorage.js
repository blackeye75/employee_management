const employees = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDetails: "Fix login issue",
        taskDescription:
          "Resolve the bug in the login feature causing errors for some users.",
        taskDate: "2024-10-21",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDetails: "Implement password reset",
        taskDescription:
          "Develop a password reset feature using Node.js and MongoDB.",
        taskDate: "2024-10-20",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "Design dashboard",
        taskDescription: "Create a responsive UI for the admin dashboard.",
        taskDate: "2024-10-22",
        category: "Design",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDetails: "Update product listings",
        taskDescription:
          "Revamp the product listing page with the latest offers.",
        taskDate: "2024-10-22",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDetails: "Fix footer links",
        taskDescription:
          "Correct the broken links in the footer of the website.",
        taskDate: "2024-10-18",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskDetails: "Database migration",
        taskDescription: "Migrate the product database to a new server.",
        taskDate: "2024-10-19",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "SEO optimization",
        taskDescription:
          "Optimize the website for better search engine rankings.",
        taskDate: "2024-10-22",
        category: "Marketing",
      },
    ],
  },
  {
    id: 3,
    email: "alice.johnson@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDetails: "Setup AWS infrastructure",
        taskDescription: "Configure the AWS environment for deployment.",
        taskDate: "2024-10-23",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "API rate limiting",
        taskDescription:
          "Implement rate limiting for the API to prevent abuse.",
        taskDate: "2024-10-20",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDetails: "Add payment gateway",
        taskDescription:
          "Integrate Stripe as a payment gateway for the e-commerce site.",
        taskDate: "2024-10-19",
        category: "Payments",
      },
    ],
  },
  {
    id: 4,
    email: "bob.martin@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDetails: "Create CI/CD pipeline",
        taskDescription:
          "Set up continuous integration and deployment for the project.",
        taskDate: "2024-10-21",
        category: "DevOps",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDetails: "Fix UI bugs",
        taskDescription:
          "Resolve the alignment issues on the user profile page.",
        taskDate: "2024-10-20",
        category: "Frontend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "Implement dark mode",
        taskDescription: "Develop a toggle for dark mode in the settings.",
        taskDate: "2024-10-23",
        category: "Frontend",
      },
    ],
  },
  {
    id: 5,
    email: "charlie.brown@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDetails: "Set up user authentication",
        taskDescription:
          "Develop a secure user authentication system using JWT.",
        taskDate: "2024-10-22",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDetails: "Deploy the application",
        taskDescription: "Deploy the app to the production server.",
        taskDate: "2024-10-20",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "Add email notifications",
        taskDescription:
          "Implement email notifications for new user registrations.",
        taskDate: "2024-10-23",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDetails: "Test mobile responsiveness",
        taskDescription:
          "Ensure the website is mobile-friendly across different devices.",
        taskDate: "2024-10-22",
        category: "Frontend",
      },
    ],
  },
];

const admin = [
  {
    id: 1001,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
//   console.log(admin,employees);
 
};

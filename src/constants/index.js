import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Front End Web Developer",
    company: "IBM",
    description: `Worked on a project focused on sustainable development, utilizing HTML, CSS, and JavaScript to develop web-based solutions and implemented APIs with interactive user interfaces, responsive design, and data-driven insights to promote sustainability goals.Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  },
  {
    year: "July 2023 - August 2023",
    role: "Web Developer",
    company: "OctaNet Software solutions",
    description: `Developed a task management project titled 'To-Do List' using JavaScript, focusing on creating an intuitive and efficient user interface. Enhanced user interaction and productivity through seamless design, ensuring smooth task management and responsive performance.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "July 2023 - August 2023",
    role: "Web Developer",
    company: "Bharat Intern",
    description: `Following the internship, worked on a Project "Temperature Converter" website using JavaScript, featuring real-time showing of temperature conversions with a simple and interactive interface for ease of use.`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Hotel Booking System",
    image: project1,
    //live: "https://github.com/Riya-0704/Hotel-Booking-System",
    description:
      "A fully functional hotel booking website with features like room availability and booking, customer management, reviews and user authentication.",
    technologies: ["HTML", "Tailwind", "React", "Node.js", "MongoDB"],
  },
  {
    title: "URL Shortner",
    image: project2,
    live: "https://github.com/Riya-0704/Link-shortener",
    description:
      "Developed and launched user-friendly features, including URL shortening and adaptive QR code generation resulting in a 30% increase in user engagement by enhancing convenience for website visitors navigating resources.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Language Translator",
    image: project3,
    live: "https://github.com/Riya-0704/Language-Translator",
    description:
      "Enhanced an innovative language translator app using React.js with real-time, multi-language translation capabilities. Integrated the MyMemory API for high-precision translations, ensuring accuracy and swift data processing",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Customer Relationship Management System",
    image: project4,
    live: "https://github.com/Riya-0704/Django-CRM",
    description:
      "Engineered a robust CRM platform using Django and Bootstrap, featuring secure authentication and role-based access for managing customer records.Executed full CRUD functionality for efficient customer data management, with a seamless and accessible interfacedashboard accessible only to authenticated users.",
    technologies: ["HTML", "Bootstrap", "Django", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+91-7497074461",
  email: "riyagoyal.rg07@gmail.com",
};

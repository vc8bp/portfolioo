export const projects = [
  {
    slug: "ecommerce-platform",
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    image: 'https://source.unsplash.com/800x600/?ecommerce,shop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      { url: 'https://source.unsplash.com/800x600/?ui-design,components', alt: 'Design System Components' },
      { url: 'https://source.unsplash.com/800x600/?colors,palette', alt: 'Color System' },
      { url: 'https://source.unsplash.com/800x600/?typography,font', alt: 'Typography System' },
      { url: 'https://source.unsplash.com/800x600/?library,code', alt: 'Component Library' }
    ],
    content: [
      {
        title: 'Project Overview',
        description: 'A modern design system that provides a comprehensive set of reusable components, design tokens, and guidelines. Built with scalability and maintainability in mind, it serves as the foundation for consistent user experiences across multiple applications.'
      },
      {
        title: 'Technical Challenges',
        description: 'One of the main challenges was creating a flexible theming system that could support multiple brand identities while maintaining consistency. We implemented a token-based architecture using CSS variables and created a robust build system to generate theme variations.'
      },
      {
        title: 'Key Features',
        description: 'The design system includes a complete set of atomic components, complex patterns, and layout primitives. It features dark mode support, RTL compatibility, and accessibility compliance out of the box. The documentation is auto-generated from component props and includes interactive examples.'
      }
    ]
  },
  {
    slug: "task-management-app",
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://source.unsplash.com/800x600/?task,management',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      { url: 'https://source.unsplash.com/800x600/?collaboration,team', alt: 'Real-time Collaboration' },
      { url: 'https://source.unsplash.com/800x600/?kanban,task', alt: 'Task Kanban Board' }
    ],
    content: [
      {
        title: 'Project Overview',
        description: 'A real-time task management application that simplifies team collaboration with features like task assignments, status updates, and instant notifications.'
      },
      {
        title: 'Technical Challenges',
        description: 'Ensuring low-latency updates across distributed teams required optimization of WebSocket connections and efficient database queries.'
      },
      {
        title: 'Key Features',
        description: 'Supports drag-and-drop task boards, real-time chat, and integration with popular calendars. Also includes analytics for tracking team performance.'
      }
    ]
  },
  {
    slug: "ai-writing-assistant",
    title: 'AI Writing Assistant',
    description: 'An AI-powered writing assistant that helps improve your writing.',
    image: 'https://source.unsplash.com/800x600/?writing,ai',
    technologies: ['Next.js', 'OpenAI', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      { url: 'https://source.unsplash.com/800x600/?ai,dashboard', alt: 'AI Writing Dashboard' },
      { url: 'https://source.unsplash.com/800x600/?grammar,corrections', alt: 'Grammar Suggestions' }
    ],
    content: [
      {
        title: 'Project Overview',
        description: 'An AI-powered application that assists writers by suggesting grammatical corrections, improving readability, and generating creative ideas.'
      },
      {
        title: 'Technical Challenges',
        description: 'Implementing a context-aware suggestion system that adapts to different writing styles required fine-tuning language models and creating efficient APIs.'
      },
      {
        title: 'Key Features',
        description: 'Includes grammar corrections, vocabulary suggestions, and tone adjustments. Offers seamless integration with popular text editors and cloud syncing.'
      }
    ]
  },
  {
    slug: "fitness-tracking-app",
    title: 'Fitness Tracking App',
    description: 'A fitness app that tracks workouts, calories, and progress.',
    image: 'https://source.unsplash.com/800x600/?fitness,workout',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    images: [
      { url: 'https://source.unsplash.com/800x600/?fitness,tracker', alt: 'Workout Tracker UI' },
      { url: 'https://source.unsplash.com/800x600/?analytics,chart', alt: 'Fitness Analytics Dashboard' }
    ],
    content: [
      {
        title: 'Project Overview',
        description: 'A mobile app that helps users track their fitness goals with personalized workout plans and detailed analytics on progress.'
      },
      {
        title: 'Technical Challenges',
        description: 'Creating real-time sync across devices and implementing high-performance graphs for data visualization required significant optimization.'
      },
      {
        title: 'Key Features',
        description: 'Features include goal setting, progress tracking, a variety of workout plans, and gamification elements to keep users motivated.'
      }
    ]
  }
];



export const skillsWithLevels = [
  { name: 'Frontend Development', level: 95 },
  { name: 'Backend Development', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'DevOps & Cloud', level: 80 },
  { name: 'Database Management', level: 85 },
  { name: 'System Architecture', level: 88 },
];

export const experience = [
  {
    year: '2023',
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    description: 'Led development of enterprise-scale applications and mentored junior developers.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'StartupX',
    description: 'Developed and maintained multiple client projects using modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    company: 'WebAgency',
    description: 'Created responsive and interactive web applications for various clients.',
    technologies: ['React', 'JavaScript', 'CSS'],
  },  {
    year: '2019',
    title: 'Frontend Developer',
    company: 'WebAgency',
    description: 'Created responsive and interactive web applications for various clients.',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
];
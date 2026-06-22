export interface CardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const cardsData: CardData[] = [
  {
    id: "1",
    title: "React Fundamentals",
    description: "Master the basics of React, including components, JSX, props, and state management.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "2",
    title: "Advanced Hooks",
    description: "Deep dive into useEffect, useContext, useMemo, and creating custom hooks.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
  },
  {
    id: "3",
    title: "Tailwind CSS Styling",
    description: "Learn to build modern, responsive interfaces rapidly using utility-first CSS.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
  },
  {
    id: "4",
    title: "React Router DOM",
    description: "Implement dynamic routing and navigation in Single Page Applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "5",
    title: "State Management",
    description: "Manage complex application state using Context API and external libraries.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "6",
    title: "Performance Optimization",
    description: "Optimize React apps with lazy loading, memoization, and code splitting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "7",
    title: "Testing in React",
    description: "Write reliable unit and integration tests using Jest and React Testing Library.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: "8",
    title: "Deployment & CI/CD",
    description: "Deploy your React applications seamlessly to production environments.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
  }
];

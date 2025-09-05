export const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue";
      case "emerald":
        return "bg-emerald";
      case "purple":
        return "bg-purple";
      default:
        return "bg-gray";
    }
  };


export function colorFor(skill: string): string {
  switch (skill) {
    case "React.js": return "#61DAFB";
    case "TypeScript": return "#3178C6";
    case "Node.js": return "#339933";
    case "JavaScript": return "#F7DF1E";
    case "AEM": return "#FF6B35";
    case "Angular": return "#DD0031";
    case "MongoDB": return "#47A248";
    case "Firebase": return "#FFCA28";
    case "Git": return "#F05032";
    case "Python": return "#3776AB";
    case "AWS": return "#FF9900";
    case "Docker": return "#2496ED";
    case "PostgreSQL": return "#336791";
    case "Figma": return "#F24E1E";
    case "HTML": return "#E34F26";
    case "CSS": return "#1572B6";
    case "Express.js": return "#000000";
    case "MySQL": return "#4479A1";
    default: return "#6B7280"; // fallback gray
  }
}
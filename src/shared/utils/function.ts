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
    case "React": return "#61DAFB";
    case "TypeScript": return "#3178C6";
    case "Node.js": return "#339933";
    case "Python": return "#3776AB";
    case "AWS": return "#FF9900";
    case "Docker": return "#2496ED";
    case "PostgreSQL": return "#336791";
    case "MongoDB": return "#47A248";
    case "Git": return "#F05032";
    case "Figma": return "#F24E1E";
    default: return "#E5E7EB"; // fallback gray
  }
}
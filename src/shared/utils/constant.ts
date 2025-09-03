export const user = {
    name: "Parshant Sharma",
    contact: "+91 7719617464",
    email: "sparshant2001@gmail.com",
    address: "VPO Hoashiarpur",
    footer_description: "Passionate Full Stack Developer turning ideas into seamless, impactful web applications",
    linkedin: "https://www.linkedin.com/in/parshant-sharma-721714195/",
}

export const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

export const projects = [
    {
        "title": "Wheel of Fortune",
        "description": "Developed an animated wheel using PNGs, D3, and frame animation at 60 FPS on 95%+ devices. Built 360° rotation logic with knob impact, sound, and randomized stops, boosting engagement by 40%. Packaged as a reusable component with glowing rotating bulb frame; reduced future dev time by 50%.",
        "technology": ["D3.js", "React.js"],
        "link": "https://spinwheeloffortune.netlify.app/"
    },
    {
        "title": "Mini Heart",
        "description": "Managed 100+ child donation stories, increasing donor engagement by 30%. Integrated advanced filtering and trimmed image upload, improving data handling by 40%.",
        "technology": ["React.js"],
        "link": "https://minihearts.org/"
    },
    {
        "title": "Spinnr",
        "description": "Developed a responsive dating web app UI using Redux Toolkit. Used React Query for optimized API handling and caching. Integrated Firebase-based real-time chat and user management.",
        "technology": ["React.js", "Firebase"],
        "link": ""
    },
    {
        "title": "MrCashback",
        "description": "Built a real-time synced CMS for cashback campaigns, reducing admin work by 50%. Implemented dynamic content mapping and a leaderboard, improving delivery speed by 40%. Integrated push notifications (browser & in-app) via FCM, increasing re-engagement by 25%.",
        "technology": ["React.js", "Firebase"],
        "link": "https://mrcashback.com/"
    },
    {
        "title": "Penny Auction",
        "description": "Developed an admin panel for managing auctions, product listings, and live tracking. Built a secure payment module for bid verification and transactions. Created an intuitive dashboard improving admin flow by 45%.",
        "technology": ["React.js", "TypeScript"],
        "link": ""
    },
    {
        "title": "Speltips",
        "description": "Managed complete lifecycle including client meetings, CMS, admin, and user systems. Integrated WebSockets, role-based login (Master/Publisher/Operator), and PWA with auto-update. Designed real-time dashboards with 40% improvement in team operations.",
        "technology": ["React.js", "TypeScript"],
        "link": "https://speltips.se/"
    },
    {
        "title": "Cancer Clarity",
        "description": "Migrated project from CRA to Vite and Node v16 to v22, enhancing build and DX. Refactored codebase, removed redundant libraries, and added ESLint, Prettier, Husky. Currently implementing new features and stabilizing releases.",
        "technology": ["React.js", "Vite", "Node.js"],
        "link": ""
    },
    {
        "title": "Pet vs Cat",
        "description": "Developed a Web3-enabled app using Warpcast + Framecaster for decentralized interactions. Enabled wallet connection via WalletConnect for on-chain access. Built a Farcaster-based social UI to support community engagement and NFT readiness.",
        "technology": ["Next.js", "TypeScript", "Warpcast", "Framecaster"],
        "link": ""
    }
]

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Next.js", level: 80 },
        ],
        color: "blue",
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
        ],
        color: "emerald",
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git & GitHub", level: 95 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 65 },
            { name: "Figma", level: 80 },
        ],
        color: "purple",
    },
];
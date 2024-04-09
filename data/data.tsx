import { FaFacebookSquare, FaGithub, FaRegUserCircle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

export const data = {
    contact: [
        {
            name: "Email",
            url: "mailto:longxuongz@gmail.com",
            icon: MdEmail,
        },
        {
            name: "GitHub",
            url: "https://github.com/xuonghuynh",
            icon: FaGithub,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/longxuong92",
            icon: FaFacebookSquare,
        },
        {
            name: "Download CV",
            url: "https://www.facebook.com/longxuong92",
            icon: FaRegUserCircle,
        },
    ],
    skills: [
        { id: 1, name: "HTML", image: "/skills/html-5.png" },
        { id: 2, name: "CSS", image: "/skills/css3.png" },
        { id: 3, name: "Sass", image: "/skills/sass.png" },
        { id: 4, name: "bootstrap", image: "/skills/bootstrap.png" },
        { id: 5, name: "tailwindcss", image: "/skills/tailwind.png" },
        { id: 6, name: "figma", image: "/skills/figma.png" },
        { id: 7, name: "JavaScript", image: "/skills/javascript.png" },
        { id: 8, name: "TypeScript", image: "/skills/typescript.png" },
        { id: 10, name: "React", image: "/skills/react.png" },
        { id: 12, name: "Redux", image: "/skills/redux.png" },
        { id: 13, name: "Next", image: "/skills/next-js.png" },
        { id: 13, name: "Prisma", image: "/skills/prism.png" },
        { id: 38, name: "Webpack", image: "/skills/webpack.png" },
        { id: 14, name: "Styled Components", image: "/skills/styled.png" },
        { id: 15, name: "MUI", image: "/skills/mui.png" },
        { id: 18, name: "Angular", image: "/skills/angularjs.png" },
        { id: 28, name: "Heroku", image: "/skills/heroku.png" },
        { id: 29, name: "Netlify", image: "/skills/netlify.png" },
        { id: 33, name: "AWS", image: "/skills/aws.png" },
        { id: 34, name: "Docker", image: "/skills/docker.png" },
        { id: 35, name: "GitHub", image: "/skills/git.png" },
        { id: 36, name: "Shopify", image: "/skills/shopify.png" },
        { id: 37, name: "Wordpress", image: "/skills/wordpress.png" },
    ],

    experients: [
        {
            id: 1,
            title: "Frontend Developer",
            company: "FPT Software",
            time: "2022 - Present",
            description: "abc xyz",
            icon: <LuGraduationCap />
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "FPT Software",
            time: "2021 - 2022",
            description: "abc xyz",
            icon: <CgWorkAlt />
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "FPT Software",
            time: "2021 - 2022",
            description: "abc xyz",
            icon: <CgWorkAlt />
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "FPT Software",
            time: "2021 - 2022",
            description: "abc xyz",
            icon: <CgWorkAlt />
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "FPT Software",
            time: "2021 - 2022",
            description: "abc xyz",
            icon: <CgWorkAlt />
        }
    ]
};

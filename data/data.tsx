import { FaFacebookSquare, FaGithub, FaReact, FaRegUserCircle } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaBugSlash } from "react-icons/fa6";
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
            url: "/Huynh-Long-Xuong-TopCV.-2.pdf",
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
            title: " Senior Front-End Developer",
            company: "Quodisys",
            time: "07/2021 - now",
            description: `
            <ul>
            <li>- Create and troubleshoot websites using technologies such as React.js, Next.js, Prisma, Tailwind CSS, Shadow, Ant Design.</li>
            <li>- Create and troubleshoot customer websites on the CMS Shopify.</li>
            <li>- Experience working with RESTful APIs.</li>
            <li>- Ability to use ES6, TypeScript.</li>
            </ul>
            `,
            icon: <FaReact />
        },
        {
            id: 2,
            title: "Junior Front-End Developer",
            company: "Quodisys",
            time: "08/2017 - 07/2021",
            description: `<ul>
            <li>- Create and troubleshoot customer websites on CMS WordPress.</li>
            <li>- Collaborate with the team to create and troubleshoot AngularJS and Angular applications.</li>
            <li>- Work with Designers to improve UI/UX, Responsive Design.</li>
            <li>- Apply Object-Oriented Programming (OOP) principles.</li>
            <li>- Use Git and CI/CD Jenkins.</li>
            <li>- Optimize and improve website loading speed.</li></ul>`,
            icon: <FaGithub />
        },
        {
            id: 3,
            title: "Intern Front-End Developer",
            company: "Quodisys",
            time: "06/2017 - 08/2017",
            description: `<ul>
            <li>- Verify and identify errors and technical issues of the customer's website.</li>
            <li>- Proceed to fix the basic errors.</li>
            </ul>`,
            icon: <FaBugSlash />
        },
        {
            id: 4,
            title: "Education",
            company: "FPT Greenwich",
            time: "2013 - 2017",
            description: "Completed the international bachelor course in information technology, Bachelor BSc certificate of FPT Greenwich",
            icon: <LuGraduationCap />
        }
    ]
};

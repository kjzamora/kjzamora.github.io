/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Kyle's Portfolio",
    description:
        "Senior Specialist with 5+ years’ experience in project management, virtualization, IT infrastructure, and simulation with a strong background in programming. I love creating tools and methods to optimize processes, reduce errors, and create consistent high-quality results.",
    og: {
        title: "Kyle Zamora Portfolio",
        type: "website",
        url: "http://kjzamora.github.io/",
    },
};

// Open Source
// Edit git_data_fetcher.mjs to update all contributed to, pull request, pinned projects, etc.
// const openSource = {
//githubConvertedToken: "generate new key and add here",
//    githubUserName: "kjzamora",
//}; 

//Home Page
const greeting = {
    title: "Kyle Zamora",
    logo_name: "KyleZamora",
    nickname: "kjzamora",
    subTitle:
        "Senior Specialist with 5+ years’ experience in project management, virtualization, IT infrastructure, and simulation with a strong background in programming. I love creating tools and methods to optimize processes, reduce errors, and create consistent high-quality results.",
    resumeLink:
        "https://drive.google.com/file/d/1-NUTRlyqTUpu9sJ0Gob3azSenQn7eFGR/view?usp=sharing",
    portfolio_repository: "https://github.com/kjzamora/masterPortfolio",
    githubProfile: "https://github.com/kjzamora",
};

const socialMediaLinks = [
    /* Your Social Media Link */
    // github: "https://github.com/kjzamora",
    // linkedin: "https://www.linkedin.com/in/kylezamora/",
    // gmail: "kylejzamora@gmail.com",
    // gitlab: "https://gitlab.com/ashutoshhathidara98",
    // facebook: "https://www.facebook.com/laymanbrother.19/",
    // twitter: "https://twitter.com/ashutosh_1919",
    // instagram: "https://www.instagram.com/layman_brother/"

    {
        name: "Github",
        link: "https://github.com/kjzamora",
        fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kylezamora/",
        fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
        backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    },
    //{
    //  name: "YouTube",
    //  link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    //  fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    //  backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    //},
    {
        name: "Gmail",
        link: "mailto:kylejzamora@gmail.com",
        fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
    {
        name: "Wordpress",
        link: "https://kjzamora.wordpress.com",
        fontAwesomeIcon: "fa-wordpress-simple", // Reference https://fontawesome.com/icons/twitter?style=brands
        backgroundColor: "#21759B", // Reference https://simpleicons.org/?q=twitter
    },
    //{
    //  name: "Twitter",
    //  link: "https://twitter.com/ashutosh_1919",
    //  fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    //  backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
    //},
    //{
    //  name: "Facebook",
    //  link: "https://www.facebook.com/laymanbrother.19/",
    //  fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    //  backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    //},
    //{
    //  name: "Instagram",
    //  link: "https://www.instagram.com/layman_brother/",
    //  fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    //  backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    //},
];

const skills = {
    data: [
        // To create custom img:
        // get svg image from this site:  https://undraw.co/illustrations
        // render in js file format using this site: https://svg2jsx.com/  - turn off functional, turn off remove ids, turn off single quotes, turn off memo
        // add new js file to src/containers/skills/skillsection.js
        {
            title: "Project Management",
            fileName: "CollabImg",
            skills: [
                "⚡ Increased profit margins by an average of 5% with 4+ years' of project management experience on multiple 6-figure projects",
                "⚡ Maintained at least 90% customer satisfaction",
                "⚡ Managed teams of 4 to 5 engineers and acting as liaison between the simulation group and operations",
                "⚡ Successfully handled as many as 8 projects at a time",
            ],
            softwareSkills: [
                {
                    skillName: "Microsoft Access",
                    fontAwesomeClassname: "simple-icons:microsoftaccess",
                    style: {
                        color: "#A4373A",
                    },
                },
                {
                    skillName: "Microsoft Excel",
                    fontAwesomeClassname: "simple-icons:microsoftexcel",
                    style: {
                        color: "#217346",
                    },
                },
                {
                    skillName: "Microsoft OneDrive",
                    fontAwesomeClassname: "simple-icons:microsoftonedrive",
                    style: {
                        color: "#0078D4",
                    },
                },
                {
                    skillName: "Microsoft Outlook",
                    fontAwesomeClassname: "simple-icons:microsoftoutlook",
                    style: {
                        color: "#0078D4",
                    },
                },
                {
                    skillName: "Microsoft Teams",
                    fontAwesomeClassname: "simple-icons:microsoftteams",
                    style: {
                        color: "#6264A7",
                    },
                },
                //{
                //    skillName: "Microsoft Project",
                //    fontAwesomeClassname: "fa-project-diagram",
                //    style: {
                //        color: "#217346",
                //    },
                //},
            ],
        },
        {
            title: "Virtualization",
            fileName: "FullStackImg",
            skills: [
                "⚡ 3+ years' experience with VMWare ESXi/vSphere within Windows Server environment on Dell Poweredge hardware",
                "⚡ Certified by Google on Creating and Managing Resources using Google Cloud",
                "⚡ Building VMs on both hardware and cloud infastructure",
                "⚡ Familiar with multiple operating systems",
                "⚡ Familiar with VLANs",
            ],
            softwareSkills: [
                {
                    skillName: "VMware",
                    fontAwesomeClassname: "simple-icons:vmware",
                    style: {
                        color: "#607078",
                    },
                },
                {
                    skillName: "Google Cloud",
                    fontAwesomeClassname: "simple-icons:googlecloud",
                    style: {
                        color: "#4285F4",
                    },
                },
                {
                    skillName: "VirtualBox",
                    fontAwesomeClassname: "simple-icons:virtualbox",
                    style: {
                        color: "#183A61",
                    },
                },
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "simple-icons:amazonaws",
                    style: {
                        color: "#FF9900",
                    },
                },
                {
                    skillName: "Windows",
                    fontAwesomeClassname: "simple-icons:windows",
                    style: {
                        color: "#0078D6",
                    },
                },
                {
                    skillName: "Linux",
                    fontAwesomeClassname: "simple-icons:linux",
                    style: {
                        color: "#FCC624",
                    },
                },
                {
                    skillName: "Cisco",
                    fontAwesomeClassname: "simple-icons:cisco",
                    style: {
                        color: "#1BA0D7",
                    },
                },
                {
                    skillName: "Kubernetes",
                    fontAwesomeClassname: "simple-icons:kubernetes",
                    style: {
                        color: "#326CE5",
                    },
                },
            ],
        },
        {
            title: "Process Improvement",
            fileName: "DataScienceImg",
            skills: [
                "⚡ Led communication between operations and simulation introducing 2 new SOPs, issued monthly reporting updates, and coordinated patching of hardware and VMware systems",
                "⚡ Implemented new SOP for simulation engineers' database submissions and reduce system loading times from 3 days to 1.5 hours",
                "⚡ Presented and trained 9 engineers on database manipulation during simulator SME meeting",
                "⚡ Creates new organizational process asset tools using various programming languages",
                "⚡ Performed Gage R&R study to determine residual tungsten in bags utilizing Six Sigma Green Belt resulting in 1K increase per bag resale value",
                "⚡ Six Sigma Green Belt Certified",
            ],
            softwareSkills: [
                //{
                //  skillName: "Six Sigma",
                //      //fontAwesomeClassname: "logos-tensorflow",
                //      fontAwesomeClassname: "simple-icons:visualstudio",
                //  style: {
                //    backgroundColor: "transparent",
                //  },
                //},
                //{
                //  skillName: "Keras",
                //  fontAwesomeClassname: "simple-icons:keras",
                //  style: {
                //    backgroundColor: "white",
                //    color: "#D00000",
                //  },
                //},
                //{
                //  skillName: "PyTorch",
                //  fontAwesomeClassname: "logos-pytorch",
                //  style: {
                //    backgroundColor: "transparent",
                //  },
                //},
                //{
                //  skillName: "Python",
                //  fontAwesomeClassname: "ion-logo-python",
                //  style: {
                //    backgroundColor: "transparent",
                //    color: "#3776AB",
                //  },
                //},
            ],
        },
        {
            title: "Programming & Scripting",
            fileName: "ProgrammingImg",
            skills: [
                "⚡ Experience in multiple coding languages and in creating tools that have resulted in measureable process improvements",
                "⚡ Developed an automated tool using VBA resulting in a process improvement of 1 - 1.5 weeks per project",
                "⚡ Created an automated VBA tool that collected chemical compositions from an internal SQL database and determined cost losses at various points of the process that resulted in a reduction of 3 days of work to 5 minutes",
                "⚡ Programmed a supplement engineering tool using PowerShell creating a directed graph of Emerson's Ovation Embedded Simulation network",
            ],
            softwareSkills: [
                {
                    skillName: ".NET",
                    fontAwesomeClassname: "simple-icons:dotnet",
                    style: {
                        color: "#512BD4",
                    },
                },
                {
                    skillName: "PowerShell",
                    fontAwesomeClassname: "simple-icons:powershell",
                    style: {
                        color: "#5391FE",
                    },
                },
                {
                    skillName: "C#",
                    fontAwesomeClassname: "simple-icons:csharp",
                    style: {
                        color: "#2f007a",
                    },
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "simple-icons:python",
                    style: {
                        color: "#3776AB",
                    },
                },
                {
                    skillName: "Pytorch",
                    fontAwesomeClassname: "simple-icons:pytorch",
                    style: {
                        color: "#EE4C2C",
                    },
                },
                {
                    skillName: "Scikit-learn",
                    fontAwesomeClassname: "simple-icons:scikit-learn",
                    style: {
                        color: "#F7931E",
                    },
                },
                {
                    skillName: "GitHub",
                    fontAwesomeClassname: "simple-icons:github",
                    style: {
                        color: "#181717",
                    },
                },
                {
                    skillName: "Visual Studio",
                    fontAwesomeClassname: "simple-icons:visualstudio",
                    style: {
                        color: "#5C2D91",
                    },
                },
                {
                    skillName: "Anaconda",
                    fontAwesomeClassname: "simple-icons:anaconda",
                    style: {
                        color: "#44A833",
                    },
                },
                //{
                //    skillName: "Microsoft Project",
                //    fontAwesomeClassname: "fa-project-diagram",
                //    style: {
                //        color: "#217346",
                //    },
                //},
            ],
        },
    ],
};

// Education Page
const competitiveSites = {
    competitiveSites: [
        //{
        //  siteName: "HackerRank",
        //  iconifyClassname: "simple-icons:hackerrank",
        //  style: {
        //    color: "#2EC866",
        //  },
        //  profileLink: "https://www.hackerrank.com/layman_brother",
        //},
        //{
        //  siteName: "Codechef",
        //  iconifyClassname: "simple-icons:codechef",
        //  style: {
        //    color: "#5B4638",
        //  },
        //  profileLink: "https://www.codechef.com/users/ashutosh_1919",
        //},
        //{
        //  siteName: "Codeforces",
        //  iconifyClassname: "simple-icons:codeforces",
        //  style: {
        //    color: "#1F8ACB",
        //  },
        //  profileLink: "http://codeforces.com/profile/layman_brother",
        //},
        //{
        //  siteName: "Hackerearth",
        //  iconifyClassname: "simple-icons:hackerearth",
        //  style: {
        //    color: "#323754",
        //  },
        //  profileLink: "https://www.hackerearth.com/@ashutosh391",
        //},
        //{
        //  siteName: "Kaggle",
        //  iconifyClassname: "simple-icons:kaggle",
        //  style: {
        //    color: "#20BEFF",
        //  },
        //  profileLink: "https://www.kaggle.com/laymanbrother",
        //},
    ],
};

const degrees = {
    degrees: [
        {
            title: "University of Toledo",
            subtitle: "B.S. Chemical Engineering",
            logo_path: "ut-logo2.png",
            alt_name: "UT",
            duration: "2011 - 2016",
            descriptions: [
                "⚡ Studied basic chemical engineering subjects like fluid dynamics, thermodynamics, separation, reactor design, etc.",
                "⚡ Additional courses on inorganic chemistry, engineering economics, and Japanese.",
                "⚡ University of Toledo President and Dean's List",
            ],
            website_link: "https://www.utoledo.edu/",
        },
    ],
};

const certifications = {
    certifications: [
        {
            title: "Google Project Management",
            subtitle: "- Google",
            logo_path: "google-project-management-certificate.png",
            certificate_link:
                "https://www.credly.com/badges/746d4b6a-ab00-4fbe-81cd-0d8b3f145e16/public_url",
            alt_name: "Google Project Management",
            color_code: "#FAF9F6",
        },
        {
            title: "Six Sigma Green Belt",
            subtitle: "- GTP",
            logo_path: "six_sigma.png",
            certificate_link:
                "https://drive.google.com/file/d/1BFhQvC0WPjEFljqUTSAjHt089Df01PHK/view?usp=sharing",
            alt_name: "Six Sigma Green Belt",
            color_code: "#FAF9F6",
        },
        {
            title: "Create and Manage Cloud Resources in Google Cloud",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/9cf09e38-559e-4279-bed5-1d95d4d4c829/badges/1641733",
            alt_name: "Google",
            color_code: "#0C9D5899",
        },
        {
            title: "Perform Foundational Infrastructure Tasks in Google Cloud",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/9cf09e38-559e-4279-bed5-1d95d4d4c829/badges/1707841",
            alt_name: "Google",
            color_code: "#0C9D5899",
        },
        //{
        //  title: "Deep Learning",
        //  subtitle: "- Andrew Ng",
        //  logo_path: "deeplearning_ai_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
        //  alt_name: "deeplearning.ai",
        //  color_code: "#00000099",
        //},
        //{
        //  title: "ML on GCP",
        //  subtitle: "- GCP Training",
        //  logo_path: "google_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
        //  alt_name: "Google",
        //  color_code: "#0C9D5899",
        //},
        //{
        //  title: "Data Science",
        //  subtitle: "- Alex Aklson",
        //  logo_path: "ibm_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
        //  alt_name: "IBM",
        //  color_code: "#1F70C199",
        //},
        //{
        //  title: "Big Data",
        //  subtitle: "- Kim Akers",
        //  logo_path: "microsoft_logo.png",
        //  certificate_link:
        //    "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
        //  alt_name: "Microsoft",
        //  color_code: "#D83B0199",
        //},
        //{
        //  title: "Advanced Data Science",
        //  subtitle: "- Romeo Kienzler",
        //  logo_path: "ibm_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
        //  alt_name: "IBM",
        //  color_code: "#1F70C199",
        //},
        //{
        //  title: "Advanced ML on GCP",
        //  subtitle: "- GCP Training",
        //  logo_path: "google_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
        //  alt_name: "Google",
        //  color_code: "#0C9D5899",
        //},
        //{
        //  title: "DL on Tensorflow",
        //  subtitle: "- Laurence Moroney",
        //  logo_path: "deeplearning_ai_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
        //  alt_name: "deeplearning.ai",
        //  color_code: "#00000099",
        //},
        //{
        //  title: "Fullstack Development",
        //  subtitle: "- Jogesh Muppala",
        //  logo_path: "coursera_logo.png",
        //  certificate_link:
        //    "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
        //  alt_name: "Coursera",
        //  color_code: "#2A73CC",
        //},
        //{
        //  title: "Kuberenetes on GCP",
        //  subtitle: "- Qwiklabs",
        //  logo_path: "gcp_logo.png",
        //  certificate_link:
        //    "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
        //  alt_name: "GCP",
        //  color_code: "#4285F499",
        //},
        //{
        //  title: "Cryptography",
        //  subtitle: "- Saurabh Mukhopadhyay",
        //  logo_path: "nptel_logo.png",
        //  certificate_link:
        //    "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
        //  alt_name: "NPTEL",
        //  color_code: "#FFBB0099",
        //},
        //{
        //  title: "Cloud Architecture",
        //  subtitle: "- Qwiklabs",
        //  logo_path: "gcp_logo.png",
        //  certificate_link:
        //    "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
        //  alt_name: "GCP",
        //  color_code: "#4285F499",
        //},
    ],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work and Internship",
    description:
        "I'm a Senior Engineer with 4+ years experience in project management, virtualization, and simulation with a strong background in programming, scripting, and virtualization.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Work",
            experiences: [
                {
                    title: "Senior Specialist, Production Services Infrastructure Support",
                    company: "BNY Mellon",
                    company_url: "https://www.bnymellon.com/",
                    logo_path: "bnylogo.png",
                    duration: "May 2022 - PRESENT",
                    location: "Pittsburgh, PA",
                    description:
                        "SME, IT Project Management, Virtualization, and IT Infrastructure",
                    color: "#bb8a0f",
                },
                {
                    title: "Associate Engineer",
                    company: "Emerson Automation Solutions",
                    company_url: "https://www.emerson.com/en-us/automation-solutions",
                    logo_path: "emerson.png",
                    duration: "November 2017 - April 2022",
                    location: "Pittsburgh, PA",
                    description:
                        "Responsible for project scope, schedule, execution, and budget as well as performing engineering work related to system setup, model development, and troubleshooting. Increased profit margins by an average of 5% on previous projects with 4+ years' of project management experience on multiple 6-figure projects while maintaining at least a 90% customer satisfaction. Created automated tool using VBA resulting in a process improvemnt of 1 - 1.5 weeks per project. Programmed a supplemental engineering tool using PowerShell creating a directed graph of Emeron's Ovation Embedded Simulation Network. More details are provide on the home page and my LinkedIn.",
                    color: "#0879bf",
                },
            ],
        },
        {
            title: "Internships",
            experiences: [
                {
                    title: "Undergraduate Research Intern",
                    company: "University of Toledo",
                    company_url: "https://www.utoledo.edu/",
                    logo_path: "ut-logo2.png",
                    duration: "May 2016 -  Aug 2016",
                    location: "Toledo, OH",
                    description:
                        "I worked in a polymer lab investigating bead morphology, studied gel partitioning impact on slow molecular release and release rate study.",
                    color: "#003e7e",
                },
                {
                    title: "Process Engineer Intern",
                    company: "Global Tungsten and Powders",
                    company_url: "https://www.globaltungsten.com/en/index.html",
                    logo_path: "gtp_logo.png",
                    duration: "Jan 2015 - May 2015",
                    location: "Towanda, PA",
                    description:
                        "While at GTP, I earned my Six Sigma Green Belt and performed a Gage R&R study to determine residual tungsten in bags resulting in 1K increase per bag resale value. Additionally, I created a new organizational process assest with a VBA toll that collected chemical compositions from an internal SQL database and determined cost losses at various points of the process resulting in a reduction of 3 days of work to 5 minutes.",
                    color: "#f39200",
                },
                {
                    title: "Field Engineer Intern",
                    company: "Columbia Gas of Ohio",
                    company_url: "https://www.columbiagasohio.com/",
                    logo_path: "columbia_gas_logo.png",
                    duration: "Jun 2014 - Dec 2014",
                    location: "Toledo, OH",
                    description:
                        "Worked as a Field Engineer designing natural gas piping drawings with AutoCAD 3D. Was able to save 5K on projects around 50K. Coordinated with various utilities and city memebers.",
                    color: "#0077c0",
                },
            ],
        },
        //{
        //  title: "Volunteerships",
        //  experiences: [
        //    {
        //      title: "Google Explore ML Facilitator",
        //      company: "Google",
        //      company_url: "https://about.google/",
        //      logo_path: "google_logo.png",
        //      duration: "June 2019 - April 2020",
        //      location: "Hyderabad, Telangana",
        //      description:
        //        "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //      color: "#4285F4",
        //    },
        //    {
        //      title: "Microsoft Student Partner",
        //      company: "Microsoft",
        //      company_url: "https://www.microsoft.com/",
        //      logo_path: "microsoft_logo.png",
        //      duration: "Aug 2019 - May 2020",
        //      location: "Hyderabad, Telangana",
        //      description:
        //        "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //      color: "#D83B01",
        //    },
        //{
        //  title: "Mozilla Campus Captain",
        //  company: "Mozilla",
        //  company_url: "https://www.mozilla.org/",
        //  logo_path: "mozilla_logo.png",
        //  duration: "Oct 2019 - May 2020",
        //  location: "Kurnool, Andhra Pradesh",
        //  description:
        //    "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //  color: "#000000",
        //},
        //{
        //  title: "Developer Students Club Member",
        //  company: "DSC IIITDM Kurnool",
        //  company_url:
        //    "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //  logo_path: "dsc_logo.png",
        //  duration: "Jan 2018 - May 2020",
        //  location: "Kurnool, Andhra Pradesh",
        //  description:
        //    "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //  color: "#0C9D58",
        //},
        //{
        //  title: "Developer Program Member",
        //  company: "Github",
        //  company_url: "https://github.com/",
        //  logo_path: "github_logo.png",
        //  duration: "July 2019 - PRESENT",
        //  location: "Work From Home",
        //  description:
        //    "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //  color: "#181717",
        //},
        //],
        //},
    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description:
        "My projects consist of various tools and technologies and are prompted off of my various interest including crypto, C#, and Harvard's CS50 course.",
    avatar_image_path: "projects_image.svg",
};

// To restore publications uncomment on src/pages/projects/projects.js
const publicationsHeader = {
    title: "Publications",
    description:
        "I have worked on and published a few research papers and publications of my own.",
    avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "border-circle-profile_300x301.png",
        description: "Feel free to contact to me at any of the resources below!",
    },
    blogSection: {
        // also uncomment the google maps button on src/pages/contact/ContactComponent.js
        //title: "Blogs",
        //subtitle:
        //  "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
        //link: "https://ashutoshhathidara.wordpress.com",
        //avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
        // to restore - edit src/pages/contact/AddressImg.js and restore width to the one mention in comment. Also uncomment all this section
        // also uncomment the google maps button on src/pages/contact/ContactComponent.js
        //title: "Address",
        //subtitle:
        //  "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
        //avatar_image_path: "address_image.svg",
        //location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
    },
    phoneSection: {
        //title: "Phone Number",
        //subtitle: "+91 8320758513",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    publicationsHeader,
    contactPageData,
};

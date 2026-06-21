import React from "react";

import team from "../assets/images/team.jpg";

import Naeem from "../assets/images/Naeem.jpg";
import Ahad from "../assets/images/Ahad.jpg";
import Tauseef from "../assets/images/Tauseef.jpg";

import Fassih from "../assets/images/fassih.jpg";
import Bisma from "../assets/images/Bisma.jpg";
import Zohaib from "../assets/images/Zohaib.jpg";
import Husnain from "../assets/images/Husnain.jpg";

import Maryam from "../assets/images/Maryam.jpg";
import Hunzilah from "../assets/images/Hunzilah.jpg";
import Ahmar from "../assets/images/Ahmar.jpg";
import Mudasar from "../assets/images/Mudasar.jpg";

import Tahira from "../assets/images/Tahira.jpg";
import Shoib from "../assets/images/Shoib.jpg";
import Ahmad from "../assets/images/Ahmad.jpg";
import Inub from "../assets/images/Inub.jpg";
import Khalid from "../assets/images/Khalid.jpg";
import Naveeda from "../assets/images/Naveeda.jpg";
import Awais from "../assets/images/Awais.jpg";
import Mubashir from "../assets/images/Mubashir.jpg";
import Talha from "../assets/images/Talha.jpg";
import Shakeel from "../assets/images/Shakeel.jpg";
import Ayesha from "../assets/images/Ayesha.jpg";
import Atia from "../assets/images/Atia.jpg";
import Ubaidullah from "../assets/images/Ubaidullah.jpg";
import Qadeer from "../assets/images/Qadeer.jpg";
import Hammad from "../assets/images/Hammad.jpg";
import Footer from "../Components/Footer";


const teamData = [
    {
        name: "Naeem Akram Malik",
        position: "CEO ",
        image: Naeem,
        desc: `Founder & CEO of INTELLIX Soft, passionate about innovation, web development, creative technology, and empowering future digital professionals worldwide.`,
    },
    {
        name: "Mr.Abdul Ahad",
        position: "Manager & Web Developer ",
        image: Ahad,
        desc: `Creative Manager & Web Developer focused on building modern websites, leading innovative teams, and delivering impactful digital experiences successfully.`,
    },
    {
        name: "Ms.Tahira Yasmeen ",
        position: "Office Assistant",
        image: Tahira,
        desc: `Dedicated Office Assistant managing daily operations, organizing tasks efficiently, and supporting smooth workplace communication with professionalism and reliability.`,
    },
    {
        name: "Mr.Mudassir Khan ",
        position: "E-Commerce & Influencer Marketing Specialist",
        image: Mudasar,
        desc: `Creative E-Commerce & Influencer Marketing Specialist driving online sales, brand growth, and audience engagement through smart digital marketing strategies.`,
    },
    {
        name: "Mr. Ahmar Ali ",
        position: "Full Stack Python Developer",
        image: Ahmar,
        desc: `Skilled Full Stack Python Developer building scalable web applications, secure backend systems, and modern user-focused digital experiences efficiently.`,
    },
    {
        name: "Mr. Hunzilah Anwer",
        position: "Senior Web Developer",
        image: Hunzilah,
        desc: `Passionate Web Developer creating responsive websites, modern user experiences, and innovative digital solutions with clean and efficient coding skills.`,
    },

    {
        name: "Mr. Zohaib Jutt",
        position: "SEO Expert",
        image: Zohaib,
        desc: `Results-driven SEO Expert improving website visibility, boosting organic traffic, and creating smart strategies for strong online growth and success.`,
    },
    {
        name: "Mr. Muhammad Tauseef",
        position: "Social Media Marketing & Shopify Expert",
        image: Tauseef,
        desc: `Creative Social Media Marketing & Shopify Expert helping brands grow online through engaging campaigns, smart strategies, and powerful eCommerce solutions.`,
    },
    {
        name: "Mr.M Fassih Ud Din Abbasi",
        position: "Senior Graphic Designer",
        image: Fassih,
        desc: `Creative Graphic Designer passionate about modern visuals, branding, and crafting eye-catching designs that deliver powerful and memorable experiences.`,
    },
    {
        name: "Ms.Bisma Goshi  ",
        position: "Junior Graphic Designer",
        image: Bisma,
        desc: `Creative Graphic Designer passionate about modern visuals, branding, and crafting eye-catching designs that deliver powerful and memorable experiences.`,
    },
    {
        name: "Ms.Maryam Rafiq ",
        position: "YouTube Automation Expert  ",
        image: Maryam,
        desc: `Professional YouTube Automation Expert creating viral content, managing channels, SEO optimization, scripting, thumbnails, editing, monetization, and audience growth strategies.`,
    },
    {
        name: "Mr. Ruh Ul Husnain",
        position: "ML & Data Analyst",
        image: Husnain,
        desc: `Skilled ML & Data Analyst transforming complex data into smart insights, predictive solutions, and innovative business strategies for growth.`,

    },
    {
        name: "Mr. Shoib Ameer  ",
        position: "Junior Web Developer",
        image: Shoib,
        desc: `Passionate Junior Web Developer skilled in HTML, CSS, JavaScript, React, responsive design, debugging, and creating modern user-friendly websites.`,
    },

];

// Students Data Added

const students = [
    {
        name: "Mr. Ahmad",
        role: "Graphic Designer",
        image: Ahmad,
    },
    {
        name: "Inub Sohail",
        role: "Business Developer",
        image: Inub,
    },
    {
        name: "Khalid Mehmood",
        role: "Frontend Developer",
        image: Khalid,
    },
    {
        name: "Naveeda Bilal",
        role: "Graphic Designer",
        image: Naveeda,
    },
    {
        name: "Mr. Awais Tahir",
        role: "Web Developer",
        image: Awais,
    },
    {
        name: "Mr. Mubashir",
        role: "Python Developer",
        image: Mubashir,
    },
    {
        name: "Mr. Talha",
        role: "Python Developer",
        image: Talha,
    },
    {
        name: "Hamza Shakeel",
        role: "Social Media Marketing",
        image: Shakeel,
    },
    {
        name: "Ayesha Shahid",
        role: "Graphic Designer",
        image: Ayesha,
    },
    {
        name: "Atia Latif",
        role: "SEO",
        image: Atia,
    },
    {
        name: "Mr. Ubaiduallah",
        role: "Web Developer",
        image: Ubaidullah,
    },
    {
        name: "Mr. Abdul Qadeer",
        role: "Web Developer",
        image: Qadeer,
    },
    {
        name: "Mr. Hammad",
        role: "Web Developer",
        image: Hammad,
    },
];

const OurTeam = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full h-[560px] flex items-center justify-center overflow-hidden">
                <img
                    src={team}
                    alt="Our Team"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#06101b]/70"></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-white text-[42px] sm:text-[52px] md:text-[62px] font-extrabold leading-tight mb-5">
                        Our Team
                    </h1>

                    <p className="text-white text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[800px] mx-auto font-bold">
                        Meet our talented professionals dedicated to delivering excellence,
                        innovation, and reliable solutions that bring every client’s vision
                        to life.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full bg-white py-16 px-4">
                <div className="text-center mb-14">
                    <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-extrabold leading-tight text-black">
                        Passionate Personalities,
                        <br />
                        <span className="text-[#236C66]">Versatile</span>{" "}
                        <span className="text-black">Brains</span>
                    </h2>
                </div>

                <div className="max-w-[1170px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            className="relative w-full sm:w-[270px] h-[374px] overflow-hidden group border border-gray-200"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                            />

                            <div className="absolute inset-0 bg-[#236C66]/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center px-6 pb-[70px]">
                                <p className="text-white text-[16px] font-bold text-center whitespace-pre-line">
                                    {member.desc}
                                </p>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 w-full h-[100px] bg-[rgba(0,10,16,0.92)] group-hover:bg-white transition-all duration-500 flex flex-col justify-center items-center"
                                style={{
                                    clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)",
                                }}
                            >
                                <h3 className="text-white group-hover:text-black text-[20px] font-extrabold pt-[20px] transition-all duration-500">
                                    {member.name}
                                </h3>

                                <p className="text-[#FFDE16] group-hover:text-[#236C66] text-[17px] font-bold text-center">
                                    {member.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="text-black w-[85%] h-[20px] m-auto" />

            {/* Success Stories Section Added */}
            <section
                id="success-stories"
                className="bg-gray-100 py-20 px-4 overflow-hidden"
            >
                {/* Heading */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[radial-gradient(at_center_center,#090E1B_55%,#FFFFFF1A_100%)] border border-[#2C2C2C] rounded-full px-8 py-3">
                        <h2 className="text-[#56A49E] text-center sm:text-3xl text-xl font-bold tracking-wide">
                            Success Stories from Intelix Soft
                        </h2>
                    </div>
                </div>

                {/* Students */}
                <div className="max-w-7xl mx-auto flex flex-col gap-10">

                    {/* First Row - 5 Students */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {students.slice(0, 5).map((student, index) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center"
                            >
                                {/* Glow Effect */}
                                <div className="absolute w-44 h-44 rounded-full bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                {/* Rotating Border */}
                                <div className="absolute w-44 h-44 rounded-full border border-cyan-400/40 animate-spinSlow"></div>

                                {/* Image */}
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-[4px] border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-2">
                                        <h3 className="text-white text-sm font-bold">
                                            {student.name}
                                        </h3>

                                        <p className="text-cyan-400 text-[11px] mt-1">
                                            {student.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - 5 Students */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {students.slice(5, 10).map((student, index) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center"
                            >
                                {/* Glow Effect */}
                                <div className="absolute w-44 h-44 rounded-full bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                {/* Rotating Border */}
                                <div className="absolute w-44 h-44 rounded-full border border-cyan-400/40 animate-spinSlow"></div>

                                {/* Image */}
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-[4px] border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-2">
                                        <h3 className="text-white text-sm font-bold">
                                            {student.name}
                                        </h3>

                                        <p className="text-cyan-400 text-[11px] mt-1">
                                            {student.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Third Row - 3 Students */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {students.slice(10, 13).map((student, index) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center"
                            >
                                {/* Glow Effect */}
                                <div className="absolute w-44 h-44 rounded-full bg-cyan-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                {/* Rotating Border */}
                                <div className="absolute w-44 h-44 rounded-full border border-cyan-400/40 animate-spinSlow"></div>

                                {/* Image */}
                                <div className="relative w-40 h-40 rounded-full overflow-hidden border-[4px] border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center px-2">
                                        <h3 className="text-white text-sm font-bold">
                                            {student.name}
                                        </h3>

                                        <p className="text-cyan-400 text-[11px] mt-1">
                                            {student.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animation */}
                <style>
                    {`
            @keyframes spinSlow {
              100% {
                transform: rotate(360deg);
              }
            }

            .animate-spinSlow {
              animation: spinSlow 8s linear infinite;
            }
          `}
                </style>
            </section>
            <Footer />
        </>
    );
};

export default OurTeam;
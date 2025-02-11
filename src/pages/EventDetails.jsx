import React, { useEffect } from "react";
import { images } from "../assets/assets";
import './workshops.scss';
import './background.css';
import bgvideo from './../assets/bgvideo.mp4';
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const data = [
        {
          id: 3,
          title: "Meme Contest",
          description:
            "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 4,
          title: "Gen AI",
          description:
            "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 5,
          title: "Image Prompt",
          description:
            "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 6,
          title: "Cyber Security (Project-Based)",
          description: `In an era where cyber threats are evolving rapidly, learning how to secure systems, networks, and data is more important than ever. 
      This project-based workshop is designed to equip you with practical skills in identifying, preventing, and mitigating cyber threats.
      
      **What You’ll Learn:**
      
      ✅ Understand Cybersecurity Fundamentals: Get introduced to key cybersecurity concepts, including threats, vulnerabilities, and attack vectors.  
      ✅ Secure Systems & Networks: Gain insights into network security, firewalls, and best practices for protecting sensitive data.  
      ✅ Defend Against Cyber Attacks: Learn how to detect, analyze, and respond to real-world cyber threats.  
      ✅ Work on a Real-World Cybersecurity Project: Apply your knowledge by working on a hands-on cybersecurity project that simulates real attack scenarios and defense mechanisms.
      
      By the end of this workshop, you’ll have a strong foundation in cybersecurity, practical experience with security tools, and the confidence to tackle real-world security challenges.`,
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 7,
          title: "Film Making",
          description:
            "Join our exciting Meme Contest and showcase your creativity! Win amazing prizes and have fun.",
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 8,
          title: "Python Project",
          description: `Python is a versatile and beginner-friendly language used in web development, data analysis, automation, artificial intelligence, and more. 
      This workshop will provide you with a strong foundation in Python, helping you understand its core concepts and practical applications.
      
      **What You’ll Learn:**
      
      ✅ Understand Python Fundamentals – Explore essential concepts like variables, data types, operators, loops, and functions.  
      ✅ Work with Python Libraries – Get introduced to popular libraries that enhance Python’s capabilities.  
      ✅ Handle Data & Files – Learn how to read, write, and manipulate data efficiently in Python.  
      ✅ Explore Real-World Applications – Discover how Python is used in automation, web development, and data science.
      
      By the end of this workshop, you’ll have a solid understanding of Python and the confidence to start your own coding journey!`,
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
        {
          id: 9,
          title: "Competitive Coding",
          description: `**Master Competitive Coding!**  
      
      Welcome to an intensive Competitive Coding Workshop designed to enhance your problem-solving skills and prepare you for coding challenges and technical interviews. Competitive programming is a crucial skill for developers aiming to excel in algorithmic thinking and efficient coding.
      
      **What You’ll Learn:**
      
      ✅ Understanding Algorithms & Data Structures: Master essential concepts like sorting, searching, recursion, dynamic programming, and graph algorithms.  
      ✅ Optimizing Problem-Solving Approaches: Learn how to approach coding problems efficiently, analyze time complexity, and optimize solutions.  
      ✅ Implementing Code Efficiently: Write clean, structured, and efficient code to solve real-world problems under time constraints.  
      ✅ Mastering Competitive Coding Platforms: Get familiar with platforms like Codeforces, LeetCode, and HackerRank to practice and improve your ranking.  
      ✅ Solving Live Coding Challenges: Work on a series of problems, from beginner to advanced level, with guidance from experts.`,
          venue: "Online Event",
          date: "idk",
          fee: "20",
          prize_pool: "500",
          link: "https://forms.gle/QQQaf4umbnEWjd5Y8",
        },
      ];
      
    let { id } = useParams();
    id = Number(id);
    const item = data.find((entry) => entry.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 px-6">
            <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden relative">

                <div className="flex-1 p-8 text-center md:text-left z-10">
                    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500 mb-4 mx-auto md:mx-0"></div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                        {item.title}
                    </h2>
                    <p className="text-gray-700 uppercase tracking-widest text-sm mt-4">
                        Get your tickets now!
                    </p>
                    <p className="text-gray-800 mt-6 text-lg sm:text-xl leading-relaxed">
                        {item.description}
                    </p>
                    <div className="mt-6 space-y-2">
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Venue:</span> {item.venue}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Date:</span> {item.date}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Fee:</span> {item.fee}</p>
                        <p className="text-gray-900 font-semibold"><span className="text-red-600">Prize Pool:</span> {item.prize_pool}</p>
                    </div>
                    <button
                        onClick={() => window.location.href = item.link}
                        className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full py-3 px-8 mt-8 text-lg sm:text-xl font-bold hover:scale-105 transition-transform duration-300"
                    >
                        Get My Tickets
                    </button>
                </div>


                <div className="relative flex-1">
                    <div className="absolute top-4 right-4 bottom-4 left-4 border-8 border-yellow-500 -z-10"></div>
                    <img
                        src={images.background} 
                        alt="Concert"
                        className="w-full h-full object-cover shadow-2xl"
                        style={{
                            boxShadow:
                                window.innerWidth <= 768
                                    ? "83px -65px 0px -20px rgb(236, 236, 20)"
                                    : "none",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
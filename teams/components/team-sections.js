"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Instagram, Linkedin, Phone, Mail } from "lucide-react";

const teamData = [
  {
    title: "EDGE + 4.0 2025",
    members: [
      {
        name: "SRUTHY SURESH",
        role: "Faculty Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9846974800",
        email: "",
      },
    ],
  },
  {
    title: "ORGANIZING COMMITTEE",
    members: [
      {
        name: "GAUTHAM PRASANTH",
        role: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9074244983",
        email: "gauthamprasanthkkra@acm.org",
      },
      {
        name: "RHITHIKAM PRADEEP",
        role: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9400902331",
        email: "",
      },
      {
        name: "HISHAM HASKER",
        role: "Secretary",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "8078313514",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "Treasurer",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9446206833",
        email: "",
      },
    ],
  },
  {
    title: "ADVISORY COMMITTEE",
    members: [
      {
        name: "SMINGLE SIMON",
        role: "Sponsorship, Hackathon, Hospitality",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "6235863510",
        email: "",
      },
      {
        name: "NANDANA SREEKUMAR",
        role: "Marketing, Content, Decoration",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "6238604249",
        email: "",
      },
      {
        name: "SRINAND S",
        role: "Cultural, Workshop, Transportation",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "8078555316",
        email: "",
      },
      {
        name: "ISAC JOHN",
        role: "Design, Media, Food",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "8606909009",
        email: "",
      },
    ],
  },
  {
    title: "DESIGN TEAM",
    members: [
      {
        name: "RAHUL KJ",
        role: "DESIGN Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "7591914551",
        email: "",
      },
      {
        name: "SHARIKA",
        role: "DESIGN Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "SPONSORSHIP TEAM",
    members: [
      {
        name: "ANNMARIA TOMMICHAN",
        role: "SPONSORSHIP Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "SPONSORSHIP Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9446206833",
        email: "",
      },
      {
        name: "ASWIN RADHAKRISHNAN",
        role: "SPONSORSHIP Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "WORKSHOP TEAM",
    members: [
      {
        name: "MUHAMMED NAFIH",
        role: "WORKSHOP Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "ANUPAMA",
        role: "WORKSHOP Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "TECH TEAM",
    members: [
      {
        name: "DIYA K DILEEP",
        role: "TECH Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SIDHARTH",
        role: "TECH Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "HACKATHON TEAM",
    members: [
      {
        name: "HISHAM AHAMMED",
        role: "HACKATHON Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "GOWRI S",
        role: "HACKATHON Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "MEDIA TEAM",
    members: [
      {
        name: "HAMMAD MISHAL",
        role: "MEDIA Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SAMIKSHA",
        role: "MEDIA Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "CONTENT TEAM",
    members: [
      {
        name: "HARINANDANA",
        role: "CONTENT Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DANIEL GEO",
        role: "CONTENT Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "CULTURALS TEAM",
    members: [
      {
        name: "ABIN JACOB",
        role: "CULTURALS Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "JAICO",
        role: "CULTURALS Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "FOOD TEAM",
    members: [
      {
        name: "SINNY",
        role: "FOOD Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "WILSON",
        role: "FOOD/TRANSPORTATION Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "MARKETING & HOSPITALITY TEAM",
    members: [
      {
        name: "RON BINOY",
        role: "MARKETING/HOSPITALITY Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SREELEKSHMI P",
        role: "HOSPITALITY Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA S",
        role: "HOSPITALITY Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA DEVAKUMAR",
        role: "MARKETING Co-Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
  {
    title: "DECORATION TEAM",
    members: [
      {
        name: "LEKSHMIPRIYA S",
        role: "DECORATION Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "KEERTHANA",
        role: "DECORATION Lead",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-96">
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-90 p-4 transition-all duration-300">
        <h4 className="text-xl font-bold text-accent mb-1">{member.name}</h4>
        <span className="block text-sm text-background mb-2">
          {member.role}
        </span>
        <div className="flex justify-center space-x-3">
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              className="text-background hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              className="text-background hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          <a
            href={`tel:${member.phone}`}
            className="text-background hover:text-accent transition-colors"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="text-background hover:text-accent transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ section, isVisible }) => {
  return (
    <div
      className={`py-16 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
        {section.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.members.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamSections = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let newActiveSection = 0;

      sectionRefs.current.forEach((ref, index) => {
        const element = ref;
        if (
          element &&
          element.offsetTop <= pageYOffset + window.innerHeight / 2
        ) {
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">Our Team</h2>
          <p className="text-xl text-secondary">
            Meet the people behind EDGE + 4.0 2025
          </p>
        </div>
        {teamData.map((section, index) => (
          <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <TeamSection
              section={section}
              isVisible={index === activeSection}
            />
          </div>
        ))}
      </div>
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2">
        <ul className="flex flex-col space-y-2">
          {teamData.map((_, index) => (
            <li key={index}>
              <button
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSection
                    ? "bg-secondary scale-125"
                    : "bg-primary hover:bg-accent"
                }`}
                onClick={() => {
                  sectionRefs.current[index].scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default TeamSections;

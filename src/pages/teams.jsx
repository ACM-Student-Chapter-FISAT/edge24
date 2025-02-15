import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

const teamData = [
  {
    title: "EDGE + 4.0 2025",
    members: [
      {
        name: "SRUTHY SURESH",
        role: "Faculty Coordinator",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "9074244983",
        email: "gauthamprasanthkkra@acm.org",
      },
      {
        name: "RHITHIKAM PRADEEP",
        role: "Vice Chairperson",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "9400902331",
        email: "",
      },
      {
        name: "HISHAM HASKER",
        role: "Secretary",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "8078313514",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "Treasurer",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "6235863510",
        email: "",
      },
      {
        name: "NANDANA SREEKUMAR",
        role: "Marketing, Content, Decoration",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "6238604249",
        email: "",
      },
      {
        name: "SRINAND S",
        role: "Cultural, Workshop, Transportation",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "8078555316",
        email: "",
      },
      {
        name: "ISAC JOHN",
        role: "Design, Media, Food",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "7591914551",
        email: "",
      },
      {
        name: "SHARIKA",
        role: "DESIGN Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "SPONSORSHIP Lead",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "9446206833",
        email: "",
      },
      {
        name: "ASWIN RADHAKRISHNAN",
        role: "SPONSORSHIP Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "ANUPAMA",
        role: "WORKSHOP Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SIDHARTH",
        role: "TECH Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "GOWRI S",
        role: "HACKATHON Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SAMIKSHA",
        role: "MEDIA Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DANIEL GEO",
        role: "CONTENT Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "JAICO",
        role: "CULTURALS Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "WILSON",
        role: "FOOD/TRANSPORTATION Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SREELEKSHMI P",
        role: "HOSPITALITY Lead",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA S",
        role: "HOSPITALITY Co-Lead",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA DEVAKUMAR",
        role: "MARKETING Co-Lead",
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "KEERTHANA",
        role: "DECORATION Lead",
        image: "/placeholder.svg",
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="team-member border p-4 rounded-lg shadow-md text-center">
      <div className="image-wrapper h-40 mb-3">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h4 className="font-bold text-lg">{member.name}</h4>
      <p className="text-gray-600">{member.role}</p>
      <div className="flex justify-center gap-4 mt-2">
        {member.phone && (
          <a href={`tel:${member.phone}`}>
            <Phone className="text-blue-500" />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`}>
            <Mail className="text-red-500" />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection = ({ section }) => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-6">{section.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {section.members.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="p-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-gray-500 mt-2">Meet the people behind EDGE + 4.0 2025</p>
      </header>
      {teamData.map((section, index) => (
        <TeamSection key={index} section={section} />
      ))}
    </div>
  );
};

export default Teams;

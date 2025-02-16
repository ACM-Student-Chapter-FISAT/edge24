import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";
import gautham from './../assets/Execom24/ACM Core/gauth.jpg'
import sruthy from './../assets/Execom24/Advisory Board/sruthymiss.jpg'
import ritu from './../assets/ritu.jpeg'
import aswin from './../assets/Execom24/PR Team/20240302_114951-1.jpg'
import hica from './../assets/Execom24/ACM Core/Hisham Haskar.jpg'
import fad from './../assets/Execom24/ACM Core/IMG_2099.jpg'
import sming from './../assets/Execom24/Advisory Board/IMG-20240312-WA0084.jpg'
import sri from './../assets/Execom24/Advisory Board/srinads.jpg'
import isc from './../assets/Execom24/Advisory Board/isacjohn.jpg'
import nan from './../assets/Execom24/Women Cell/nandanasreekumar.jpg'
import rahul from './../assets/Execom24/Design Team/Rahul KJ.jpg'
import charu from './../assets/Execom24/Design Team/sharika.jpeg'
import tomm from './../assets/Execom24/Women Cell/IMG-20240818-WA0126.jpg'
import nafi from './../assets/Execom24/Event Team/NAFIH.jpg'
import anu from './../assets/Execom24/Event Team/Anupama K J.jpg'
import sid from './../assets/Execom24/Tech Team/Sidharth CJ_.jpg'
import diya from './../assets/Execom24/Tech Team/Diya KDileep.jpg'
import gauri from './../assets/Execom24/Event Team/Gowri s.jpg'
import husky from './../assets/Execom24/Membership Dev Team/Hisham Ahamed T P.jpg'
import ham from './../assets/Execom24/Media Team/Hamad_.jpg'
import sam from './../assets/Execom24/Media Team/Samiksha Sreekumar_.jpg'
import hari from './../assets/Execom24/Content Team/Harinandana K Biju.jpg'
import dani from './../assets/Execom24/Content Team/Daniel Geo.jpg'
import abin from './../assets/Execom24/Media Team/ABIN JACOB.jpg'
import jaico from './../assets/Execom24/Membership Dev Team/Jaico Jinov Kachappilly.jpg'
import wils from './../assets/Execom24/Membership Dev Team/Wilson Nevin.jpg'
import sinny from './../assets/Execom24/Event Team/Kevin Sinny.jpg'
import ron from './../assets/Execom24/PR Team/Ron Binoy Mechery.jpg'
import sree from './../assets/Execom24/Women Cell/IMG-20240811-WA0113.jpg'
import dev from './../assets/Execom24/PR Team/Devananda S.jpg'
import devd from './../assets/Execom24/PR Team/Devananda Devakumar.png'
import laksmi from './../assets/Execom24/Membership Dev Team/Lekshmi Priya S.jpg'
import kerr from './../assets/Execom24/Tech Team/Keerthana R Nambiar_.jpg'



const teamData = [
  {
    title: "EDGE + 4.0 2025",
    members: [
      {
        name: "SRUTHY SURESH",
        role: "Faculty Coordinator",
        image: sruthy,
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
        image: gautham,
        social: { instagram: "#", linkedin: "#" },
        phone: "9074244983",
        email: "gauthamprasanthkkra@acm.org",
      },
      {
        name: "RHITHIKAM PRADEEP",
        role: "Vice Chairperson",
        image: ritu,
        social: { instagram: "#", linkedin: "#" },
        phone: "9400902331",
        email: "",
      },
      {
        name: "HISHAM HASKER",
        role: "Secretary",
        image: hica,
        social: { instagram: "#", linkedin: "#" },
        phone: "8078313514",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "Treasurer",
        image: fad,
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
        image: sming,
        social: { instagram: "#", linkedin: "#" },
        phone: "6235863510",
        email: "",
      },
      {
        name: "NANDANA SREEKUMAR",
        role: "Marketing, Content, Decoration",
        image: nan,
        social: { instagram: "#", linkedin: "#" },
        phone: "6238604249",
        email: "",
      },
      {
        name: "SRINAND S",
        role: "Cultural, Workshop, Transportation",
        image: sri,
        social: { instagram: "#", linkedin: "#" },
        phone: "8078555316",
        email: "",
      },
      {
        name: "ISAC JOHN",
        role: "Design, Media, Food",
        image: isc,
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
        image: rahul,
        social: { instagram: "#", linkedin: "#" },
        phone: "7591914551",
        email: "",
      },
      {
        name: "SHARIKA",
        role: "DESIGN Co-Lead",
        image: charu,
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
        image: tomm,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "SPONSORSHIP Lead",
        image: fad,
        social: { instagram: "#", linkedin: "#" },
        phone: "9446206833",
        email: "",
      },
      {
        name: "ASWIN RADHAKRISHNAN",
        role: "SPONSORSHIP Co-Lead",
        image: aswin,
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
        image: nafi,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "ANUPAMA",
        role: "WORKSHOP Lead",
        image: anu,
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
        image: diya,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SIDHARTH",
        role: "TECH Co-Lead",
        image: sid,
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
        image: husky,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "GOWRI S",
        role: "HACKATHON Lead",
        image: gauri,
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
        image: ham,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SAMIKSHA",
        role: "MEDIA Co-Lead",
        image: sam,
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
        image: hari,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DANIEL GEO",
        role: "CONTENT Co-Lead",
        image: dani,
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
        image: abin,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "JAICO",
        role: "CULTURALS Co-Lead",
        image: jaico,
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
        image: sinny,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "WILSON",
        role: "FOOD/TRANSPORTATION Lead",
        image: wils,
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
        image: ron,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "SREELEKSHMI P",
        role: "HOSPITALITY Lead",
        image: sree,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA S",
        role: "HOSPITALITY Co-Lead",
        image: dev,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "DEVANANDA DEVAKUMAR",
        role: "MARKETING Co-Lead",
        image: devd,
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
        image: laksmi,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
      {
        name: "KEERTHANA",
        role: "DECORATION Lead",
        image: kerr,
        social: { instagram: "#", linkedin: "#" },
        phone: "",
        email: "",
      },
    ],
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="team-member border p-4 rounded-lg shadow-md text-center bg-white">
      <div className="image-wrapper mx-auto w-full aspect-square mb-3">
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
    <div className="p-6 min-h-screen bg-gradient-to-br from-violet-500 to-pink-500">
      <header className="text-center py-8 text-white">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="text-gray-200 mt-2">Meet the people behind EDGE + 4.0 2025</p>
      </header>
      {teamData.map((section, index) => (
        <TeamSection key={index} section={section} />
      ))}
    </div>
  );
};


export default Teams;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Instagram, Linkedin, Phone, Mail } from "lucide-react";

const teamData = [
  {
    title: "Organizing Comittee",
    bgColor: "bg-[#000000]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Sruthy Suresh",
        role: "Faculty Cooridnator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9846974800",
        email: "",
      },
      {
        name: "GAUTHAM PRASANTH",
        role: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9074244983 ",
        email: "gauthamprasanthkkra@acm.org",
      },
      {
        name: "RHITHIKA M PRADEEP",
        role: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "94009023319",
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
    title: "Advisory Comittee",
    bgColor: "bg-[#000000]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Sruthy Suresh",
        role: "Faculty Cooridnator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9846974800",
        email: "",
      },
      {
        name: "GAUTHAM PRASANTH",
        role: "Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "9074244983 ",
        email: "gauthamprasanthkkra@acm.org",
      },
      {
        name: "RHITHIKA M PRADEEP",
        role: "Vice Chairperson",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "94009023319",
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
    title: "Sponsor Team",
    bgColor: "bg-[#3B1F50]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "ANNMARIA TOMMICHAN",
        role: "Lead ",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567894",
        email: "sponsorlead@example.com",
      },
      {
        name: "FAADIL MOHAMMED",
        role: "Lead ",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: " 9446206833",
        email: "",
      },
      {
        name: "Sponsor Co-Lead",
        role: "Co-Lead Sponsorship",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567895",
        email: "sponsorcolead@example.com",
      },
    ],
  },
  {
    title: "Design Team",
    bgColor: "bg-[#E91E63]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Design Lead",
        role: "Lead Designer",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567896",
        email: "designlead@example.com",
      },
    ],
  },
  {
    title: "Tech Team",
    bgColor: "bg-[#FFD700]",
    textColor: "text-[#000000]",
    members: [
      {
        name: "Tech Lead",
        role: "Technical Head",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567897",
        email: "techlead@example.com",
      },
    ],
  },
  {
    title: "Media Team",
    bgColor: "bg-[#000000]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Media Lead",
        role: "Media Head",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567898",
        email: "medialead@example.com",
      },
    ],
  },
  {
    title: "Hackathon Team",
    bgColor: "bg-[#3B1F50]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Hackathon Lead",
        role: "Hackathon Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567899",
        email: "hackathonlead@example.com",
      },
    ],
  },
  {
    title: "Workshop Team",
    bgColor: "bg-[#E91E63]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Workshop Lead",
        role: "Workshop Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567900",
        email: "workshoplead@example.com",
      },
    ],
  },
  {
    title: "Culturals Team",
    bgColor: "bg-[#FFD700]",
    textColor: "text-[#000000]",
    members: [
      {
        name: "Culturals Lead",
        role: "Cultural Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567901",
        email: "culturalslead@example.com",
      },
    ],
  },
  {
    title: "Hospitality Team",
    bgColor: "bg-[#000000]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Hospitality Lead",
        role: "Hospitality Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567902",
        email: "hospitalitylead@example.com",
      },
    ],
  },
  {
    title: "Transportation Team",
    bgColor: "bg-[#3B1F50]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Transportation Lead",
        role: "Transportation Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567903",
        email: "transportationlead@example.com",
      },
    ],
  },
  {
    title: "Food Decoration Team",
    bgColor: "bg-[#E91E63]",
    textColor: "text-[#FFD700]",
    members: [
      {
        name: "Food Decoration Lead",
        role: "Food Decoration Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567904",
        email: "fooddecorationlead@example.com",
      },
    ],
  },
  {
    title: "Content Team",
    bgColor: "bg-[#FFD700]",
    textColor: "text-[#000000]",
    members: [
      {
        name: "Content Lead",
        role: "Content Coordinator",
        image: "/placeholder.svg?height=300&width=300",
        social: { instagram: "#", linkedin: "#" },
        phone: "+1234567905",
        email: "contentlead@example.com",
      },
    ],
  },
];

const TeamSection = ({ section, isVisible }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (isVisible && !isRevealed) {
      setIsRevealed(true);
    }
  }, [isVisible, isRevealed]);

  return (
    <section
      className={`py-16 ${
        section.bgColor
      } transition-all duration-1000 ease-in-out ${
        isRevealed ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl font-bold mb-12 text-center ${section.textColor}`}
        >
          {section.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {section.members.map((member, index) => (
            <div
              key={member.name}
              className="bg-[#3B1F50] rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2 text-[#FFD700]">
                  {member.name}
                </h4>
                <span className="text-[#E91E63]">{member.role}</span>
                <div className="mt-4 flex flex-col items-center space-y-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="text-[#FFD700] hover:text-[#E91E63] flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#FFD700] hover:text-[#E91E63] flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      className="text-[#FFD700] hover:text-[#E91E63]"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-[#FFD700] hover:text-[#E91E63]"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSections = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <div className="bg-black">
      {teamData.map((section, index) => (
        <div
          key={section.title}
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <TeamSection
            section={section}
            isVisible={visibleSections.includes(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamSections;

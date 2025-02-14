import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail } from "lucide-react";

const teamData = [
  {
    title: "EDGE + 4.0 2025",
    members: [
      {
        name: "SRUTHY SURESH",
        role: "Faculty Coordinator",
        image: "/placeholder.svg", // Replace with a valid image path if necessary
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
    <div
      className="team-member"
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <div
        className="image-wrapper"
        style={{ height: "200px", marginBottom: "10px" }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <h4>{member.name}</h4>
      <p>{member.role}</p>
      <div
        className="social-icons"
        style={{ display: "flex", gap: "10px", justifyContent: "center" }}
      >
        {member.social.instagram && (
          <a href={member.social.instagram}>
            <Instagram className="icon" />
          </a>
        )}
        {member.social.linkedin && (
          <a href={member.social.linkedin}>
            <Linkedin className="icon" />
          </a>
        )}
        {member.phone && (
          <a href={`tel:${member.phone}`}>
            <Phone className="icon" />
          </a>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`}>
            <Mail className="icon" />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection = ({ section, isVisible }) => {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s",
        padding: "20px",
      }}
    >
      <h2>{section.title}</h2>
      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {section.members.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
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
    <div>
      <header style={{ textAlign: "center", padding: "40px 0" }}>
        <h1>Our Team</h1>
        <p>Meet the people behind EDGE + 4.0 2025</p>
      </header>
      {teamData.map((section, index) => (
        <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
          <TeamSection section={section} isVisible={index === activeSection} />
        </div>
      ))}
      <nav
        style={{
          position: "fixed",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {teamData.map((_, index) => (
            <li key={index}>
              <button
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: index === activeSection ? "blue" : "gray",
                  marginBottom: "10px",
                }}
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
    </div>
  );
};

export default App;

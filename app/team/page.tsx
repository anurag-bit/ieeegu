'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}


const boardMembers: TeamMember[] = [

  {
    name: "Shubhranshu S. Dash",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005300/shubhranshu_hfxnd7.png",
    bio: "As Chairperson of the IEEE Student Branch, Shubhranshu leads the branch by managing operations, fostering collaboration among members, and driving initiatives that encourage technical and professional development. His leadership ensures the organization achieves its goals effectively.",
    email: "shubhranshudash@ieee.org"
  },
  {
    name: "Anurag Kumar Singh",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/anurag256k/image/upload/f_auto,q_auto/v1/anurag/gbbn2xcoyfj2lubplo1x",
    bio: "Serving as Vice Chairperson, Anurag plays a pivotal role in supporting the Chairperson and managing branch activities. He actively contributes to planning events and initiatives while ensuring smooth execution to promote member engagement.",
    email: "aunragkumarsingh@ieee.org"
  },
  {
    name: "Rashi Bajpai",
    role: "General Sceretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005317/rashi_egtnjx.png",
    bio: "As Secretary of the IEEE Student Branch, Rashi is responsible for maintaining accurate records of meetings, correspondence, and events. She ensures clear communication across teams and keeps the branch organized.",
    email: "rashibajpai@ieee.org"
  },
  {
    name: "Manas Saxena",
    role: "Tech Lead (Web Master)",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005722/manas_2_xhetvq_c_crop_ar_9_16_gdeaww.png",
    bio: "Manas, the Technical Lead, specializes in overseeing technical projects and fostering innovation within the branch. He provides technical guidance, organizes workshops, and ensures members stay updated with the latest trends in technology.",
    email: "manassaxena@ieee.org"
  },
  {
    name: "Siddharth Agrawal",
    role: "Treasurer in General",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1739005304/sidharth_de2vhl.png",
    bio: "As Treasurer, Siddharth manages the financial operations of the IEEE Student Branch. He handles budgeting, expense tracking, and funding allocation to support the branch's activities effectively.",
    email: "siddharthaagrawal07@ieee.org"
  },
  // Add 4 more board members here
];
const subCommunityA: TeamMember[] = [

  {
    name: "Gaurang Pant",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_700/v1738003439/IMG-20250126-WA0044_t0oevi.jpg",
    bio: "As Chair of the IEEE Computer Society, Gaurang leads the team in promoting advancements in computer science and technology. He organizes events and workshops to enhance members' technical skills and industry knowledge..",
    email: "gaurangpant22@ieee.org"
  },
  {
    name: "Anant Gangwar",
    role: "Vice chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/c_crop,w_1774,g_auto/v1738003440/IMG_3774_uliwpd.jpg",
    bio: "Anant, as Vice Chairperson, supports the Chair in managing society operations. He focuses on creating opportunities for members to explore new technological domains and improve their skills.",
    email: "anantgangwar06@ieee.org"
  },
  {
    name: "Kshitij Bajpai",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/Kshitij_Bajpai_l80ddc.jpg",
    bio: "Serving as Secretary, Kshitij is responsible for keeping accurate records and facilitating clear communication within the IEEE Computer Society. His role ensures efficient coordination across all activities.",
    email: "kshitijbajpai@ieee.org"
  },
  {
    name: "Mohammad Sahil",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/prof_pic_qivdks.heic",
    bio: "As Treasurer, Mohammad handles the financial operations of the society. He ensures proper budget allocation and funding for events, contributing to the success of various initiatives.",
    email: "ms9811151061@gmail.com"
  },
  // Add 4 more members for Sub-Community A
];

const subCommunityB: TeamMember[] = [
  {
    name: "Shubham Pal",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003441/Shubham_Pal_rmy0ew.jpg",
    bio: "As Chairperson of IEEE IAS, Shubham oversees the society’s activities, focusing on industrial applications of engineering. His leadership is instrumental in bridging the gap between academics and industry for the members.",
    email: "shubham0568@ieee.org"
  },
  {
    name: "Adarsh Upadhyay",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/IMG-20241123-WA0097_lhev01.jpg",
    bio: "Adarsh, as Vice Chairperson, supports the Chairperson in organizing events and projects. He focuses on enhancing member participation and ensuring the society meets its objectives efficiently.",
    email: "adarsh265@ieee.org"
  },
  {
    name: "Urvashi Rawat",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003438/Urvashi_Rawat__nf8vls.jpg",
    bio: "As Secretary of IEEE IAS, Urvashi is the backbone of administrative operations. She ensures smooth coordination, documentation, and communication within the society.",
    email: "urvashirawat@ieee.org"
  },
  {
    name: "Ashish Kumar",
    role: "Web Master",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003440/IMG-20241116-WA0005_jhkcrw.jpg",
    bio: "Ashish, the Web Master of IEEE IAS, is responsible for guiding technical initiatives and projects. He organizes technical workshops, webinars, and events to inspire innovation and learning among members.",
    email: "ashishbhardwaj@ieee.org"
  },
  {
    name: "Anant Chaubey",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/Anant_chaubey__agfguw.jpg",
    bio: "Anant, as Treasurer, manages the financial aspects of IEEE IAS. He oversees budgeting, fundraising, and allocation of resources to ensure the smooth execution of society events.",
    email: "anant92@ieee.org"
  },
  // Add 4 more members for Sub-Community B
];

const subCommunityC: TeamMember[] = [
  {
    name: "Monica Singh",
    role: "Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003442/IMG-20250126-WA0021_wzt0kg.jpg",
    bio: "Monica, as Chairperson, leads the IEEE WIE group with a vision to empower women in engineering and technology. She organizes initiatives to inspire and support women pursuing technical careers.",
    email: "mona_13@ieee.org"
  },
  {
    name: "Yashi Katiyar",
    role: "Vice Chairperson",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003437/Yashi_Katiyar_eso00p.jpg",
    bio: "Yashi serves as Vice Chair, working closely with the Chairperson to manage operations and promote the growth of WIE. She helps in strategizing and implementing impactful programs for members.",
    email: "yashikatiyar@ieee.org"
  },
  {
    name: "Tanisha Bhatnagar",
    role: "Secretary",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003443/IMG_20250126_210124_b2c9ah.jpg",
    bio: "As Secretary of IEEE WIE, Tanisha plays a key role in maintaining communication and organizing events. She ensures accurate documentation and smooth operations within the team.",
    email: "tanishabhatnagar2703@ieee.org"
  },
  {
    name: "Anjali Yadav",
    role: "Treasurer",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003446/SAVE_20250126_210851_sngoeg.jpg",
    bio: "Anjali, as Treasurer, manages the financial aspects of WIE. She ensures efficient use of resources to support the society’s initiatives and events.",
    email: "anjaliyadav@ieee.org"
  },
  {
    name: "Arya Amoriya",
    role: "Outreach Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1738003445/Arya_Amoriya__r7hcbx.jpg",
    bio: "As Outreach Lead, Arya is responsible for building connections with external organizations and promoting WIE’s activities. She ensures the group’s visibility and engagement within the community.",
    email: "aryaamoriya@ieee.org"
  },
  // Add 4 more members for Sub-Community C
];
const subCommunityD: TeamMember[] = [
  {
    name: "Shubh Sinha",
    role: "Design Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595746/shubh_omgmtn.jpg",
    bio: "As Co-Lead of the IEEE Student Branch, Saumya Sinha plays a vital role in guiding the team, driving strategic initiatives, and ensuring the successful execution of events and programs. His leadership fosters collaboration, innovation, and the overall growth of the student branch.",
    email: "saumyasinha@ieee.org"
  },
  {
    name: "Aditya Singh",
    role: "Design Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741783286/ADI_event_me_p7qvgp.jpg",
    bio: "As Design Co-Lead of the IEEE Student Branch, Aditya is responsible for overseeing the visual identity and creative direction of the branch. He works closely with the team to design impactful content, ensuring consistency and enhancing the branch’s outreach and engagement.",
    email: "adityasinghdes@gmail.com"
  },
  
  {
    name: "Rithvik Rana",
    role: "Media Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1740595750/rhitvik_e152bq.jpg",
    bio: "As Media Co-Lead of the IEEE Student Branch, Rithvik Rana is responsible for managing the branch’s digital presence and media outreach. He ensures effective communication by creating engaging content, handling social media platforms, and promoting events and initiatives. His efforts enhance the visibility and engagement of the student branch within the community.",
    email: "rithvikrana@ieee.org"
  },
  {
    name: "Prince",
    role: "Media Co-Lead",
    image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741783506/prince_adstxt.jpg",
    bio: "As Media Co-Lead of the IEEE Student Branch, Prince is responsible for managing the branch’s digital presence and media outreach. He ensures effective communication by creating engaging content, handling social media platforms, and promoting events and initiatives. His efforts enhance the visibility and engagement of the student branch within the community.",
    email: "princegmrllama@gmail.com"
  },
];

const patCommunityA: TeamMember[] = [
    {
      name: "Dr. Suneel Galgotia",
      role: "Hon'ble Chancellor - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/sunilSir_y9xmy2.jpg",
      bio: "Dr. Suneel Galgotia is a visionary academic leader and the Hon’ble Chancellor of Galgotias University. With decades of experience in the education sector, he has played a pivotal role in transforming Galgotias University into a center of academic excellence. Under his leadership, the institution has achieved remarkable milestones in research, innovation, and student success.",
      email: ""
    }
  ];
  
  const patCommunityB: TeamMember[] = [
    {
      name: "Dr. Dhruv Galgotia",
      role: "CEO - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/dhruvSir_aaizql.jpg",
      bio: "Dr. Dhruv Galgotia, the CEO of Galgotias University, is a dynamic leader committed to redefining higher education in India. His strategic vision has been instrumental in fostering an ecosystem of innovation, academic rigor, and industry collaboration. His leadership ensures that Galgotias University remains at the forefront of global education trends.",
      email: ""
    },
    {
      name: "Dr. M.B. Kayala",
      role: "Vice Chancellor - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741290074/vcsir_aw86du.jpg",
      bio: "Dr. M.B. Kayala serves as the Vice Chancellor of Galgotias University, bringing with him extensive experience in academic administration and research. His dedication to academic excellence and student development has been pivotal in strengthening the university’s academic framework and fostering a culture of research and innovation.",
      email: ""
    },
    {
      name: "Ms. Aradhana Galgotia",
      role: "Director Operations - Galgotias University, India",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/aradhanaMaam_nkeqp0.jpg",
      bio: "Ms. Aradhana Galgotia is the Director of Operations at Galgotias University. With a keen focus on operational excellence, student welfare, and institutional growth, she plays a crucial role in ensuring the seamless functioning of the university. Her leadership has been instrumental in enhancing the academic and infrastructural landscape of the institution.",
      email: ""
    },
    {
      name: "Prof. (Dr.) Avadhesh Kumar",
      role: "Pro-Vice Chancellor - Galgotias University, India", 
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/pvcsir_vs64x5.jpg",
      bio: "Prof. (Dr.) Avadhesh Kumar, the Pro-Vice Chancellor of Galgotias University, is a distinguished academician with a wealth of experience in higher education. His expertise in academic policy-making and administration has significantly contributed to the university’s pursuit of excellence in teaching, research, and community engagement.",
      email: ""
    }
  ];
  
  const patCommunityC: TeamMember[] = [
    
      {
        name: "Dr. Shrddha Sagar",
        role: "Advisor, IEEE WIE AG & SBC",
        image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741785432/shrddha_mam_ahusbl.jpg",
        bio: "Dr. Shrddha Sagar is a dedicated academician and an esteemed Advisor for IEEE WIE AG & SBC. With a strong commitment to promoting diversity and inclusion in STEM, she plays a pivotal role in mentoring students and professionals. Her leadership fosters an environment of innovation, technical excellence, and empowerment for women in engineering.",
        email: ""
      },
    {
      name: "Dr. Aanjey Mani Tripathi",
      role: "IEEE Counsellor",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741289813/Aanjey_wkazg5.jpg",
      bio: "Dr. Aanjey Mani Tripathi serves as the IEEE Counsellor, mentoring students and professionals in the field of engineering and technology. His guidance and expertise play a crucial role in encouraging innovation, research, and professional development among IEEE members.",
      email: ""
    },
    {
      name: "Dr. Meenakshi Awasthi",
      role: "Advisor, IEEE IAS SBC",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741341173/meenakshi_mam_iwhgt0.jpg",
      bio: "Dr. Meenakshi Awasthi is an esteemed advisor for IEEE IAS SBC, contributing her extensive knowledge and expertise to the organization. With a strong academic and research background, she is dedicated to guiding students and professionals in achieving excellence in their respective fields.",
      email: ""
    },
    {
      name: "Dr. Aditya Nath Bhatt",
      role: "Advisor, IEEE IAS SBC",
      image: "https://res.cloudinary.com/dgna3swph/image/upload/t_Profile/v1741341173/absir_nqwekk.jpg",
      bio: "Dr. Aditya Nath Bhatt is a highly regarded academic and advisor for IEEE IAS SBC. His contributions in the domain of engineering and technology have been instrumental in shaping research initiatives and fostering a culture of technical excellence among IEEE members.",
      email: ""
    }
  ];
  

  import { useState, useEffect } from "react";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className="bg-white dark:bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow duration-300 w-800 h-96 flex flex-col justify-center">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="w-440 h-440 rounded-full overflow-hidden mb-6 shadow-neumorphic">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={176}
                height={176}
                className="object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 dark:text-gray-200">{member.name}</h3>
            <p className="text-blue-600 dark:text-gray-400 text-sm">{member.role}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-xl shadow-neumorphic p-6 max-w-lg md:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-900 dark:text-gray-200">{member.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-3000 h-3000 rounded-full overflow-hidden shadow-neumorphic">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-blue-600 dark:text-gray-400 font-semibold mb-2">{member.role}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{member.bio}</p>
            <p className="text-blue-900 dark:text-gray-300">
              <strong>Contact:</strong> {member.email}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
}

export default function TeamsPage() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    // Local storage sirf client-side pe access karein
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []); // Run only once on mount

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]); // Runs whenever darkMode changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <header className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <main className="container mx-auto px-4 py-16 pt-24">
        <h1 className="text-4xl font-bold text-center text-blue-900 dark:text-gray-200 mb-12">Our Team</h1>
        <Tabs defaultValue="board" className="w-auto mx-auto">
        <TabsList className="grid w-auto grid-cols-3 gap-2 bg-white dark:bg-gray-900  rounded-xl p-1  ">
  <TabsTrigger value="PAT" className="data-[state=active]:bg-white dark:bg-gray-800 data-[state=active]:text-blue-900 dark:data-[state=active]:text-gray-200 p-2 ">
    PATRONS
  </TabsTrigger>
  <TabsTrigger value="board" className="data-[state=active]:bg-white dark:bg-gray-800 data-[state=active]:text-blue-900 dark:data-[state=active]:text-gray-200 p-2">
    Board
  </TabsTrigger>
  <TabsTrigger value="executive" className="data-[state=active]:bg-white dark:bg-gray-800 data-[state=active]:text-blue-900 dark:data-[state=active]:text-gray-200 p-2">
    ExComm
  </TabsTrigger>
</TabsList>

          <TabsContent value="PAT">
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 text-center">PATRONS</h2>
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 ">Chief Patron</h2>
            <TeamGrid members={patCommunityA} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-3 pt-4 ">Patrons</h2>
            <TeamGrid members={patCommunityB} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 ">Advisors</h2>
            <TeamGrid members={patCommunityC} />
          </TabsContent>
          <TabsContent value="board">
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 ">Board Team</h2>
            <TeamGrid members={boardMembers} />
          </TabsContent>
          <TabsContent value="executive">
            <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-gray-200 mb-6 mt-4 ">Executive Committee</h2>
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 ">Board Team</h2>
            <TeamGrid members={boardMembers} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 mt-4 ">Computer Society</h2>
            <TeamGrid members={subCommunityA} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 mt-4 ">Industry Applications Society</h2>
            <TeamGrid members={subCommunityB} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 mt-4">Women In Engineering Society</h2>
            <TeamGrid members={subCommunityC} />
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-gray-200 mb-6 mt-4">Creative Committee</h2>
            <TeamGrid members={subCommunityD} />

          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

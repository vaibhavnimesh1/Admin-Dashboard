// Sidebar imports
import {
    UilBookReader,
    UilGraduationCap,
    UilNotebook,
    UilChart,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";
  
  // Analytics Cards imports
  import { UilBookOpen, UilFileAlt } from "@iconscout/react-unicons";
  
  // Recent Card Imports
  import studentImg1 from "../img/student1.png";
  import studentImg2 from "../img/student2.png";
  import studentImg3 from "../img/student3.png";
  
  // Sidebar Data
  export const SidebarData = [
    {
      icon: UilBookReader,
      heading: "Courses",
    },
    {
      icon: UilGraduationCap,
      heading: "Enrollments",
    },
    {
      icon: UilNotebook,
      heading: "Assignments",
    },
    {
      icon: UilChart,
      heading: "Progress",
    },
  ];
  
  // Analytics Cards Data
  export const cardsData = [
    {
      title: "Completed Courses",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "8",
      png: UilBookOpen,
      series: [
        {
          name: "Completed Courses",
          data: [2, 4, 6, 8, 8, 8, 8],
        },
      ],
    },
    {
      title: "Assignments Submitted",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "15",
      png: UilFileAlt,
      series: [
        {
          name: "Assignments Submitted",
          data: [2, 4, 6, 8, 10, 12, 15],
        },
      ],
    },
    // Add more cards as needed for student-specific analytics
  ];
  
  // Recent Update Card Data
  export const UpdatesData = [
    {
      img: studentImg1,
      name: "John Doe",
      noti: "has completed the 'Introduction to Programming' course.",
      time: "25 minutes ago",
    },
    {
      img: studentImg2,
      name: "Jane Smith",
      noti: "has submitted an assignment for 'Mathematics 101'.",
      time: "1 hour ago",
    },
    {
      img: studentImg3,
      name: "Sam Johnson",
      noti: "has enrolled in the 'Computer Science Basics' course.",
      time: "3 hours ago",
    },
  ];
  
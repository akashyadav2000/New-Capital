import image1 from "../Assets/villaa.jpg";
import image2 from "../Assets/Apartmentt.jpg";
import image3 from "../Assets/hotel-apartmentt.jpg";
import image4 from "../Assets/commercial-11.jpg";
import image5 from "../Assets/administrativee.jpg";
import image6 from "../Assets/med2.jpg";
import image7 from "../Assets/phar1.jpg";
import image8 from "../Assets/new-cairo-city.jpg";

import experienceIcon from "../Assets/experience-iconnn.png";
import trustIcon from "../Assets/trust-icon.png";
import varietyIcon from "../Assets/variety-icon.png";

import phone from "../Assets/phone.png";
import email from "../Assets/email.png";
import location from "../Assets/location-1.png";

import villa1 from "../Assets/villa1.jpg";
import villa2 from "../Assets/villa2.jpg";
import villa3 from "../Assets/villa3.jpeg";
import villa4 from "../Assets/villa4.jpeg";
import villa5 from "../Assets/villa5.jpg";

import apartment1 from "../Assets/apartemn1.jpg";
import apartment2 from "../Assets/apartemn2.jpg";
import apartment3 from "../Assets/apartemn3.jpg";
import apartment4 from "../Assets/apartemn4.jpeg";
import apartment5 from "../Assets/apartemn5.jpg";
import apartment6 from "../Assets/apartemn6.jpeg";

import hotelApartment1 from "../Assets/tower1.jpeg";
import hotelApartment2 from "../Assets/towe2.jpg";
import hotelApartment3 from "../Assets/towe3.jpg";
import hotelApartment4 from "../Assets/tower4.jpg";
import hotelApartment5 from "../Assets/tower5.jpg";

import commercial1 from "../Assets/commercial1.jpg";
import commercial2 from "../Assets/commercial2.jpeg";
import commercial3 from "../Assets/commercial3.jpg";
import commercial5 from "../Assets/commercial5.jpg";
import commercial6 from "../Assets/commercial6.jpeg";

import administrative1 from "../Assets/administrative1.jpg";
import administrative2 from "../Assets/administrative2.jpg";
import administrative3 from "../Assets/administrative3.jpg";
import administrative4 from "../Assets/administrative4.jpeg";
import administrative5 from "../Assets/administrative5.jpg";
import administrative6 from "../Assets/administrative6.jpg";

import medical from "../Assets/medical1.jpg";
import medica2 from "../Assets/medical2.png";
import medica3 from "../Assets/medical3.png";
import medica4 from "../Assets/medical4.jpg";
import medica5 from "../Assets/medical5.jpg";
import medica6 from "../Assets/medical6.jpg";

import pharmacy1 from "../Assets/pharmacies1.jpg";
import pharmacy2 from "../Assets/pharmacies2.jpg";
import pharmacy3 from "../Assets/pharmacies3.jpg";
import pharmacy4 from "../Assets/pharmacies4.jpg";
import pharmacy5 from "../Assets/pharmacies5.jpg";
import pharmacy6 from "../Assets/pharmacies6.jpg";

import newCairo1 from "../Assets/newCairo1.jpg";
import newCairo2 from "../Assets/newCairo2.jpg";
import newCairo3 from "../Assets/newCairo3.jpg";
import newCairo4 from "../Assets/newCairo4.jpeg";
import newCairo5 from "../Assets/newCairo5.jpeg";

import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export const projectsData = [
  {
    id: 1,
    title: "Villa",
    description: "Settle In a Modern Villa With Your Family",
    image: image1,
    to: "/projects/villa",
  },
  {
    id: 2,
    title: "Apartment",
    description: "Experience urban living at its finest in our apartments",
    image: image2,
    to: "/projects/apartment",
  },
  {
    id: 3,
    title: "Hotel Apartment",
    description: "Discover unlimited options and move to the new capital city",
    image: image3,
    to: "/projects/hotelApartment",
  },
  {
    id: 4,
    title: "Commercial",
    description: "Open your new store in Egypt's best city",
    image: image4,
    to: "/projects/commercial",
  },
  {
    id: 5,
    title: "Administrative",
    description: "Your new office in a modern work environment",
    image: image5,
    to: "/projects/administrative",
  },
  {
    id: 6,
    title: "Medical",
    description: "Medical units available with different facilities",
    image: image6,
    to: "/projects/medical",
  },
  {
    id: 7,
    title: "Pharmacies",
    description:
      "Healthcare made easy with pharmacies units with different facilities",
    image: image7,
    to: "/projects/pharmacies",
  },
  {
    id: 8,
    title: "New Cairo",
    description:
      "Experience the allure of a vibrant community in the heart of New Cairo",
    image: image8,
    to: "/projects/newCairo",
  },
];

export const headerData = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Projects", to: "/projects" },
  { id: 3, title: "About", to: "/about" },
  { id: 4, title: "Contact", to: "/contact" },
];

export const clientTestimonialsData = [
  {
    id: 1,
    number: "8000",
    title: "Clients",
    description:
      "Proudly serving a huge number of satisfied clients from different nationalities",
  },

  {
    id: 2,
    number: "350",
    title: "Projects",
    description:
      "Consultancy in many real estate projects of all types all over Egypt",
  },

  {
    id: 3,
    number: "6",
    title: "Years",
    description:
      "Profound knowledge and extensive experience throughout the years in real estate field",
  },
];

export const aboutUsData = [
  {
    id: 1,
    title: "Experience",
    image: experienceIcon,
    description:
      "Based on our extensive experience and resources, we provide sincere consultancy you can depend on to help you with your investment and property buying decisions.",
    bgColor: "#222222",
  },
  {
    id: 2,
    title: "Trust",
    image: trustIcon,
    description:
      "We have built a reputation through meaningful communication and honesty with our clients. We are trusted to fulfill promises and take care of our clients’ concerns.",
    bgColor: "#141414",
  },

  {
    id: 3,
    title: "Variety",
    image: varietyIcon,
    description:
      "We specialize in various projects that offer all types of units such as apartments, penthouses, villas, commercial, administrative, and medical units.",
    bgColor: "#222222",
  },
];

export const footerIcons = [
  { id: 1, icon: FaLinkedin },
];

export const formData = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Name",
  },

  // {
  //   id: 2,
  //   name: "phone",
  //   type: "number",
  //   placeholder: "Phone Number",
  // },

  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
];

export const contactInfoData = [
  { id: 1, title: "+91 7021117450", image: phone },
  { id: 2, title: "Akashvinodyadav11@gmail.com", image: email },
  { id: 3, title: "Cairo, Egypt", image: location },
];

export const villaData = [
  {
    id: 1,
    image: villa1,
    title: "Midtown Villa",
    discount: "12%",
    Installment: 7,
    price: "$275000",
  },

  {
    id: 2,
    image: villa2,
    title: "Midtown Solo",
    discount: "8%",
    Installment: 9,
    price: "$360000",
  },

  {
    id: 3,
    image: villa3,
    title: "Midtown Sky",
    discount: "14%",
    Installment: 6,
    price: "$300000",
  },

  {
    id: 4,
    image: villa4,
    title: "IL Bosco",
    discount: "5%",
    Installment: 8,
    price: "$245000",
  },

  {
    id: 5,
    image: villa5,
    title: "Vinci",
    discount: "10%",
    Installment: 7,
    price: "$280000",
  },
];

export const apartmentsData = [
  {
    id: 1,
    image: apartment1,
    title: "Midtown Sky",
    discount: "10%",
    Installment: 7,
    price: "$160000",
  },

  {
    id: 2,
    image: apartment2,
    title: "Midtown Condo",
    discount: "7%",
    Installment: 7,
    price: "$175000",
  },

  {
    id: 3,
    image: apartment3,
    title: "IL Bosco",
    discount: "12%",
    Installment: 9,
    price: "$190000",
  },

  {
    id: 4,
    image: apartment4,
    title: "Vinci",
    discount: "9%",
    Installment: 9,
    price: "$185000",
  },

  {
    id: 5,
    image: apartment5,
    title: "Serrano",
    discount: "13%",
    Installment: 6,
    price: "$200000",
  },

  {
    id: 6,
    image: apartment6,
    title: "Atika",
    discount: "6%",
    Installment: 8,
    price: "$195000",
  },
];

export const hotelApartmentsData = [
  {
    id: 1,
    image: hotelApartment1,
    title: "Central Iconic Tower",
    discount: "8%",
    Installment: 9,
    price: "$180000",
  },

  {
    id: 2,
    image: hotelApartment2,
    title: "6Ixty Iconic Tower",
    discount: "10%",
    Installment: 7,
    price: "$170000",
  },

  {
    id: 3,
    image: hotelApartment3,
    title: "East Tower",
    discount: "10%",
    Installment: 7,
    price: "$165000",
  },

  {
    id: 4,
    image: hotelApartment4,
    title: "Double Two Tower",
    discount: "13%",
    Installment: 6,
    price: "$160000",
  },

  {
    id: 5,
    image: hotelApartment5,
    title: "Rain Tower",
    discount: "12%",
    Installment: 9,
    price: "$175000",
  },
];

export const commercialData = [
  {
    id: 1,
    image: commercial1,
    title: "Pyramids Mall",
    discount: "15%",
    Installment: 6,
    price: "$250000",
  },

  {
    id: 2,
    image: commercial2,
    title: "Lafayette Mall",
    discount: "11%",
    Installment: 9,
    price: "$230000",
  },

  {
    id: 3,
    image: commercial3,
    title: "Unitower",
    discount: "8%",
    Installment: 8,
    price: "$220000",
  },

  {
    id: 4,
    image: commercial5,
    title: "Senet",
    discount: "6%",
    Installment: 7,
    price: "$215000",
  },

  {
    id: 5,
    image: commercial6,
    title: "Pint 9 Mall",
    discount: "10%",
    Installment: 9,
    price: "$240000",
  },
];

export const administrativeData = [
  {
    id: 1,
    image: administrative1,
    title: "Solano Mall",
    discount: "7%",
    Installment: 8,
    price: "$210000",
  },

  {
    id: 2,
    image: administrative2,
    title: "Laval",
    discount: "10%",
    Installment: 7,
    price: "$220000",
  },

  {
    id: 3,
    image: administrative3,
    title: "Dorado",
    discount: "13%",
    Installment: 6,
    price: "$195000",
  },

  {
    id: 4,
    image: administrative4,
    title: "Ronza Tower",
    discount: "11%",
    Installment: 9,
    price: "$220000",
  },

  {
    id: 5,
    image: administrative5,
    title: "Onyx Tower",
    discount: "9%",
    Installment: 6,
    price: "$190000",
  },

  {
    id: 6,
    image: administrative6,
    title: "Mizar Tower",
    discount: "12%",
    Installment: 8,
    price: "$205000",
  },
];

export const medicalData = [
  {
    id: 1,
    image: medical,
    title: "Laval",
    discount: "10%",
    Installment: 6,
    price: "$145000",
  },

  {
    id: 2,
    image: medica2,
    title: "Cloud",
    discount: "15%",
    Installment: 8,
    price: "$165000",
  },

  {
    id: 3,
    image: medica3,
    title: "Senator",
    discount: "10%",
    Installment: 7,
    price: "$158000",
  },

  {
    id: 4,
    image: medica4,
    title: "Ronza Tower",
    discount: "10%",
    Installment: 6,
    price: "$150000",
  },

  {
    id: 5,
    image: medica5,
    title: "Senet",
    discount: "10%",
    Installment: 6,
    price: "$152000",
  },

  {
    id: 6,
    image: medica6,
    title: "Evora Mall",
    discount: "12%",
    Installment: 8,
    price: "$155000",
  },
];

export const pharmaciesData = [
  {
    id: 1,
    image: pharmacy1,
    title: "Lafayette Mall",
    discount: "10%",
    Installment: 6,
    price: "$175000",
  },

  {
    id: 2,
    image: pharmacy2,
    title: "Loft Mall",
    discount: "15%",
    Installment: 6,
    price: "$185000",
  },

  {
    id: 3,
    image: pharmacy3,
    title: "UIN Tower",
    discount: "10%",
    Installment: 8,
    price: "$175000",
  },

  {
    id: 4,
    image: pharmacy4,
    title: "Point 11",
    discount: "10%",
    Installment: 9,
    price: "$185000",
  },

  {
    id: 5,
    image: pharmacy5,
    title: "Park Point Mall",
    discount: "10%",
    Installment: 6,
    price: "$170000",
  },

  {
    id: 6,
    image: pharmacy6,
    title: "Pagoda Complex",
    discount: "15%",
    Installment: 6,
    price: "$175000",
  },
];

export const newCairoData = [
  {
    id: 1,
    image: newCairo1,
    title: "The Vibe",
    discount: "10%",
    Installment: 6,
    price: "$165000",
  },

  {
    id: 2,
    image: newCairo2,
    title: "City Hall",
    discount: "10%",
    Installment: 7,
    price: "$165000",
  },

  {
    id: 3,
    image: newCairo3,
    title: "Axle",
    discount: "10%",
    Installment: 7,
    price: "$175000",
  },

  {
    id: 4,
    image: newCairo4,
    title: "In Town Mall",
    discount: "15%",
    Installment: 8,
    price: "$180000",
  },

  {
    id: 5,
    image: newCairo5,
    title: "Cinco",
    discount: "6%",
    Installment: 9,
    price: "$175000",
  },
];

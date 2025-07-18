import img from "@/components/assets/Images/p1.png";
import img1 from "@/components/assets/Images/pt1.png";
import img2 from "@/components/assets/Images/Hero2.png";
import cd1 from "@/components/assets/Images/Cd9.png";
import cd2 from "@/components/assets/Images/Cd2.png";
import cd3 from "@/components/assets/Images/Cd3.png";
import cd4 from "@/components/assets/Images/Cd4.png";
import cd5 from "@/components/assets/Images/Cd8.png";
import cd6 from "@/components/assets/Images/Cd10.png";
import { FaGifts, FaPaypal, FaRegCreditCard } from "react-icons/fa6";
import { PiHandshakeDuotone, PiLinktreeLogoDuotone } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
import { SiZelle } from "react-icons/si";

export const Sidebarlinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#services", label: "Resources" },
  { href: "/", label: "Testimonies" },
  { href: "/about", label: "Give" },
  { href: "/about", label: "Partner" },
  { href: "/about", label: "Projects" },
  { href: "/contact", label: "Contacts" },
  { href: "/livestream", label: "LIVESTREAM" },
];

export const Navlinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/forms", label: "Online Forms" },
  { href: "/give", label: "Give" },
  { href: "/about", label: "Video On Demand" },
  { href: "/about", label: "Audio on Demand" },
  { href: "/about", label: "GMTV" },
  { href: "/contact", label: "Resources" },
  {
    href: "/livestream",
    label: "LIVESTREAM",
    class: "text-destructive hover:text-destructive",
  },
];

export const Location = [
  {
    zone: "Mpape",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/4gxdDEoJ3d1XdHPt6",
  },
  {
    zone: "Kubwa",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/BqMpaqgPBd6JEJMA6",
  },
  {
    zone: "Gwarimpa",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/JF1R4P68fw1gCLvV6",
  },
  {
    zone: "Gudu",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/L5EKiRjmmLPjf49n8",
  },
  {
    zone: "Utako",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/36HQEAZcxfuJLbXFA",
  },
  {
    zone: "Lugbe",
    address: "Dominion City Complex, Off Jikoko Road, BegerQuary, Mpape, Abuja",
    link: "https://maps.app.goo.gl/BAtYtrLSuNzG1tEH9",
  },
];

export const Services = [
  {
    Day: "Sunday",
    Time: "7:30 - 10:30",
    address: " Experince a Sunday of Immense worship and uplifting sermons",
  },
  {
    Day: "Wensday",
    Time: "5:30 - 7:30",
    address: " Join us for a Wednesday of enriching bible study",
  },
  {
    Day: "Friday",
    Time: "5:30 - 7:30",
    address: " Experince a Sunday of Immense worship and uplifting sermons",
  },
];

export const Categories = [
  { Category: "A pastor wanting to bulid" },
  { Category: "Land/Property Donation" },
  { Category: "Someone who wants to fund a Building project" },
];

export const OnlineGiving = [
  {
    img: img,
    icon: <FaGifts />,
    heading: "Honor Pastor David",
  },
  {
    img: img1,
    icon: <PiHandshakeDuotone />,
    heading: "Patnership",
  },
  {
    img: img2,
    icon: <FaHandHoldingHeart />,
    heading: "Support Projects",
  },
];

export const footerLinks = [
  {
    heading: "  Useful Links",
    link: [
      { name: "About Us", href: "/about" },
      { name: "Devotional", href: "/about" },
      { name: "GMTV", href: "/products" },
      { name: "Video On Demand", href: "/blog" },
      { name: "Livestream", href: "/blog" },
      { name: "Dominion Mandate Radio", href: "/blog" },
    ],
  },
  {
    heading: "Online Givng",
    link: [
      { name: "Give", href: "/partner" },
      { name: "PartnerShip", href: "/partner" },
      { name: "Support", href: "/donate" },
    ],
  },
  {
    heading: "Support",
    link: [
      { name: "Help Center", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/contact" },
    ],
  },
];

export const Socials = [
  { name: <BsTwitterX />, href: "http://localhost:3002/" },
  { name: <BsFacebook />, href: "http://localhost:3002/" },
  { name: <BsInstagram />, href: "http://localhost:3002/" },
  { name: <BsYoutube />, href: "http://localhost:3002/" },
  { name: <BsWhatsapp />, href: "http://localhost:3002/" },
  { name: <CgMail />, href: "http://localhost:3002/" },
  { name: <PiLinktreeLogoDuotone />, href: "http://localhost:3002/" },
];

export const AboutCards = [
  { x: 0, y: 50, rotate: 0, z: 20, opacity: 1, image: cd6, scale: 1 },
  { x: 70, y: -20, rotate: 17, z: 18, opacity: 1, image: cd1, scale: 0.8 },
  { x: -70, y: -20, rotate: -17, z: 16, opacity: 1, image: cd2, scale: 0.8 },
  { x: 0, y: -170, rotate: 0, z: 14, opacity: 1, image: cd3, scale: 0.7 },
  { x: 110, y: -150, rotate: 30, z: 12, opacity: 1, image: cd4, scale: 0.7 },
  { x: -110, y: -150, rotate: -30, z: 12, opacity: 1, image: cd5, scale: 0.7 },
];

export const GivingCard = [
  {
    icon: <FaPaypal />,
    title: "Paypal",
    subtitle: "Give with Paypal",
    sec: "Secured",
    opt: "USD | GBP | EUR | CAD",
  },
  {
    icon: <FaRegCreditCard />,
    title: "Card & Transfer",
    subtitle: "Transfer or Pay with Card",
    sec: "Secured",
    opt: "USD | GBP | EUR | CAD",
  },
  {
    icon: <MdOutlinePayments />,
    title: "Bank Transfer",
    subtitle: "Give via Bank transfer",
    sec: "Secured",
    opt: "USD | GBP | EUR | CAD",
  },
  {
    icon: <SiZelle />,
    title: "Zelle",
    subtitle: "Zelle to Dominion City Global",
    sec: "Email:",
    opt: "dominioncity@global.ng",
  },
];

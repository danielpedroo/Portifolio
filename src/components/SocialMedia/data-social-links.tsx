import type { SocialIcon } from "@/@types/social-props";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

export const socialIcons: SocialIcon[] = [
  {
    id: 1,
    icon: <FaInstagram />,
    color: "#E1306C",
    link: "https://instagram.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    color: "#0077B5",
    link: "https://linkedin.com",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    color: "#EA4C89",
    link: "https://dribbble.com",
  },
  {
    id: 4,
    icon: <FaBehance />,
    color: "#0057FF",
    link: "https://behance.net",
  },
];
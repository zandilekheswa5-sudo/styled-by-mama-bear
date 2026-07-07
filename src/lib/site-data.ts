import knotlessNew from "@/assets/service-Knotless.jpg";
import boxNew from "@/assets/service-Box.jpg";
import cornrowsNew from "@/assets/service-Cornrows.jpg";
import stitchNew from "@/assets/service-Stitch.jpg";

import fulaniNew from "@/assets/service-StraightUp.jpg";
import goddessNew from "@/assets/service-Goddess.jpg";
import butterflyLocs from "@/assets/service-ButterflyLocs.jpg";
import kidsNew from "@/assets/service-Kids.jpg";

import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

export const WHATSAPP_NUMBER = "27602940113";
export const WHATSAPP_DISPLAY = "060 294 0113";
export const INSTAGRAM_URL = "https://www.instagram.com/mamabear_2810?igsh=MWIxYXEwaXJlOG42ZA%3D%3D";
export const INSTAGRAM_HANDLE = "mamabear_2810";
export const TIKTOK_URL = "https://www.tiktok.com/@mamabear_2810";
export const TIKTOK_USERNAME = "@mamabear_2810";

export interface Service {
  name: string;
  price: string;
  duration: string;
  image: string;
}

export const services: Service[] = [
  { name: "Knotless Braids", price: "R450", duration: "6 – 8 hrs", image: knotlessNew },
  { name: "Box Braids", price: "R500", duration: "6 – 8 hrs", image: boxNew},
  { name: "Cornrows", price: "R250", duration: "2 – 4 hrs", image: cornrowsNew},
  { name: "Fulani braids", price: "R450", duration: "6 – 9 hrs", image: stitchNew},
  { name: "Straight up", price: "R300", duration: "5 – 8 hrs", image: fulaniNew},
  { name: "Goddess Braids", price: "R450", duration: "6 – 9 hrs", image: goddessNew},
  { name: "Butterfly Locs", price: "R500", duration: "6 – 9 hrs", image: butterflyLocs},
  { name: "Kids Braids", price: "R200", duration: "2 – 4 hrs", image: kidsNew},
];

export const galleryImages = [
  { src: gallery1, alt: "Tribal braids with curly ends and a leopard print scarf" },
  { src: gallery2, alt: "Feed-in cornrows styled into a sleek high ponytail" },
  { src: gallery3, alt: "Short twists with curly ends" },
  { src: gallery4, alt: "Lemonade braids cascading to one side" },
  { src: gallery5, alt: "Intricate freestyle cornrow design, side view" },
  { src: gallery6, alt: "Neat straight-back braids, front view" },
];

export const testimonials = [
  {
    quote: "My braids were neat and lasted for weeks. I have never received so many compliments!",
    name: "Thandeka M.",
  },
  {
    quote: "Very professional and friendly service. Nonyameko truly takes her time and cares.",
    name: "Lerato K.",
  },
  {
    quote: "I felt comfortable from start to finish. The whole experience felt like self-care.",
    name: "Aisha B.",
  },
  {
    quote: "Beautiful, gentle work on my daughter's hair. We'll definitely be coming back.",
    name: "Naledi P.",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Simply fill in the booking form on this page with your details, preferred style, date and time. You'll receive a confirmation and we'll be in touch to finalise everything.",
  },
  {
    q: "Do I need to bring my own hair?",
    a: "For most protective styles you're welcome to bring your own braiding hair, or we can advise on the right type and quantity. Just mention it in your booking notes.",
  },
  {
    q: "How long do appointments take?",
    a: "It depends on the style and length. Cornrows take 1–2 hours while longer knotless or box braids can take 4–6 hours. Estimated times are shown on each service.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Of course. Life happens! Please give at least 24 hours' notice and we'll happily find a new slot that works for you.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept cash, EFT and most mobile payment options. Payment details are confirmed when your appointment is booked.",
  },
];

export const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

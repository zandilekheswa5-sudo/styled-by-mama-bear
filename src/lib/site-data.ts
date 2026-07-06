import knotlessNew from "@/assets/knotless-braids-v2.png.asset.json";
import boxNew from "@/assets/box-braids-v2.png.asset.json";
import cornrowsNew from "@/assets/cornrows-v2.png.asset.json";
import stitchNew from "@/assets/stitch-braids-v2.png.asset.json";
import fulaniNew from "@/assets/fulani-braids-v2.png.asset.json";
import goddessNew from "@/assets/goddess-braids-v2.png.asset.json";
import kidsNew from "@/assets/kids-braids-v2.png.asset.json";
import butterflyLocs from "@/assets/butterfly-locs.png.asset.json";

import gallery1 from "@/assets/gallery-new-1.png.asset.json";
import gallery2 from "@/assets/gallery-new-2.png.asset.json";
import gallery3 from "@/assets/gallery-new-3.png.asset.json";
import gallery4 from "@/assets/gallery-new-4.png.asset.json";
import gallery5 from "@/assets/gallery-new-5.png.asset.json";
import gallery6 from "@/assets/gallery-new-6.png.asset.json";

export const WHATSAPP_NUMBER = "27602940113";
export const WHATSAPP_DISPLAY = "060 294 0113";
export const INSTAGRAM_URL = "https://www.instagram.com/mamabear_2810/";
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
  { name: "Knotless Braids", price: "R450", duration: "6 – 8 hrs", image: knotlessNew.url },
  { name: "Box Braids", price: "R500", duration: "6 – 8 hrs", image: boxNew.url },
  { name: "Cornrows", price: "R250", duration: "2 – 4 hrs", image: cornrowsNew.url },
  { name: "Fulani braids", price: "R450", duration: "6 – 9 hrs", image: stitchNew.url },
  { name: "Straight up", price: "R300", duration: "5 – 8 hrs", image: fulaniNew.url },
  { name: "Goddess Braids", price: "R450", duration: "6 – 9 hrs", image: goddessNew.url },
  { name: "Butterfly Locs", price: "R500", duration: "6 – 9 hrs", image: butterflyLocs.url },
  { name: "Kids Braids", price: "R200", duration: "2 – 4 hrs", image: kidsNew.url },
];

export const galleryImages = [
  { src: gallery1.url, alt: "Tribal braids with curly ends and a leopard print scarf" },
  { src: gallery2.url, alt: "Feed-in cornrows styled into a sleek high ponytail" },
  { src: gallery3.url, alt: "Short twists with curly ends" },
  { src: gallery4.url, alt: "Lemonade braids cascading to one side" },
  { src: gallery5.url, alt: "Intricate freestyle cornrow design, side view" },
  { src: gallery6.url, alt: "Neat straight-back braids, front view" },
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


import React from 'react';
import { Facebook, Calendar, Phone, MessageSquare, Info, Home, Mail, Music2 } from 'lucide-react';

export const RADIO_NAME = "HAMANIEH FLASH";
export const RADIO_SLOGAN = "l'actualité sous un autre angle !!!";
export const STREAM_URL = "http://ecmanager5.pro-fhi.net:2870/;?type=http&nocache=1769883863";
export const WHATSAPP_URL = "https://wa.me/2250757443661";
export const PHONE_NUMBER = "+2250757443661";
export const EMAIL = "hamaniehflashnet@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/hamaniehflash";
export const TIKTOK_URL = "https://www.tiktok.com/@hamaniehflashnet?_r=1&_t=ZS-93SBAJJdF5B";

export const COLORS = {
  navy: "#001a33",
  red: "#e11d48",
  gold: "#fbbf24",
  blueFlash: "#3b82f6"
};

export const SCHEDULE = [
  { title: "L'actu du weekend", time: "Tous les LUNDIS à 18H" },
  { title: "Ça se passe ici", time: "Tous les MERCREDIS à 21H" },
  { title: "Le Flash Info (Aristide Amani)", time: "Tous les VENDREDIS à 18H", highlight: true },
  { title: "L'interview", time: "Chaque dernier SAMEDI du mois à 21H" },
  { title: "Parlons santé", time: "Les mardis en 15" },
];

export const MENU_ITEMS = [
  { id: 'home', label: 'Accueil', icon: <Home size={20} /> },
  { id: 'programmes', label: 'Programmes', icon: <Calendar size={20} /> },
  { id: 'contact', label: 'Écrivez-nous', icon: <MessageSquare size={20} /> },
  { id: 'call', label: 'Appelez-nous', icon: <Phone size={20} /> },
  { id: 'facebook', label: 'Facebook', icon: <Facebook size={20} /> },
  { id: 'tiktok', label: 'TikTok', icon: <Music2 size={20} /> },
  { id: 'about', label: 'À propos', icon: <Info size={20} /> },
];

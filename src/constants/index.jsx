import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "/#" },
  { label: "Services", href: "/#services" },
  { label: "Features", href: "/#features" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export const testimonials = [
  {
    user: "Yaseeroh",
    company: "Bodija Market",
    image: user1,
    text: "I can now save and see my balance instantly without waiting for my card to be updated. Muthsaal makes saving easier than ever.",
  },
  {
    user: "Naseef",
    company: "Agbeni Market",
    image: user2,
    text: "Before Muthsaal, I had to wait for the agent to calculate my balance. Now I know everything from my phone. It's fast, secure, and reliable.",
  },
  {
    user: "Walexy",
    company: "Ogunpa Market",
    image: user3,
    text: "At first, I didn’t trust apps for money, but Muthsaal showed me I can still see my record and get my cash anytime.",
  },
  {
    user: "Siraj",
    company: "Dugbe Market",
    image: user4,
    text: "My agent records my daily contribution and I get an alert immediately — no more errors or missing records. It's a game-changer for my savings routine.",
  },
  {
    user: "Alhaji Osupa",
    company: "Bodija Market",
    image: user5,
    text: "Even when network is bad, my savings still get recorded. It updates later automatically — very reliable. Muthsaal has transformed how I manage my finances.",
  },
  {
    user: "Al-Ameen",
    company: "Agbeni Market",
    image: user6,
    text: "Muthsaal has changed how we save money in the market. We now feel like part of the digital world. It's trustworthy and easy to use.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Digital Daily Contributions",
    description:
      "Customers can now make their daily “Ajo” contributions through the Muthsaal app or local agents, eliminating the need for paper cards. Every payment is instantly recorded and visible in their account history.",
  },
  {
    icon: <Fingerprint />,
    text: "Secure Savings Wallet",
    description:
      "Each customer has a personal digital wallet protected by modern encryption. Funds are safely stored and easily withdrawable whenever needed — no more risk of misplaced cards or record books.",
  },
  {
    icon: <ShieldHalf />,
    text: "Real-Time Balance Tracking",
    description:
      "With Muthsaal, customers can check their total savings, contributions, and loan repayments in real time. No more guessing or waiting for an agent to confirm balances.",
  },
  {
    icon: <BatteryCharging />,
    text: "Easy Loan Access",
    description:
      "Because Muthsaal keeps accurate digital records of every saver’s contributions, customers can qualify for quick, low-collateral loans based on their savings history and repayment consistency.",
  },
  {
    icon: <PlugZap />,
    text: "Market Agent Support",
    description:
      "For traders who prefer human interaction, Muthsaal agents still visit markets like Dugbe, Bodija, Agbeni, and Ogunpa to assist with deposits and withdrawals — bridging traditional trust with digital access.",
  },
  {
    icon: <GlobeLock />,
    text: "SMS and App Notifications",
    description:
      "Customers receive instant notifications after each transaction — whether through SMS or the mobile app — helping them stay updated and confident in the security of their savings.",
  },
];

export const checklistItems = [
  {
    title: "Real-Time Transaction Recording",
    description:
      "Muthsaal eliminates delays and paper trails by allowing staff to record transactions instantly through the mobile app. Managers can monitor every activity live, ensuring transparency and accountability across all markets.",
  },
  {
    title: "Improved Loan Monitoring and Recovery",
    description:
      "With digital records, Muthsaal makes it easy to track repayment progress. Managers can identify overdue customers quickly, improving loan recovery efficiency by over 80% and reducing financial risks.",
  },
  {
    title: "Offline Access with Auto Sync",
    description:
      "Even in areas with poor internet connection, Muthsaal’s mobile app allows staff to record transactions offline. Data automatically syncs once the connection is restored, keeping records accurate and uninterrupted.",
  },
  {
    title: "Building Trust Through Digital Inclusion",
    description:
      "By gradually introducing digital tools while maintaining the human connection of daily visits, Muthsaal helps less tech-savvy traders transition confidently to digital savings — strengthening both trust and financial access.",
  },
];

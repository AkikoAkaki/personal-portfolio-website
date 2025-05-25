import React from 'react';
import { Spade, ChartLine, FileLock } from 'lucide-react';

// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
  customIcon?: React.ReactNode;
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Dean\'s List',
    description: 'Hajim School of Engineering and Applied Sciences',
    date: '2023-2025',
    location: 'Rochester, New York',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Java Blackjack Game',
    description: 'A fully functional multiplayer Blackjack game built in Java with a custom-designed Swing GUI. Includes game logic, score tracking, card rendering, and custom dialogs.',
    link: { href: 'github.com/AkikoAkaki/blackjack-java-swing', label: 'GitHub Cards' },
    tags: ['Java', 'Swing', 'Game-development', 'GUI'],
    customIcon: <Spade />
  },
  {
    name: 'Survey Data Analyzer',
    description: 'A Java-based tool for parsing, storing, and analyzing large-scale survey datasets using a custom-built hash table. Supports demographic and quality-of-life analysis with full-featured data utilities and unit tests.',
    link: { href: 'github.com/AkikoAkaki/survey-analyzer-custom-hashtable', label: 'GitHub Cards' },
    tags: ['Java', 'Data-structure', 'Hash-table', 'Data-analysis'],
    customIcon: <ChartLine />
  },
  {
    name: 'Java ECB (Electronic Codebook) Cipher Project',
    description: 'A Java-based file encryption and decryption tool using simplified ECB block cipher logic.',
    link: { href: 'github.com/AkikoAkaki/java-ecb-file-encryption', label: 'GitHub Cards' },
    tags: ['Java', 'Crypography', 'Encryption', 'Cipher', 'Decryption'],
    customIcon: <FileLock />
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Graphic Designer',
    description:
      'Manages and executes visual design and promotion for the amateur band "The Suckers."（口乐队） Responsibilities include creating promotional materials, designing posters, and developing the band\'s overall visual identity.',
    date: '2025-01-16',
    location: 'Rochester, New York',
    link: 'https://www.instagram.com/the_sucker.s/',
  },
  {
    name: 'Drummer',
    description:
      'Performs as the drummer for the amateur band "The Suckers,"（口乐队） contributing to the band\'s musical arrangements and live performances.',
    date: '2025-01-16',
    location: 'Rochester, New York',
    link: 'https://www.instagram.com/the_sucker.s/',
  },
];

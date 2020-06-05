// Content
import ContactSection from './components/section/Contact.vue'
import AboutSection from './components/section/About.vue'
import OpenSourceSection from './components/section/OpenSource.vue'
import SkillsSection from './components/section/Skills.vue'
import WelcomeSection from './components/section/Welcome.vue'
import WorkSection from './components/section/Work.vue'

// Images
import WelcomeImage from './components/supporting-image/Welcome.vue'
import ContactImage from './components/supporting-image/Contact.vue'
import OpenSourceImage from './components/supporting-image/OpenSource.vue'
import SkillsImage from './components/supporting-image/Skills.vue'
import WorkImage from './components/supporting-image/Work.vue'

// Icons
import ContactIcon from './assets/icons/Contact.svg'
import SkillsIcon from './assets/icons/Skills.svg'
import WorkIcon from './assets/icons/Work.svg'
import OpenSourceIcon from './assets/icons/OpenSource.svg'

export const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const Sections = new Map([
  [
    'WELCOME',
    {
      color: '#000000',
      content: WelcomeSection,
      icon: null,
      image: null,
      title: null,
    },
  ],
  [
    'ABOUT',
    {
      color: '#213345',
      content: AboutSection,
      icon: null,
      image: WelcomeImage,
      title: 'A little about me',
    },
  ],
  [
    'SKILLS',
    {
      color: '#08435c',
      content: SkillsSection,
      icon: SkillsIcon,
      image: SkillsImage,
      title: 'Tech-Talk',
    },
  ],
  [
    'WORK',
    {
      color: '#4f8c52',
      content: WorkSection,
      icon: WorkIcon,
      image: WorkImage,
      title: 'Work',
    },
  ],
  [
    'OPEN-SOURCE',
    {
      color: '#002D40', //#DE9D36
      content: OpenSourceSection,
      icon: OpenSourceIcon,
      image: OpenSourceImage,
      title: 'Open source projects',
    },
  ],
  [
    'CONTACT',
    {
      color: '#000000',
      content: ContactSection,
      icon: ContactIcon,
      image: ContactImage,
      title: 'Contact',
    },
  ],
])

export const SectionKeys = Array.from(Sections.keys())

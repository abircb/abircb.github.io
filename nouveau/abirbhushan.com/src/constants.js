// Content
import ContactSection from './components/section/Contact.vue';
import FTICSection from './components/section/FTIC.vue';
import SkillsSection from './components/section/Skills.vue';
import WelcomeSection from './components/section/Welcome.vue';
import WorkSection from './components/section/Work.vue';

// Images
import WelcomeImage from './components/supporting-image/Welcome.vue';
import ContactImage from './components/supporting-image/Contact.vue';
import FTICImage from './components/supporting-image/FTIC.vue';
import SkillsImage from './components/supporting-image/Skills.vue';
import WorkImage from './components/supporting-image/Work.vue';

// Icons
import ContactIcon from './assets/icons/Contact.svg';
import FTICIcon from './assets/icons/FTIC.svg';
import SkillsIcon from './assets/icons/Skills.svg';
import WorkIcon from './assets/icons/Work.svg';

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
];
  
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
      color: '#121936',
      content: null,
      icon: null,
      image: WelcomeImage,
      title: 'About',
    }
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
      color: '#729974',
      content: WorkSection,
      icon: WorkIcon,
      image: WorkImage,
      title: 'Work',
    },
  ],
  [
    'FTIC',
    {
      color: '#AB58A4',
      content: FTICSection,
      icon: FTICIcon,
      image: FTICImage,
      title: 'Find the Invisible Cow',
    },
  ],
  [
    'CONTACT',
    {
      color: '#002D40',
      content: ContactSection,
      icon: ContactIcon,
      image: ContactImage,
      title: 'Contact',
    },
  ],
]);

export const SectionKeys = Array.from(Sections.keys());

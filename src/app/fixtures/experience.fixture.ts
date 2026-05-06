import { Stat, Feature } from '../interfaces/experience.interface';

export const EXPERIENCE_STATS: Stat[] = [
  {
    id: 1,
    value: '8',
    suffix: '+',
    label: 'Años de experiencia',
    description: 'Respaldando decisiones con datos precisos',
  },
  {
    id: 2,
    value: '98',
    suffix: '%',
    label: 'Satisfacción del cliente',
    description: 'Compromiso con la excelencia',
  },
];

export const EXPERIENCE_FEATURES: Feature[] = [
  {
    icon: '/icons/bar-chart-3.svg',
    title: 'Análisis de Datos',
    description:
      'Convertimos datos complejos en insights accionables que impulsan la toma de decisiones estratégicas.',
  },
  {
    icon: '/icons/users.svg',
    title: 'Encuestas y Estudios',
    description:
      'Diseñamos y ejecutamos estudios de mercado con metodologías precisas y representativas.',
  },
];

'use client';

import { useTranslations } from 'next-intl';

import { useGetFavorites } from '@/hooks/queries/use-get-favorites';

import { CardLayout } from './card-layout';

const favoriteAccounts = [
  {
    id: '1',
    name: 'Alice',
    lastName: 'Johnson',
    avatarURL: '/placeholder.svg?height=100&width=100',
    aboutInfo:
      'Passionate about creating user-friendly interfaces and solving complex problems.',
    languages: ['English', 'Spanish'],
    location: 'San Francisco, USA',
    hasIdea: 'true',
    ideaStage: 'Concept',
    ideaDescription:
      'A platform for connecting local artisans with global markets.',
    availabilityTime: 'Full-time',
    role: 'Software Engineer',
    subRoles: ['Frontend Developer', 'Mobile Developer'],
    services: ['Web Development', 'UI/UX Design', 'Code Review'],
    searchPreferences: [
      {
        role: 'Designer',
        subRoles: ['UI Designer'],
        services: ['Wireframing'],
      },
      {
        role: 'Marketer',
        subRoles: ['Content Marketer'],
        services: ['Social Media Marketing'],
      },
    ],
  },
  {
    id: '22',
    name: 'Aaron',
    lastName: 'Smith',
    avatarURL: '/placeholder.svg?height=100&width=100',
    aboutInfo:
      'Experienced in bringing products from concept to market. Love working with cross-functional teams.',
    languages: ['English', 'French'],
    location: 'London, UK',
    hasIdea: 'false',
    availabilityTime: 'Part-time',
    ideaStage: '',
    role: 'Product Manager',
    subRoles: ['Agile Coach', 'Data Analyst'],
    services: ['Product Strategy', 'Market Research', 'Agile Implementation'],
    searchPreferences: [
      {
        role: 'Developer',
        subRoles: ['Backend Developer'],
        services: ['API Development'],
      },
      {
        role: 'Designer',
        subRoles: ['UX Researcher'],
        services: ['User Testing'],
      },
    ],
  },
  {
    id: '2',
    name: 'Bob',
    lastName: 'Smith',
    avatarURL: '/placeholder.svg?height=100&width=100',
    aboutInfo:
      'Experienced in bringing products from concept to market. Love working with cross-functional teams.',
    languages: ['English', 'French'],
    location: 'London, UK',
    hasIdea: 'false',
    availabilityTime: 'Part-time',
    ideaStage: '',
    role: 'Product Manager',
    subRoles: ['Agile Coach', 'Data Analyst'],
    services: ['Product Strategy', 'Market Research', 'Agile Implementation'],
    searchPreferences: [
      {
        role: 'Developer',
        subRoles: ['Backend Developer'],
        services: ['API Development'],
      },
      {
        role: 'Designer',
        subRoles: ['UX Researcher'],
        services: ['User Testing'],
      },
    ],
  },
  {
    id: '3',
    name: 'Carol',
    lastName: 'Williams',
    avatarURL: '/placeholder.svg?height=100&width=100',
    aboutInfo:
      'Combining aesthetics with functionality to create memorable user experiences.',
    languages: ['English', 'German', 'Italian'],
    location: 'Berlin, Germany',
    hasIdea: 'true',
    ideaStage: 'MVP',
    ideaDescription:
      'An AI-powered personal styling assistant for sustainable fashion choices.',
    availabilityTime: 'Flexible',
    role: 'UX Designer',
    subRoles: ['UI Designer', 'User Researcher'],
    services: ['User Interface Design', 'Prototyping', 'Usability Testing'],
    searchPreferences: [
      {
        role: 'Developer',
        subRoles: ['Frontend Developer'],
        services: ['React Development'],
      },
      {
        role: 'Marketer',
        subRoles: ['Growth Hacker'],
        services: ['A/B Testing'],
      },
    ],
  },
];

const Favorites = () => {
  const t = useTranslations('favorites');
  const { data: favorites } = useGetFavorites();

  console.log('favorites', favorites);

  // const removeFavoriteMutation = useDeleteFavorite();
  // const handleDeleteFavorite = (id: string) => {
  //   removeFavoriteMutation.mutate(id);
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold lg:mb-10">
        {t('pageTitle')}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {favoriteAccounts.map((account) => (
          <CardLayout
            key={account.id}
            account={account}
            onDelete={(id) => {
              console.log('onDelete', id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { Favorites };

// TODO переделать структуру. некоторые вложенные данные не подходят для нестинга или по смыслу

export const MOCK_PROFILE = {
  idea: true,
  name: 'Emily',
  role: 'Product Manager', // tags
  hasIdea: true, // tags
  // ideaArea: ['GreenTech', 'WasteReduction', 'SustainableE-commerce'], // tags
  language: ['English, Spanish'], // multi Select
  location: 'San Francisco, CA, USA', // Select
  aboutMe:
    'I am a product manager with a passion for sustainability and green technology.  am a product manager with a passion for sustainability and green technology.  am a product manager with a passion for sustainability and green technology.  am a product manager with a passion for sustainability and green technology.  am a product manager with a passion for sustainability and green technology.  am a product manager with a passion for sustainability and green technology. am a product manager with a passion for sustainability and green technology.', // textarea
  // interests: {
  //   personalInterests: ['Hiking', 'Reading', 'Traveling'], // multi Select
  //   areasOfInterest: ['Green technology', 'User Experience', 'Social Impact'], // multi Select
  //   areasOfDisinterest: ['Traditional Retail', 'High-frequency Trading'], // multi Select
  // },
  // experience: {
  //   yearsOfExperience: 8, // select
  //   background:
  //     'Over 8 years of experience in leading cross-functional teams in product management and user experience design, specializing in developing intuitive and scalable digital products for tech startups.', // textarea
  //   expertise:
  //     'Expertise in driving sustainable growth in early-stage tech startups, with a strong focus on user-centered design, developing environmentally sustainable solutions, and implementing customer-centric product development strategies.',
  // }, // textarea
  timeCommitment: '10-15 hours per week', // select

  // !! TODO collaborationTerms будет строка или тэги?
  // collaborationTerms: [
  //   'Equity-Based Compensation',
  //   'Percentage of Future Profits',
  // ], // tags
  seeking: {
    who: ['Technical Co-founder', 'Funding Partners'], // tags
    // goal: 'To build and scale a sustainable e-commerce platform', // строка свободной формы
  },
  howICanHelp: [
    'Product Strategy',
    'UX Design',
    'Go-to-Market Planning',
    'Startup Mentorship',
    'Sustainable Business Advice',
  ], // tags
  ideaDescription:
    'A sustainable e-commerce platform that integrates eco-friendly products with a zero-waste model, promoting green technology and supporting small businesses with a focus on reducing environmental impact.', // textarea
};

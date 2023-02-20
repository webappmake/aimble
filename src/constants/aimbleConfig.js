const config = {
  type: 'aimble',
  title: 'Aimble',
  description: (
    <>
      Al-based Drug Screening Platform.
    </>
  ),
  alt: 'Admin Portal',
  userInfo: false,
  contactUs: 'admin-portal@lge.com',
  theme: {
    status: {
      danger: '#D00202',
    },
    palette: {
      primary: {
        main: '#333333',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffe228',
        contrastText: '#333333',
      },
      secondaryDark: {
        main: '#f9b200',
        contrastText: '#ffffff',
      },
      accepted: {
        main: '#4d4ddb',
        contrastText: '#ffffff',
      },
      test: {
        main: '#f16c35',
        contrastText: '#ffffff',
      },
      gray: {
        main: '#f1f2f2',
      },
    },
  },
  links: [
    {
      // href: 'https://intellytics-dashboard.lge.com',
      // title: 'Intellytics Portal',
    },
  ],
  tabs: {
    authorized: [
      {
        title: 'Android App Admin',
        description: 'Android OS 기반 App 관리',
        link: 'https://di1f0w7bc8ekk.cloudfront.net/',
        chips: ['accepted'],
      },

      {
        title: 'TAS Admin',
        description: 'TAS Admin',
        chips: ['accepted'],
      },
    ],
    unauthorized: [
      {
        title: '3rd Party App Admin',
        description: '3rd Party App 관리',
        disabled: true,
      },
      {
        title: 'LUPA Admin',
        description: '',
        disabled: true,
      },
    ],
    declined: [],
    longterm: [
      {
        title: 'Datahub',
        description:
          'Sample Project Dashboard of DXT Center in LG Electronics.',
        chips: ['in progress'],
      },
      {
        title: 'Amazon-Drs',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Ha',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Voice',
        description:
          'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Css',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Dr',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Ud',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Plada-Of-Plada',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Cloud',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Pccs',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Rule',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Home',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      }
    ],
    admin: [
      {
        title: 'Datahub',
        description:
          'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Amazon-Drs',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Ha',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Voice',
        description:
          'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Css',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Dr',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Ud',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Plada-Of-Plada',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Cloud',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Pccs',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Rule',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      },
      {
        title: 'Thinq-Home',
        description: 'Sample Project Dashboard of DXT Center in LG Electronics.',
      }
    ],
  },
};

export default config;

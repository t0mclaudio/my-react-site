const initialState = {
  projects: {
    src: [
      {
        name: 'Project 1',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['HTML/CSS'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
      {
        name: 'Project 2',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['Python', 'Flask', 'Django'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
      {
        name: 'Project 3',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['ReactJS', 'Redux', 'Vue'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
      {
        name: 'Project 4',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['ReactJS', 'Redux'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
      {
        name: 'Project 5',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['ReactJS', 'Redux'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
      {
        name: 'Project 6',
        short: 'This is going to be a short description',
        long: 'This is the longer description',
        technologies: ['HTML/CSS', 'Python', 'ReactJS'],
        repo: 'the repository link',
        demo: 'demo link',
        img: 'image url',
      },
    ],
    filtered: [],
    filters: [],
  },
  technologies: ['ReactJS', 'Redux', 'Django', 'Python', 'Vue', 'Flask', 'HTML/CSS'],
};

initialState.projects.filtered = initialState.projects.src;

export default initialState;

const skills = [
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Git/Mercurial',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Python', 'ML Engineering'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Plotly',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'LabVIEW',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Engineering Equation Solver (EES)',
    competency: 5,
    category: ['Thermodynamics'],
  },
  {
    title: 'SolidWorks',
    competency: 3,
    category: ['Computer Aided Design'],
  },
  {
    title: 'Instrumentation',
    competency: 4,
    category: ['Experimentatino'],
  },
  {
    title: 'Component Selection',
    competency: 3,
    category: ['Experimentation'],
  },
  {
    title: 'Thermal Analysis',
    competency: 4,
    category: ['Thermodynamics'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#6968b3',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };

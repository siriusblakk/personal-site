/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Energy Recovery',
    position: 'Test Engineer',
    url: 'https://energyrecovery.com/',
    startDate: '2022-06-01',
    summary: `Energy Recovery makes pressure exchangers. These devices reduce the entropy generation in an indusutrial 
    thermal-fluid process. For 30 years, this technology has economically enabled desalination. Now, Energy Recovery is entering the 
    CO2 refrigeration industry by enabling environementally sustainable refrigeration. I lead testing on experimental
    water and CO2 test loops were we explore and advance pressure exchanger innovations.`,
    highlights: [
      'Modeled, designed, defended, and built innovative 150kW CO2 experimental refrigeration test loop to recycle process heat.',
      'Create and own P&ID\'s, control systems (LabVIEW), data analysis scripts (MATLAB and Python), and instrumentation on loops.',
      'Component sizing for R&D and Business Installations: Pumps, Heat Exchangers, Valves, Compressors, ect.',
      'Measure and analyze high-speed vibration and sound (25.6kHz) at challenging product installations internationally and state-side. Led missions to identify problem, exact solutions, and communicate impact to executive leadership.',
      'Led volunteer taskforce with $100,000 budget to develop cross functional volunteering opportunities that allign with Energy Recovery\'s mission.',
    ],
  },
  {
    name: 'Solar Energy Laboratory',
    position: 'Research Assistant',
    url: 'https://sel.me.wisc.edu/',
    startDate: '2020-06-01',
    summary: 'Experimental qualification of additively manufactured, topology optimized heat sinks.',
    highlights: [
      'Developed experience in design, manufacuture, instrumentation, and validation of experiment testing forced convection heat sink performance (air and water)',
      'Designed and analyzed printed circuit heat exchanger (PCHE) for molten chloride salt to supercritical CO2 with analytical models, correlations, and ANSYS Mechanical.',
      'Optimized heat sink fin geometry using numerical model for 2D fin with forced convection. Validated numerical results against experimental data and current analytical techniques.',
      'Led innovation and customer discovery phase of research based startup through NSF I-CORPS boot camp. Completed 100+ industry interviews in 7 weeks to develop business plan.',
      'Assisted college\'s machine shop as technician on Mills, Lathes, and Woodshop.',
    ],
  },
  {
    name: 'Stellantis',
    position: 'R&D Intern',
    url: 'https://www.stellantis.com/en',
    startDate: '2018-06-01',
    summary: 'Jeep Wagoneer',
    highlights: [
      'Upgraded predictions of exhaust routing\'s installation positional variance with GD&T tolerancing.',
      'Verified model\'s accuracy on assembly line. Increased predictive accuracy by 50%.',
    ],
  },
];

export default work;

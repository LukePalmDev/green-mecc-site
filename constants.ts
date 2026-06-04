export { VEHICLES } from './content/projects';
export { RESULTS } from './content/results';
export { PARTNERS } from './content/sponsors';
export { TEAM_STRUCTURE, DEPARTMENTS_INFO } from './content/team';

export type DepartmentInfo = (typeof import('./content/team').DEPARTMENTS_INFO)[number];

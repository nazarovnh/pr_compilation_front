export enum ApplicationType {
  LOCAL = 'local',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export const type = import.meta.env.VITE_TYPE as ApplicationType;

const local = 'http://localhost:8080';
const staging = '//pr.compilation.com';
const production = '//pr.compilation.com';

let server = local;
if (ApplicationType.STAGING === type) {
  server = staging;
} else if (ApplicationType.PRODUCTION === type) {
  server = production;
}
export const serverAddress = server;

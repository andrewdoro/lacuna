import * as auth from "./auth";
import * as post from "./post";
import * as project from "./project";
import * as skill from "./skill";
import * as skillRequest from "./skill-request";

export const schema = {
  ...auth,
  ...post,
  ...skill,
  ...skillRequest,
  ...project,
};

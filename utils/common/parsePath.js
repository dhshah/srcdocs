/**
 * Next JS passes the query path as either a single string or a string array split on '/'.
 * This ftn turns this into a consistent string[] to be handled properly.
 */
export function parsePath(path) {
  let pathArr;
  if (Array.isArray(path)) {
    pathArr = path;
  } else {
    pathArr = [path];
  }
  return pathArr;
}

import _ from 'lodash';
import { createSelector } from 'reselect';

export const selectCandidate = (candidates,id) => {
  const candidate = candidates.filter(candidate => candidate.id === parseInt(id))[0]
  return candidate;
};

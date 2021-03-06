export const activeCandidate = candidates => {
  if (candidates.length > 0) {
    return {
      active: [candidates[0]],
      rest: [...candidates.slice(1)]
    };
  }
  return { active: [], rest: [] };
};

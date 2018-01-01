const API_URL = `http://${window.location.host}/public/candidates.json`;

export const getCandidates = () => {
  const endpoint = `${API_URL}`;
  return dispatch => {
    return (
      fetch(endpoint)
        .then(response => response.json())
        .then(res => dispatch(setCandidates(res.candidates)))
        // .then(res => dispatch(setcandidates(res.candidates)))
        .catch(error => console.log(error))
    );
  };
};

export const setCandidates = candidates => {
  return {
    type: "GET_CANDIDATES_SUCCESS",
    candidates
  };
};

export function moveCard(product, decision) {
  return dispatch => {
    dispatch({ type: "MOVE_CARD", product });
    dispatch({ type: decision, product });
  };
}

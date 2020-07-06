/* eslint-disable */
const apiData = (() => {
  const gameId = 'SOvyXC9TPpxsz1qmobKj';
  const request = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  const checkData = () => {
    return new Promise((resolve, reject) => {
      fetch(request)
      .then(response => response.json()
      .then((json) => {
        resolve(json.result);
      }))
    })
  }
  const saveData = (name, score) => {
    const jsonObj = {
      user: name,
      score: score
    };
    return fetch(request, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(jsonObj)
    }).then(result => result.json());
  }
  return { checkData, saveData };
})();

export default apiData;
/* eslint-enable */
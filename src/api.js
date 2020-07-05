const apiData = (() => {
  const gameId = 'SOvyXC9TPpxsz1qmobKj';
  const request = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  const checkData = (name, score) => {
    return new Promise((resolve, reject) => {
      fetch(request).then(response => response.json().then((json) => {
        console.log(json);
        console.log('entra');
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
const apiTestData = (() => {
  const gameId = 'SOvyXC9TPpxsz1qmobKj';
  const request = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  /* eslint-disable */
  const checkData = () => {
    return new Promise((resolve) => {
      fetch(request)
        .then(response => response.json()
          .then((json) => {
            resolve(json.result);
          }));
    });
  };
  /* eslint-enable */
  return { checkData };
})();

export default apiTestData;
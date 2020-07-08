async function saveData(name, score) {
  const gameId = 'SOvyXC9TPpxsz1qmobKj';
  const request = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

  /* eslint-disable */
  const jsonObj = {
    user: name,
    score: score,
  };
  try {
    const response = await fetch(request, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return 'Everything is working';
    }
    throw new Error('Request Failed');
  } catch (error) {
    return 'Error found';
  }
}

export { saveData };
/* eslint-enable */
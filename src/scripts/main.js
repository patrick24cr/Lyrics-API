// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import axios from 'axios';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const getLyrics = (artist, song) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const init = () => {
  document.querySelector('#input').innerHTML = `
    <h1>Lyrics API request</h1>
    <small>Enter an artist and song name</small><br />
    <form>
    <div class="row g-3 user-input">
    <div class="col">
    <input type="text" class="form-control" placeholder="Artist" aria-label="Artist" id='artist'>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Song name" aria-label="Song name" id='song'>
    </div>
    </div>
    <button class="btn btn-danger" type='submit' id="click-me">Request</button><br />
    </form>
    <hr />
  `;

  document
    .querySelector('form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      getLyrics(document.querySelector('#artist').value, document.querySelector('#song').value)
        .then((response) => {
          document.querySelector('#output').innerHTML = response.lyrics;
        });
    });

  // USE WITH FIREBASE AUTH
  // checkLoginStatus();

  // getLyrics('beatles', 'michelle').then((response) => {
  //   document.querySelector('#output').innerHTML = response.lyrics;
  // });
};

init();

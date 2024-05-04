export const environment = {
  production: false,
};

export const SpotifyConfiguration = {
  clientId: '5d6b4529960f46c9b4aba42e4419e7ff',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative',
  ],
};

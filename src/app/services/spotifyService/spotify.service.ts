import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environment/environment.prod';
import Spotify from 'spotify-web-api-js';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs | undefined;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  obterUrlLogin(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndPoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback(): string {
    if (!window.location.hash) {
      return '';
    }

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definirAccessToken(token: string): void {
    console.log(token);

    this.spotifyApi?.setAccessToken(token);
    localStorage.setItem('token', token);
    this.spotifyApi?.skipToNext();
  }
}

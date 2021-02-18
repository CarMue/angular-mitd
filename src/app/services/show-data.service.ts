import { Injectable } from '@angular/core';
import { Show } from '../model/show';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ShowDataService {

  shows: Show[ ] = [ ];
  detailShow: Show;

  constructor(private httpClient: HttpClient) {
    this.shows.push(new Show(1, 'Paw Patrol'));
    this.shows.push(new Show(2, 'Haus des Geldes'));
    this.shows.push(new Show(3, '4 Blocks'));
    this.shows.push(new Show(4, 'Vikings'));
  }

  saveShow(show: Show) {
    this.shows.push(show);
  }

  saveEditShow(show: Show) {
    this.shows.filter;
  }

  deleteShow(show: Show) {
    this.shows = this.shows.filter(s => s !== show);
  }

  async showShowDetails(show: Show) {
    try{
      const data: any = await this.httpClient.get('https://api.tvmaze.com/singlesearch/shows?q='+show.title).toPromise();
      show.summary = data.summary;
      show.image = data.image.medium; //replace('http', 'https') entfernt, da JSON-String nun mit https
      this.detailShow = show;
    } catch (e) {
      alert('Es wurde leider keine passende Show gefunden!');
    }
  }
}
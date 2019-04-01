import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from 'ngx-spinner';

// Author : Sunil Ramnani
// Date 01/04/2019 05:30 PM
@Component({
  selector: 'app-polllist',
  templateUrl: './polllist.component.html',
  styleUrls: ['./polllist.component.scss']
})
export class PolllistComponent implements OnInit {
  pollData: any = [];
  pollDetails: any = {};

  constructor(
    private _http: HttpClient,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.GetPollList();
    setInterval(() => {
      this.GetPollList();
    }, 10000);
  }
  GetPollList() {
    this.spinner.show();
    this._http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe((data) => {
      this.pollData = this.pollData.concat(data["hits"]);
      this.spinner.hide();
    })
  }
  OpenModel(item: any) {
    this.pollDetails = item;
  }
}

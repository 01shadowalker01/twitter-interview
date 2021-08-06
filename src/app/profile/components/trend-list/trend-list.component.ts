import { Component, OnInit } from "@angular/core";

@Component({
  selector: "inv-trend-list",
  templateUrl: "./trend-list.component.html",
  styleUrls: ["./trend-list.component.scss"],
})
export class TrendListComponent implements OnInit {
  trends = [
    { trendName: "ecommerce", tweetCount: "66.7k" },
    { trendName: "apple", tweetCount: "32k" },
    { trendName: "uefa", tweetCount: "32k" },
    { trendName: "music", tweetCount: "44.3k" },
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from "@angular/core";
import { Tweet } from "src/app/models/tweet";

@Component({
  selector: "inv-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.scss"],
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;
  @Input() isNested: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Tweet } from "src/app/models/tweet";
import { TWEETS } from "src/mocks/tweets.mock";

@Component({
  selector: "inv-my-tweets",
  templateUrl: "./my-tweets.component.html",
  styleUrls: ["./my-tweets.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MyTweetsComponent implements OnInit {
  tweets: Tweet[] = TWEETS;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "inv-recommended-people",
  templateUrl: "./recommended-people.component.html",
  styleUrls: ["./recommended-people.component.scss"],
})
export class RecommendedPeopleComponent implements OnInit {
  recommendedList = [
    {
      fullname: "Kate Lingard",
      username: "kate14",
      imageUrl: "assets/avatars/2.jpg",
      isVerified: true,
    },
    { fullname: "Johnny Depp", username: "johnnydepp", imageUrl: "assets/avatars/4.jpg", isVerified: true },
    { fullname: "Margot Robbie", username: "margot_robbie", imageUrl: "assets/avatars/3.jpg", isVerified: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}

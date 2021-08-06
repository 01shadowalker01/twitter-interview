import { Tweet } from "src/app/models/tweet";

export const TWEETS: Tweet[] = [
  {
    username: "john_ram",
    userFullname: "John Ramsey",
    userImageUrl: "assets/avatars/1.jpg",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    likesCount: 34,
    commentsCount: 765,
    retweetsCount: 23,
    timePassed: "35m",
    imageUrlList: [],
    isVerified: true,
    repliedTweet: 
    {
      username: "johnnydepp",
      userFullname: "Johnny Depp",
      userImageUrl: "assets/avatars/4.jpg",
      body:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      likesCount: 34,
      commentsCount: 765,
      retweetsCount: 23,
      timePassed: "Hour",
      imageUrlList: [],
      isVerified: true,
      repliedTweet: null,
    },
  },
  {
    username: "john_ram",
    userFullname: "John Ramsey",
    userImageUrl: "assets/avatars/1.jpg",
    body:
      " minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    likesCount: 12,
    commentsCount: 3,
    retweetsCount: 16,
    timePassed: "2 Hour",
    imageUrlList: [],
    isVerified: true,
    repliedTweet: null,
  },
  {
    username: "john_ram",
    userFullname: "John Ramsey",
    userImageUrl: "assets/avatars/1.jpg",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    likesCount: 78,
    commentsCount: 98,
    retweetsCount: 60,
    timePassed: "1 Day",
    imageUrlList: [],
    isVerified: true,
    repliedTweet: null,
  },
];

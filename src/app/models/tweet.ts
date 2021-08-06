export interface Tweet {
  username: string;
  userFullname: string;
  userImageUrl: string;
  body: string;
  likesCount: number;
  commentsCount: number;
  retweetsCount: number;
  timePassed: string; // should be date or number;
  imageUrlList: string[];
  isVerified: boolean;
  repliedTweet: Tweet;
}

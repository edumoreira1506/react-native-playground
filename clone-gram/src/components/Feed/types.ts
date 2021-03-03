export type UserFeedType = {
  name: string;
  icon: object;
}

type FeedItemType = {
  image: object;
  likes: Array<string>;
  description: string;
  user: UserFeedType;
}

export type FeedPropsTypes = {
  posts: Array<FeedItemType>;
}

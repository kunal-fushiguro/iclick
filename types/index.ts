type RoutesPath = "/LoginScreen" | "/";

interface PostCardsProps {
  userName: string;
  avatarUrl: string;
  likes: number;
  comments: number;
  time: string;
  postUrl: string;
  id: number;
}

interface CommentProps {
  userName: string;
  avatarUrl: string;
  content: string;
  timeOfComment: string;
}

export { RoutesPath, PostCardsProps, CommentProps };


import {Post} from "./Post";
import {User} from "./User";

export interface Comment {
  id?: bigint
  message: string
  messageDate: Date
  post: Post
  user: User
}




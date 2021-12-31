import { PostsContainer } from './posts/PostsContainer';
import { Stories } from './stories/Stories';

export const Feed = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto">
        <Stories />
        <PostsContainer />
      </div>
    </div>
  )
}

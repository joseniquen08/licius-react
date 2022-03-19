import { PostsContainer } from './posts/PostsContainer';
import { Sidebar } from './sidebar/Sidebar';
// import { Stories } from './stories/Stories';

export const Feed = () => {
  return (
    <div className="w-full bg-white flex relative max-w-8xl mx-auto">
      <Sidebar/>
      <div className="max-w-full grow shrink">
        {/* <Stories/> */}
        <PostsContainer/>
      </div>
    </div>
  )
}

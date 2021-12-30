import { Feed } from "../dashboard/feed/Feed";
import { Navbar } from "../dashboard/Navbar";

export const HomeUser = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Feed />
    </div>
  )
}

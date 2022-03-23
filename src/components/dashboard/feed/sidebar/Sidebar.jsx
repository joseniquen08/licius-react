import { RecommendationsContainer } from "./RecommendationsContainer"
import { TrendsContainer } from "./TrendsContainer"

export const Sidebar = () => {
  return (
    <nav className="sticky top-16 bottom-0 left-0 hidden md:block w-64 lg:w-80 border-r flex-none h-full overflow-y-auto" style={{ minHeight: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}>
      <div className="flex flex-col px-4 lg:px-6 py-6 lg:py-8 h-full space-y-8">
        <TrendsContainer/>
        <RecommendationsContainer/>
      </div>
    </nav>
  )
}

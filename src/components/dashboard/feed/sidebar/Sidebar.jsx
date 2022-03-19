import { RecommendationsContainer } from "./RecommendationsContainer"
import { TrendsContainer } from "./TrendsContainer"

export const Sidebar = () => {
  return (
    <nav className="sticky top-16 bottom-0 left-0 w-96 border-r flex-none h-full overflow-y-auto" style={{ minHeight: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}>
      <div className="flex flex-col px-6 py-8 h-full space-y-8">
        <TrendsContainer/>
        <RecommendationsContainer/>
      </div>
    </nav>
  )
}

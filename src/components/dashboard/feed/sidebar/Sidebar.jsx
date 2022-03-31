import style from "styled-components"
import { RecommendationsContainer } from "./RecommendationsContainer"
import { TrendsContainer } from "./TrendsContainer"

export const Sidebar = () => {
  return (
    <SidebarContainer className="sticky top-16 bottom-0 left-0 hidden md:block w-64 lg:w-80 border-r flex-none h-full overflow-y-auto" style={{ minHeight: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}>
      <div className="flex flex-col px-4 lg:px-6 py-6 lg:py-8 h-full space-y-8">
        <TrendsContainer/>
        <RecommendationsContainer/>
      </div>
    </SidebarContainer>
  )
}

const SidebarContainer = style.nav`
  &::-webkit-scrollbar {
    width: 14px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }
  &:hover::-webkit-scrollbar {
    background: #eee;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #1E6C5B;
    border: 3px solid #eee;
  }
`;

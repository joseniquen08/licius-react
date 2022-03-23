import { RecommendationCard } from "./RecommendationCard"

export const RecommendationsContainer = () => {
  return (
    <div className="space-y-3">
      <p className="text-lg lg:text-xl text-stone-800 font-bold">Recomendaciones</p>
      <div className="text-sm lg:text-base space-y-1 border rounded-lg px-2.5 lg:px-4 py-2.5 lg:py-4">
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
      </div>
    </div>
  )
}

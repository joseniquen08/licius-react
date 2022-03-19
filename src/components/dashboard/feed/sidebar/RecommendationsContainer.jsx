import { RecommendationCard } from "./RecommendationCard"

export const RecommendationsContainer = () => {
  return (
    <div className="space-y-3">
      <p className="text-xl text-stone-800 font-bold">Recomendaciones</p>
      <div className="space-y-1 border rounded-lg px-4 py-4">
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
        <RecommendationCard title='Dieta'/>
      </div>
    </div>
  )
}

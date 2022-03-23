import { TrendCard } from "./TrendCard"

export const TrendsContainer = () => {
  return (
    <div className="space-y-3">
      <p className="text-lg lg:text-xl text-stone-800 font-bold">Tendencias</p>
      <div className="text-sm lg:text-base space-y-1 border rounded-lg px-2.5 lg:px-4 py-2.5 lg:py-4">
        <TrendCard title='Dieta'/>
        <TrendCard title='Rockys'/>
        <TrendCard title='Batidos'/>
        <TrendCard title='Ensalada'/>
        <TrendCard title='Comida orgánica'/>
      </div>
    </div>
  )
}

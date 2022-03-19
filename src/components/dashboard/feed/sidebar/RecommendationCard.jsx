import { Link } from "react-router-dom"

export const RecommendationCard = ({ title }) => {
  return (
    <div className="w-full">
      <Link to="/" className="px-4 py-2.5 rounded-lg hover:bg-gray-200/50 w-full block font-medium">
        {title}
      </Link>
    </div>
  )
}

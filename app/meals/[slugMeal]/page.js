export default function MealPage({params}) {
    return (
        <div>
            Meal Page
            <p>{params.slugMeal}</p>
        </div>
    )
}
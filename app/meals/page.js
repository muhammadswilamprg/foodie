import Link from "next/link";

export default function MealsPage() {
    return (
        <div>
            Meals Page
            <p><Link href="/meals/share">Share</Link></p>
            <p><Link href="/community">Community</Link></p>
        </div>
    )
}
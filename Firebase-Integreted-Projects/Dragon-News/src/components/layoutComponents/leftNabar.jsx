import { useEffect, useState } from "react"

const LeftNavBar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="text-md font-semibold">All Caterogies:{categories.length}</h2>
            <div className="mt-5 flex flex-col gap-2">
                {
                    categories.map((category)=>(
                        <button className="btn" key={category.category_id}>{category.category_name}</button>
                    ))
                }
            </div>
        </div>
    )
}
export default LeftNavBar
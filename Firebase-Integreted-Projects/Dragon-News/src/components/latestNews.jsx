import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
    return (
        <div className="flex gap-2 bg-base-200">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee>
            <Link>Latest Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    )
}
export default LatestNews
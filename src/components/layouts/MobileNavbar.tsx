import { Button } from "../ui/button/Button"
import { Link } from "../ui/link/Link"

export function MobileNavbar() {
    return (
        <div className="absolute left-0 top-0 w-screen h-screen bg-black flex flex-col justify-center items-center">
            <Link href="/" variant="headerLink" className="text-6xl my-6 font-extrabold">HOME</Link>
            <Link href="/about-us" variant="headerLink" className="text-6xl my-6 font-extrabold">ABOUT US</Link>
            <Link href="/showcase" variant="headerLink" className="text-6xl my-6 font-extrabold">SHOWCASE</Link>
            <Link href="/pricing" variant="headerLink" className="text-6xl my-6 font-extrabold">PRICING</Link>
            <Button url="/" text="Get Started" className="my-6"/>
        </div>
    )
}
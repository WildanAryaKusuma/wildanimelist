import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return (
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold">Welcome, {user?.name}</h5>
            <Image 
                src={user?.image}
                alt="..."
                width={250}
                height={250}
                className="pt-3"
            />
            <div className="flex gap-4 py-8">
                <Link 
                    href={"/users/dashboard/collection" }
                    className="bg-color-accent text-color-dark font-bold px-4 py-3"
                >
                    My Collection
                </Link>
                <Link 
                    href={"/users/dashboard/comment" }
                    className="bg-color-accent text-color-dark font-bold px-4 py-3"
                >
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page
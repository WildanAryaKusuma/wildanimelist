"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Header = ({title}) => {
  const router = useRouter()
  const HandleBackButton = (event) => {
    event.preventDefault()
    router.back()
  }

    return (
      <div className="flex justify-between items-center mb-4 px-4">
        <button className="text-color-primary" onClick={HandleBackButton}>
            <ArrowSquareLeft size={32} />
        </button>
        <h3 className="text-2xl text-color-primary font-bold">
          {title}
        </h3>
      </div>
    );
}

export default Header
import { Heart } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Puppy } from "../types/types";

export function LikeToggle({ liked, setLiked, id }: {
  id: Puppy['id'],
  liked: Puppy['id'][],
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>
}) { 

  return (
    <div>
      <button className="group" onClick={() =>
        setLiked((prev) => {
          if (prev.includes(id)) { 
            return prev.filter((likedId) => likedId !== id)
          }

          return [...prev,id]
         })
       }>
        <Heart className={
                liked.includes(id)
                  ? "fill-pink-500 stroke-none"
                  : "stroke-slate-200 group-hover:stroke-slate-300"
              } />
        </button>
    </div>
  )
}
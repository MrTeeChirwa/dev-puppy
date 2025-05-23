import { Heart, X } from "lucide-react";
import { Puppy } from "../types/types";
import { Dispatch, SetStateAction } from "react";

export function Shortlist({ puppies, liked, setLiked }: {
  puppies: Puppy[];
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}) {
  return (
    <div>
      <div>
        <h2 className="flex items-center gap-2 font-medium">
          <span>Your shortlist</span>
          <Heart className="inline-block size-6 fill-pink-500 stroke-pink-500"
          />
        </h2>
        <ul className="mt-4 flex flex-wrap gap-4">
          {
            puppies.filter((puppy) => liked.includes(puppy.id)).map((puppy) => (
              <ShortlistCard key={puppy.id} puppy={puppy} setLiked={setLiked} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

function ShortlistCard({
  puppy,
  setLiked,
}: {
  puppy: Puppy;
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
}) {
  return (
    <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
      <img
        height={32}
        width={32}
        alt="Chase"
        className="aspect-square w-8 object-cover"
        src={puppy.imagePath}
      />
      <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
      <button
        className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100"
        onClick={() =>
          setLiked((prev) => {
            if (prev.includes(puppy.id)) {
              return prev.filter((likedId) => likedId !== puppy.id);
            }
            return [...prev, puppy.id];
          })
        }
      >
        <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
      </button>
    </li>
  );
}

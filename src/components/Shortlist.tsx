import { Heart } from "lucide-react";
import { Puppy } from "../types/types";

export function Shortlist({ puppies, liked }: {
  puppies: Puppy[];
  liked: Puppy['id'][];
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
              <ShortlistCard key={puppy.id} puppy={puppy} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

function ShortlistCard({ puppy }: { puppy: Puppy }) {
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
      <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </li>
  )
}

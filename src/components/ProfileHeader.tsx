import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, avatar }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/50 p-1.5 shadow-[0_8px_24px_-8px_rgba(120,72,32,0.35)]">
        <Image
          src={avatar}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          priority
          className="size-28 rounded-full object-cover shadow-inner ring-1 ring-black/5"
        />
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-foreground/70">{bio}</p>
    </header>
  );
}

import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ name, bio, avatar }: Profile) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={avatar}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="size-28 rounded-full border-2 border-foreground/10 object-cover"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
      <p className="mt-1 text-foreground/70">{bio}</p>
    </header>
  );
}

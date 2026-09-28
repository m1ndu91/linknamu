import type { LinkItem } from "@/data/profile";

// 클릭은 /api/click/[id]를 거쳐 집계된 뒤 실제 URL로 이동합니다.
export default function LinkCard({ id, title }: LinkItem) {
  return (
    <a
      href={`/api/click/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border-2 border-foreground/15 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-md active:translate-y-0"
    >
      {title}
    </a>
  );
}

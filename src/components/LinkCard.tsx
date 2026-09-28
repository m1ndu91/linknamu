import type { LinkItem } from "@/data/profile";

// 클릭은 /api/click/[id]를 거쳐 집계된 뒤 실제 URL로 이동합니다.
export default function LinkCard({ id, title }: LinkItem) {
  return (
    <a
      href={`/api/click/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-card-border bg-card px-5 py-4 text-center font-medium text-foreground shadow-[0_4px_16px_-6px_rgba(120,72,32,0.2)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/55 active:translate-y-0"
    >
      {title}
    </a>
  );
}

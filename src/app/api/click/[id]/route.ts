import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getMongoClient } from "@/lib/mongodb";

export async function GET(_req: Request, ctx: RouteContext<"/api/click/[id]">) {
  const { id } = await ctx.params;

  // 등록된 링크만 리다이렉트합니다 (오픈 리다이렉트 방지).
  const link = links.find((l) => l.id === id);
  if (!link) return new NextResponse("Not found", { status: 404 });

  // 집계 실패가 링크 이동을 막지 않도록 best-effort로 처리합니다.
  try {
    const client = await getMongoClient();
    await client
      ?.db(process.env.MONGODB_DB ?? "linknamu")
      .collection<{ _id: string; count: number }>("clicks")
      .updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  } catch (err) {
    console.error("클릭 수 집계 실패:", err);
  }

  return NextResponse.redirect(link.url, 307);
}

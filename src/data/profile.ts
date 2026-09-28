export type Profile = {
  name: string;
  bio: string;
  avatar: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "최민우",
  bio: "세계 최강 바이브코더",
  avatar: "/profile.svg",
};

// id는 클릭 수 집계의 키로 쓰이므로 한 번 정하면 바꾸지 않습니다.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com" },
];

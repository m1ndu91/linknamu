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
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatar: "/profile.jpg",
};

// id는 클릭 수 집계의 키로 쓰이므로 한 번 정하면 바꾸지 않습니다.
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/m1ndu91" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/cmw110901" },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/m1n.du_91",
  },
];

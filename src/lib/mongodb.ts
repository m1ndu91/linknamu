import { MongoClient } from "mongodb";

// 개발 모드의 HMR에서 연결이 계속 늘어나지 않도록 전역에 캐시합니다.
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  globalForMongo.mongoClient ??= new MongoClient(uri, {
    serverSelectionTimeoutMS: 3000,
  }).connect();
  return globalForMongo.mongoClient;
}

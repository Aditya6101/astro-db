import { db, Comment } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    { author: "Sam Smith", body: "Hope you like Astro DB!" },
    { author: "Jane Doe", body: "Enjoy!" },
  ]);
}

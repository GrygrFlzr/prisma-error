import type { Handle } from "@sveltejs/kit";
import db from "$lib/db";

export const handle: Handle = async ({ event, resolve }) => {
  console.log(db);
  return await resolve(event);
};

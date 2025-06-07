'use client'
import { object, string } from "zod";

const publicSchema = object({
  NEXT_PUBLIC_PHONE_NUMBER: string().min(1, {
    message: "PHONE_NUMBER is required",
  }),
});

type PublicEnv = typeof publicSchema._type;
// type PrivateEnv = typeof privateSchema._type;

let publicEnvResult: PublicEnv;
// let privateEnvResult: PrivateEnv;

try {
  publicEnvResult = publicSchema.parse({
    NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER,
  });
} catch (error) {
  console.error(error);
  throw new Error(`Error validating environment variables: ${error}`);
}

// try {
//   privateEnvResult = privateSchema.parse({
//     STRAPI_TOKEN,
//     STRAPI_URL,
//   });
// } catch (error) {
//   console.error(error);
//   throw new Error(`Error validating environment variables: ${error}`);
// }

export const env = {
  PHONE_NUMBER: publicEnvResult.NEXT_PUBLIC_PHONE_NUMBER,
  // STRAPI_TOKEN: privateEnvResult.STRAPI_TOKEN,
  // STRAPI_URL: privateEnvResult.STRAPI_URL,
};

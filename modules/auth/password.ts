import { argon2, randomBytes } from "node:crypto";
import { promisify } from "node:util";

const argon2Async = promisify(argon2);

const hashPassword = async (password: string): Promise<string> => {
  const parameters = {
    message: password,
    nonce: randomBytes(16),
    parallelism: 1,
    tagLength: 32,
    memory: 19456,
    passes: 2,
  };

  const data = {
    algorithm: "argon2id",
    hash: (await argon2Async("argon2id", parameters)).toString("hex"),
    nonce: parameters.nonce.toString("hex"),
    parallelism: parameters.parallelism,
    tagLength: parameters.tagLength,
    memory: parameters.memory,
    passes: parameters.passes,
  };

  return JSON.stringify(data);
};

export { hashPassword };

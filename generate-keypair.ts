// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
// console.log(`✅ Generated keypair!`);

// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
 
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);

import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
if (!process.env.SECRET_KEY) {
  console.error(
    `❌ Failed to load secret key from environment variable SECRET_KEY`,
  );
  process.exit(1);
}
const keypair = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`,
);
import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("Vs2T4AnQj4EnCXSmw5WSA3VUXEipDo1XpaVz8ErA9sp");
const fromAta = new PublicKey("H5BS1EmfANButAGdBp7Y7fErQbybWZikETC56JUxv5E2");

const to = Keypair.generate();
console.log("To: ", to.publicKey.toBase58());

(async () => {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    keypair,
    mint,
    to.publicKey
  );

  const toAta = tokenAccount.address;
  console.log("Associated Token Account: ", toAta.toBase58());

  const amountToAta = tokenAccount.amount;
  console.log("Quantità in ATA: ", amountToAta.toString());

  const amount = 10e5;

  await transfer(connection, keypair, fromAta, toAta, keypair, amount);

  console.log(
    "Trasferiti",
    amount,
    "From",
    fromAta.toBase58(),
    "To",
    toAta.toBase58()
  );
})();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Creazione di un nuovo wallet
var web3_js_1 = require("@solana/web3.js");
var keypair = web3_js_1.Keypair.generate();
console.log("Nuovo Wallet Generato: ".concat(keypair.publicKey.toBase58(), " \n\n Per salvare il tuo wallet, copia e incolla il seguente JSON in un file: [").concat(keypair.secretKey, "]"));

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan regret outside equip include fork tackle general'; 
let testAccounts = [
"0x90051a6e9daf3fea2b5a610f1314480293c51389be51bb13c22746318e460f0f",
"0x0adb0ad707e9047a0d79c3abada0147a27fc9f003c724e53dd3f7560848dad58",
"0x1c07a42d66ec5a4b433fd9437e8aff46d86f4e8dc722058f4974f26a18b389ed",
"0x7a913151a73dcdd24f9e09b81178278bd07a36f5b8058293125ea85a686d2d1c",
"0x65c62ede57824bfb336fd8555d0f9bb66b72e8b5f5b9917e1d1975fda91b11b8",
"0xa23d28c35b4070612a6b6c2d24a86d38ea2883c164fed4b24a5fb4b3506dd9b0",
"0x4fc2a3c1516b8a9b0e6b57cca98c1abf4cfb82be5bdf50b927c109b49ea15729",
"0x464c72ec1dc7e85177ef16b0233383fa85f950b6cedb05d94f6ba074496c98b8",
"0xe0168b5eb60f7505d07972af168a2d9d6766580f426579a00a62c0b5baabec35",
"0x64ec07338694e9947d79cec72937736a04ea462d63c4c7449f50e68251a57018"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



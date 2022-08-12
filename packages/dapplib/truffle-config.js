require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name renew stereo slow good knee slot genuine'; 
let testAccounts = [
"0xe32c5a388d5a13ac67489f2a36820fddac42818b774f2dadb33a8ce7a3cc2105",
"0x94e6117af13004bea5851d71eee863c09af6e1bfeb32c53d11ae80c724d55a03",
"0x0c8ccd672479f3a43be79e58e26a8e988eb0bf0e3406a88481cb33acdf7a2340",
"0xdbd535b4e5b75f73d0e3596768644e6540e8f954078f215818c3f5dc8c3c2375",
"0xe41411dccbc5a8b805bee76a976f67b16bc716c172d5917bda5e55ebaaf92246",
"0x1af501814a624c16352190b3eff6e2703f95cf1bd7a633fae4ef4f738cbc412c",
"0x9a33f8f0cc1a20f956da5ff48e7fa94cda4e65f90f0e817841a5ecf02334e0e6",
"0xf91fe96f25b10139ffd278f44177fc48300ba1b36fe9c3823911301b49803c57",
"0xd790e52ddcf661588d2dfb4adbb888fa9c6d4cdbc666c80f71d68493d5230981",
"0x9a499818c871dac69ffc7f417721ea6e706366672c906f17fe66e7e95973eab9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


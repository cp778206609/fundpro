//部署智能合约到真实的rinkeby网络

const Web3 = require('web3');
const {interface,bytecode} = require("./compile");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "patient eagle digital robust crane mention text shoe admit morning script special"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/2903c155ee254e42bde1ee3f83f77be5");
// Or, alternatively pass in a zero-based address index.
//var provider = new HDWalletProvider(mnemonic, "http://localhost:8545", 5);
const web3 = new Web3(provider);

deploy = async() =>{
    const accounts =await web3.eth.getAccounts();
    // MetaMask账户：0x537F6D037Ca3d9Fb2d291bdA3B2536A4c54067c9
    console.log(accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            /*
            不加前缀'0x'出错：UnhandledPromiseRejectionWarning: Error: The contract code couldn't be stored, please check your gas limit.
             */
            data:'0x'+bytecode,
            arguments: ['Hello!The first smart contract!']
        }).send({
            from:accounts[0],
            gas: 3000000
        });
    console.log('Address: '+result.options.address);

    console.log('----------------');
    console.log(interface);
};

deploy();
//部署智能合约到真实的rinkeby网络

const Web3 = require('web3');
const {interface,bytecode} = require("./compile");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "ketchup divorce chief dutch inside found section myself grace pen cover half"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "\n" + "https://rinkeby.infura.io/v3/0d5f6edc936e41d1ad68666aaee37607");
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
            arguments:['fundpro_v1',1000000000,100000000000,'0x7598615Ae0Bd71E9D3CA951CAF10f0Ba5c1d48E4']
            // arguments: ['Hello!The first smart contract!']
            // _projectName, _supportMoney, _goalMoney, msg.sender
        }).send({
            from:accounts[0],
            gas:"3000000"
        });
    console.log('Address: '+result.options.address);
    console.log(interface);
    console.log('----------------');
    console.log(result);
};
// process.on('unhandledRejection', (reason, p) => {
//     console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//     // application specific logging, throwing an error, or other logic here
// });
deploy();
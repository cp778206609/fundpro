//编译的智能合约的脚本
const path = require('path'); // 获取path模块
const fs = require('fs'); // 获取文件系统模块
const solc = require('solc'); // 获取solc模块

// 获取文件的路径，_dirname表示工程目录
const srcpath = path.resolve(__dirname,'contracts','fund.sol');
// 通过文件系统同步读取文件
const source = fs.readFileSync(srcpath,'utf-8');
// 利用solc编译智能合约
const result = solc.compile(source,1);
//console.log(result);


module.exports = result.contracts[':FundingFactory'];
module.exports = result.contracts[':Funding'];

import Web3 from 'web3';
const web3 =new Web3(window.web3.currentProvider);//将浏览器中的web3版本（如0.2）插入的对象到这里的web3对象中去
export default web3;//将web3对象暴露，供其他文件引用
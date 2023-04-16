import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(ElectionFactory.interface),
  "0x6F60a4559a64ce46Fc5d9BA891834930519AC2eF"
);

export default instance;

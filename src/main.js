import BlockChain from './BlockChain'

const chain = new BlockChain();
chain.addBlock("Hello there");
chain.addBlock("Hello there too");

console.log(chain.blocks);

console.log(chain.checkChain());
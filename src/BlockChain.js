import Block from './Block';


export default class BlockChain{
    constructor(){
        this.blocks = [
            BlockChain.createGenesisBlockInstance()
        ];
    }

    static createGenesisBlockInstance(){
        return new Block(0, 0, "Genesis block", "");
    }


    addBlock(data){
        const prevBlock = this.blocks[this.blocks.length - 1];
        const block = new Block(prevBlock.index + 1, new Date().getTime(), data, prevBlock.hash);
        this.blocks.push(block);
        return block;
    }


    checkChain(){
        if(this.blocks.length === 1)
            return true;
        else{
            for(let i = 1; i < this.blocks.length; i++){
                const previousBlock = this.blocks[i - 1];
                const thisBlock = this.blocks[i];
                if(thisBlock.prevHash !== previousBlock.hash){
                    return false
                }

            }

            return true
        }

    }


}
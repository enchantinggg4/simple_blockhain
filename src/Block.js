import CryptoJS from 'crypto-js';


export default class Block{
    constructor(index, timestamp, data, prevHash){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash()
    }


    calculateHash(){
        return CryptoJS.SHA256(this.index + this.timestamp + this.data + this.prevHash).toString();
    }
}
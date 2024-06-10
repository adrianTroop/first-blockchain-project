//Testing Contracts
//import necessary libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether")
}

describe("Token", ()=>{
    let token
    beforeEach(async () => {
        const Token = await ethers.getContractFactory("Token");
        token = await Token.deploy("Troopy Coin", "TROC", "1000000");
    })
    //Test goes inside here.
    //What to check for
    describe("Deployment", ()=> {
        const name = "Troopy Coin";
        const symbol = "TROC":
        const decimals = "18";
        const totalSupply = tokens("1000000");
        it("has a name", async ()=>{
            expect(await token.name()).to.equal("Troopy Coin");
        })
    
        it("has a symbol", async ()=>{
            expect(await token.symbol()).to.equal(symbol);
        })
    
        it("has correct decimals", async ()=>{
            expect(await token.decimals()).to.equal(decimals);
        })
    
        it("has correct market cap", async ()=>{
            expect(await token.totalSupply()).to.equal(totalSupply);
        })
    })
});

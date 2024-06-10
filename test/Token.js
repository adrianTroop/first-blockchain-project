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
        it("has a name", async ()=>{
            expect(await token.name()).to.equal("Troopy Coin");
        })
    
        it("has a symbol", async ()=>{
            expect(await token.symbol()).to.equal("TROC");
        })
    
        it("has correct decimals", async ()=>{
            expect(await token.decimals()).to.equal("18");
        })
    
        it("has correct market cap", async ()=>{
            const value = tokens("1000000");
            expect(await token.totalSupply()).to.equal(value);
        })
    })
});

// Create an array to store the NFTs
let nfts = [];

// Function to create a new NFT with given details and add it to the array
function mintNFT(name, artist, year) {
  let nft = {
    name: name,
    artist: artist,
    year: year
  };
  nfts.push(nft);
}

// Function to display all the NFTs in the array
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Artist: " + nfts[i].artist);
    console.log("Year: " + nfts[i].year);
    console.log("--------");
  }
}

// Function to return the total number of NFTs
function getTotalSupply() {
  return nfts.length;
}

// Mint some NFTs
mintNFT("Mona Lisa", "Leonardo da Vinci", 1503);
mintNFT("Starry Night", "Vincent van Gogh", 1889);
mintNFT("The Scream", "Edvard Munch", 1893);

// Display all NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total NFTs: " + getTotalSupply());

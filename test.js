
let nfts = [];


function mintNFT(name, artist, year) {
  let nft = {
    name: name,
    artist: artist,
    year: year
  };
  nfts.push(nft);
}

function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Artist: " + nfts[i].artist);
    console.log("Year: " + nfts[i].year);
    console.log("--------");
  }
}

function getTotalSupply() {
  return nfts.length;
}

mintNFT("Mona Lisa", "Leonardo da Vinci", 1503);
mintNFT("Starry Night", "Vincent van Gogh", 1889);
mintNFT("The Scream", "Edvard Munch", 1893);

listNFTs();

console.log("Total NFTs: " + getTotalSupply());

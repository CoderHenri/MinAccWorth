var AnzahlAxie = [];
var LandGridAll = [];
var LandGridOwner = [];
var SortedLandGridOwner = [];
var OwnerEstateArray = [];
var DisplayEstateArray = [];

var GesamtWertAxie = 0;
var GesamtWertItem = 0;

var RiverMulti = 2;
var RoadMulti = 1.25;
var NodeMulti = 1.5;

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function ReadTextFile() {

    LandGridAll = await AsyncTextReader();
    return LandGridAll;
}

function AsyncTextReader() {
    return new Promise(function (resolve, reject) {
        var objXMLhttp = new XMLHttpRequest()
        objXMLhttp.open("GET", './Land_Grid_Data_Multiplier_V1.txt', true);
        objXMLhttp.send();
        objXMLhttp.onreadystatechange = function(){
        if (objXMLhttp.readyState == 4){
          if(objXMLhttp.status == 200) {
            var TestParse = objXMLhttp.responseText;
            TestParse = JSON.parse(TestParse);
            return resolve(TestParse);
          } else {
            console.log("error");
            return resolve("error");
          }
        }
      }
    });
}

async function LoadFloorPrices() {
    var url = "https://axieinfinity.com/graphql-server-v2/graphql";

    await ReadTextFile();

    //Query Axie Floor Data
    //NormalAxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"region":null,"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "NormalAxiePrice", "Axie");
    });

    //OriginAxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["Origin"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "OriginAxiePrice", "Axie");
    });

    //MEO1AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["MEO Corp"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "MEO1AxiePrice", "Axie");
    });

    //MEO2AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["MEO Corp II"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "MEO2AxiePrice", "Axie");
    });

    //Mystic1AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":1,"pureness":null,"title":null, "breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "Mystic1AxiePrice", "Axie");
    });

    //Mystic2AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":2,"pureness":null,"title":null, "breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "Mystic2AxiePrice", "Axie");
    });

    //Mystic3AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":3,"pureness":null,"title":null, "breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "Mystic3AxiePrice", "Axie");
    });

    //Mystic4AxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":4,"pureness":null,"title":null, "breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        if(data.data.axies.results.length == 0){
            data = "NAN";
        }
        QuerySaver(data, "Mystic4AxiePrice", "Axie");
    });

    //Query Land Floor Data
    //LandGenesisPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetLandsGrid","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"landType":["Genesis"]}},
            "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  auction {\n    currentPrice\n  }\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "LandGenesisPrice", "Land");
    });

    //LandMysticPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetLandsGrid","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"landType":["Mystic"]}},
            "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  auction {\n    currentPrice\n  }\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "LandMysticPrice", "Land");
    });

    //LandArcticPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetLandsGrid","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"landType":["Arctic"]}},
            "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  auction {\n    currentPrice\n  }\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "LandArcticPrice", "Land");
    });

    //LandForestPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetLandsGrid","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"landType":["Forest"]}},
            "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  auction {\n    currentPrice\n  }\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        
        
        QuerySaver(data, "LandForestPrice", "Land");
    });

    //LandSavannahPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetLandsGrid","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"landType":["Savannah"]}},
            "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  auction {\n    currentPrice\n  }\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "LandSavannahPrice", "Land");
    });

    //Query Item Floors
    //ItemMysticPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"auctionType":"Sale","criteria":{"landType":[],"rarity":["Mystic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "ItemMysticPrice", "Item");
    });

    //ItemEpicPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"auctionType":"Sale","criteria":{"landType":[],"rarity":["Epic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "ItemEpicPrice", "Item");
    });

    //ItemRarePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"auctionType":"Sale","criteria":{"landType":[],"rarity":["Rare"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "ItemRarePrice", "Item");
    });

    //ItemCommonPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"auctionType":"Sale","criteria":{"landType":[],"rarity":["Common"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "ItemCommonPrice", "Item");
    });
    
}

var TripplePrice = 0;

function QuerySaver(data, Category, QueryCat) {
    var Price = null;

    if(data == "NAN") {
        Price = 0;
    }else if(QueryCat == "Axie") {
        Price = data.data.axies.results[0].auction.currentPrice;
    } else if(QueryCat == "Land") {
        Price = data.data.lands.results[0].auction.currentPrice;
    } else if(QueryCat == "Item") {
        Price = data.data.items.results[0].auction.currentPrice;
    }

    //2 if conditions to stop ridiculous quad evals
    if(Category == "Mystic3AxiePrice") {
        TripplePrice = Price;
    }

    if(Category == "Mystic4AxiePrice" && (Price*3.5) > TripplePrice) {
        Price = TripplePrice*3;
    }

    Price = Price * Math.pow(10, -18);
    Price = Math.round((Price + Number.EPSILON) * 10000) / 10000
    document.getElementById(Category).innerHTML = Price + " ETH";

}

var Sitereloader = 0;

function SelectAddress() {

    //quick and dirty hack, since otherwise loading in a new account adds it to the one calculated beforehand
    if(Sitereloader == 1) {
        window.location.href=window.location.href;
    }

    Sitereloader = 1;

    FirstOnclickCheck = 0; 
  
    var txt;
    var PopUp = prompt("Please enter your ETH Address with your Axies:", "0x...");
    if (PopUp == null || PopUp == "") {
        txt = "User cancelled the prompt!";
    } else if (PopUp.startsWith("0x") && PopUp.length == 42) {
        txt = PopUp;
        document.getElementById("ETHAddress").innerHTML = txt;
        GetAccountData(txt);
    } else {
        txt = "Please enter a real ETH Address";

    }
    document.getElementById("ETHAddress").innerHTML = txt;
}

async function GetAccountData(ETHAddy) {
    
    var RoninAddy = null;
    var url = "https://axieinfinity.com/graphql-server-v2/graphql";

    //Query Ronin address and Profile Name
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetProfileByEthAddress","variables":{"ethereumAddress":ETHAddy},
            "query":"query GetProfileByEthAddress($ethereumAddress: String!) {\n  publicProfileWithEthereumAddress(ethereumAddress: $ethereumAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  ronin\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        try {
            RoninAddy = data.data.publicProfileWithEthereumAddress.addresses.ronin;
        }
        catch {
            RoninAddy = "Fail"
        }
    });

    //NormalAxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "NormalAxieAmount", "Axie");
    });

    //OriginAxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["Origin"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "OriginAxieAmount", "Axie");
    });

    //MEO1AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["MEO Corp"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "MEO1AxieAmount", "Axie");
    });

    //MEO2AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":["MEO Corp II"],"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "MEO2AxieAmount", "Axie");
    });

    //Mystic1AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":1,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "Mystic1AxieAmount", "Axie");
    });

    //Mystic2AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":2,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "Mystic2AxieAmount", "Axie");
    });

    //Mystic3AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":3,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "Mystic3AxieAmount", "Axie");
    });

    //Mystic4AxieAmount
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":0,"sort":"IdDesc","auctionType":"All","owner":ETHAddy,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":4,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n    __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "Mystic4AxieAmount", "Axie");
    });

    //Query all Land of that address
    if(RoninAddy != "Fail") {
        var TotalLand = 1;
        var From = 0;

        for(L = 0; L < TotalLand; L++) {
            await  fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
                    
                body: JSON.stringify({
                    "operationName":"GetLandsGrid","variables":{"from":From,"size":6000,"sort":"Latest","auctionType":"All","owner":RoninAddy,
                    "criteria":{"landType":[]}},"query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  landType\n  row\n  col\n    __typename\n}\n"})
            })
            .then(function(response) { 
                return response.json(); 
            })
                
            .then(function(data) {
                LandGridOwner.push(data);
                From = From + 100;
                if(data.data.lands.total - From > TotalLand) {
                    TotalLand = TotalLand +1;
                } else {
                    RoninQuerySorter(LandGridOwner);
                }
                //QuerySaverOwner(data, "LandGenesisAmount", "Land");
            });
        }
    }

    if(RoninAddy != "Fail") {
        /*
        //Query Land Floor Data
        //LandGenesisAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","auctionType":"All","owner":RoninAddy,"criteria":{"landType":["Genesis"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandGenesisAmount", "Land");
        });

        //LandMysticAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","auctionType":"All","owner":RoninAddy,"criteria":{"landType":["Mystic"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandMysticAmount", "Land");
        });

        //LandArcticAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","auctionType":"All","owner":RoninAddy,"criteria":{"landType":["Arctic"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandArcticAmount", "Land");
        });

        //LandForestAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","auctionType":"All","owner":RoninAddy,"criteria":{"landType":["Forest"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandForestAmount", "Land");
        });

        //LandSavannahAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","auctionType":"All","owner":RoninAddy,"criteria":{"landType":["Savannah"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: SortBy!, $owner: String, $criteria: LandSearchCriteria, $auctionType: AuctionType) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort, owner: $owner, auctionType: $auctionType) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandSavannahAmount", "Land");
        });
*/
        //ItemQuery
        //ItemMysticPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":RoninAddy,"auctionType":"All","criteria":{"landType":[],"rarity":["Mystic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  itemId\n  tokenType\n  tokenId\n  itemId\n  landType\n  name\n  itemAlias\n  rarity\n  figureURL\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {

        QuerySaverOwner(data, "ItemMysticAmount", "Item");
    });

    //ItemEpicPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":RoninAddy,"auctionType":"All","criteria":{"landType":[],"rarity":["Epic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  itemId\n  tokenType\n  tokenId\n  itemId\n  landType\n  name\n  itemAlias\n  rarity\n  figureURL\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "ItemEpicAmount", "Item");
    });

    //ItemRarePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":RoninAddy,"auctionType":"All","criteria":{"landType":[],"rarity":["Rare"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  itemId\n  tokenType\n  tokenId\n  itemId\n  landType\n  name\n  itemAlias\n  rarity\n  figureURL\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "ItemRareAmount", "Item");
    });

    //ItemCommonPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":RoninAddy,"auctionType":"All","criteria":{"landType":[],"rarity":["Common"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $auctionType: AuctionType, $owner: String, $criteria: ItemSearchCriteria) {\n  items(from: $from, size: $size, sort: $sort, auctionType: $auctionType, owner: $owner, criteria: $criteria) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on LandItem {\n  itemId\n  tokenType\n  tokenId\n  itemId\n  landType\n  name\n  itemAlias\n  rarity\n  figureURL\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaverOwner(data, "ItemCommonAmount", "Item");
    });
    }
    CalculateWorth();
}

function QuerySaverOwner(data, Category, QueryCat) {
    var Menge = null;

    if(QueryCat == "Axie") {
        Menge = data.data.axies.total;
        AnzahlAxie.push({Type:Category, Anzahl:Menge});
    } else if(QueryCat == "Land") {
        Menge = data.data.lands.total;
        AnzahlAxie.push({Type:Category, Anzahl:Menge});
    } else if(QueryCat == "Item") {
        Menge = data.data.items.total;
        AnzahlAxie.push({Type:Category, Anzahl:Menge});
    }

    document.getElementById(Category).innerHTML = Menge;
}

function CalculateWorth() {
    var CorrectNormalAxies = AnzahlAxie[0].Anzahl - AnzahlAxie[1].Anzahl - AnzahlAxie[2].Anzahl - AnzahlAxie[3].Anzahl;
    document.getElementById("NormalAxieAmount").innerHTML = CorrectNormalAxies;
    var CorrectOriginAxie = AnzahlAxie[1].Anzahl - AnzahlAxie[4].Anzahl - AnzahlAxie[5].Anzahl - AnzahlAxie[6].Anzahl - AnzahlAxie[7].Anzahl;
    document.getElementById("OriginAxieAmount").innerHTML = CorrectOriginAxie;

    document.getElementById("NormalAxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("NormalAxiePrice").innerHTML) * parseInt(document.getElementById("NormalAxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("OriginAxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("OriginAxiePrice").innerHTML) * parseInt(document.getElementById("OriginAxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("MEO1AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("MEO1AxiePrice").innerHTML) * parseInt(document.getElementById("MEO1AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("MEO2AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("MEO2AxiePrice").innerHTML) * parseInt(document.getElementById("MEO2AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("Mystic1AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("Mystic1AxiePrice").innerHTML) * parseInt(document.getElementById("Mystic1AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("Mystic2AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("Mystic2AxiePrice").innerHTML) * parseInt(document.getElementById("Mystic2AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("Mystic3AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("Mystic3AxiePrice").innerHTML) * parseInt(document.getElementById("Mystic3AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("Mystic4AxieWorth").innerHTML = Math.round(((parseFloat(document.getElementById("Mystic4AxiePrice").innerHTML) * parseInt(document.getElementById("Mystic4AxieAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";

    document.getElementById("LandGenesisWorth").innerHTML = Math.round(((parseFloat(document.getElementById("LandGenesisPrice").innerHTML) * parseInt(document.getElementById("LandGenesisAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("LandMysticWorth").innerHTML = Math.round(((parseFloat(document.getElementById("LandMysticPrice").innerHTML) * parseInt(document.getElementById("LandMysticAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("LandArcticWorth").innerHTML = Math.round(((parseFloat(document.getElementById("LandArcticPrice").innerHTML) * parseInt(document.getElementById("LandArcticAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("LandForestWorth").innerHTML = Math.round(((parseFloat(document.getElementById("LandForestPrice").innerHTML) * parseInt(document.getElementById("LandForestAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("LandSavannahWorth").innerHTML = Math.round(((parseFloat(document.getElementById("LandSavannahPrice").innerHTML) * parseInt(document.getElementById("LandSavannahAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";

    document.getElementById("ItemMysticWorth").innerHTML = Math.round(((parseFloat(document.getElementById("ItemMysticPrice").innerHTML) * parseInt(document.getElementById("ItemMysticAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("ItemEpicWorth").innerHTML = Math.round(((parseFloat(document.getElementById("ItemEpicPrice").innerHTML) * parseInt(document.getElementById("ItemEpicAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("ItemRareWorth").innerHTML = Math.round(((parseFloat(document.getElementById("ItemRarePrice").innerHTML) * parseInt(document.getElementById("ItemRareAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    document.getElementById("ItemCommonWorth").innerHTML = Math.round(((parseFloat(document.getElementById("ItemCommonPrice").innerHTML) * parseInt(document.getElementById("ItemCommonAmount").innerHTML)) + Number.EPSILON) * 10000) / 10000 + " ETH";
    
    DisplayTotal();
}

function DisplayTotal() {

    var AxieWorth = parseFloat(document.getElementById("NormalAxieWorth").innerHTML) + parseFloat(document.getElementById("OriginAxieWorth").innerHTML) + parseFloat(document.getElementById("MEO1AxieWorth").innerHTML) + parseFloat(document.getElementById("MEO2AxieWorth").innerHTML) + parseFloat(document.getElementById("Mystic1AxieWorth").innerHTML) + parseFloat(document.getElementById("Mystic2AxieWorth").innerHTML) + parseFloat(document.getElementById("Mystic3AxieWorth").innerHTML) + parseFloat(document.getElementById("Mystic4AxieWorth").innerHTML);
    AxieWorth = Math.round((AxieWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireAxieWorth").innerHTML = "Calculated Worth of all Axies = " + AxieWorth + " ETH";
    GesamtWertAxie = AxieWorth;

    var LandWorth = parseFloat(document.getElementById("LandGenesisWorth").innerHTML) + parseFloat(document.getElementById("LandMysticWorth").innerHTML) + parseFloat(document.getElementById("LandArcticWorth").innerHTML) + parseFloat(document.getElementById("LandForestWorth").innerHTML) + parseFloat(document.getElementById("LandSavannahWorth").innerHTML);
    LandWorth = Math.round((LandWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireLandWorth").innerHTML = "Calculated Worth of all Landplots = " + LandWorth + " ETH";

    var ItemWorth = parseFloat(document.getElementById("ItemMysticWorth").innerHTML) + parseFloat(document.getElementById("ItemEpicWorth").innerHTML) + parseFloat(document.getElementById("ItemRareWorth").innerHTML) + parseFloat(document.getElementById("ItemCommonWorth").innerHTML);
    ItemWorth = Math.round((ItemWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireItemWorth").innerHTML = "Calculated Worth of all Items = " + ItemWorth + " ETH";
    GesamtWertItem = ItemWorth;

    var EntireWorth = AxieWorth + LandWorth + ItemWorth;
    EntireWorth = Math.round((EntireWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireAccountWorth").style.display = "block";
    document.getElementById("EntireAccountWorth").innerHTML = "This Address is worth " + EntireWorth + " ETH";

    AdvancedEstateCalc();
    
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";
}

function RoninQuerySorter(Array) {
    
    for(i=0; i < Array.length; i++) {
        for(j=0; j < Array[i].data.lands.results.length; j++) {
            SortedLandGridOwner.push({landType:Array[i].data.lands.results[j].landType, row:Array[i].data.lands.results[j].row, col:Array[i].data.lands.results[j].col});
        }
    }

    var AnzahlGen = 0;
    var AnzahlMystic = 0;
    var AnzahlArctic = 0;
    var AnzahlForest = 0;
    var AnzahlSavannah = 0;

    for(k=0; k < SortedLandGridOwner.length; k++) {
        if(SortedLandGridOwner[k].landType == "Genesis") {
            AnzahlGen++;
        } else if(SortedLandGridOwner[k].landType == "Mystic") {
            AnzahlMystic++;
        } else if(SortedLandGridOwner[k].landType == "Arctic") {
            AnzahlArctic++;
        } else if(SortedLandGridOwner[k].landType == "Forest") {
            AnzahlForest++;
        } else if(SortedLandGridOwner[k].landType == "Savannah") {
            AnzahlSavannah++;
        }
    }

    AnzahlAxie.push({Type:"LandGenesisAmount", Anzahl:AnzahlGen});
    AnzahlAxie.push({Type:"LandMysticAmount", Anzahl:AnzahlMystic});
    AnzahlAxie.push({Type:"LandArcticAmount", Anzahl:AnzahlArctic});
    AnzahlAxie.push({Type:"LandForestAmount", Anzahl:AnzahlForest});
    AnzahlAxie.push({Type:"LandSavannahAmount", Anzahl:AnzahlSavannah});

    document.getElementById("LandGenesisAmount").innerHTML = AnzahlGen;
    document.getElementById("LandMysticAmount").innerHTML = AnzahlMystic;
    document.getElementById("LandArcticAmount").innerHTML = AnzahlArctic;
    document.getElementById("LandForestAmount").innerHTML = AnzahlForest;
    document.getElementById("LandSavannahAmount").innerHTML = AnzahlSavannah;

    AddMultipliers(SortedLandGridOwner);
}

function AdvancedEstateCalc() {

    timeout(3000);
    
    var GenesisTempArray = [];
    var MysticTempArray = [];
    var ArcticTempArray = [];
    var ForestTempArray = [];
    var SavannahTempArray = [];

    var EstateArray = [];

    for(i=0; i < SortedLandGridOwner.length; i++) {
        if(SortedLandGridOwner[i].landType == "Genesis") {
            GenesisTempArray.push(SortedLandGridOwner[i]);
        } else if(SortedLandGridOwner[i].landType == "Mystic") {
            MysticTempArray.push(SortedLandGridOwner[i]);
        } else if(SortedLandGridOwner[i].landType == "Arctic") {
            ArcticTempArray.push(SortedLandGridOwner[i]);
        } else if(SortedLandGridOwner[i].landType == "Forest") {
            ForestTempArray.push(SortedLandGridOwner[i]);
        } else if(SortedLandGridOwner[i].landType == "Savannah") {
            SavannahTempArray.push(SortedLandGridOwner[i]);
        }
    }

    if(GenesisTempArray.length > 8) {
        EstateArrayMaker(GenesisTempArray, EstateArray);
    }
    if(MysticTempArray.length > 8) {
        EstateArrayMaker(MysticTempArray, EstateArray);
    }
    if(ArcticTempArray.length > 8) {
        EstateArrayMaker(ArcticTempArray, EstateArray);
    }
    if(ForestTempArray.length > 8) {
        EstateArrayMaker(ForestTempArray, EstateArray);
    }
    if(SavannahTempArray.length > 8) {
        EstateArrayMaker(SavannahTempArray, EstateArray);
    }

    AdvancedEstateRechnung(EstateArray, OwnerEstateArray);
    //jetzt von LandGridAll die Zusatzinformationen (river etc) holen und mit Estatearray in nen neuen Array kombinieren
}

function EstateArrayMaker(Array, EstateArray) {
    var CoordArray = JSON.parse(JSON.stringify(Array));
    var TempArray = [];
    
    for(i=0; i<Array.length; i++) {
        if(Array[i].row == CoordArray[i].row) {
            TempArray.push(Array[i])
            CoordArray[i].row = 999;
        }

        try{for(j=0; j<Array.length; j++) {
            for(k=0; k<Array.length; k++) {
                if(TempArray[j].row -1 == Array[k].row && TempArray[j].col -1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row == Array[k].row && TempArray[j].col -1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row +1 == Array[k].row && TempArray[j].col -1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row -1 == Array[k].row && TempArray[j].col == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row +1 == Array[k].row && TempArray[j].col == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row -1 == Array[k].row && TempArray[j].col +1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row == Array[k].row && TempArray[j].col +1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
                if(TempArray[j].row +1 == Array[k].row && TempArray[j].col +1 == Array[k].col && CoordArray[k].row == Array[k].row) {
                    TempArray.push(Array[k]);
                    CoordArray[k].row = 999;
                }
            }
            if(j==TempArray.length-1) {
                break;
            }
        }} catch{}
        if(TempArray.length > 8) {
            EstateArray.push(JSON.parse(JSON.stringify(TempArray)));
            TempArray = [];
        } else {
            TempArray = [];
        }
    }
    return EstateArray;
}

function AddMultipliers(Array) {

    //Landgridall with multipliers to Array (>SortedLandGridOwner) that has the plots from the account but not the multiplier and put it into the OwnerestateArray
    for(i=0; i<Array.length; i++) {
        for(j=0; j<LandGridAll.length; j++) {
            if(Array[i].row == LandGridAll[j].row && Array[i].col == LandGridAll[j].col) {
                OwnerEstateArray.push(LandGridAll[j]);
                break;
            }
        }
    }
}

function AdvancedEstateRechnung(EArray, OArray) {

    var EstateWithMulti = [];
    var TempArr = [];

    for(i=0; i<EArray.length; i++) {
        for(j=0; j<EArray[i].length; j++) {
            for(k=0; k<LandGridAll.length; k++) {
                if(EArray[i][j].row == LandGridAll[k].row && EArray[i][j].col == LandGridAll[k].col) {
                    TempArr.push(LandGridAll[k]);
                    break;
                }
            }
        }
        EstateWithMulti.push(JSON.parse(JSON.stringify(TempArr)));
        TempArr = [];
    }

    var NonEstatePlots = JSON.parse(JSON.stringify(OArray));

    for(a=0; a < OArray.length; a++) {
        for(s=0; s < EArray.length; s++) {
            for(d=0; d < EArray[s].length; d++) {
                if(EArray[s][d].row == OArray[a].row && EArray[s][d].col == OArray[a].col) {
                    delete NonEstatePlots[a];
                    break;
                }
            }
        }
    }
    NonEstatePlots = NonEstatePlots.filter(function (el) {
        return el != null;
    });

    for(u=0; u < EstateWithMulti.length; u++) {
        CalcWriter(EstateWithMulti[u]);
    }
    UIAnwender(DisplayEstateArray, NonEstatePlots);
}

function CalcWriter(Array) {

    var EstatePrice = 0;

    if(Array.length > 99) {     //XXL Estate
        if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "XXL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"XXL"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "XXL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"XXL"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "XXL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"XXL"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "XXL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"XXL"});
        }
    } else if(Array.length > 49) { //XL Estate
        if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "XL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"XL"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "XL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"XL"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "XL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"XL"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "XL");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"XL"});
        }
    } else if(Array.length > 35) { //L Estate
        if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "L");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"L"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "L");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"L"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "L");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"L"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "L");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"L"});
        }
    } else if(Array.length > 24) { //M Estate
        if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "M");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"M"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "M");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"M"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "M");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"M"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "M");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"M"});
        }
    } else if(Array.length > 15) { //MS Estate
        if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "MS");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"MS"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "MS");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"MS"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "MS");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"MS"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "MS");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"MS"});
        }
    } else if(Array.length > 8) { //S Estate
        if(Array[0].LandType == "Genesis") {
            EstatePrice = CocoMultiAnwender(Array, "Genesis", "S");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Genesis", EstateType:"S"});
        } else if(Array[0].LandType =="Mystic") {
            EstatePrice = CocoMultiAnwender(Array, "Mystic", "S");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Mystic", EstateType:"S"});
        } else if(Array[0].LandType =="Arctic") {
            EstatePrice = CocoMultiAnwender(Array, "Arctic", "S");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Arctic", EstateType:"S"});
        } else if(Array[0].LandType =="Forest") {
            EstatePrice = CocoMultiAnwender(Array, "Forest", "S");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Forest", EstateType:"S"});
        } else if(Array[0].LandType =="Savannah") {
            EstatePrice = CocoMultiAnwender(Array, "Savannah", "S");
            DisplayEstateArray.push({Price:EstatePrice, AmountOfPlots:Array.length, landType:"Savannah", EstateType:"S"});
        }
    }
}

function CocoMultiAnwender(Array, LandTyp, LandSize) {
    var FloorName = "Land"+LandTyp+"Price";
    var GrundPreis = document.getElementById(FloorName).innerHTML;
    GrundPreis = GrundPreis.replace(/[^\d.-]/g, '');
    var FaktPreis = 0;

    var RiverPlots = 0;
    var NodePlots = 0;
    var RoadPlots = 0;
    var Inside = 1;

    var ESize = 1

    if(LandSize == "XXL") {
        ESize = 3;
    } else if(LandSize == "XL") {
        ESize = 2.5;
    } else if(LandSize == "L") {
        ESize = 1.8;
    } else if(LandSize == "M") {
        ESize = 1.6;
    } else if(LandSize == "MS") {
        ESize = 1.4;
    } else if(LandSize == "S") {
        ESize = 1.2;
    }

    for(i=0; i<Array.length; i++) {
        if(Array[i].NextToNode == "Yes" && Array[i].LandType != "Genesis") {
            NodePlots++;
        }
        if(Array[i].NextToRiver == "Yes" && Array[i].LandType != "Genesis") {
            RiverPlots++;
        }
        if(Array[i].NextToRoad == "Yes") {
            RoadPlots++;
        }
    }
    if(Array[0].InsideRiver == "Yes" && Array[0].LandType != "Genesis" && Array[0].LandType != "Mystic") {
        Inside = 1.5;
    }

    FaktPreis = (GrundPreis * (Array.length - RiverPlots - NodePlots - RoadPlots + RiverPlots * RiverMulti + NodePlots * NodeMulti + RoadPlots * RoadMulti)) * Inside * ESize;
    FaktPreis = Math.round((FaktPreis + Number.EPSILON) * 10000) / 10000;

    return FaktPreis;
}

function UIAnwender(Array, NonEstateArray) {

    var FinEstatArray = [];
    var TempFinArr = (JSON.parse(JSON.stringify(Array)));

    TempFinArr.sort(getSortMethod('+landType', '+EstateType', '+AmountOfPlots'));

    var cnt = 0;
    for(i=0; i<TempFinArr.length; i++) {
        cnt = 0;
        for(j=0; j<FinEstatArray.length; j++) {
            if(FinEstatArray[j].landType == TempFinArr[i].landType && FinEstatArray[j].EstateType == TempFinArr[i].EstateType) {
                FinEstatArray[j].AmountOfPlots = FinEstatArray[j].AmountOfPlots + TempFinArr[i].AmountOfPlots;
                FinEstatArray[j].Price = FinEstatArray[j].Price + TempFinArr[i].Price;
                FinEstatArray[j].Price = Math.round((FinEstatArray[j].Price + Number.EPSILON) * 10000) / 10000;
                cnt = 1;
            }
        }
        if(cnt == 0) {
            FinEstatArray.push((JSON.parse(JSON.stringify(TempFinArr[i]))));
        }
    }

    TediouslyWritenUIWriter(FinEstatArray, NonEstateArray);
}

// adaptable sortfunction from STackoverflow: https://stackoverflow.com/questions/6129952/javascript-sort-array-by-two-fields
function getSortMethod(){
    var _args = Array.prototype.slice.call(arguments);
    return function(a, b){
        for(var x in _args){
            var ax = a[_args[x].substring(1)];
            var bx = b[_args[x].substring(1)];
            var cx;

            ax = typeof ax == "string" ? ax.toLowerCase() : ax / 1;
            bx = typeof bx == "string" ? bx.toLowerCase() : bx / 1;

            if(_args[x].substring(0,1) == "-"){cx = ax; ax = bx; bx = cx;}
            if(ax != bx){return ax < bx ? -1 : 1;}
        }
    }
}
//alert(JSON.stringify(DisplayEstateArray));

var EntireAdvancedLandWorth = 0;

function TediouslyWritenUIWriter(FinEstatArray, NonEstateArray) {

    for(i=0; i<FinEstatArray.length; i++) {
        //Make fields visible
        var CssStyle = "." + FinEstatArray[i].landType + "Vis" + FinEstatArray[i].EstateType;
        var StackOF = document.querySelectorAll(CssStyle);
        for(var j = 0; j < StackOF.length; j++) {
            StackOF[j].style.display="block";
        }

        //Add the numbers
        var HTMLPlots = FinEstatArray[i].landType + FinEstatArray[i].EstateType + "Amount";
        document.getElementById(HTMLPlots).innerHTML = FinEstatArray[i].AmountOfPlots;

        var HTMLPrices = FinEstatArray[i].landType + FinEstatArray[i].EstateType + "Worth";
        document.getElementById(HTMLPrices).innerHTML = FinEstatArray[i].Price;

        EntireAdvancedLandWorth = EntireAdvancedLandWorth + FinEstatArray[i].Price;
    }

    var FinSinglePLotArray = [];
    var GenTemp = 0;
    var ArcTemp = 0;
    var MysTemp = 0;
    var ForTemp = 0;
    var SavTemp = 0;
    var GenPreisTemp = 0;
    var ArcPreisTemp = 0;
    var MysPreisTemp = 0;
    var ForPreisTemp = 0;
    var SavPreisTemp = 0;
    var TempGrundPreis = 0;
    var TempFloorName = null;
    var TempFaktPreis = 0;
    var NodeYN = 0;
    var RiverYN = 0;
    var RoadYN = 0;
    var InsideYN = 0;

    for(m=0; m<NonEstateArray.length; m++) {
        TempFloorName = "Land"+NonEstateArray[m].LandType+"Price";
        TempGrundPreis = document.getElementById(TempFloorName).innerHTML;
        TempGrundPreis = TempGrundPreis.replace(/[^\d.-]/g, '');

        if(NonEstateArray[m].InsideRiver == "Yes" && NonEstateArray[m].LandType != "Genesis" && NonEstateArray[m].LandType != "Mystic") {
            InsideYN = 1.5;
        } else {
            InsideYN = 1;
        }
        if(NonEstateArray[m].NextToNode == "Yes") {
            NodeYN = NodeMulti;
        } else {
            NodeYN = 1;
        }
        if(NonEstateArray[m].NextToRiver == "Yes" && NonEstateArray[m].LandType != "Genesis") {
            RiverYN = RiverMulti;
        } else {
            RiverYN = 1;
        }
        if(NonEstateArray[m].NextToRoad == "Yes") {
            RoadYN = RoadMulti;
        } else {
            RoadYN = 1;
        }

        TempFaktPreis = (TempGrundPreis * (1  * NodeYN * RiverYN * RoadYN)) * InsideYN;
        TempFaktPreis = Math.round((TempFaktPreis + Number.EPSILON) * 10000) / 10000;

        if(NonEstateArray[m].LandType == "Genesis") {
            GenPreisTemp = GenPreisTemp + TempFaktPreis;
            GenTemp++;
        }
        if(NonEstateArray[m].LandType == "Mystic") {
            MysPreisTemp = MysPreisTemp + TempFaktPreis;
            MysTemp++;
        }
        if(NonEstateArray[m].LandType == "Arctic") {
            ArcPreisTemp = ArcPreisTemp + TempFaktPreis;
            ArcTemp++;
        }
        if(NonEstateArray[m].LandType == "Forest") {
            ForPreisTemp = ForPreisTemp + TempFaktPreis;
            ForTemp++;
        }
        if(NonEstateArray[m].LandType == "Savannah") {
            SavPreisTemp = SavPreisTemp + TempFaktPreis;
            SavTemp++;
        }
    }

    if(GenTemp != 0) {
        GenPreisTemp = Math.round((GenPreisTemp + Number.EPSILON) * 10000) / 10000;
        FinSinglePLotArray.push({landType:"Genesis", AmountOfPlots:GenTemp, Price:GenPreisTemp});
    }
    if(MysTemp != 0) {
        MysPreisTemp = Math.round((MysPreisTemp + Number.EPSILON) * 10000) / 10000;
        FinSinglePLotArray.push({landType:"Mystic", AmountOfPlots:MysTemp, Price:MysPreisTemp});
    }
    if(ArcTemp != 0) {
        ArcPreisTemp = Math.round((ArcPreisTemp + Number.EPSILON) * 10000) / 10000;
        FinSinglePLotArray.push({landType:"Arctic", AmountOfPlots:ArcTemp, Price:ArcPreisTemp});
    }
    if(ForTemp != 0) {
        ForPreisTemp = Math.round((ForPreisTemp + Number.EPSILON) * 10000) / 10000;
        FinSinglePLotArray.push({landType:"Forest", AmountOfPlots:ForTemp, Price:ForPreisTemp});
    }
    if(SavTemp != 0) {
        SavPreisTemp = Math.round((SavPreisTemp + Number.EPSILON) * 10000) / 10000;
        FinSinglePLotArray.push({landType:"Savannah", AmountOfPlots:SavTemp, Price:SavPreisTemp});
    }

    for(k=0; k<FinSinglePLotArray.length; k++) {
        //Make fields visible
        var CssStyleSingle = ".Lone" + FinSinglePLotArray[k].landType + "Vis";
        var StackOFSingle = document.querySelectorAll(CssStyleSingle);
        for(var l = 0; l < StackOFSingle.length; l++) {
            StackOFSingle[l].style.display="block";
        }

        //Add the numbers
        var HTMLPlotsSingle = "Land" + FinSinglePLotArray[k].landType + "AdvancedAmount";
        document.getElementById(HTMLPlotsSingle).innerHTML = FinSinglePLotArray[k].AmountOfPlots;

        var HTMLPricesSingle = "Land" + FinSinglePLotArray[k].landType + "AdvancedWorth";
        document.getElementById(HTMLPricesSingle).innerHTML = FinSinglePLotArray[k].Price;

        EntireAdvancedLandWorth = EntireAdvancedLandWorth + FinSinglePLotArray[k].Price;
    }

    //calculate the entire land worth from the advanced function and that plus Axies and Items
    EntireAdvancedLandWorth = Math.round((EntireAdvancedLandWorth + Number.EPSILON) * 10000) / 10000;
    document.getElementById("EntireLandAdvancedWorth").innerHTML = "Calculated Worth of all Landplots and Estates = " + EntireAdvancedLandWorth + " ETH";

    var EntireWorthAdvanced = GesamtWertAxie + EntireAdvancedLandWorth + GesamtWertItem;
    EntireWorthAdvanced = Math.round((EntireWorthAdvanced + Number.EPSILON) * 10000) / 10000;
    document.getElementById("EntireAccountWorthAdvanced").innerHTML = "This Address is worth " + EntireWorthAdvanced + " ETH";

    document.getElementById("DatacontainerEstate").style.display = "grid";
}

function FormulaAlert() {
    alert("Estate Price Formula: \n Price = (Floor Price of the Land Type * (Base Plots + Plots near Water * " + RiverMulti + "\n + Plots near Roads * " + RoadMulti + " + Plots near Nodes * " + NodeMulti + ")) * " + 1.5 + " (Inside River) * Size of Estate \n \n XXL = 100+Plots = *3 \n XL = 50+Plots = *2.5 \n L = 36+Plots = *1.8 \n M = 25+Plots = *1.6 \n MS = 16+Plots = *1.4 \n S = 9+Plots = *1.2");
}

function SingleAlert() {
    alert("These are all the plots with less than 9 connected plots");
}
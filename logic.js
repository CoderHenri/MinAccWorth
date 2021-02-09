var AnzahlAxie = [];

async function LoadFloorPrices() {
    var url = "https://axieinfinity.com/graphql-server/graphql";


    //Query Axie Floor Data
    //NormalAxiePrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetAxieBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","auctionType":"Sale","owner":null,"criteria":{"parts":null,"bodyShapes":null,"classes":null,"stages":null,"numMystic":null,"pureness":null,"title":null,"breedable":null,"breedCount":null,"hp":[],"skill":[],"speed":[],"morale":[]}},
            "query":"query GetAxieBriefList($auctionType: AuctionType,  $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  auction {\n    currentPrice\n    __typename\n  }\n  __typename\n}\n"})
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
        
        console.log(data);
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

    var urlRonin = "https://axieinfinity.com/graphql-server-v2/graphql";

    //Query Land Floor Data
    //LandGenesisPrice
    await  fetch(urlRonin, {
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
        console.log(data);
        QuerySaver(data, "LandGenesisPrice", "Land");
    });

    //LandMysticPrice
    await  fetch(urlRonin, {
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
    await  fetch(urlRonin, {
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
    await  fetch(urlRonin, {
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
    await  fetch(urlRonin, {
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"criteria":{"onSale":true,"type":[],"rarity":["Mystic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"criteria":{"onSale":true,"type":[],"rarity":["Epic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"criteria":{"onSale":true,"type":[],"rarity":["Rare"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":1,"sort":"PriceAsc","owner":null,"criteria":{"onSale":true,"type":[],"rarity":["Common"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  currentPrice\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        QuerySaver(data, "ItemCommonPrice", "Item");
    });
    
}

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

    Price = Price * Math.pow(10, -18);
    Price = Math.round((Price + Number.EPSILON) * 10000) / 10000
    document.getElementById(Category).innerHTML = Price + " ETH";
}

function SelectAddress() {
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
    
    var LoomAddy = null;
    var url = "https://axieinfinity.com/graphql-server/graphql";

    //Query Loom address and Profile Name
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetProfileByEthAddress","variables":{"ethereumAddress":ETHAddy},
            "query":"query GetProfileByEthAddress($ethereumAddress: String!) {\n  publicProfileWithEthereumAddress(ethereumAddress: $ethereumAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  loom\n  __typename\n}\n"})
    })
    .then(function(response) { 
        return response.json(); 
    })
        
    .then(function(data) {
        try {
            LoomAddy = data.data.publicProfileWithEthereumAddress.addresses.loom;
        }
        catch {
            LoomAddy = "Fail"
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

    if(LoomAddy != "Fail") {
        //Query Land Floor Data
        //LandGenesisAmount
        await  fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
                
            body: JSON.stringify({
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","criteria":{"owner":LoomAddy,"type":["Genesis"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  __typename\n}\n"})
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
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","criteria":{"owner":LoomAddy,"type":["Mystic"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  __typename\n}\n"})
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
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","criteria":{"owner":LoomAddy,"type":["Arctic"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  __typename\n}\n"})
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
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","criteria":{"owner":LoomAddy,"type":["Forest"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  __typename\n}\n"})
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
                "operationName":"GetLandsGrid","variables":{"from":0,"size":0,"sort":"PriceAsc","criteria":{"owner":LoomAddy,"type":["Savannah"]}},
                "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  __typename\n}\n"})
        })
        .then(function(response) { 
            return response.json(); 
        })
            
        .then(function(data) {
            QuerySaverOwner(data, "LandSavannahAmount", "Land");
        });

        //ItemQuery
        //ItemMysticPrice
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":LoomAddy,"criteria":{"onSale":false,"type":[],"rarity":["Mystic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":LoomAddy,"criteria":{"onSale":false,"type":[],"rarity":["Epic"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":LoomAddy,"criteria":{"onSale":false,"type":[],"rarity":["Rare"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  __typename\n}\n"})
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
            "operationName":"GetItemBriefList","variables":{"from":0,"size":0,"sort":"PriceAsc","owner":LoomAddy,"criteria":{"onSale":false,"type":[],"rarity":["Common"],"itemAlias":[]}},
            "query":"query GetItemBriefList($from: Int, $size: Int, $sort: SortBy, $criteria: ItemsCriteria, $owner: String) {\n  items(from: $from, size: $size, sort: $sort, criteria: $criteria, owner: $owner) {\n    total\n    results {\n      ...ItemBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ItemBrief on Item {\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  __typename\n}\n"})
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

    var LandWorth = parseFloat(document.getElementById("LandGenesisWorth").innerHTML) + parseFloat(document.getElementById("LandMysticWorth").innerHTML) + parseFloat(document.getElementById("LandArcticWorth").innerHTML) + parseFloat(document.getElementById("LandForestWorth").innerHTML) + parseFloat(document.getElementById("LandSavannahWorth").innerHTML);
    LandWorth = Math.round((LandWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireLandWorth").innerHTML = "Calculated Worth of all Landplots = " + LandWorth + " ETH";

    var ItemWorth = parseFloat(document.getElementById("ItemMysticWorth").innerHTML) + parseFloat(document.getElementById("ItemEpicWorth").innerHTML) + parseFloat(document.getElementById("ItemRareWorth").innerHTML) + parseFloat(document.getElementById("ItemCommonWorth").innerHTML);
    ItemWorth = Math.round((ItemWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireItemWorth").innerHTML = "Calculated Worth of all Items = " + ItemWorth + " ETH";

    var EntireWorth = AxieWorth + LandWorth + ItemWorth;
    EntireWorth = Math.round((EntireWorth + Number.EPSILON) * 10000) / 10000
    document.getElementById("EntireAccountWorth").style.display = "block";
    document.getElementById("EntireAccountWorth").innerHTML = "This Address is worth " + EntireWorth + " ETH";
    
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";
}
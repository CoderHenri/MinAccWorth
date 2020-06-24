
async function GetLandData() {
    var url = "https://axieinfinity.com/graphql-server/graphql";

    var LandDataArray = [];

        //Genesis
    await  fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
            
        body: JSON.stringify({
          "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
          "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
        })
        .then(function(response) { 
          return response.json(); 
        })
        
        .then(function(data) {
          LandDataArray.push(data);
      });
}
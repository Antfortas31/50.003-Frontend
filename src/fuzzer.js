var algo = require('./algo.js') //import algo.js for testing

export function fuzzerBooth(topbot=100,length=250,prob='0.5'){
    var maxLength = length;
    var curlength = 0;
    var fuzzBoothlist = [];
    var fuzzBoothlistCopy =[];
    var fourplus = 0;
    var top = Math.random()*10*2+topbot;
    
    for(var i=0;i<top;i++){
        var ranProb =Math.random();
        if(ranProb<prob){
            var randLength =2;
            var randWidth = 2;
        }else{
            var randLength = (Math.ceil(Math.random()*6))/2+2;
            var randWidth = (Math.ceil(Math.random()*4))/2+2;
            //var randTypeInt = Math.ceil(Math.random()*2
        }
        var Booth = new algo.Booth(i,i,i,randLength,randWidth);
            //console.log(randLength);
            fuzzBoothlist.push(Booth);
            fuzzBoothlistCopy.push(Booth);
            curlength+=Booth.length;
            if (randLength>4){
                fourplus++;
            }
            if (curlength>maxLength){
                break;
            }
        
    }
    //console.log("Number of Fuzzer Booths: " + fuzzBoothlist.length);
    //console.log("Width>4 " + fourplus);
    return [fuzzBoothlist,fuzzBoothlistCopy,length,fuzzBoothlist.length];
}

export function fuzzerBlock(){
    var fuzzBlocklist = [];
    var top = Math.random()*20;
    for(var i=0;i<top;i++){
        var randLength = (Math.ceil(Math.random()*20))/2+5;
        var randWidth = (Math.ceil(Math.random()*8))/2+1;
        //var randTypeInt = Math.ceil(Math.random()*2)
        var block1 = new algo.Block(i,randLength,randWidth);
        //console.log(randLength);
        fuzzBlocklist.push(block1);
        
    }
    return [fuzzBlocklist,fuzzBlocklist.length]
}

module.exports = {
    fuzzerBlock,
    fuzzerBooth
}
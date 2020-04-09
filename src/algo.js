//copy of algorithm.js for testing.

class Block {
    constructor(priority="", length="", width="", boothList=[]){
        this.priority = priority;
        this.length = length;
        this.width = width;
        this.boothList = boothList;  
        this.unusedSpace = length;
    }
}

class Booth{
    constructor(boothID='', projectName='', boothType='', length = 1, width=1){
        this.boothID = boothID;
        this.projectName = projectName;
        this.boothType = boothType;
        this.length = length;
        this.width = width;
    }
}

var boothTypes = {
    aerospace: 'aerospace',
    transport: 'transport',
    computer: 'computer',
    education: 'education'
}


function runAlgo(blockList, boothList, boothListCopy){
    
    var returnValue;
    if(blockList.length==0|boothList.length==0|boothListCopy==0){
        return "empty arrays";
    }
    for( var i =0; i<blockList.length;i++){
        returnValue=runBlock(blockList[i],boothList,boothListCopy,blockList);  
        if (returnValue=='all booths allocated successfully'|'not enough space to allocated all booths'){
            return returnValue;
        }
    }
    //console.log('check all occupied before');
    returnValue=checkAllOcuppied(boothList,boothListCopy,blockList);
    return returnValue;
    //console.log('check all occupied after');
}

function checkBlockOccupied(block,boothlist,boothlistcopy){
    
    if(boothlist.length==0){
        //console.log('all booths allocated successfully');
        return 'all booths allocated successfully';
    }
    if(block.boothList.length==0){
        return 'there is no fit for this block';
    }
    var flag = false;
    
    for(var j=0;j<boothlist.length;j++){
        var booth = boothlist[j];
        if(block.unusedSpace>=booth.length&& booth.width<=block.width&&block.boothList[block.boothList.length-1].boothType!= booth.boothType){
            flag = true; 
            break;
        }
    }

    if(flag){
        runBlock2(block,boothlist,boothlistcopy);
    }
    return 'block check finished';
}

function checkAllOcuppied(boothlist,boothlistcopy,blocklist){
    

    if(boothlist.length==0){
        //console.log('all booths allocated successfully');
        return 'all booths allocated successfully';
        
    }
    var flag = false;
    var blocknum;
    for(var i=0;i<blocklist.length;i++){
        var block = blocklist[i];
        for(var j=0;j<boothlist.length;j++){
            var booth = boothlist[j];
            if(blocklist[i].boothList.length!=0){
                if(block.unusedSpace>=booth.length&& booth.width<=block.width&&block.boothList[block.boothList.length-1].boothType!= booth.boothType){
                    flag = true;
                    blocknum = i;
                    break;
                }
            }
        }
        if(flag){
            break;
        }
    }

    if(flag){
        runBlock2(blocklist[blocknum],boothlist,boothlistcopy);
    }else{
        //console.log('not enough space to allocated all booths');
        return 'not enough space to allocated all booths';
    }
    if(boothlist.length==0){
        //console.log('all booths allocated successfully');
        return 'all booths allocated successfully';
        
    }

    return "algo finished";
}


function runBlock(block,boothList,boothListcopy){
    if(typeof(block)!='object'||typeof(boothList)!='object'||typeof(boothListcopy)!='object'){
        return 'wrong input type';
    }
    if(boothList.length==0|boothListcopy==0){
        //console.log('all booths allocated successfully');
        return "all booths allocated successfully";
    }
    for( var i=0;i<boothListcopy.length;i++){
        var booth = boothListcopy[i];
        //console.log('boothID: '+booth.boothID);
        //console.log('unused space is '+unusedSpace+'  booth length is '+ booth.length );
        //var tempboothlist = [];

        if (block.unusedSpace >= booth.length) {
            //console.log('booth width '+ booth.width+" block width "+ block.width);
            if (booth.width<=block.width) {
                //console.log('hello');
                if(block.boothList.length==0) {
                    block.boothList.push(booth);

                    const index = boothList.indexOf(booth);
                    if (index > -1) {
                        boothList.splice(index, 1);
                    }
                    block.unusedSpace -= booth.length;
                    //console.log(block.boothList[0].boothID+"hello world");
                }else{

                    if(block.boothList[block.boothList.length-1].boothType!= booth.boothType){
                        block.boothList.push(booth);

                        const index = boothList.indexOf(booth);
                        if (index > -1) {
                            boothList.splice(index, 1);
                        }
                        block.unusedSpace-=booth.length;
                    }
                }
                
            }
            if(block.unusedSpace < 1){
                break;
            }
        }else if(block.unusedSpace>0){
            continue;
        }else{
            break;
        }
    }

        for(var i =0; i< block.boothList.length; i++){   //remove those booth that has been allocated
            const index = boothListcopy.indexOf(block.boothList[i]);
            if (index > -1) {
                boothListcopy.splice(index, 1);
            }
            //console.log(boothListcopy.length);
        }

        checkBlockOccupied(block,boothList,boothListcopy);

}

function runBlock2( block,  boothList, boothListcopy){
    
    if(boothList.length==0|boothListcopy==0){
        //console.log('all booths allocated successfully');
        return "all booths allocated successfully";
    }

    for(var i=0;i<boothListcopy.length;i++){
        var booth = boothListcopy[i];
        
        if (block.unusedSpace >= booth.length) {
            if (booth.width<=block.width) {
                if(block.boothList.length==0) {
                    block.boothList.push(booth);
                    const index = boothList.indexOf(booth);
                    if (index > -1) {
                        boothList.splice(index, 1);
                    }
                    block.unusedSpace -= booth.length;
                    
                }else{
                    if(block.boothList[block.boothList.length-1].boothType!= booth.boothType){
                        block.boothList.push(booth);

                        const index = boothList.indexOf(booth);
                        if (index > -1) {
                            boothList.splice(index, 1);
                        }

                        block.unusedSpace-=booth.length;
                    }
                }
             
            }
            if(block.unusedSpace <= 0){
                break;
            }
        }else if(block.unusedSpace>0){
            continue;
        }else{
            break;
        }
    }

    for(var i =0; i< block.boothList.length; i++){   //remove those booth that has been allocated
        const index = boothListcopy.indexOf(block.boothList[i]);
        if (index > -1) {
            boothListcopy.splice(index, 1);
        }
        //console.log(boothListcopy.length);
    }
    
    return checkBlockOccupied(block,boothList,boothListcopy);

}

module.exports = {
    runAlgo,
    runBlock,
    runBlock2,
    checkAllOcuppied,
    checkBlockOccupied,
    Block,
    Booth,
    boothTypes
}


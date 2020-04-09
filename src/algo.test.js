var algo = require('./algo.js')

var block1 = new algo.Block(1,10,3);
var block2 = new algo.Block(2,5,3);
var block3 = new algo.Block(3,2,2);
var block4 = new algo.Block(4,6,3);

var booth1 = new algo.Booth('001','project 001',algo.boothTypes.aerospace,1,2);
var booth2 = new algo.Booth('002','project 002',algo.boothTypes.computer,1.5,1);
var booth3 = new algo.Booth('003','project 003',algo.boothTypes.transport,2,2);
var booth4 = new algo.Booth('004','project 004',algo.boothTypes.aerospace,1,2.5);
var booth5 = new algo.Booth('005','project 005',algo.boothTypes.aerospace,2.5,2);
var booth6 = new algo.Booth('006','project 006',algo.boothTypes.computer,1.5,2);
var booth7 = new algo.Booth('007','project 007',algo.boothTypes.education,1,1);

var boothList=[];
var blockList=[];
var boothListCopy=[]; 


afterEach(()=>{
    boothList=[];
    blockList=[];
    boothListCopy=[]; 
    block1.boothList=[];
    block2.boothList=[];
    block3.boothList=[];
    block4.boothList=[];
    block1.unusedSpace=10;
    block2.unusedSpace=5;
    block3.unusedSpace=2;
    block4.unusedSpace=6;
});


test('runAlgo test 1: empty array test',()=>{
     
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('empty arrays');

});

test('runAlgo test 2: all booth can fit into one block',()=>{
      
    boothList.push(booth1);
    boothList.push(booth2);
    boothList.push(booth3);
    boothList.push(booth4);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    boothListCopy.push(booth3);
    boothListCopy.push(booth4);
   
    blockList.push(block1);
 
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
    expect(blockList[0].boothList.length).toBe(4);
    expect(blockList.length).toBe(1);
    expect(blockList[0].width).toBe(3);
    expect(blockList[0].length).toBe(10);
    expect(blockList[0].boothList[0].boothID).toBe('001');
    
    
});


test('runAlgo test 3: all booths can fit into more than one blocks',()=>{
     
    boothList.push(booth1);
    boothList.push(booth2);
    boothList.push(booth3);
    boothList.push(booth4);
    boothList.push(booth5);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    boothListCopy.push(booth3);
    boothListCopy.push(booth4);
    boothListCopy.push(booth5);
   
    blockList.push(block1);
    blockList.push(block2);
    
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
    expect(blockList[1].boothList.length).toBe(1);
    expect(blockList.length).toBe(2);
    expect(blockList[1].width).toBe(3);
    expect(blockList[1].length).toBe(5);
    expect(blockList[1].boothList[0].boothID).toBe('005');
    
});

test('runAlgo test 4 : not enough space to allocated all booths',()=>{
     

    boothList.push(booth1);
    boothList.push(booth2);
    boothList.push(booth3);
    boothList.push(booth4);
    boothList.push(booth5);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    boothListCopy.push(booth3);
    boothListCopy.push(booth4);
    boothListCopy.push(booth5);
   
    blockList.push(block1);
    //le.log(typeof(block1)=='object');
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('not enough space to allocated all booths');
    expect(blockList[0].boothList.length).toBe(4);
    expect(blockList.length).toBe(1);
    expect(blockList[0].width).toBe(3);
    expect(blockList[0].length).toBe(10);
    expect(blockList[0].boothList[blockList[0].boothList.length-1].boothID).toBe('004');
    

});

test('runBlock test 1: wrong block input type',()=>{
    expect(algo.runBlock(1,boothList,boothListCopy)).toBe('wrong input type');

});

test('runBlock test 2: wrong boothList input type ',()=>{
    expect(algo.runBlock(block1,1,boothListCopy)).toBe('wrong input type');

});

test('runBlock test 3: wrong boothListCopy input type ',()=>{
    expect(algo.runBlock(block1,boothList,1)).toBe('wrong input type');

});

test('runBlock2 test 1',()=>{
    expect(algo.runBlock2(block1,boothList,boothListCopy)).toBe('all booths allocated successfully');

});

test('runBlock2 test 2',()=>{
    boothList.push(booth1);
    boothList.push(booth2);
    boothList.push(booth3);
    boothList.push(booth4);
    boothList.push(booth5);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    boothListCopy.push(booth3);
    boothListCopy.push(booth4);
    boothListCopy.push(booth5);
   
    expect(algo.runBlock2(block1,boothList,boothListCopy)).toBe('block check finished');

});

test('runBlock2 test 3',()=>{
    boothList.push(booth1);
    boothList.push(booth2);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
   
    expect(algo.runBlock2(block1,boothList,boothListCopy)).toBe('all booths allocated successfully');

});

test('checkBlockOccupied test 1',()=>{
  
    expect(algo.checkBlockOccupied(block1,boothList,boothListCopy)).toBe('all booths allocated successfully');

});

test('checkBlockOccupied test 2',()=>{
    boothList.push(booth1);
    boothList.push(booth2);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    expect(algo.checkBlockOccupied(block1,boothList,boothListCopy)).toBe('there is no fit for this block');

});

test('checkBlockOccupied test 3',()=>{
    block1.boothList[0]=booth1;
    boothList.push(booth1);
    boothList.push(booth2);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    expect(algo.checkBlockOccupied(block1,boothList,boothListCopy)).toBe('block check finished');

});

test('checkAllOccupied test 1',()=>{
  
    expect(algo.checkAllOcuppied(boothList,boothListCopy,blockList)).toBe('all booths allocated successfully');

});

test('checkAllOccupied test 2',()=>{
    boothList.push(booth1);
    boothList.push(booth2);

    boothListCopy.push(booth1);
    boothListCopy.push(booth2);
    expect(algo.checkAllOcuppied(boothList,boothListCopy,blockList)).toBe('not enough space to allocated all booths');

});


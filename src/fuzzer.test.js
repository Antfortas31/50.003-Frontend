var Fuzzer = require('./Fuzzer.js'); //import algo.js for testing
var algo = require('./algo.js') ;//import algo.js for testing


var boothList=[];
var blockList=[];
var boothListCopy=[]; 
//first floor
var block0 = new algo.Block(0, 8, 5);
// contains booth 4-5 
var block1 = new algo.Block(1, 7, 7);
//contains booth 6 
var block2 = new algo.Block(2, 6, 6);
// contaisn booth 9 
var block3 = new algo.Block(3, 4, 4);
// cantains booth 7 
var block4 = new algo.Block(4, 9, 4);
//contains booth 8 
var block5 = new algo.Block(5, 4, 4);
// contains booth 10 
var block6 = new algo.Block(6, 3, 3);
// contains booth 1 
var block7 = new algo.Block(7, 12, 7);
// contains booth 11-15 
var block8 = new algo.Block(8, 20, 6);
// contains booth 31-34 
var block9 = new algo.Block(9, 18, 7);
// contains booth 23-30 
var block10 = new algo.Block(10, 17, 7);
// contains booth 35-37 
var block11 = new algo.Block(11, 4, 8);
// contains booth 16-17 
var block12 = new algo.Block(12, 6, 6);
// contains booth 22 
var block13 = new algo.Block(13, 16, 7);
// contains booth 18-21 
var block14 = new algo.Block(14, 3, 8);
// contains booth 2 
var block15 = new algo.Block(15, 7, 8);
// contains booth 3

//second floor
var block16 = new algo.Block(16, 23, 3);
//the one contaions booth 49-56 have 6 degrees angle with the left bottom side 
var block17 = new algo.Block(17, 14, 7);
// the one contains booth 57-58 along the left bootom side 
var block18 = new algo.Block(18, 12, 12);
// booth 68 horizontaly  
var block19 = new algo.Block(19, 13, 6);
// contains booth 59-60 horizontaly 
var block20 = new algo.Block(20, 13, 6);
// contains booth 66-67 along the right bottom side  
var block21 = new algo.Block(21, 14, 3);
// contains booth 61-65 have 4 degrees angle with the left bottom side 
var block22 = new algo.Block(22, 36, 6);
// contains the booth from 39-48 horizontaly  



//after each test, clear the arrays and clean the Block objects
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

beforeEach(()=>{
    blockList.push(block0);
    blockList.push(block1);
    blockList.push(block2);
    blockList.push(block3);
    blockList.push(block4);
    blockList.push(block5);
    blockList.push(block6);
    blockList.push(block7);
    blockList.push(block8);
    blockList.push(block9);
    blockList.push(block10);
    blockList.push(block11);
    blockList.push(block12);
    blockList.push(block13);
    blockList.push(block14);
    blockList.push(block15);
    blockList.push(block16);
    blockList.push(block17);
    blockList.push(block18);
    blockList.push(block19);
    blockList.push(block20);
    blockList.push(block21);
    blockList.push(block22);
    block0.unusedSpace=8;
    block1.unusedSpace=7;
    block2.unusedSpace=6;
    block3.unusedSpace=4;
    block4.unusedSpace=9;
    block5.unusedSpace=4;
    block6.unusedSpace=3;
    block7.unusedSpace=12;
    block8.unusedSpace=20
    block9.unusedSpace=18;
    block10.unusedSpace=17;
    block11.unusedSpace=4;
    block12.unusedSpace=6;
    block13.unusedSpace=16;
    block14.unusedSpace=3;
    block15.unusedSpace=7;
    block16.unusedSpace=23;
    block17.unusedSpace=14;
    block18.unusedSpace=12;
    block19.unusedSpace=13;
    block20.unusedSpace=13;
    block21.unusedSpace=14;
    block22.unusedSpace=26;
    
});
test('Fuzzer test topbot =60, prob =0.6:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =60, prob =0.6:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=150:  6',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,150);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=150:  7',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,150);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=150:  8',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,150);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=150:  9',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,150);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=150:  10',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,150);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =100, prob =0.6 maxlength=250:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,250);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =100, prob =0.6 maxlength=250:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,250);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=250:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,250);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=250:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,250);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=250:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,250);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=260:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,260);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=260:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,260);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=650:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,260);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =100, prob =0.6 maxlength=260:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,260);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=260:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(100,260);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
test('Fuzzer test topbot =60, prob =0.6 maxlength=200:  6',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,200);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =60, prob =0.6 maxlength=200:  7',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,200);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=200:  8',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,200);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=200:  9',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,200);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =60, prob =0.6 maxlength=200:  10',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(60,200);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =80, prob =0.6 maxlength=300:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,300);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =80, prob =0.6 maxlength=300:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,300);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =80, prob =0.6 maxlength=300:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,300);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6 maxlength=300:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,300);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6 maxlength=300:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,300);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6 maxlength=400:  6',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6  maxlength=400:  7',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6  maxlength=400:  8',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6  maxlength=400:  9',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =80, prob =0.6  maxlength=400:  10',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(80,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =120, prob =0.6  maxlength=400:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6  maxlength=400:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6  maxlength=400:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6  maxlength=400:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6  maxlength=400:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,400);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6 maxlength=450:  6',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,450);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6 maxlength=450:  7',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,450);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6 maxlength=450:  8',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,450);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6 maxlength=450:  9',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,450);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =120, prob =0.6 maxlength=450:  10',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(120,450);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});

test('Fuzzer test topbot =500, prob =0.6 maxlength=500:  1',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(500,500);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =500, prob =0.6 maxlength=500:  2',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(500,500);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =500, prob =0.6 maxlength=500:  3',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(500,500);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =500, prob =0.6 maxlength=500:  4',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(500,500);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
test('Fuzzer test topbot =500, prob =0.6 maxlength=500:  5',()=>{
    var fuzzbooth = Fuzzer.fuzzerBooth(500,500);
    boothList = fuzzbooth[0];
    boothListCopy = fuzzbooth[1];
    //blockList = Fuzzer.fuzzerBlock()[0];
    expect(algo.runAlgo(blockList,boothList,boothListCopy)).toBe('all booths allocated successfully');
});
import React from 'react';

export function pushBlocktoBooth(blocklist, boothlist, boothlistrender, boothnum){
    for (var i = 0; i<blocklist[boothnum].boothList.length; i++){
        boothlist.push(blocklist[boothnum].boothList[i].projectName);
        boothlist.push(<br></br>);
        boothlistrender.push(blocklist[boothnum].boothList[i].boothID);
    }
    //booth0listrender.push(" | ");
}
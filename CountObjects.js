function getCount(objects) {
    const o=objects.length
    let count =0
    for(let p=0; p<o; p++){
        // console.log('itorator p: ' + p, 'each object: ',  objects[p])
        // console.log((objects[p].x*o)===(objects[p].y*o))
        if((objects[p].x*o)==(objects[p].y*o)){ 
            count+=1
            }
    }
    return count 

}
console.log(getCount([{x:1,y:2},{x:2,y:3},{x:3,y:3}]))
// code your solution here
const superbowlWin = function(array) {
    const found = array.find(obj => obj.result === "W") 
    if(found) {
        return found.year
    }  
}
console.log(found)   

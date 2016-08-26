/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //console.log(candidates, target)
    var rst = [];
    //var l = candidates.length;
    while(candidates.length>0){
        //console.log('len', candidates.length)
        var e = candidates[0];
        if(e==target){
            //console.log('ok', target)
            rst.push([target]);
            //candidates.shift()
        }else if (e>target){
            //console.log('err',e, target)
            //rst.push(false)
            //candidates.shift()
        }else if(e<target){
            //console.log('nest',candidates[i], target)
            var tmp = combinationSum(candidates.slice(), target-e)
            for(j=0; j<tmp.length; j++){
                if (tmp[j]){
                    rst.push(tmp[j].concat(e))
                }
            }
        }
        candidates.shift()
    }
    console.log('rst:', rst)
    return rst;
}


//combinationSum([2,3,6,7],2);
//combinationSum([2,3,6,7],3);
//combinationSum([2,3,6,7],6);
//combinationSum([2,3,6,7],7);
combinationSum([2,3,6,7],9);
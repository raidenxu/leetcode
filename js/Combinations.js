/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    //console.log(n,k)
    var rst = [];
    for(var i=n; i>0; i--){
        if(k==1){
            rst.push([i]);
        }else if(k>1 && i>=k){
            var tmp = combine(i-1,k-1);
            for(var j=0; j<tmp.length; j++){
                rst.push(tmp[j].concat(i));
            }
        }
    }
    return rst;
};

//console.log(combine(4,2));
//console.log(combine(5,2));
console.log(combine(5,3));

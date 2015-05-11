function PutArraysTogether(arrays){
    return arrays.reduce(function(a,b){   //The reduce/concat methods are excellent ways of falttening arrays
        return a.concat(b);
        
    })    
}

PutArraysTogether([[0, 1], [2, 3], [4, 5]]);
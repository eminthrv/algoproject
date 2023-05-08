var twoSum = function(nums, target) {
    let hashMap = {};
    
    for(let i = 0; i < nums.length; i++){
        //gotta set num = nums[i]
        let compliment = target - nums[i];
        console.log(compliment)
        if(compliment in hashMap){
            return [i, hashMap[compliment]]
        }
        hashMap[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
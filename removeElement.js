function removeElement(nums, val) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[index] = nums[i];
        index++;
      }
    }
    return index;
  }

  
  removeElement([3, 2, 2, 3], 3); // Output: 2, nums = [2, 2, _, _]
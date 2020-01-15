function intersect(nums1, nums2) {
  const map = {};
  const res = [];
  nums1.forEach(function(v) {
    if (map[v]) {
      map[v] += 1;
    } else {
      map[v] = 1;
    }
  });
  nums2.forEach(function(v) {
    if (map[v]) {
      res.push(v);
      map[v]--;
    }
  });
  return res;
}

function intersect_1(nums1, nums2) {
  const s = new Set(nums1);
  return nums2.filter(x => s.has(x));
}

function moveZeroes(nums) {
  let pos = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos += 1;
    }
  }
  for (; pos < nums.length; pos += 1) {
    nums[pos] = 0;
  }
}

function removeDuplicatezs(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      if (i !== j) {
        nums[i] = nums[j];
      }
    }
  }
  return i + 1;
}

function rotate(matrix) {
  matrix.reverse();
  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < index; j++) {
      [matrix[index][j], matrix[j][index]] = [
        matrix[j][index],
        matrix[index][j]
      ];
    }
  }
}
module.exports = {
  intersect,
  intersect_1,
  moveZeroes,
  removeDuplicatezs,
  rotate
};

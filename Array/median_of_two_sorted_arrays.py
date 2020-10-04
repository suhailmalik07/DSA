# leetcode -> https://leetcode.com/problems/median-of-two-sorted-arrays/
# time complexity -> O(m+n)
# space complexity -> O(1)

import math

def findMedianSortedArrays(nums1, nums2):
        n, m = len(nums1), len(nums2)
        combinedLastIndex = m + n - 1
        medians = [math.floor(combinedLastIndex/2), math.ceil(combinedLastIndex/2)]
        values = [None, None]
        
        i, j, index = 0, 0, 0
        while i < n or j < m:
            val = None
            if j == m or i < n and nums1[i] < nums2[j]:
                val = nums1[i]
                i += 1
            else:
                val = nums2[j]
                j += 1
                
            if medians[0] == index:
                values[0] = val
            if medians[1] == index:
                values[1] = val
                
            if values[0] != None and values[1] != None:
                return sum(values)/2
            
            index += 1


def main():
    print(findMedianSortedArrays([1,3], [2])) # should return 2.0

main()
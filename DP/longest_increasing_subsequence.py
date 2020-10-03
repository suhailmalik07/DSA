# leetcode -> https://leetcode.com/problems/longest-increasing-subsequence/

def LongestIncreasingSubsequence(arr):
    # memorization
    cache = [1]*len(arr)

    for i in range(1, len(arr)):
        for j in range(0, i):
            if arr[j] < arr[i]:
                cache[i] = max(cache[i], cache[j]+1)

    return max(cache, default=0)


def main():
    # time complexity -> O(n)
    # space complexity -> O(n)
    print(LongestIncreasingSubsequence([]))


main()

# link -> https://leetcode.com/problems/word-break/
# should return true if it's possible to make the sentense with give words by just adding space to `s`

s = "leetcode"
wordDict = ["leet", "code"]
cache = [ [False]*(len(s)+1) for x in range(len(s)) ]


def wordBreak(s, wordDict, cache):
    wordDict = set(wordDict)

    for i in range(len(s)):
        for j in range(i, len(s)):
            left = j-i
            right = j

            if s[left:right+1] not in wordDict:
                for k in range(left, right):
                    cache[left][right] = cache[left][k] and cache[k+1][right]

                    if cache[left][right]:
                        break

            else:
                cache[left][right] = True
                
    
    return cache[0][len(s)-1]

print(wordBreak(s, wordDict, cache))


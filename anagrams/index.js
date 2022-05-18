// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  const SA = stringA.replace(/[^a-zA-Z]/g, '').toLowerCase()
  const SB = stringB.replace(/[^a-zA-Z]/g, '').toLowerCase()

  // Solution 1
  // if (SA.length !== SB.length) {
  //   console.log(`${SA}, ${SB} > false`)
  //   return false
  // }

  // let countA = {}
  // let countB = {}

  // for (let i = 0; i < SA.length; i++) {
  //   countA[SA[i]] = countA[SA[i]] + 1 || 1
  // }

  // for (let i = 0; i < SB.length; i++) {
  //   countB[SB[i]] = countB[SB[i]] + 1 || 1
  // }

  // for (let i = 0; i < SA.length; i++) {
  //   if (countA[SA[i]] !== countB[SA[i]]) {
  //     console.log(`${SA}, ${SB} > false`)
  //     return false
  //   }
  // }

  // console.log(`${SA}, ${SB} > true`)
  // return true

  // Solution 2
  let AA = SA.split('').sort()
  let AB = SB.split('').sort()

  if (AA.join('') === AB.join('')) {
    return true
  } else {
    return false
  }
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd')
const { assert } = chai

describe('Anagrams', () => {
  it('works if case sensitivity and non word characters NOT taken into account', () => {
    assert.equal(anagrams('earth', 'heart'), true)

    assert.equal(anagrams('love', 'meow'), false)
    assert.equal(anagrams('lol', 'lolc'), false)
  })
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams('HEART', 'earth'), true)
    assert.equal(anagrams('heart', 'EARTH'), true)

    assert.equal(anagrams('love', 'meow'), false)
    assert.equal(anagrams('lol', 'lolc'), false)
  })
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams('heart!', ' earth'), true)

    assert.equal(anagrams('love', 'meow'), false)
    assert.equal(anagrams('lol', 'lolc'), false)
  })
})

mocha.run()

// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

function reverseInt(n) {
	// if (n < 0) {
	// 	n *= -1
	// 	let reverse = n
	// 	n = parseInt(n / 10)
	// 	// console.log('n: ', n)
	// 	// console.log('n % 10: ', n % 10)
	// 	while (n % 10 !== 0) {
	// 		reverse *= 10
	// 		reverse += n % 10
	// 		n = parseInt(n / 10)
	// 	}
	// 	// console.log('-reverse: ', (reverse *= -1))
	// 	return (reverse *= -1)
	// } else {
	// 	let reverse = n % 10
	// 	console.log('n: ', n)
	// 	n = parseInt(n / 10)
	// 	console.log('n % 10: ', n, n % 10)
	// 	// console.log('n: ', n)
	// 	while (n % 10 >= 0) {
	// 		reverse *= 10
	// 		reverse += n % 10
	// 		n = parseInt(n / 10)
	// 	}
	// 	console.log('reverse: ', reverse)
	// 	return reverse
	// }
	if (n < 0) {
		n *= -1
		n = n.toString().split('').reverse().join('')
		return Number('-' + n)
	} else {
		return Number(n.toString().split('').reverse().join(''))
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

describe('Integer Reversal', () => {
	it('reverseInt() works on positive numbers', () => {
		assert.equal(reverseInt(3), 3)
		assert.equal(reverseInt(13), 31)
		assert.equal(reverseInt(100), 1)
		assert.equal(reverseInt(1408), 8041)
	})

	it('reverseInt() works on negative numbers numbers', () => {
		assert.equal(reverseInt(-3), -3)
		assert.equal(reverseInt(-13), -31)
		assert.equal(reverseInt(-100), -1)
		assert.equal(reverseInt(-1408), -8041)
	})
})

mocha.run()

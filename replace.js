const large = chrome.runtime.getURL( "nft-large.png" )
const small = chrome.runtime.getURL( "nft-small.png" )

const run = () => {
	let largeAvatars = []
	let smallAvatars = []
	document.querySelectorAll('div').forEach(node => {
		if (node.ariaLabel && node.ariaLabel.includes("NFT") && !node.hasAttribute("role")) {
			if (node.clientHeight === 48 && node.clientWidth === 48) {
				smallAvatars.push(node);
			} else {
				largeAvatars.push(node);
			}
		}
	})
	const replace = (avis, image) => {
		Array.from(avis).forEach( (avatar) => {
			let child = avatar.getElementsByClassName('css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw')
			child[0].style.backgroundImage = `url('${image}')`
		})
	}
	replace(largeAvatars, large)
	replace(smallAvatars, small)
}

setInterval(run, 1500);

const large = chrome.runtime.getURL( "nft-large.png" )
const small = chrome.runtime.getURL( "nft-small.png" )

const run = () => {
	let largeAvatars = []
	let smallAvatars = []
	document.querySelectorAll('div[aria-label*="NFT"]').forEach(node => {
		if (!node.hasAttribute("role")) {
			if (node.clientHeight === 48 && node.clientWidth === 48) {
				smallAvatars.push(node);
			} else {
				largeAvatars.push(node);
			}
		}
	})
	const replace = (avis, image) => {
		Array.from(avis).forEach( (avatar) => {
			let child = avatar.children[0];
			child.style.backgroundImage = `url('${image}')`;
		})
	}
	replace(largeAvatars, large)
	replace(smallAvatars, small)
}

setInterval(run, 1500);

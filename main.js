// candy factory

const buyChocolate = () => {
    const candyObject = {
        type: "Milk chocolate"
    }
    return candyObject
}

let candyObject = buyChocolate()

const addFlavoring = (addedFlavor) => {
    candyObject.flavor = addedFlavor
    return candyObject
}

candyObject = addFlavoring("Mint")

const makeBarkMixture = (isMint) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true
        return candyObject
    } else {
        candyObject.mixed = false
        return candyObject
    }
}

candyObject = makeBarkMixture(candyObject.flavor)

const bakeCandy = (mixstatus) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
        return candyObject
    } else {
        candyObject.baked = false
        return candyObject
    }
}

candyObject = bakeCandy(candyObject.mixed)

const breakBark = (bakeStatus) => {
    if (bakeStatus === true) {
        const newArr = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
        return newArr
    }
}

candyObject = breakBark(candyObject.baked)

console.log(candyObject)
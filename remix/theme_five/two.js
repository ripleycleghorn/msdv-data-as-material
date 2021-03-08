var text_string = `The life of a deciduous tree is ruled by its annual budget. Every year, during the short months from March to July, it must grow an entire new canopy of leaves. If it fails to meet its quota this year, some competitor will grow into a corner of its previous space and thus initiate the long, slow process by which the tree will eventually lose its foothold and die. If a tree expects to be alive ten years hence, it has no alternative but to succeed this year, and every year after. 
Let’s consider a modest, unremarkable tree — the one living on your street, perhaps. A decorative maple tree, about the height of a streetlight — not a majestic maple reaching its full height in the forest — a demure neighborhood tree that’s only one - quarter the height of its regal counterpart. When the sun is directly overhead, the little maple in our example casts a shadow about the size of a parking space. However, if we pluck off all the leaves and lay them flat, side by side, they would cover three parking spaces. By suspending each leaf separately, the tree has stacked its surface area into a sort of ladder for light to fall down. Looking up, you notice that the leaves at the top of any tree are smaller, on average, than the leaves at the bottom. This allows sunlight to be caught near the base whenever the wind blows and parts the upper branches. Look again and you’ll notice that leaves low in the canopy are of a darker green ; they contain more of the pigment that helps each leaf absorb sunshine, allowing them to harvest the weaker rays that penetrate shade. When building foliage, a tree must budget for each leaf individually and allocate for each position relative to the other leaves. A good business plan will allow our tree to triumph as the largest and longest - living being on your street. But it ain’t easy, and it ain’t cheap. 
The leaves on our little maple, all taken together, weigh thirty - five pounds. Every ounce therein must be pulled from the air or mined from the soil — and quickly — over the course of a few short months. From the atmosphere, a plant gains carbon dioxide, which it will make into sugar and pith. Thirty - five pounds of maple leaves may not taste sweet to you and me, but they actually contain enough sucrose to make three pecan pies, which is the sweetest thing that I can think of right now. The pithy skeleton within the leaves contains enough cellulose to make almost three hundred sheets of paper, which is about the number that I used to print out the manuscript for this book. 
Our tree’s only source of energy is the sun : after light photons stimulate the pigments within the leaf, buzzing electrons line up into an unfathomably long chain and pass their excitement one to the other, moving biochemical energy across the cell to the exact location where it is needed. The plant pigment chlorophyll is a large molecule, and within the bowl of its spoon - shaped structure sits one single precious magnesium atom. The amount of magnesium needed for enough chlorophyll to fuel thirty - five pounds of leaves is equivalent to the amount of magnesium found in fourteen One A Day vitamins, and it must ultimately dissolve out of bedrock, which is a geologically slow process. Magnesium, phosphorous, iron, and the many other micronutrients that our tree needs can be gained only from the extremely dilute solution that flows in between the tiny mineral grains within the soil. In order to accumulate all of the soil nutrients that thirty - five pounds of leaves require, our tree must first absorb and then evaporate at least eight thousand gallons of water from the soil. That’s enough to fill a tanker truck. That’s enough to keep twenty - five people alive for a year. That’s enough to make you worry about when it is next going to rain.`

var text_array = text_string.split(" ");

let div = document.createElement("div")
document.body.appendChild(div);

text_array.forEach(item => {
    //create random font size between 9 and 29
    font_size = Math.floor(Math.random() * 20) + 9;
    //create span for each word
    let word = document.createElement("span")
    //add a space after the word
    item = item + " ";
    //add item to span
    word.innerHTML = item;
    //append span to div and set font size to random number
    div.appendChild(word).style.fontSize = font_size + "px";
    console.log(font_size)
})

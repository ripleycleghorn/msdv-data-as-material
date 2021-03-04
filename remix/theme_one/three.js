var text_string = `life deciduous tree ruled its annual budget. Every year, during short months March July, grow entire new canopy leaves. fails meet its quota year, competitor will grow corner its previous space thus initiate long, slow process tree will eventually lose its foothold die. tree expects alive ten years hence, no alternative succeed year, every year after. Let’s consider modest, unremarkable tree — one living street, perhaps. decorative maple tree, height streetlight — not majestic maple reaching its full height forest — demure neighborhood tree that’s one - quarter height its regal counterpart. When sun directly overhead, little maple example casts shadow size parking space. However, pluck off leaves lay flat, side side, cover three parking spaces. suspending leaf separately, tree stacked its surface area sort ladder light fall down. Looking up, notice leaves top tree smaller, average, leaves bottom. allows sunlight caught near base whenever wind blows parts upper branches. Look again you’ll notice leaves low canopy darker green ; contain pigment helps leaf absorb sunshine, allowing harvest weaker rays penetrate shade. When building foliage, tree budget leaf individually allocate position relative leaves. good business plan will allow tree triumph largest longest - living street. ain’t easy, ain’t cheap. The leaves little maple, taken together, weigh thirty - five pounds. Every ounce therein pulled air mined soil — quickly — course few short months. atmosphere, plant gains carbon dioxide, will sugar pith. Thirty - five pounds maple leaves may not taste sweet me, actually contain enough sucrose three pecan pies, sweetest thing think right now. pithy skeleton within leaves contains enough cellulose almost three hundred sheets paper, number used print manuscript book. Our tree’s source energy sun : light photons stimulate pigments within leaf, buzzing electrons line unfathomably long chain pass excitement one other, moving biochemical energy across cell exact location needed. plant pigment chlorophyll large molecule, within bowl its spoon - shaped structure sits one single precious magnesium atom. amount magnesium needed enough chlorophyll fuel thirty - five pounds leaves equivalent amount magnesium found fourteen One Day vitamins, ultimately dissolve bedrock, geologically slow process. Magnesium, phosphorous, iron, micronutrients tree needs gained extremely dilute solution flows tiny mineral grains within soil. order accumulate soil nutrients thirty - five pounds leaves require, tree first absorb evaporate least eight thousand gallons water soil. That’s enough fill tanker truck. That’s enough keep twenty - five people alive year. That’s enough worry when next going rain.`

var text_array = text_string.split(" ");
// console.log(string_list)

let filtered_list = text_array.filter((element, index) => {
    return index % 35 === 0;
})

let div = document.createElement("div")
div.classList.add("thirty-five")
document.body.appendChild(div);

filtered_list.forEach(item => {
    // ALTERNATIVE (SAFER) WAY OF CREATING ELEMENTS
    let word = document.createElement("p")
    // word.classList.add("thirty-five")
    word.innerHTML = item;
    div.appendChild(word)
    console.log(word)
})

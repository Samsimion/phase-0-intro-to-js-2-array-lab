// Write your solution here! 
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.length;
    cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, "Broom"]
}
function prependCat(name){
    return ["Arnold" ,...cats]
}
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}

function removeFirstCat(){
    return cats.slice(1);
}
/* describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });*/
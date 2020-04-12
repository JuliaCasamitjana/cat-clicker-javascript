const CATS = [["Bruc", "cat.png", 0], ["Xirri", "cat2.png", 0], ["Roc", "cat3.png", 0], ["Jazz", "cat4.png", 0], ["Blues", "cat5.png", 0]];

for (var i = 0; i < CATS.length; i++) {
    // This is the cat we're on...
    var cat = CATS[i][0];
    var pic = CATS[i][1];
    var count = CATS[i][2]
    // We're creating a DOM element for the cat
    var cat_elem = document.createElement('li');
    cat_elem.textContent = cat;

    var times_cat = document.getElementById("times");
    // ... and when we click, display the image of `cat`, name
    cat_elem.addEventListener('click', (function(c, p) {
        return function() {

            document.getElementById("cat_name").innerHTML = c;
            var pic_cat = document.getElementById("image");
            pic_cat.innerHTML = "<img src=img/" + p + " >";
            times_cat.innerHTML = 0;

            pic_cat.addEventListener('click', (function(t) {
       		 return function() {
       		 t++;
            times_cat.innerHTML = t;

        };
    })(count));
        };
    })(cat, pic));
    document.getElementById("side_list").appendChild(cat_elem);
};

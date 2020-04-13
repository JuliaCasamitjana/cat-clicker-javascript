/* ======= Model ======= */

var model = { 
        currentCat:0, 
        cats: [
            { name: "Bruc", 
             clickCounter: 0,
             image: "cat.png"},

            { name: "Xina", 
              clickCounter: 0, 
              image: "cat2.png"},

            { name: "Roc", 
              clickCounter: 0, 
              image: "cat3.png"},

            { name: "Jazz", 
              clickCounter: 0, 
              image: "cat4.png"},

            { name: "Blues", 
              clickCounter: 0, 
              image: "cat5.png"}]
    };


/* ======= Octopus ======= */

var octopus = {

    init: function() {

        view_list.render();
        view_info.init(model.cats[0]);
    },

    getList: function(){
        return model.cats;
    },

    updateCurrentCat: function(index) {
        model.currentCat = index;  
    },

    getCurrentCat: function() {
        return model.cats[model.currentCat];
    },  

    count: function(){
        model.cats[model.currentCat].clickCounter++ ;
        view_info.render();
    } 

};





var view_list = {
    
    render: function(){
    var data = octopus.getList();
        data.forEach(function(v, i){
        var cat_elem = document.createElement('li');
        cat_elem.textContent = v.name; 
        document.getElementById("side_list").appendChild(cat_elem);
        
        cat_elem.addEventListener('click', (function(){
            return function() {
                octopus.updateCurrentCat(i);
                view_info.render();
            }
        })(cat_elem));
    });

    }
};

/* ======= View ======= */


var view_info = {

    init: function(){

        this.nameCat = document.getElementById("cat_name");
        this.picCat = document.getElementById("image");
        this.counterCat = document.getElementById("times");

        this.picCat.addEventListener('click', (function() {
            octopus.count();
        }));  

        view_info.render();
    },

    render: function(){
        
        var currentCat = octopus.getCurrentCat();

        this.picCat.innerHTML = "<img src=img/" + currentCat.image + " >";
        this.nameCat.innerHTML = currentCat.name;
        this.counterCat.innerHTML = currentCat.clickCounter;  

    }
        

};

octopus.init();



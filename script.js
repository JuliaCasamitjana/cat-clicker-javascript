/* ======= Model ======= */

var model = { 
        currentCat: 0,
        adminMode: false, 
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
        view_admin.init();
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
        view_admin.render();
    },

    getAdminMode: function(){
        return model.adminMode;
    },

    admin: function(){
        model.adminMode = true;
        view_admin.render();
    },

    admin_cancel: function(){
        model.adminMode = false;
        view_admin.render();
    }, 

    admin_save: function(a, b, c){
        model.cats[model.currentCat].name = a;
        model.cats[model.currentCat].clickCounter = b;
        model.cats[model.currentCat].image = c;

        view_info.render();
        view_list.render();
    }

};

/* ======= View ======= */

var view_list = {

    render: function(){

    var data = octopus.getList();
    var list =  document.getElementById("side_list");
    list.textContent = "";

        data.forEach(function(v, i){
        var cat_elem = document.createElement('li');
        cat_elem.textContent = v.name; 
        list.appendChild(cat_elem);
        
        cat_elem.addEventListener('click', (function(){
            return function() {
                octopus.updateCurrentCat(i);
                view_info.render();
                view_admin.render();
            }
          })(cat_elem));
        });
    }

};


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

var view_admin = {
    init: function(){
        this.adminButton = document.getElementById("admin_button");
        this.adminButton_cancel = document.getElementById("cancel");
        this.adminButton_save = document.getElementById("save");

        this.viewAdmin = document.getElementById("admin");
        this.nameAdmin = document.getElementById("name");
        this.clicksAdmin = document.getElementById("clicks");
        this.fotoAdmin = document.getElementById("foto");

        this.adminButton.addEventListener('click', (function() {
            octopus.admin();
        })); 

        this.adminButton_cancel.addEventListener('click', (function() {
            octopus.admin_cancel();
        })); 

        this.adminButton_save.addEventListener('click', (function() {
            var newName = document.getElementById("name").value;
            var newClicks = document.getElementById("clicks").value;
            var newFoto = document.getElementById("foto").value;
            console.log(newName);
            octopus.admin_save( newName, newClicks, newFoto);
        })); 

    },

    render: function(){

        var adminMode = octopus.getAdminMode();
        var currentCat = octopus.getCurrentCat();

        adminMode ? this.viewAdmin.style.display = "block" : this.viewAdmin.style.display = "none";

        this.nameAdmin.value = currentCat.name;
        this.clicksAdmin.value = currentCat.clickCounter;
        this.fotoAdmin.value = currentCat.image;

    }

};

octopus.init();



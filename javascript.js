// COPY MENU FOR MOBILE
function copyMenu()
{
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var mainPlace = document.querySelector('.off-canvas nav');
    mainPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// SHOW MOBILE MENU
    const menuButton = document.querySelector('.trigger'),
        closeButton = document.querySelector('.t-close'),
        addclass = document.querySelector('.site');
    menuButton.addEventListener('click', function(){
        addclass.classList.toggle('showmenu')
    })
    closeButton.addEventListener('click', function(){
        addclass.classList.remove('showmenu')
    });
// SHOW SUB MENU ON MOBILE
    const submenu = document.querySelectorAll('.has-child .icon-small');
    submenu.forEach((menu) => menu.addEventListener('click', toggle));
    function toggle(e)
    {
        e.preventDefault();
        submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('wxpand') : null);
        if (this.closest('.has-child').classList != 'expand');
        this.closest('.has-child').classList.toggle('expand');
    };

//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
    dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt')
});

//SHOW SEARCH
const searchButton = document.querySelector('.t-search'),
        tClose = document.querySelector('.search-close'),
        showClass= document.querySelector('.site');
searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
});

var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
    app.config(function($routeProvider) {
    $routeProvider
    .when("/",{ 
        templateUrl:"index-1.html", 
        controller:"myCtrl"
    })
    .when("/page-single/:id",{
            templateUrl:"page-single.html", 
            controller:"pageSingle"
    })
    .when("/Apple",{
            templateUrl:"index-3.html", 
            controller: "Apple"
    })
    .when("/Samsung",{
            templateUrl:"index-3.html", 
            controller: "Samsung"
    })
    .when("/Vivo",{
            templateUrl:"index-3.html", 
            controller: "Vivo"
    })
    .when("/Realme",{
            templateUrl:"index-3.html", 
            controller: "Realme"
    })
    .when("/Xiaomi",{
            templateUrl:"index-3.html", 
            controller: "Xiaomi"
    })
    .when("/Nokia",{
            templateUrl:"index-3.html", 
            controller: "Xiaomi"
    })
    .when("/Oneplus",{
            templateUrl:"index-3.html", 
            controller: "Oneplus"
    })
    .when("/Oppo",{
            templateUrl:"index-3.html", 
            controller: "Oppo"
    })
    .when("/index-2",{
            templateUrl:"index-2.html", 
            controller:"myFeatured"
    })
    .when("/cart",{
            templateUrl:"cart.html", 
            controller:"shopCart"
    })
    .when("/checkout",{
            templateUrl:"checkout.html", 
            controller:"checkOut"
    })
    .when("/compare",{
            templateUrl:"compare.html", 
            controller:"compare"
    })
    .when("/aboutus",{
            templateUrl:"aboutus.html", 
            controller:"aboutus"
    })
    .when("/contact",{
            templateUrl:"contact.html", 
            controller:"contact"
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.directive('swiper', function() {
  function link(scope, element, attrs) {              
    $(document).ready(function () {
      var mySwiper = new Swiper ('.swiper', {
        loop: true,
        autoplay: 
        {
          delay: 2000,
        },
        pagination: 
        {
          el: ".swiper-pagination",
          clickable: true,
        },
      })
    });                        
  };
  return {        
    link: link        
  };
});

app.directive('swiper', function() {
  function link(scope, element, attrs) {              
    $(document).ready(function () {
      var productThumb = new Swiper('.small-image',
      {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode :true,
        watchSlidesProgress:true,
        breakpoints: {
          481: {
            spaceBetween:32,
        }
        }
    });
      var productBig = new Swiper ('.big-image',
      {
        loop: true,
        autoHeight: true,
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs:
        {
          swiper: productThumb,
        }
      });
    });                        
  };
  return {        
    link: link        
  };
});


app.controller("myCtrl", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
    $scope.productId=$routeParams.id;
    $http.get("products.json").then(function(response){
        $scope.products = response.data;
        console.log(response.data)
    })
    .then(function(response){
      $scope.products = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
    });

    $scope.limit = 9;
    $scope.loadMore = function(limit) { 
      $scope.limit += limit;
    };

    $scope.myItems = [];
    $scope.totalPrice = 0;
    $scope.count = 0;
    
  $scope.addItem = function(myItems) {
    if($scope.myItems.length == 0) {
      myItems.count = 1;
      $scope.myItems.push(myItems);
      $scope.count++;
    }
    else {
      var repeat = false;
      for(var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].id === myItems.id) {
          $scope.myItems[i].count += 1;
          repeat = true;
          $scope.count++;
        }
      }
      if(!repeat) {
        myItems.count = 1;
        $scope.myItems.push(myItems);
        $scope.count++;
      }
    }
    $scope.totalPrice += parseFloat(myItems.price);
  };
  
  $scope.addBasket = function(myItem) {
    if(myItem.count > 1){
      myItem.count += 1;
      $scope.count++;
    }
    else if(myItem.count === 1)
    {
      $scope.count++;
    }
  };

  $scope.removeBasket = function(myItem) {
    if(myItem.count > 1){
      myItem.count -= 1;
      $scope.count--;
    }
    else if(myItem.count === 1){
      $scope.myItems.splice($scope.myItems.indexOf(myItem), 1);
      $scope.count--;
    }
      $scope.totalPrice -= parseFloat(myItem.price);
  };
}]);

app.controller("shopCart", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
  $scope.productId=$routeParams.id;
  $http({
      method: "GET",
      url: "products.json"
  })
  .then(function(response){
      $scope.products = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
  })
}]);

app.controller("shopCart", function($scope, $http){
    $http.get("products.json").then(function(response){
        $scope.products = response.data;
    }); 
  $scope.addItem = function(newItem) {
    if($scope.myItems.length == 0) {
      newItem.count = 1;
      $scope.myItems.push(newItem);
    }else {
      var repeat = false;
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].id == newItem.id) {
          $scope.myItems[i].count++;
          repeat = true;
        }
      }
      if(!repeat) {
        newItem.count = 1;
        $scope.myItems.push(newItem);
      }
    }
    updatePrice();    
  };
});

app.controller('compare', function($scope, $http) {
  $http.get("products.json").then(function(response){
    $scope.products = response.data;
})
});


app.directive('slick', function($timeout) {
  return function(scope, el, attrs) {
      $timeout((function() {
          el.slick({
              slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 2
            }
          }
        ]
          })
      }), 2000)
  }
});


app.controller("checkOut", function($scope, $http){
    $http.get("products.json").then(function(response){
        $scope.products = response.data;
    }); 
  $scope.addItem = function(newItem) {
    if($scope.myItems.length == 0) {
      newItem.count = 1;
      $scope.myItems.push(newItem);
    }else {
      var repeat = false;
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].id == newItem.id) {
          $scope.myItems[i].count++;
          repeat = true;
        }
      }
      if(!repeat) {
        newItem.count = 1;
        $scope.myItems.push(newItem);
      }
    }
    updatePrice();    
  };
});

app.controller("pageSingle", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
    $scope.productId=$routeParams.id;
    $http({
        method: "GET",
        url: "products.json"
    })
    .then(function(response){
        $scope.products = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
    })
}]);

app.controller("shopCart", ['$scope','$http','$filter', '$routeParams', function($scope,$http, $filter, $routeParams){
    $scope.productId=$routeParams.id;
    $http({
        method: "GET",
        url: "products.json"
    })
    .then(function(response){
        $scope.products = $filter('filter')(response.data,{id: parseInt($scope.productId)}, true)[0];
    })
}]);

app.controller('myFeatured', function($scope, $http) {
    $http.get("brands.json").then(function(response){
        $scope.brands = response.data;
    })
})
.filter('Filter', function() {
    return function(input, datas) {
      if(!datas || datas.length === 0) return input;
      var out = [];
      angular.forEach(input, function(item) {
        angular.forEach(datas, function(data) {
          if (item.brand === data.brand){
            out.push(item);
          }
        })
      });
      return out;
    }
  });

  app.controller('aboutus', function($scope, $http) {
    $http.get("products.json").then(function(response){
        $scope.products = response.data;
    })
});
// Stock products bar width percentage
var stocks = document.querySelectorAll('.products .stock.mini-text');
for (let x = 0; x < stocks.length; x++)
{
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML, 
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;
    stocks[x].querySelector('.available').style.width = percent + '%';
};

// show cart on click
// const divtoShow = '.mini-cart';
// const divPopup = document.querySelector(divtoShow);
// const divTrigger = document.querySelector('.cart-trigger');

// divTrigger.addEventListener('click', () =>
// {
//     setTimeout(() =>
//     {
//         if(!divPopup.classList.contains('show'))
//         {
//             divPopup.classList.add('show');
//         }
//     }, 250 )
// });

// close by click outside
document.addEventListener('click', (e) =>
{
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show'))
    {
        divPopup.classList.remove('show')
    }
});
// show modal on load
window.onload = function ()
{
    document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function() {
    document.querySelector('.site').classList.remove('showmodal')
})

app.controller("Apple",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Apple"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Samsung",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Samsung"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Nokia",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Nokia"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Realme",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Realme"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Vivo",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Vivo"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Oneplus",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Oneplus"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Oppo",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Oppo"){
              $scope.products.push(products);
          }
      })
  })
});
app.controller("Xiaomi",function($scope,$http){
  $http.get("products.json").then(function(response){
      $scope.products=[];
      angular.forEach(response.data,function(products){
          if(products.brand=="Xiaomi"){
              $scope.products.push(products);
          }
      })
  })
});

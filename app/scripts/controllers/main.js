'use strict';
/**
 * @ngdoc function
 * @name ApsilonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ApsilonApp
 */

angular.module('ApsilonApp').filter('getById', function() {
    return function(input, id) {
        var i = 0,
            len = input.length;
        for (; i < len; i++) {
            if (+input[i].id == +id) {
                return input[i]
            }
        }
        return null
    }
});


angular.module('ApsilonApp').controller('MenuController', ['$scope', '$http', '$filter', '$location','$rootScope','$stateParams','$state',  function($scope, $http, $filter, $location, $rootScope, $anchorScroll,$stateParams, $state ) {
        
        
    //Getting random secret key
            // $http.get('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/secretkey').success(function(data) {
        // $scope.secret=data;
        // });
// INIT





    $scope.loading = false;
    $scope.addcart='Add cart';
    var c_url = $location.absUrl();
    var s_url = $location.url();
    
    var org_code=$stateParams.params.name;
    //$scope.org_name=$stateParams.params.name;
    $rootScope.org_name=$stateParams.params.name;
     $scope.menu=[{"PageName":"BEVERAGES","Caption":"BEVERAGES"},{"PageName":"NON-VEGBITS","Caption":"NON-VEGBITS"},{"PageName":"NOODLES","Caption":"NOODLES"},{"PageName":"RICE","Caption":"RICE"},{"PageName":"SANDWICHES","Caption":"SANDWICHES"},{"PageName":"SEA FOOD","Caption":"SEA FOOD"},{"PageName":"SOFT DRINKS","Caption":"SOFT DRINKS"},{"PageName":"CHOCOLATE CONCEPTS","Caption":"CHOCOLATE CONCEPTS"},{"PageName":"SEASONAL CONCEPTS","Caption":"SEASONAL CONCEPTS"}];

    //Getting Products data by passing Store Code
        $scope.products = {"BEVERAGES":[{"ProdName":"WATERBOTTLE500ml","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"SOFTDRINKS","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"FRESHLIMESODA","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"REDBULL","Price1":"80.00","PageName":"BEVERAGES"}],"CHOCOLATE CONCEPTS":[{"ProdName":"WILLY WONKA","Price1":"150.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"BROWINE BREAK","Price1":"133.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"CHOCOHOLICS","Price1":"137.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"CHOCOLAVA","Price1":"187.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"FERRERO ROCHER","Price1":"195.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"COFFEE CRAZE","Price1":"137.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"CHOCOREO","Price1":"126.00","PageName":"CHOCOLATE CONCEPTS"},{"ProdName":"OVER DOSE","Price1":"150.00","PageName":"CHOCOLATE CONCEPTS"}],"DRY FRUIT":[{"ProdName":"CHCO STICKS(5PCS)","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"CHOCO CHIPS","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"HOT CHLATE FUDGE","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"R. ALMOND","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"R. CASHEW","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"CARAMEL CRUNCHES","Price1":"20.00","PageName":"DRY FRUIT"},{"ProdName":"BUTTER SCOTCH CRUNCHES","Price1":"20.00","PageName":"DRY FRUIT"}],"FAVOURITE CONCEPTS":[{"ProdName":"KARAMEL BROWNIE","Price1":"140.00","PageName":"FAVOURITE CONCEPTS"},{"ProdName":"OREO SHOT","Price1":"125.00","PageName":"FAVOURITE CONCEPTS"}],"SEASONAL CONCEPTS":[{"ProdName":"VERRY BERRY FRUIT","Price1":"150.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CHOCO NUT","Price1":"140.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CREMY STRAWBERRIES","Price1":"150.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"NUTTELLA BROWNIE","Price1":"162.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CHOC-LATE","Price1":"170.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"MR ALPHANSO","Price1":"185.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"SITAPAL BITE","Price1":"60.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"TWISTED MANGO","Price1":"140.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"BITE FULL OF JAMOON","Price1":"160.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"ORANGE RUSH","Price1":"145.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CELEBRATING SITAFAL","Price1":"150.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CHOCO NUT SMALL","Price1":"75.00","PageName":"SEASONAL CONCEPTS"},{"ProdName":"CRAZY BANA-FO","Price1":"132.00","PageName":"SEASONAL CONCEPTS"}]};
        console.log($scope.products);
        
        $.each($scope.products, function (key, data) {
                $scope.keyName=key;
                return false;
            })
        $scope.pageProds=$scope.products[$scope.keyName];

            $scope.selected = 0;
    $scope.getdata=function(pagename, $index){


       $scope.selected = $index; 
       
    //console.log(pagename);
        //console.log($scope.products);

        $scope.keyName=pagename;
        $scope.pageProds=$scope.products[pagename];     
        console.log($scope.pageProds);        
    }
    
    $scope.increment = function(product) {
        product.qty++
        
    };
    $scope.decrement = function(product) {
        product.qty--
    };

    // $scope.cartproducts = [{"ProdName":"WATERBOTTLE500ml","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"SOFTDRINKS","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"FRESHLIMESODA","Price1":"80.00","PageName":"BEVERAGES"},{"ProdName":"REDBULL","Price1":"80.00","PageName":"BEVERAGES"}];
    //     console.log($scope.cartproducts);
    // var og=[];
     //og[$rootScope.org_name]={};
    //$scope.cartproducts = og;
    $scope.saved = localStorage.getItem('cartproducts');
    $scope.cartproducts = (localStorage.getItem('cartproducts') !== null) ? JSON.parse($scope.saved) : [];

    //console.log($scope.cartproducts);
    localStorage.setItem('storeurl',s_url );
    $scope.savedurl = localStorage.getItem('storeurl');
    
    //if ($scope.savedurl === s_url ) {
       // $scope.saved = localStorage.getItem('cartproducts');
       // $scope.cartproducts = (localStorage.getItem('cartproducts') !== null) ? JSON.parse($scope.saved) : [];
      //  localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));

    //}
    
    
    $scope.increment = function(cartproduct) {
        cartproduct.qty++;
        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts))
    };
    $scope.decrement = function(cartproduct, index) {
        cartproduct.qty--;
        if (cartproduct.qty <= 0) {
            $scope.cartproducts.splice(index, 1)
        }
        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts))
    };
    
    
     $scope.addtocart = function(product) { 
     //$scope.loading=true; 

     var aa=this;
    aa.loading=true;
    setTimeout(function() {
    $scope.$apply(function() {
    aa.loading=false;
 
        var addToArray = !0;
        for (var i = 0; i < $scope.cartproducts.length; i++) {
            if ($scope.cartproducts[i].ProdName === product.ProdName && $scope.cartproducts[i].option === product.option) {
                $scope.cartproducts[i].qty++;
                localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));
                addToArray = !1;
                break
            }
        }
        if (addToArray) {
            var cart = {
                ProdName: product.ProdName,
                Price1: product.Price1,
                qty: 1,
                option: product.option,
                image: "http://sample.com/thisis_image.png",
                store: org_code,
            };
            $scope.cartproducts.push(cart);
            localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));
            
            //console.log($scope.cartproducts);
          
            //sessionStorage.sessionproduct = JSON.stringify($scope.cartproducts);
            //$scope.sessionproduct = JSON.parse(sessionStorage.sessionproduct);
            //console.log($scope.sessionproduct);
        }
           });
  }, 800);
        
    }; 
        
    $scope.removeItem = function(x) {
    var aa=this;
    aa.loading=true;
    setTimeout(function() {
    $scope.$apply(function() {
        $scope.errortext = "";
        $scope.cartproducts.splice(x, 1);
        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));
            aa.loading=false;
                   });
  }, 600);
        
    }

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cartproducts, function(product) {
            total += product.qty * product.Price1
        })
        return total
    }
    $scope.remove = function() {
        if (cartproduct.qty <= 0) {
            $scope.cartproducts.splice($index, 1)
        }
    }
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.cartproducts, function(cartproduct) {
            count += cartproduct.done ? 0 : 1
        });
        return count
    };
   /* $scope.archive = function() {
        var oldTodos = $scope.cartproducts;
        $scope.cartproducts = [];
        angular.forEach(oldTodos, function(cartproduct) {
            if (!cartproduct.done) {
                $scope.cartproducts.push(cartproduct)
            } else {
                for (var i = 0; i < $scope.cartproducts.length; i++) {
                    if ($scope.cartproducts[i].ProdName === product.ProdName && $scope.cartproducts[i].option === product.option) {
                        $scope.cartproducts[i].qty++;
                        localStorage.setItem('qty', JSON.stringify($scope.cartproducts))
                    } else {
                        $scope.cartproducts.push(cartproduct);
                        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts))
                    }
                }
            }
        });
        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts))
    };
    */
    $scope.scrollTo = function(id) {
        $location.hash(id)
    };
    
    //Showing modal box for Extra options of products
    $scope.showModal = function(id) {
        $scope.found = $filter('getById')($scope.products, id)
    }
    //Clear all function for cart
    $scope.clearCart = function() {
        $scope.cartproducts.splice(0, $scope.cartproducts.length);
        localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));
        location.reload();
    }

        $scope.outletcheck = function(){
            if ($scope.savedurl !== s_url) {
                     $scope.cartproducts = $filter('filter')($scope.cartproducts, {store:org_code});
                localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));       
            }       
            
        }   
        
        //User management       
        $http.get('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/getusers').success(function(data) {
        $scope.users = data;
        //console.log($scope.users);
    });

        //User Login Authentication 
        $scope.checkLogin=function(user){
              for (var i = 0; i < $scope.users.length; i++) {                 
                    if ($scope.users[i].mobile === user.username) {
                        if ($scope.users[i].u_password === user.u_password ) {
                                $scope.user = $filter("filter")($scope.users, {mobile:user.username, u_password:user.u_password});
                                //console.log($scope.user);
                                localStorage.setItem('loguser', JSON.stringify($scope.user));
                                $scope.loginmsg="Your Successfully Loggedin";
                                location.reload();
                        break;
                            
                        }else{
                            $scope.loginerror="You Entered Wrong Password";
                            //console.log('Password wrong');
                    
                        }
                    }else{
                        $scope.loginerror="Invalid Mobile number ";
                        //console.log('Username wrong');
                        
                    }
                }
                $rootScope.sessionuser = localStorage.getItem('loguser');   
            $rootScope.data= JSON.parse($scope.sessionuser);    
            $location.path('/restaurant/'+org_code);
            
            
            }           
            
            //Set auth user data for show in header and order page
            $rootScope.sessionuser = localStorage.getItem('loguser');   
            //console.log($rootScope.sessionuser);
            $rootScope.data= JSON.parse($scope.sessionuser);
            if($rootScope.data){    
                    $rootScope.loguserid=$rootScope.data[0].id;
                    $rootScope.logusername=$rootScope.data[0].name;
                    //console.log($rootScope.logusername);
                    $rootScope.loguseremail=$rootScope.data[0].email;
                    $rootScope.logusermobile=$rootScope.data[0].mobile;
                    
            }   

        //User Logout with clear cart 
            $rootScope.logout=function(){
                localStorage.clear();
                $location.path('/restaurant/'+org_code);
                location.reload();
                
            }
    
            //final output of cartproducts
                 $scope.cartproducts = $filter('filter')($scope.cartproducts, {store:org_code});
            //final output of cartproducts
    

            
            $scope.IsVisible = false;
            $scope.IsHide = false;
      
            $scope.signup = function (user) {
                var data = {
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                u_password: user.u_password,                
                };
                
                var isExist= $filter("filter")($scope.users, {mobile:user.mobile});
                console.log(isExist);
                if(isExist.length <= 0){
                        //Call the services
                $http.post('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/signup', JSON.stringify(data)).success(function (data) {
                if (data === 'success'){
                    
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
                $scope.IsHide = $scope.IsHide ? false : true;
         
                }else{
                    $scope.mExist='Mobile Number Already Registered with us';
                }                   
                });
                    
                }else{
                    $scope.mExist='Mobile Number Already Registered with us';
                }
            
                };
            //Vlaidation with OTP Status change
            $scope.verify = function (user) {
                
                var data = {
                name:user.name,
                otp: user.otp,
                mobile:user.mobile
                };
                //Call the services
                $http.post('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/verifyotp', JSON.stringify(data)).success(function (res) {
                if (res === 'success'){                 
                    $scope.otpmsg="You have been Registered Successfully";
                    $scope.verify = false;
                
                }else{
                    $scope.otpmsg="Entered Wrong OTP";
                    
                }
                $location.path('/restaurant/'+org_code);                
                });
                };
                
                $scope.checkout = function () {
                var data = $scope.cartproducts;
                //Call the services
                $http.post('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/checkout/'+$rootScope.loguserid, JSON.stringify(data)).success(function (res) {
                if (res === 'success'){
                $scope.cartproducts.splice(0, $scope.cartproducts.length);
                localStorage.setItem('cartproducts', JSON.stringify($scope.cartproducts));
                }                   
                });
                };
                
        //User orderd Details for My orders page                
        $http.get('http://prod1.cozyinfo.com/cozypos/onlineordering/index.php/home/myorders/'+$rootScope.loguserid).success(function(data) {
        $scope.myorders = data;
            
        });
        
        
        //order page validation with cartproducts or not
            if(s_url.indexOf('/order') > -1){               
                if( $scope.cartproducts.length === 0){
                    $location.path('/restaurant/'+org_code);
                }
            }
        //order page validation with cartproducts or not
            if(s_url.indexOf('/myorders') > -1){                
                if( $scope.sessionuser === null){
                    $location.path('/restaurant/'+org_code);
                }
            }
            $scope.orderpage=function(){
                location.reload();
                $location.path('/myorders');
            }

  
    
}])



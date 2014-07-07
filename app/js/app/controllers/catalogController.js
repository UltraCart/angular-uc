"use strict";

module.exports = function(app) {
    var baseUrl = app.get("apiBase");
    var merchantId = "SEAM";

    app.controller("CatalogController", function($scope, $http) {

        $http.Provider.defaults.headers.common = {"cache-control": "no-cache", "X-UC-Merchant-Id": merchantId};
        $http({
            method: "GET",
            url: baseUrl,
            data: {}
        })
        .success(function(cart, status, headers, config) {
            if(cart && cart.cartId) {
                window.myCart = cart;
                $scope.cartDisplay = cart;
            }
        })
        .error(function(cart, status, headers, config) {
            console.log(cart);
        });

    }); // end app.controller("ItemController")
}; // end module.exports
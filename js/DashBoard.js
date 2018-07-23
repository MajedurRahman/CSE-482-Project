let pageNumber = 0;
let offsetLength = 16;


$(document).ready(function () {
    setItemToDashBoard().then(function (resolve) {
        console.log("Product Added Done")
    });

});


function setItemToDashBoard() {


    return new Promise(function (resolve, reject) {
        getProductList().then(function (resolve, reject) {
            console.log("Product List ", resolve, reject)
            if (resolve != null) {
                for (let i = pageNumber * offsetLength; i < (pageNumber * offsetLength) + offsetLength; i++) {
                    if (resolve.length >= i)
                        setProductList(resolve[i]).then(function () {
                        });
                }
            }

            resolve(true)


        });
    })

}


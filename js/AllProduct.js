let pageNumber = 0;
let offsetLength = 16;


$(document).ready(function () {
    setItemToAllProduct().then(function (resolve) {
        console.log("Product Added Done")
    });
    setAction()
});


function setItemToAllProduct() {
    return new Promise(function (resolve, reject) {
        getProductList().then(function (resolve, reject) {
            console.log("Product List ", resolve, reject);
            if (resolve != null) {
                for (let i = pageNumber * offsetLength; i < (pageNumber * offsetLength) + offsetLength; i++) {
                    if (resolve.length >= i)
                        setProductList(resolve[i], pager_all_product).then(function () {
                        });
                }
            }
            resolve(true)


        });
    })

}

function setAction() {

    $("#addProductButton").click(function (e) {
        $("#modelAddProduct1").modal();
    });

    $("#removeProductButton").click(function (e) {
        $("#modelAddProduct").modal();
    });
}


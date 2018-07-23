function setProductList(itemData) {
    return new Promise(function (res, rej) {
        $("#productItemDiv").append(ProductDiv(itemData));
        $(".buyButton").click(function (e) {
            console.log(this.name);
            $("#modelBuySell").modal()
        });

        $(".sellButton").click(function (e) {
            console.log(this.name);
            $("#modelBuySell").modal()
        });

        res(true)
    })


}


/**
 * @return {string}
 */
function ProductDiv(itemData) {
    console.log("Addedd Item ", itemData)
    if (itemData != null && itemData !== undefined) {
        let itemProduct = '   <div class="col-lg-3 col-md-6 mb-4" id="productItem' + itemData.productId + '">\n' +
            '\n' +
            '                    <div class="card">\n' +
            '                        <div class="view overlay flex-center flex-column">\n' +
            '                            <img style="height: 200px; width: 180px"\n' +
            '                                 src="' + itemData.productImgUrl + '"\n' +
            '                                 class="card-img-top " alt="" id="productItemImage">\n' +
            '                            <a>\n' +
            '                                <div class="mask rgba-white-slight"></div>\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '\n' +
            '                        <div class="card-body text-center">\n' +
            '                            <a href="" class="grey-text">\n' +
            '                                <h5 id="productItemCategory">' + itemData.productCategory + '</h5>\n' +
            '                            </a>\n' +
            '                            <h5>\n' +
            '                                <strong>\n' +
            '                                    <a href="" class="dark-grey-text" id="productItemName">' + itemData.productName +
            '                                        <span class="badge badge-pill danger-color" id="productItemAvailable"> ' + itemData.productAvailable + '</span>\n' +
            '                                    </a>\n' +
            '                                </strong>\n' +
            '                            </h5>\n' +
            '                            <h4 class="font-weight-bold blue-text">\n' +
            '                                <strong id="productItemPrice">' + itemData.productPrice + ' BDT</strong>\n' +
            '                            </h4>\n' +
            '                        </div>\n' +
            '\n' +
            '                        <div class="flex-center">\n' +
            '                            <button type="button" style="width: 50% ;"\n' +
            '                                    class=" z-depth-0 buyButton btn btn-block btn-blue-grey rounded-0" name="' + itemData.productId + '" id="productItemBuyButton' + itemData.productId + '">Buy' +
            '                            </button>\n' +
            '                            <button type="button" style="width: 50%;"\n' +
            '                                    class="btn z-depth-0 btn-block btn-success rounded-0 sellButton" name="' + itemData.productId + '" id="productItemSellButton' + itemData.productId + '">Sell' +
            '                            </button>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '\n' +
            '\n' +
            '                </div>'


        return itemProduct
    }
}


function getProductList() {

    return new Promise(function (resolve, reject) {


        try {


            setTimeout(function (e) {
                var productItem = {
                    productName: "Denim shirt",
                    productCategory: "Shirt",
                    productImgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                    productPrice: 1600,
                    productDiscount: 0,
                    productAvailable: 152,
                    productId: 135,
                };
                var productItem1 = {
                    productName: "Denim shirt",
                    productCategory: "Shirt",
                    productImgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                    productPrice: 1600,
                    productDiscount: 0,
                    productAvailable: 43,
                    productId: 45,
                };
                var productItem2 = {
                    productName: "Denim shirt",
                    productCategory: "Shirt",
                    productImgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                    productPrice: 1200,
                    productDiscount: 0,
                    productAvailable: 142,
                    productId: 114,
                };
                var productItem3 = {
                    productName: "Denim shirt",
                    productCategory: "Shirt",
                    productImgUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                    productPrice: 1700,
                    productDiscount: 0,
                    productAvailable: 142,
                    productId: 1654,
                };
                let productList = [];
                productList.push(productItem);
                productList.push(productItem1);
                productList.push(productItem2);
                productList.push(productItem3);

                resolve(productList)
            }, 1000)
        } catch (e) {

            console.log("Error ", e);

            reject(0)
        }


    })

}
let productBin = {
    "requestId": null,
    "data": [
        {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
        }
    ],
    "message": "success"
};

// Fungsi menghitung total quantity
function hitungTotalQuantity(productCode) {
    const data = productBin.data; // Ambil data dari response json
    let totalQuantity = 0;

    
    for (let item of data) { //melakukan perulangan hingga var data habis
        if (item.productCode === productCode) { //cek code
            totalQuantity += item.quantity; // Menambahkan quantity yang ditemukan pada perulangan
        }
    }

    return totalQuantity; // Kembalikan hasil
}

const productCodeToCheck = "FBR00040101";
const totalQuantity = hitungTotalQuantity(productCodeToCheck);

//hasil
console.log(`Total quantity untuk produk ${productCodeToCheck} adalah: ${totalQuantity}`);

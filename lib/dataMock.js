const dataCustomersMock=[
        {
              "_id" : 555555, "docType" : "nif", "docNum" : "11223344E", "email" : "it@parlem.com", "customerId" : "11111", "givenName" : "Enriqueta", "familyName1" : "Parlem", "phone" : "668668668", 
              "products":[
                { "_id" : 1111111, "productName" : "FIBRA 1000 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 933933933, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11111" }
            ]
        },
        {
            "_id" : 555556, "docType" : "nif", "docNum" : "11223344E", "email" : "it@parlem.com", "customerId" : "11112", "givenName" : "Enriqueta", "familyName1" : "Parlem", "phone" : "668668668", 
            "products":[
              { "_id" : 1111111, "productName" : "FIBRA 1000 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 933933933, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11112" },
              { "_id" : 1111112, "productName" : "FIBRA 100 ADAMO", "productTypeName" : "ftth", "numeracioTerminal" : 933933933, "soldAt" : "2019-01-09 14:26:17", "customerId" : "11112" }
          ]
      }
];

module.exports=dataCustomersMock;
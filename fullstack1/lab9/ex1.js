//db.getCollection('Restaurants').find({})
//
//
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb28"), 
//    "address" : {
//        "building" : "1008", 
//        "street" : "Morris Park Ave", 
//        "zipcode" : "10462"
//    }, 
//    "city" : "Bronx", 
//    "cuisine" : "Bakery", 
//    "name" : "Morris Park Bake Shop", 
//    "restaurant_id" : "30075445"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb29"), 
//    "address" : {
//        "street" : "Thai Son Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Manhattan", 
//    "cuisine" : "Vietnamese", 
//    "name" : "Pho Me Long Time", 
//    "restaurant_id" : "30075455"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2a"), 
//    "address" : {
//        "building" : "253", 
//        "street" : "East 167 Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Bronx", 
//    "cuisine" : "Chicken", 
//    "name" : "Mom's Fried Chicken", 
//    "restaurant_id" : "40382900"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2b"), 
//    "address" : {
//        "building" : "120", 
//        "street" : "East 56 Street", 
//        "zipcode" : "19800"
//    }, 
//    "city" : "Mahattan", 
//    "cuisine" : "Italian", 
//    "name" : "Montebello Restaurant", 
//    "restaurant_id" : "40397082"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2c"), 
//    "address" : {
//        "building" : "195", 
//        "street" : "Soprano Street", 
//        "zipcode" : "17500"
//    }, 
//    "city" : "Staten Island", 
//    "cuisine" : "Hamburgers", 
//    "name" : "Joeys Burgers", 
//    "restaurant_id" : "40397555"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2d"), 
//    "address" : {
//        "building" : "200", 
//        "street" : "Queens Boulevard", 
//        "zipcode" : "19700"
//    }, 
//    "city" : "Queens", 
//    "cuisine" : "American", 
//    "name" : "Brunos on the Boulevard", 
//    "restaurant_id" : "40397678"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2e"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Sushi Street", 
//        "zipcode" : "17700"
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Iron Chef House", 
//    "restaurant_id" : "40397699"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2f"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Fontana Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Wasabi Sushi", 
//    "restaurant_id" : "40398000"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb30"), 
//    "address" : {
//        "building" : "900", 
//        "street" : "Goodfellas Street", 
//        "zipcode" : "17788"
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Delicatessen", 
//    "name" : "Sal's Deli", 
//    "restaurant_id" : "40898000"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb31"), 
//    "address" : {
//        "building" : "909", 
//        "street" : "44 Gangster Way", 
//        "zipcode" : "17988"
//    }, 
//    "city" : "Queens", 
//    "cuisine" : "Delicatessen", 
//    "name" : "Big Tony's Sandwich Buffet", 
//    "restaurant_id" : "40898554"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb32"), 
//    "address" : {
//        "building" : "1201", 
//        "street" : "121 Canolli Way", 
//        "zipcode" : "17989"
//    }, 
//    "city" : "Queens", 
//    "cuisine" : "Delicatessen", 
//    "name" : "The Godfather Panini Express", 
//    "restaurant_id" : "40898554"
//}











//-------------------------------------------

//db.getCollection('Restaurants').find({
//'cuisine':'Japanese'})

//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2e"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Sushi Street", 
//        "zipcode" : "17700"
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Iron Chef House", 
//    "restaurant_id" : "40397699"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2f"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Fontana Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Wasabi Sushi", 
//    "restaurant_id" : "40398000"
//}



//-------------------------------------------

//db.getCollection('Restaurants').find({
//'cuisine':'Japanese'},{
//'cuisine':1,'name':1})


//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2e"), 
//    "cuisine" : "Japanese", 
//    "name" : "Iron Chef House"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2f"), 
//    "cuisine" : "Japanese", 
//    "name" : "Wasabi Sushi"
//}



//-------------------------------------------

//db.getCollection('Restaurants').find({
//'cuisine': {$eq:'Japanese'}},
//{'id':1,'cuisine':1,'name':1,'city':1,'restaurant_id':1}).sort({'restaurant_id':1})
//
//
//
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2e"), 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Iron Chef House", 
//    "restaurant_id" : "40397699"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2f"), 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Wasabi Sushi", 
//    "restaurant_id" : "40398000"
//}


//-------------------------------------------

//db.getCollection('Restaurants').find({
//    $and:[
//        {'cuisine': {$eq:'Delicatessen'}},
//         {'city': {$ne:'Brooklyn'}}
//    ]},
//    {'_id':0,'cuisine':1,'name':1,'city':1}).sort({'name':1})
//
//
//
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb31"), 
//    "city" : "Queens", 
//    "cuisine" : "Delicatessen", 
//    "name" : "Big Tony's Sandwich Buffet"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb32"), 
//    "city" : "Queens", 
//    "cuisine" : "Delicatessen", 
//    "name" : "The Godfather Panini Express"
//}




//-------------------------------------------

//db.getCollection('Restaurants').find({
//    $and:
//    [
//        {'cuisine':{$in:["Bakery", "Chicken", "Hamburgers","American"]}},
//        {'city': {$ne:'Brooklyn'}},
//        {'restaurant_id':{$gt:'4000000'}}
//    ]},
//    {'_id':0,'cuisine':1,'name':1,'city':1,'restaurant_id':1}).sort({'restraurant_id':-1})
//
//{ 
//    "city" : "Bronx", 
//    "cuisine" : "Chicken", 
//    "name" : "Mom's Fried Chicken", 
//    "restaurant_id" : "40382900"
//}
//{ 
//    "city" : "Staten Island", 
//    "cuisine" : "Hamburgers", 
//    "name" : "Joeys Burgers", 
//    "restaurant_id" : "40397555"
//}
//{ 
//    "city" : "Queens", 
//    "cuisine" : "American", 
//    "name" : "Brunos on the Boulevard", 
//    "restaurant_id" : "40397678"
//}



//db.getCollection('Restaurants').find({
//    $or:
//    [{'name':{$regex: /Thai$/}},{'address.street':{$regex: /Street$/}},{'address.zipcode':{$eq: '17988'}}]})
//
//
//
//
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb29"), 
//    "address" : {
//        "street" : "Thai Son Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Manhattan", 
//    "cuisine" : "Vietnamese", 
//    "name" : "Pho Me Long Time", 
//    "restaurant_id" : "30075455"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2a"), 
//    "address" : {
//        "building" : "253", 
//        "street" : "East 167 Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Bronx", 
//    "cuisine" : "Chicken", 
//    "name" : "Mom's Fried Chicken", 
//    "restaurant_id" : "40382900"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2b"), 
//    "address" : {
//        "building" : "120", 
//        "street" : "East 56 Street", 
//        "zipcode" : "19800"
//    }, 
//    "city" : "Mahattan", 
//    "cuisine" : "Italian", 
//    "name" : "Montebello Restaurant", 
//    "restaurant_id" : "40397082"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2c"), 
//    "address" : {
//        "building" : "195", 
//        "street" : "Soprano Street", 
//        "zipcode" : "17500"
//    }, 
//    "city" : "Staten Island", 
//    "cuisine" : "Hamburgers", 
//    "name" : "Joeys Burgers", 
//    "restaurant_id" : "40397555"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2e"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Sushi Street", 
//        "zipcode" : "17700"
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Iron Chef House", 
//    "restaurant_id" : "40397699"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb2f"), 
//    "address" : {
//        "building" : "555", 
//        "street" : "Fontana Street", 
//        "zipcode" : null
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Japanese", 
//    "name" : "Wasabi Sushi", 
//    "restaurant_id" : "40398000"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb30"), 
//    "address" : {
//        "building" : "900", 
//        "street" : "Goodfellas Street", 
//        "zipcode" : "17788"
//    }, 
//    "city" : "Brooklyn", 
//    "cuisine" : "Delicatessen", 
//    "name" : "Sal's Deli", 
//    "restaurant_id" : "40898000"
//}
//{ 
//    "_id" : ObjectId("6243d8eec9707898f2e2cb31"), 
//    "address" : {
//        "building" : "909", 
//        "street" : "44 Gangster Way", 
//        "zipcode" : "17988"
//    }, 
//    "city" : "Queens", 
//    "cuisine" : "Delicatessen", 
//    "name" : "Big Tony's Sandwich Buffet", 
//    "restaurant_id" : "40898554"
//}


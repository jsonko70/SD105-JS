var jsonexample = {
    firstName: "Eric",
    lastName: "Couch",
    age: 46,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    cars:[{ make: "Ford", 
           model: 'F-150', 
        year: 2017, 
        color: 'black',
        engine: {	size: '5.0', 
             cylinders: 8 } },
       {	make: 'Ford', 
     model: 'Mustang', 
     year: 2016, 
     color: 'black',
     engine: {size: '5.0', 
         cylinders: 8 } }]
 }
 console.log(jsonexample.cars[0].model);
 console.log(jsonexample.cars[1].model);
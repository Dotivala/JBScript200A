console.log("\nMATH PRACTICE");
    console.log ("Your random card is", Math.ceil(Math.random()*13));

    const A = Math.ceil(Math.random()*13);
    const B = Math.ceil(Math.random()*13);
    const C = Math.ceil(Math.random()*13);
    const max = Math.max(A,B,C);
    console.log("The highest card is", max);

    const sa1 = Math.round( Math.PI *(13/2)**2);
    const sa2 = Math.round(Math.PI * (17/2)**2);
    console.log("The two surface areas are", sa1," & ", sa2, "in^2");

    const cost1 = (16.99 /sa1).toFixed(2);
    const cost2 = (19.99 / sa2).toFixed(2);
    console.log("The costs per square inch are", cost1, " & ", cost2);

console.log("\nADDRESS LINE")
    const address = " Arzan Dotivala\n 12th Ave Seattle, WA 98122"
    const spaceindex = address.indexOf(' ');
    const firstName = address.slice(0, spaceindex);
    console.log(firstName);


   // const lastName = 'Dotivala\n';
  //  const streetAddress =12 + 'th Ave';
  //  const city = 'Seattle';
  //  const state = 'WA';
  //  const zipCode = 98122;

  //  let fullAddress = firstName + " " + lastName + " " + streetAddress + " " + city + " " + state + " " + zipCode
  //  console.log(fullAddress);

 console.log("FIND THE MIDDLE DATE")


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

console.log("\nADDRESS")
    const address = "Arzan Dotivala \n 12th Ave Seattle, WA 98122"
    const spaceindex = address.indexOf(' ');
    const endoflineindex = address.indexOf('\n');
    const commaslice = address.indexOf(', ');
    const lastspace = address.lastIndexOf(' ')
    const firstName = address.slice(0, spaceindex);
    const lastName = address.slice(spaceindex +1, endoflineindex);
    const streetAddress = address.slice(endoflineindex+2,26);
    const state = address.slice(commaslice+2, commaslice+5);
    const city = address.slice(commaslice-7,commaslice);
    const zipCode = address.slice(lastspace+1,lastspace+6)


    console.log(firstName); 
    console.log(lastName); 
    console.log(streetAddress); 
    console.log(city)
    console.log(state);
    console.log(zipCode)

console.log("\nFIND THE MIDDLE DATE")
    const startDate = new Date(2019,1,1)
    const endDate = new Date(2019,3,1)
    const middleDate =startDate+(endDate-startDate)/2
   console.log(middleDate)
console.log("\n")
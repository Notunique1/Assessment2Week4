///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const sum = cart.reduce((temp, x) => { 
    return temp + x.price;
  }, 0);
  
  console.log(sum);
// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {

    const taxAmount = cartTotal * tax;
  
    const totalWithTax = cartTotal + taxAmount;
  
    const finalTotal = totalWithTax - couponValue;
  
    return finalTotal;
  }
  console.log(calcFinalPrice(26.97, 15, .06)); 


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The info a restaurant may need is the following:

1. delivery address- stored for a place to deliver
2. email address- stored to market customer
3. phone number - stored to help with customer look up
4. credit card information-stored to take orders faster 

different datatypes:
1.For the deliver address I would select the data type of object.
2.For the email address I would select the data type of object. 
3.For the phone number I would select the number data type.
4.For the credit card info I would select number as date type.



*/

/*
    Now, create a customer object following your own
    guidelines.
*/



//CODE HERE
const person ={Address:'123 tree lane'}
console.log(person)
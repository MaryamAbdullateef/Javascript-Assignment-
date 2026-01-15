 //number 1
 
 let grade=75;
if (grade >= 25){
    console.log("Is a child")
    
}else  
 console.log("Is a youth");

//number5

let num= 10;
if (num <0){
    console.log("positive");

}else if (num<0){
    console.log("Negative");
}else{
    console.log("Zero");
}
//number 7
function sum (x,y){
    return x+y;
}
console.log(sum(10,12));
//Number 8
function CheckEvenOdd(num){
    if (num %2 ===0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(CheckEvenOdd(12));
//number 10
 const add=(x,y)=> 10+12
    console.log(add(10+12));
    //number 10b
     const ad=(num)=> (num %2 ===0 ? "even":"odd");
    console.log(ad(9));
    //sectionc A 1
    let x=15
    let y=30
    if(x<y){
        console.log("y")
    }else{
        console.log("x");
        
    }
//sectionc A2
let age= 25;
if (age<18){
    console.log("You are a minor");
}else if (age <=18 && age <=59){
    console.log("You are an Adult");
}else{
    console.log("You are a senior Citizen");
}

//sectionc A3
let number = 15;
if (number % 2 === 0){
    console.log("Even number");
}else {
    console.log("Odd number");
}

//section B
let gradeScore= 50;
if (gradeScore >=90 && gradeScore<=100){
    console.log("A");
}else if (gradeScore >=80 && gradeScore <=89){
    console.log("B");
}else if (gradeScore >=70 && gradeScore<=79){
    console.log("C");
}else if (gradeScore >=60 && gradeScore<=69){
    console.log("D");
}else if (gradeScore <60){
    console.log("F");
}

//SectionC i
let day = "Days of the week"
 switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
        console.log("Tuesday");
        break;
        case 3:
        console.log("Wednesday");
        break;
        case 4:
        console.log("Thursday");
        break;
        case 5:
        console.log("Friday");
        break;
        case 6:
        console.log("Saturday");
        break;
        case 7:
        console.log("Sunday");
        break;
         default:
            console.log("Days of the week");
        }

        //Section c 6
        let fruit ="pear";
        switch(fruit){
            case "Apple":
                console.log("Apple is red")
                break;
                 case "Banana":
                console.log("Banana is Yellow")
                break;
                 case "Apple":
                console.log("Orange is Orange")
                break;
                default:
                    console.log("Unknown fruit");
        }
        //Sectionc number7
        
      let num2 =15;
       const nov=(num)=> num2 >13 ?  console.log("Big number"): console.log("Small number");
    console.log(nov(12));

    //sectionc number 8
    let year =1994;
    let result=((year %4 ===0 && year % 100 == 0)|| year % 400 ===0? "Leap year" :"Not a leap year ");
    console.log(result);

    //sectionc number 9
    let balance=7000;
    let amount=5000;
    if (balance <= amount){
        console.log("withdrawal Successful!")
    }else{
        console.log("Insufficient funds!")

    }
    //sectiomc 10
     let trafficLightBehavior ="Purple";
        switch(trafficLightBehavior){
            case "Red":
                console.log("Stop")
                break;
                case "Yellow":
                console.log("Get ready")
                break;
                case "Green":
                console.log("Go")
                break;
                default:
                    console.log("Invalid color");


        }
            

        
    

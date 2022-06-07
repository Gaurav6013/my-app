import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Gaurav from './Components/Gaurav';
import Hi from './Components/Hi';
import Country from './container/Country';
import Countryfun from './container/Countryfun';
import Time from './Time/Time';
import Timefun from './container/Timefun';
import InDbtn from './container/InDbtn';


function App() {
  // 1st task----------------------------------------------------------------
  // const medicine = [
  //   {
  //     id: 101,
  //     name: 'Abacavir',
  //     quantity: 25,
  //     price: 150,
  //     expiry: 2022,
  //     status: true
  //   },
  //   {
  //     id: 102,
  //     name: 'Eltrombopag',
  //     quantity: 90,
  //     price: 550,
  //     expiry: 2021,
  //     status: true
  //   },
  //   {
  //     id: 103,
  //     name: 'Meloxicam',
  //     quantity: 85,
  //     price: 450,
  //     expiry: 2025,
  //     status: false
  //   },
  //   {
  //     id: 104,
  //     name: 'Allopurinol',
  //     quantity: 50,
  //     price: 600,
  //     expiry: 2023,
  //     status: true
  //   },
  //   {
  //     id: 105,
  //     name: 'Phenytoin',
  //     quantity: 63,
  //     price: 250,
  //     expiry: 2021,
  //     status: false
  //   }
  // ];

  // Medicine.map((m) => {
  //   for (let k in m) {
  //     console.log(m[k]);
  //   }
  // });

  // 2nd task----------------------------------------------------------------------
  // const Employee = [
  //   {
  //     name: "amit",
  //     age: 35,
  //     salary: 40000,
  //     bonus: 1000,
  //     status: true
  //   },
  //   {
  //     name: "ajay",
  //     age: 25,
  //     salary: 38000,
  //     bonus: 2000,
  //     status: false
  //   },
  //   {
  //     name: "mayur",
  //     age: 23,
  //     salary: 50000,
  //     bonus: 500,
  //     status: true
  //   },
  //   {
  //     name: "jay",
  //     age: 29,
  //     salary: 35000,
  //     bonus: 600,
  //     status: true
  //   },
  //   {
  //     name: "raj",
  //     age: 33,
  //     salary: 22000,
  //     bonus: 2000,
  //     status: true
  //   },
  // ]

  // Employee.map((E) => {
  //   for (let k in E) {
  //     console.log(E[k]);
  //   }
  // });

  // // 3rd task-----------------------------------------------------------------------
  // const person = {
  //   name: "Amit",
  //   age: 25
  // }

  // // 1st type
  // console.log(person.name, person.age);
  // // 2nd type
  // for (let k in person) {
  //   console.log(person[k]);
  // }

  // // 4th task-----------------------------------------------------------------------
  // const Person = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //   },
  //   {
  //     name: "Piyush",
  //     age: 40,
  //   },


  // ];

  // Person.map((p) => {
  //   for (let k in p) {
  //     console.log(p[k]);
  //   }
  // });

  // // 5th task-----------------------------------------------------------------------
  // const PErson = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //     "C",
  //     "HTML"
  //   ]
  // }

  // for (const k in PErson) {
  //   if (k === 'course') {
  //     PErson[k].map((p) => {
  //       console.log(p);
  //     })
  //   } else {
  //     console.log(PErson[k]);
  //   }
  // }

  // // 6th task--------------------------------------------------------------------------
  // const PERson = [
  //   {
  //     name: "Amit",
  //     age: 25,
  //     course: [
  //       "C",
  //       "HTML"
  //     ]
  //   },
  //   {
  //     name: "Ajay",
  //     age: 40,
  //     course: [
  //       "Java",
  //       "JavaScript"
  //     ]
  //   }
  // ]

  // PERson.map((p) => {
  //   for (let k in p) {
  //     if (k === 'course') {
  //       p[k].map((p1) => {
  //         console.log(p1);
  //       });
  //     } else {
  //       console.log(p[k]);
  //     }
  //   }
  // });

  // // 7th task------------------------------------------------------------------------------
  // const myObj = {
  //   name: "John",
  //   age: 30,
  //   cars: {
  //     car1: "Ford",
  //     car2: "BMW",
  //     car3: "Fiat"
  //   }
  // }

  // for (let k in myObj) {
  //   if (k === 'cars') {
  //     for (let j in myObj[k]) {
  //       console.log(myObj[k][j]);
  //     }
  //   } else {
  //     console.log(myObj[k]);
  //   }
  // }

  // // 8th task--------------------------------------------------------------------------------
  // const data = {
  //   personal_info: {
  //     name: 'amit',
  //     age: 25,
  //     city: 'surat'
  //   },
  //   courses: ["C", "JavaScript", "React"],
  //   branches: {
  //     rwl: {
  //       admission: 50,
  //       vacant_seat: 10
  //     },
  //     rw2: {
  //       admission: 30,
  //       vacant_seat: 20
  //     },
  //     rw3: {
  //       admission: 25,
  //       vacant_seat: 25
  //     },
  //     rw4: {
  //       admission: 40,
  //       vacant_seat: 10
  //     }
  //   }
  // }

  // for (let k in data) {
  //   if (k === 'personal_info') {
  //     for (let j in data[k]) {
  //       console.log(data[k][j]);
  //     }
  //   } else if (k === 'courses') {
  //     data[k].map((d) => {
  //       console.log(d);
  //     });
  //   } else {
  //     for (let i in data[k]) {
  //       console.log(data[k][i].admission, data[k][i].vacant_seat);
  //     }

  //   }
  // }
  // let medicineM = medicine.filter((m) =>  m.status === true && m.expiry >= 2022 );
  // let totalPrice = medicineM.reduce((acc,m) => acc + m.price ,0);

  // let employee = Employee.filter((e,i) =>  e.status === true);
  // let ANS = employee.reduce((acc,e,i) => acc + e.bonus + e.salary ,0);
  return (
    <div className="App">
        {/* <table border="1">
         <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Expiry</td>
            <td>Status</td>
            <td>total price</td>
         </tr>
       {
        medicineM.map((m,i) => {
          let {id,name,quantity,price,expiry,status,ans} = m
          return(
            <tr key={i}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{expiry}</td>
            <td>{status.toString()}</td>
            {i === 0 ? <td rowSpan="2">{totalPrice}</td> : null}
          </tr>
          )
          
        })

      }
      </table>
      <table border="1">
        <tr>
           <td>Name</td>
           <td>Age</td>
           <td>Salary</td>
           <td>Bonus</td>
           <td>Status</td>
           <td>Total bonus</td>
           <td>Total expense</td>
        </tr>
        {
          employee.map((e,i) => {
            let {name,age,salary,bonus,status} = e
            return(
              <tr key={i}>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{salary}</td>
                 <td>{bonus}</td>
                 <td>{status.toString()}</td>
                 <td>{salary + bonus}</td>
                 {i === 0 ? <td rowSpan="4">{ANS}</td> : null}
                 
              </tr>
            )
          })
        } 
      </table> */}
      {/* <Country/>
      
      <Countryfun /> */}
      {/* <Time /> */}
      {/* <Timefun /> */}
      <InDbtn />
    </div>
  );
}

export default App;

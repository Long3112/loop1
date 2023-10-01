
  //bai1
  function bai_1() {
      let i = 1;
      for (i = 1; i < 100; i++)
      {
      document.write(i +"<br>")
         if (i == 99) {
              alert("da den so 99 hoan thanh")
          }
      }
  }
  //bai2
  function bai_2(){
  let message;
  let a =+prompt(" vui long nhap nhieu do")
  if (a > 100)
  {
      message = prompt("vui long giam nhiet do")
  }
  else if (a < 20)
  {
      message = prompt("vui long tang nhieu do")
  }
  else
  {
      document.write("nhiet do dat chuan " + a + " do")
  }

  //bai3
   function bai_3() {
       let a = 0;
       let b = 1;
       let c = 0;
       for (let i = 1; i < 10; i++) {
           {
               c = a + b;
               a = b;
               b = c;
           }
           document.write(c + "  ")
       }
   }




  //bai 4
  function bai_4() {
      let a = 0;
      let b = 1;
      let c = 0;

      for (let i = 1; i < 10; i++) {
          {
              c = a + b;
              a = b;
              b = c;
          }
          if (c % 5 == 0) {
              document.write(c + "  ")
          }
      }
  }

//bai 5
function bai_5() {
    let a = 0;
    let b = 1;
    let c = 0;
    let tong = 0;

    for (let i = 1; i < 10; i++) {
        {
            c = a + b;
            a = b;
            b = c;
        }
        tong = tong + c;
    }
    document.write(tong);
}
function bai_6() {
    let tong = 0
    for (let i = 0; i < 30; i++) {
        if (i % 7 == 0) {
            tong = tong + i
        }
    }
    document.write(tong);

}
function bai_7() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            document.write(i + "Fizz<br>");
        } else if (i % 5 == 0) {
            document.write(i + "Buzz<br>");
        } else if (i % 3 == 0 && i % 5 == 0) {
            document.write(i + "FizzBuzz<br>");
        }
    }
}
function bai_8() {
    let phamvi = +prompt("Pham vi tu 0-");
    let nhapso = +prompt("Guess? :");
    let random;
    if (phamvi) {
        random = Math.random * phamvi;
        console.log(random);
        if (random == nhapso) {
            alert("dung");
        } else {
            while (random != nhapso) {
                alert("doan sai")
                let nhapso = +prompt("Guess? again :");
            }
        }
        alert("dung");

    }
}}


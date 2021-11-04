let send_mail = () => {

  var submit = document.querySelector("#submit")
  let namee = document.querySelector("#name")
  let email = document.querySelector("#email")
  let subject = document.querySelector("#subject")
  let message = document.querySelector("#textarea")

       Email.send({
       Host: "smtp.gmail.com",
       Username:"swethabaskaran31072003@gmail.com",
       Password: "jzxkvldsflcjpuoz",
       To: "swethasambothi@gmail.com",
       From: "swethabaskaran31072003@gmail.com" ,
       Subject: `${namee} sent this mail`,
       Body: `<div> Name: ${namee} <br />Email: ${email} <br /><br />Subject: ${subject} <br /><br />Message: ${message} </div>`,

  }).then(
     ()=>{
        alert("Thank you for your message");
     }
  )
};

submit.addEventListener("click", () => send_mail())

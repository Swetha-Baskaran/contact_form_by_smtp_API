var submit = document.querySelector("#submit")
let send_mail = () => {

  let namee = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let subject = document.querySelector("#subject").value
  let message = document.querySelector("#textarea").value

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

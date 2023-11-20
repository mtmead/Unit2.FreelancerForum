const names= ["Alice","Bob","Carol"]; 

const prices= ["30","50","70"];

const occupations= ["writer","teacher","programmer"];

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
    //average starting price updated to $50
    //new freelancers continue to appear every few seconds, and the average starting price is updated accordingly
  ];

const addFreelancerID= setInterval(addFreelancer, 1000);

function addFreelancer(){
    if ()
}

  function render () {
    const names=document.getElementById("names");
    const nameElements=freelancers.map((name) => {
        const element = document.createElement("li");
        element.classList.add("name", name.price, name.occupation);
        return element;
    })
  }

// function that logs "hi"
/* function logHi() {
    console.log("hi")
  }
// save this to clear
  const intervalId = setInterval(logHi, 1000)
  
// function to stop process
  function stop() {
    clearInterval(intervalId);
  }
  
// stop process after 6 seconds
  setTimeout(stop, 6000)
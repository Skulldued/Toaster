const notifications = document.querySelector(".notifications"),

 buttons =document.querySelectorAll(".button  .btn");

const toastDetails ={
    
    success:{
        icon:"fa-circle-check",
        text:"Success: This is a success toast."
    },
    error:{
        icon:"fa-circle-xmark",
        text:"Error: This is a Error toast."
    },
    warning:{
        icon:"fa-triangle-exclamation",
        text:"Warning: This is a Warning toast."
    },
    info:{
        icon:"fa-circle-info",
        text:"info: This is a info toast."
    }
}

const removeToast =(toast)=>{
toast.classList.add("hide");
if(toast.timeoutId) clearTimeout(toast.timeoutId); // clearing the timeout for toast
setTimeout(()=> toast.remove(),500); //removing the toast after 500s
}

const createToast = (id) => {
    //Getting the icons and text for toast on the id passed
    const {icon , text} = toastDetails[id];
  // console.log("btn clicked",id);
  const toast = document.createElement("li"); //creating a new li element for the toast
  toast.className = `toast ${id}`; //fetting the classes for the toast
  //setting the innerhtml for toast
  toast.innerHTML = `  <div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${text}</span>
  </div>
  <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);//append toast to notifications ul
  toast.timeoutId = setTimeout(()=> removeToast(toast),5000);
};
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});

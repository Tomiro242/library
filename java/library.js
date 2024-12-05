let ne = document.querySelector ('.ne');
let btnCancel = document.querySelector ('.btnCancel');
let sub=document.querySelector ('#sub');
let main = document.querySelector ('.main');
let divcount;
let alpha;
let bravo;
let charlie;

ne.addEventListener('click', openForm);
btnCancel.addEventListener ('click', closeForm);
sub.addEventListener ('click', stopSub);

function stopSub (event){
  event.preventDefault();
  addBookToLibrary();
  createCard ();
  console.log(mylibrary);
  closeForm();
};



  
   /*form javascript*/
   function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  //the processs//

  const mylibrary = [];

function Book (title,author,page,amount){
               this.title = title;
               this.author = author;
               this.page = page;
               this.amount = amount;

};



function addBookToLibrary () {
           alpha = document.querySelector('#booky').value;
           bravo = document.querySelector ('#auth').value;
           charlie = document.querySelector ('#page').value;
           divcount = Math.random () * 1000; 

           return mylibrary.push(new Book (alpha,bravo,charlie,divcount));
     };


// function to create card to display book information//
function createCard (){
  const newDiv = document.createElement ("div");
  const par1 = document.createElement ("p");
  const par2 = document.createElement ("p");
  const par3 = document.createElement ("p");
  const delbtn = document.createElement ("button");
  const readbtn = document.createElement ("button");
  readbtn.classList.add ("tog");
  let arNum = mylibrary.length -1;
  let removearray;
  newDiv.classList.add("newCard");

  newDiv.appendChild(par1);
  newDiv.appendChild (par2);
  newDiv.appendChild (par3);
  newDiv.appendChild (delbtn);
  newDiv.appendChild (readbtn);
  main.appendChild (newDiv);

  newDiv.dataset.arraynum =`${divcount}`;
  console.log (newDiv.dataset.arraynum);
  delbtn.textContent = "X";
  newDiv.style.position = "relative";
  delbtn.style.cssText = "position: absolute ; top:0 ; right:0";
  readbtn.textContent = "read";
  //readbtn.style.cssText = "position:absolute ; bottom:0 ; right:0; background: green;";//

  par1.textContent = mylibrary[arNum].title;
  par2.textContent = mylibrary[arNum].author;
  par3.textContent = mylibrary[arNum].page;


 /* function myCount (){

    if (divcount = 0){
      return 0;
    }else {return divcount ++;}
  };*/

  function delCard () {
    const remBook = (element)=> element.amount == newDiv.dataset.arraynum ;
    removearray = mylibrary.splice (mylibrary.findIndex(remBook),1);
    newDiv.remove();
  };


  delbtn.addEventListener ('click', delCard);

  function togbutton (){
   
   readbtn.classList.toggle("fluffy");
  };

  readbtn.addEventListener('click', togbutton);
};

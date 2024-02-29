const lodePhone = async (phone1='13', allShow) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone1}`);
    const data = await res.json();
    const phone = data.data
    displyPhone(phone, allShow);
}

const displyPhone = (phones, allShow) => {
    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.textContent ="";
    //  show button
       
     const showAll = document.getElementById('show-all');
     if(phones.length > 15 && !allShow){
        showAll.classList.remove('hidden')
      
     }
     else{
        showAll.classList.add('hidden')
     }
     if(!allShow){
        phones = phones.slice(0,15);
     };
     
    phones.forEach(phone => {
        console.log(phone);
        // creat a div 

        const cardPhone = document.createElement('div');
        cardPhone.classList = `card w-96 bg-base-100 shadow-xl`
        cardPhone.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-center">
                        <button onclick="showDetail('${phone.slug}'),
                        my_modal_1.showModal()" class="btn btn-primary">SHOW DETAILS</button>
                      </div>
                    </div>
                  </div>`;
                  phoneContainer.appendChild(cardPhone)
                  loddingSpiner(false)
    });
}



// search handle

const searchHandle = (allShow) =>{
    loddingSpiner(true)
   const inputFild = document.getElementById('input-filed');
   const inputText = inputFild.value;
   console.log(inputText,)
   lodePhone(inputText,allShow);
   
}

const loddingSpiner = (isloding)=>{
    const spiner = document.getElementById('loading-spiner');
    if(isloding){
        spiner.classList.remove('hidden');
    }
    else{
        spiner.classList.add('hidden')
    }
    
    
}
 const showAllBtn = () => {
    searchHandle(true);

 }

 const showDetail =async (id) =>  {
    console.log(id);
    const res = await fetch(` https://openapi.programming-hero.com/api/phone/ ${id}`);
    const data = await res.json();
    console.log(data);
    const phone = data.data
    showPhoneDetail(phone)
  }

 const showPhoneDetail = (phone) => {
    console.log(phone)
  const showDetail = document.getElementById('show-detail');
  showDetail.innerText = phone.brand
  
 }

 lodePhone()
 



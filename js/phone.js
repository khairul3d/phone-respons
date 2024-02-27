const lodePhone = async (phone1) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone1}`);
    const data = await res.json();
    const phone = data.data
    displyPhone(phone);
}

const displyPhone = phones => {
    const phoneContainer = document.getElementById('phone-container')

    phoneContainer.textContent ="";
    //  show button
       
     const showAll = document.getElementById('show-all');
     if(phones.length > 15){
        showAll.classList.remove('hidden')
      
     }
     else{
        showAll.classList.add('hidden')
     }
     phones = phones.slice(0,15);
     
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
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>`;
                  phoneContainer.appendChild(cardPhone)
                  loddingSpiner(false)
    });
}

// search handle

const searchHandle = () =>{
    loddingSpiner(true)
   const inputFild = document.getElementById('input-filed');
   const inputText = inputFild.value;
   console.log(inputText)
   lodePhone(inputText);
   
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




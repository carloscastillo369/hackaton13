const modalEdit = document.getElementById('modalEdit');
const cardsContainer = document.getElementById('cards-container');
const botonAceptar = document.getElementById('btnAceptar');

/*EVENTO 1 - ABRIR MODAL EDIT*/
let editName = document.getElementById('editName');
let editLastName = document.getElementById('editLastName');
let editRaza = document.getElementById('editRaza');
let editPhone = document.getElementById('editTelefono');
let editCountry = document.getElementById('editPais')
let editUrl = document.getElementById('editUrl');
let editInfo =document.getElementById('editInfo');

cardsContainer.addEventListener('click',selectMainAction);
function selectMainAction(e){
    e.preventDefault();
    let elementoSelecionado = e.target;

    if(elementoSelecionado.className == 'img-button' || elementoSelecionado.className == 'text-button'){
        let boton = e.target.parentElement;
        if(boton.className == 'button-card edit'){
            openModal();
            let cardInfo = boton.parentElement.parentElement.lastElementChild;
            leerInfoCard(cardInfo);
        }

        if(boton.className == 'button-card delete'){
            let infoCard = boton.parentElement.parentElement;
            eliminarCard(infoCard);
        }
    }

    if(elementoSelecionado.className == 'button-card edit'){
        let cardInfo = elementoSelecionado.parentElement.parentElement.lastElementChild;
        leerInfoCard(cardInfo);
        openModal(cardInfo);






    }
    if(elementoSelecionado.className == 'button-card delete'){
        let infoCard = elementoSelecionado.parentElement.parentElement;
        eliminarCard(infoCard);
    }
}

function openModal(){
    modalEdit.style.display = 'flex';
}

function eliminarCard(card){
    card.style.display = 'none';
}

function leerInfoCard(card){
    let imgDog = card.firstElementChild;
    let nameDog = imgDog.nextElementSibling;
    let lastnameDog = nameDog.firstElementChild;
    let razaDog = nameDog.nextElementSibling;
    let phoneDog = razaDog.firstElementChild;
    let countryDog = razaDog.nextElementSibling;
    let infoDog = card.lastElementChild;


    editName.value = nameDog.textContent;
    editLastName.value = lastnameDog.textContent;
    editRaza.value = razaDog.textContent;
    editPhone.value = phoneDog.textContent;
    editCountry.value = countryDog.textContent;
    editUrl.value = imgDog.src;
    editInfo.value = infoDog.textContent;
}

/*EVENTO 2 - CAMBIAR DATOS DEL CARD*/

botonAceptar.addEventListener('click',cambiarDatos);

function cambiarDatos(e){
    e.preventDefault();

    let data1 = editName.value;
    let data2 = editLastName.value;
    let data3 = editRaza.value;
    let data4 = editPhone.value; 
    let data5 = editCountry.value;
    let data6 = editUrl.value;
    let data7 = editInfo.value;
    
    console.log(data1);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    console.log(data5);
    console.log(data6);
    console.log(data7);
}



/*EVENTO 3 - CERRAR MODAL EDITAR*/
const botonCancela = document.getElementById('btnCancel');
const botonEquis = document.getElementById('close');

botonCancela.addEventListener('click',cerrarModalEdit);
botonEquis.addEventListener('click',cerrarModalEdit);

function cerrarModalEdit(e){
    e.preventDefault();
    modalEdit.style.display = 'none';
}

botonAceptar.addEventListener('click',editarCard);

function editarCard(e){
    e.preventDefault();

}


/*EVENTO 4 - AGREGAR UN CARD*/
const addCard = document.getElementById('add');
const modalAdd = document.getElementById('modalAdd');
const botonCerrar = document.getElementById('btnclose');
const botonAgregar = document.getElementById('btnAgregar');
const botonCancelar = document.getElementById('btnCancelar');

/*ABRIR MODAL AGREGAR*/
addCard.addEventListener('click',agregar);

function agregar(e){
    e.preventDefault();
    modalAdd.style.display = 'flex';
}

/*CERRAR O CANCELAR MODAL AGREGAR*/
botonCerrar.addEventListener('click',cerrar);
botonCancelar.addEventListener('click',cerrar);

function cerrar(e){
    e.preventDefault();
    modalAdd.style.display = 'none';
}

/*AGREGAR UN NUEVO CARD*/
let inputName = document.getElementById('name');
let inputLastName = document.getElementById('lastname');
let inputRaza = document.getElementById('raza');
let inputPhone = document.getElementById('phone');
let inputCountry = document.getElementById('country')
let inputImage = document.getElementById('img');
let textAreaInfo =document.getElementById('info');

botonAgregar.addEventListener('click',mostrar);

function mostrar(e){
    e.preventDefault();
    let dato1 = inputName.value;
    let dato2 = inputLastName.value;
    let dato3 = inputRaza.value;
    let dato4 = inputPhone.value;
    let dato5 = inputCountry.value;
    let dato6 = inputImage.value;
    let dato7 = textAreaInfo.value;
    if(dato1=='' || dato2=='' || dato3=='' || dato4=='' || dato5=='0' || dato6=='' || dato7==''){
        alert ('Debe completar todos los campos vacios');
    }
    else {
        const contenedor = document.createElement('div');
        contenedor.classList.add('card');
        contenedor.innerHTML = ` 
                <div class="buttons-container">
                    <button class="button-card edit" type="submit"> 
                        <img class="img-button" src="./img/edit.png" alt="">
                         <span class="text-button">Edit</span> 
                    </button>
                    <button class="button-card delete" type="submit">
                        <img class="img-button" src="./img/delete.png" alt="">
                        <span class="text-button">Delete</span> 
                     </button>
                </div>
                <div class="info-card">
                    <img src="${dato6}" alt="">
                    <h3>${dato1} ${dato2}</h3>
                    <h4>${dato3} | ${dato4}</h4>
                    <h5>${dato5}</h5>
                    <p>${dato7}</p> 
                </div>
            `;
        cardsContainer.appendChild(contenedor);
        limpiar();
        cerrar(e);
    }
}

function limpiar(){
    inputName.value = '';
    inputLastName.value = '';
    inputRaza.value = '';
    inputPhone.value = '';
    inputImage.value = '';
    inputCountry.value ='0';
    textAreaInfo.value ='';
}

/*EVENTO 4 - EDITAR UN CARD*/


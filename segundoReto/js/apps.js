const modalEdit = document.getElementById('modalEdit');
const cardsContainer = document.getElementById('cards-container');

/*EDITAR INFORMACION*/

const nameDog = document.getElementById('name');
const lastDog = document.querySelector('.lastname');
const razaDog = document.querySelector('.raza');
const phoneDog = document.querySelector('.phone');

const botonAceptar = document.getElementById('botonAceptar');

/*ABRIR Y CERRAR MODAL EDITAR*/


cardsContainer.addEventListener('click',selectMainAction);
function selectMainAction(e){
    e.preventDefault();
    let elementoSelecionado = e.target;
    if(elementoSelecionado.className == 'img-button' || elementoSelecionado.className == 'text-button'){
        let btnEdit = e.target.parentElement;
        if(btnEdit.className == 'button-card edit'){
            modalEdit.style.display = 'flex';
            let infoCard = btnEdit.parentElement.parentElement.lastElementChild;
            let img = infoCard.firstElementChild;
            let name = img.nextElementSibling;
            let phone = name.nextElementSibling;
            let country = phone.nextElementSibling;
            let info = country.nextElementSibling;

        }


    }
    if(elementoSelecionado.className == 'button-card edit'){
        modalEdit.style.display = 'flex';
        let infoCard = elementoSelecionado.parentElement.parentElement.lastElementChild;
        let img = infoCard.firstElementChild;
        let name = img.nextElementSibling;
        let phone = name.nextElementSibling;
        let country = phone.nextElementSibling;
        let info = country.nextElementSibling;
        
    }
}

modalEdit.addEventListener('click',selectModalEditAction);
function selectModalEditAction(e){
    e.preventDefault();
    let elementoSelecionado = e.target;
    if(elementoSelecionado.className == 'close-modal' || e.target.className == 'button cancelar'){
        modalEdit.style.display = 'none';
    }
}







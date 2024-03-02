class Modal {
    constructor () {
        this.modal = document.querySelector('.modal');
    }
    openModal() {
        this.modal.style.display = 'block';
    }
    closeModal() {
        this.modal.style.display = 'none';
    }
}

const modalInstance = new Modal();
modalInstance.openModal();


  



function modal(selectorModal,selectorTrigger,closeSelector) {

    const modal = document.querySelector(selectorModal);

    const triggerModal = document.querySelectorAll(selectorTrigger);
    
    triggerModal.forEach((trigger)=>{
    
        trigger.addEventListener('click',(e)=>{
    
            e.preventDefault();
            modal.style.display = 'flex';
            modal.showModal();
        });
    });

    document.querySelector(closeSelector).addEventListener('click',()=>{

        modal.style.display = 'none';

    });


}

export default modal;
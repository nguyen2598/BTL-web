const modalDetail = document.querySelector('.modal-detail');

const overlayDetail = document.querySelector('.modal-detail .overlay');

const closeDetail = document.querySelector('.modal-close');

const imgDetails = document.querySelectorAll('.home-product--img img');

imgDetails.forEach((imgDetail, index) => {
    imgDetail.addEventListener('click', () => {
        modalDetail.classList.remove('hidden');
        console.log(modalDetail);
        console.log(imgDetail.parentElement.parentElement);
        const parentItemDetail = imgDetail.parentElement.parentElement;
        const imageDetail = parentItemDetail.querySelector('img');
        console.log(imageDetail);
        const nameDetail = parentItemDetail.querySelector('.home-product--title');
        const oldDetail = parentItemDetail.querySelector('.home-product__old');
        const saleDetail = parentItemDetail.querySelector('.home-product__sale');
        //

        modalDetail.querySelector('.modal-body .modal-body--content__header').innerText = nameDetail.innerText;
        modalDetail.querySelector('.modal-body .modal-body--slide-show .modal-body--slide-show--1').src =
            imageDetail.src;
        modalDetail.querySelector('.modal-body .modal-body--price__old').innerText = oldDetail.innerText;
        modalDetail.querySelector('.modal-body .modal-body--price__sale').innerText = saleDetail.innerText;
        // modalDetail.querySelector('.modal-body .modal-percent--sale').innerText=
    });
});

overlayDetail.addEventListener('click', () => {
    modalDetail.classList.add('hidden');
});

closeDetail.addEventListener('click', () => {
    modalDetail.classList.add('hidden');
});

const modalDetail = document.querySelector('.modal-detail');

const overlayDetail = document.querySelector('.modal-detail .overlay');

const closeDetail = document.querySelector('.modal-close');

const imgDetails = document.querySelectorAll('.home-product--img img');

imgDetails.forEach((imgDetail, index) => {
    imgDetail.addEventListener('click', () => {
        modalDetail.classList.remove('hidden');
    });
});

overlayDetail.addEventListener('click', () => {
    modalDetail.classList.add('hidden');
});

closeDetail.addEventListener('click', () => {
    modalDetail.classList.add('hidden');
});

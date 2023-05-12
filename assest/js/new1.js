let baseURL = 'http://localhost:3000';

function getNew1(cb) {
    fetch(`${baseURL}/new1`)
        .then(function (response) {
            return response.json();
        })
        .then(cb);
}

function createNew1(data, cb) {
    fetch(`${baseURL}/new1`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(function (res) {
            return response.json();
        })
        .then(cb);
}

function start() {
    getNew1(renderNew);
    handleCreateForm();
}
start();

function renderNew(news) {
    let listNew1 = document.querySelector('.content-news1');
    let listNew2 = document.querySelector('.news2-content');
    let htmls1 = news.map((news, id) => {
        return `
        <div class="recommend-news">
        <div class="date-news">
            <span class="post-date-day">${news.date}</span>
        </div>
        <a href="news-article1.html"
            ><img
            src="${news.image}"
            alt=""
        /></a>
        <a href="news-article1.html"
            ><h4>
                ${news.title}
            </h4></a
        >
        <a href="news-article1.html"
        ><p>
           ${news.desc}
        </p></a
        >
        </div>
        `;
    });
    listNew1.innerHTML = htmls1.join('');
    let htmls2 = news.map((news, id) => {
        return `
        <div class="blog-post">
            <img
                src="${news.image}"
                alt=""
            />
            <a href="news-article1.html"
                ><p>
                    ${news.title}
                </p></a
            >
        </div>
        `;
    });
    listNew2.innerHTML = htmls2.join('');
}

function deleteNew1(id) {
    fetch(`${baseURL}/new1/${id}`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(function (res) {
            return response.json();
        })
        .then(function () {
            getNew1(renderNew);
        });
}

function handleCreateForm() {
    var createBtn = document.querySelector('#Create-new1');
    // console.log(createBtn)
    createBtn.addEventListener('click', () => {
        let date = document.querySelector('#news-date').value;
        let title = document.querySelector('#news-title').value;
        let image = document.querySelector('#news-image').value;
        let desc = document.querySelector('#news-desc').value;

        console.log(date, title, image, desc);
        let formData = {
            date,
            title,
            image,
            desc,
        };
        createNew1(formData, function () {
            getNew1(renderNew);
        });
    });
}
// handleCreateForm()

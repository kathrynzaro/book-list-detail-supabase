// export function renderBook(book) {
//     const div = document.createElement('div');
//     div.classList.add('book');

//     const a = document.createElement('a');
//     a.href = `/books/?id=${book.id}`;

//     const h1 = document.createElement('h1');
//     h1.textContent = book.title;

//     const img = document.createElement('img');
//     img.src = `${book.image}`;

//     const p = document.createElement('p');
//     p.textContent = `${book.title} was written by ${book.author} and published in ${book.year_published}.`;

//     a.append(h1, img, p);
//     div.append(a);
//     return div;
// }

export function renderBook(book) {
    const div = document.createElement('div');
    div.classList.add('book');

    const a = document.createElement('a');
    a.href = `/books/?id=${book.id}`;

    const img = document.createElement('img');
    img.src = `${book.image}`;

    a.append(img);
    div.append(a);
    return div;
}

export function renderBookDetail(book) {
    const div = document.createElement('div');
    div.classList.add('book-detail');

    const h1 = document.createElement('h1');
    h1.textContent = book.title;

    const img = document.createElement('img');
    img.src = `.${book.image}`;

    const p = document.createElement('p');
    p.textContent = `${book.title} was written by ${book.author} and published in ${book.year_published}.`;

    div.append(h1, img, p);
    return div;
}
import { getBookById } from '../fetch-utils.js';
import { renderBookDetail } from '../render-utils.js';


const bookDetailContainer = document.getElementById('book-detail-container');

// console.log(`id: `, id);

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const book = await getBookById(id);
    bookDetailContainer.append(renderBookDetail(book));
}

loadData();


class Buku {
    constructor(author, judul, isbn) {
        this.author = author;
        this.judul = judul;
        this.isbn = isbn;
    }
}

class Task {
    static addTask() {
        const author = document.getElementById('author').value;
        const judul = document.getElementById('judul').value;
        const isbn = document.getElementById('isbn').value;

        if (author !== '' && judul !== '' && isbn !== '') {
            this.showAlert(true);
            const add = new Buku(author, judul, isbn);
            return add;
        } else {
            this.showAlert(false);
            return;
        }
    }

    static showAlert(call) {
        const bgCol = {
            success: 'green',
            error: 'red',
        };

        const show = document.querySelector('.alert');

        if (call) {
            show.style.background = bgCol.success;
            show.textContent = 'Data berhasil di tambah';
        } else {
            show.style.background = bgCol.error;
            show.textContent = 'Data tidak boleh kosong';
        }

        setTimeout(() => {
            show.style.background = '';
            show.textContent = '';
        }, 5000);
    }

    static TaskList() {
        let task = this.addTask();
        const list = document.querySelector('.list');
        let no = 1;

        list.innerHTML = `
            <td>${no++}</td>
            <td>${task.author}</td>
            <td>${task.judul}</td>
            <td>${task.isbn}</td>
            <td style="text-align:center">
                <button type="button" class="hapus">X</button>
            </td>
        `;
    }
}

const simpan = document.getElementById('simpan');

simpan.addEventListener('click', () => {
    Task.TaskList();
});

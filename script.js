const simpan = document.getElementById('simpan');

class Buku {
    constructor(author, judul, isbn) {
        this.author = author;
        this.judul = judul;
        this.isbn = isbn;
    }
}

class Task {
    static tasks = [];

    static addTask() {
        let author = document.getElementById('author').value;
        let judul = document.getElementById('judul').value;
        let isbn = document.getElementById('isbn').value;

        if (author !== '' && judul !== '' && isbn !== '') {
            this.ShowAlert(true);

            let add = new Buku(author, judul, isbn);

            this.tasks.push(add);
        } else {
            this.ShowAlert(false);
            return;
        }
        return this.tasks;
    }

    static ShowAlert(call) {
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
        const task = this.addTask();

        if (task.length > 0) {
            const list = document.querySelector('.list');

            task.forEach((el, i) => {
                list.insertAdjacentHTML(
                    'afterbegin',
                    `
                    <tr>
                        <td>${i}</td>
                        <td>${el.author}</td>
                        <td>${el.judul}</td>
                        <td>${el.isbn}</td>
                        <td>
                            <button type='button' class='hapus'>X</button>
                        </td>
                    </tr>
                `
                );
            });
        }
    }
}

simpan.addEventListener('click', () => {
    Task.TaskList();
});

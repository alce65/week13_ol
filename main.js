import { login } from './login.js';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button.login').addEventListener('click', () => {
        login();
    });
    document.querySelector('form.file').addEventListener('submit', (ev) => {
        ev.preventDefault();
        const input = ev.target['getFiles'];
        console.log(input.files[0]);
    });
});

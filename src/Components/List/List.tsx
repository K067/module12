import { Data } from "../Type/data";

export const List = (data: Data) => {
    const ul: HTMLUListElement | null = document.querySelector('ul');

    let output = '';

    if (data.length !== 0) {
        data.forEach(({ id, name }) => {
            output +=
                `<li>
        <span>${id}</span>
        <span>${name}</span>
        </li>`
        })
    } else {
        output +=
            `<li>
            <span></span>
        <span>None</span>
        </li>`
    }

    if (ul)
        ul.innerHTML = output;
}

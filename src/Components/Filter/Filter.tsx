import { List } from "../List/List";
import { Data } from "../../types/data";

export const Filter = (data: Data) => {
    const arrow: HTMLImageElement | null = document.querySelector('img');
    const input: HTMLInputElement | null = document.querySelector('input');

    if (arrow)
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('rotate');

            List(data.reverse());
        })

    if (input)
        input.addEventListener('input', (e: Event) => {
            const element: string = (e.target as HTMLInputElement).value.trim();

            if (element === '') {
                List(data);
            } else {
                List(data.filter(e => e.id === parseInt(element)));
            }
        })
}

import { List } from "../List/List";
import { Filter } from "../Filter/Filter";
import { UserData } from "../../types/data";

export const FetchData = () => {
    let url = `https://jsonplaceholder.typicode.com/users`;

    const getData = async () => {
        try {
            const res: Response = await fetch(url);
            const data: UserData = await res.json();

            List(data);
            Filter(data);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}
import data from "../../data.json";

export default function About() {
    console.log(data);
    return ( 
    <main>
        {data.about}
    </main>
    )
}
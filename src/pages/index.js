import { useLoginData } from "@/stores/loginData";

export default function Home(){
    const { data } = useLoginData(); 

    return(
        <div className="p-20">
            Username: {data.username}
            <br/>
            Password: {data.password}
            <br/>
            Otherdata
            <ul>
            {data.otherDetails.map((d, i) => (
                <li key={i}>{d}</li>
            ))}
            </ul>
        </div>
    )
}
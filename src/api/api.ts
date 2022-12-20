
import axios from "axios";
import {baseUrl} from "../env/.env";



export const api = axios.create({
    baseURL: baseUrl
})

/*function call(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true); // set loading to true
        axios
            .get(url)
            .then((response: { data: any; }) => {
                setData(response.data);
            })
            .catch((err: SetStateAction<null>) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    // Function to call when button is clicked
    const refetch = () => {
        setLoading(true); // set loading to true
        axios
            .get(url)
            .then((response: { data: any; }) => {
                setData(response.data);
            })
            .catch((err: SetStateAction<null>) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}*/

/*const authenticateUser = async  (username: string, password: string) : Promise<boolean> => {

    const loginData = {
        "Username": username,
        "Password": password
    }

    const api = axios.create({
        baseURL: "https://website.com/api/services"
    })

    const resp = await api.post("/ValidateUserPost", loginData)

    if(resp.data != null && resp.data.userId != null && resp.data.userId > 0){
        return true
    }
    else
        return false
};*/

// export default call;
import {
    IonContent,
    IonHeader, IonIcon,
    IonItem,
    IonLabel, IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from "@ionic/react";
import {useState} from "react";
import {api} from "../api/api";
import {useParams} from "react-router-dom";
import {personCircle} from "ionicons/icons";

function AvionDetails(props: any){
    const[data, setData] = useState<any>()
    const[load, setLoad] = useState(false)
    const[error, setError] = useState()
    const params = useParams<any>();

    useIonViewWillEnter(() => {
        api.get(`/api/details/${params.id}`)
            .then((response: any) => {
                if (response.status == 200){
                    setData(response.data)
                    setLoad(true);
                }
            }).catch((e: any) =>{
                setError(e)
        })
    })


    if (load){
        console.log(data)
        return(
            <IonPage >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Details</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    {data ? (
                        <>
                            <table border={1}>
                                <thead>
                                    <tr>
                                        <th>Matricule</th>
                                        <th>Id Avion</th>
                                        <th>Date Depart</th>
                                        <th>Debut kilometre</th>
                                        <th>Fin kilometre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map((m: any) =>
                                    <tr>
                                        <td>{m.matricule}</td>
                                        <td>{m.idAvion}</td>
                                        <td>{m.dateDep}</td>
                                        <td>{m.debKm}</td>
                                        <td>{m.finKm}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            {/*{data.map((m: any) =>
                                <IonItem>
                                    <IonLabel className="ion-text-wrap">
                                        <h2>
                                            {m.matricule}
                                            <span className="date">
                                        <IonNote>{m.idAvion}</IonNote>
                                        </span>
                                        </h2>
                                        <h3>
                                            Date Depart: <IonNote>{m.dateDep}</IonNote>
                                            Debut kilometre: <IonNote>{m.debKm}</IonNote>
                                            Fin kilometre: <IonNote>{m.finKm}</IonNote>
                                        </h3>
                                    </IonLabel>
                                </IonItem>
                            )}*/}
                            {/*<div className="ion-padding">*/}
                            {/*    <h1>Image</h1>*/}
                            {/*    <p>*/}
                            {/*        <img src="" alt=""/>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </>
                    ) : (
                        <div>Avion pas de details</div>
                    )}
                </IonContent>
            </IonPage>
        )
    }else{
        return (
            <IonPage>Fetching data ...</IonPage>
        )
    }


}

export default AvionDetails
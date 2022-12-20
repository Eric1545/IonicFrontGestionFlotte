import {
    IonButton, IonButtons,
    IonContent,
    IonHeader, IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar,
    useIonViewDidEnter,
    useIonViewWillEnter
} from "@ionic/react";
import {api} from "../../api/api";
import {useState} from "react";
import {arrowBack, refreshCircle} from "ionicons/icons";
import {useHistory, useParams} from "react-router-dom";

function AssuranceDetails(props: any){
    const [avions, setAvions] = useState<any>();
    const [loading, setLoading] = useState(false);
    const params = useParams<any>();
    useIonViewWillEnter(() => {
        console.log("test")
        api.get(`api/VAssuranceAvion/${params.mois}`)
            .then((response: any) =>{
                setAvions(response.data)
                setLoading(true)
            }).catch((e: any) =>{
            console.log(e)
        })
    })

    /*function check(e: any){
        if (localStorage.getItem("id") == null){
            history.push(`/login/${e.target.id}`)
        }else{
            history.push(`/avions/${e.target.id}`)
        }
    }*/

    /*const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };*/
    if (loading){
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton routerLink="/">
                                <IonIcon icon={arrowBack}/>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Assurance</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <table border={1}>
                        <thead>
                        <tr>
                            <th>Id Assurance</th>
                            <th>Id avion</th>
                            <th>Date Fin</th>
                            <th>Nom assurance</th>
                            <th>Matricule</th>
                        </tr>
                        </thead>
                        <tbody>
                        {avions.map((m: any) =>
                            <tr>
                                <td>{m.idAssurance}</td>
                                <td>{m.idAvion}</td>
                                <td>{m.dateFin}</td>
                                <td>{m.nomAssurance}</td>
                                <td>{m.matricule}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </IonContent>
            </IonPage>

        )
    }else {
        return (
            <IonPage>
                <IonContent>
                    <IonIcon icon={refreshCircle}/>
                </IonContent>
            </IonPage>
        )
    }
}

export default AssuranceDetails;
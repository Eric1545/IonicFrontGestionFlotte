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
import {useHistory} from "react-router-dom";

function AvionList(props: any){
    const [avions, setAvions] = useState<any>();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useIonViewWillEnter(() => {
        console.log("test")
        api.get("api/Avion")
            .then((response: any) =>{
                setAvions(response.data)
                setLoading(true)
            }).catch((e: any) =>{
            console.log(e)
        })
    })

    function check(e: any){
        if (localStorage.getItem("id") == null){
            history.push(`/login/${e.target.id}`)
        }else{
            history.push(`/avions/${e.target.id}`)
        }
    }

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
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
                        <IonTitle>Avions</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonRefresher slot="fixed" onIonRefresh={refresh}>
                        <IonRefresherContent/>
                    </IonRefresher>
                    <IonList>
                        {avions.map((m: any) =>
                            <IonItem onClick={check} detail={false} key={m.id} id={m.id}>
                                <div slot="start" className="dot dot-unread"/>
                                {m.matricule}
                                {/*<IonLabel key={m.id} className="ion-text-wrap">
                                    <p>
                                        {m.id}
                                    </p>
                                    {m.matricule}
                                    <h3>{m.matricule}</h3>
                                </IonLabel>*/}
                            </IonItem>
                        )}
                    </IonList>
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

export default AvionList;
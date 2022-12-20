import {
    IonButton,
    IonButtons,
    IonContent, IonHeader,
    IonIcon,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBack} from "ionicons/icons";

export function Home(){
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonList>
                    <IonItem routerLink={`/avions`}>
                        <div slot="start" className="dot dot-unread"/>
                        <p>List Avion</p>
                    </IonItem>
                    <IonItem routerLink={`/assurance`}>
                        <div slot="start" className="dot dot-unread"/>
                        <p>Assurance</p>
                    </IonItem>
                    <IonItem routerLink={`/login`}>
                        <div slot="start" className="dot dot-unread"/>
                        <p>Login</p>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
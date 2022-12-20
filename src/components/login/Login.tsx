import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon, IonInput, IonItem, IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonToolbar, useIonViewWillEnter
} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import React, {useEffect, useState} from "react";
import {api} from "../../api/api";
import {Redirect, useHistory, useParams} from "react-router-dom";
import AvionList from "../avion/AvionList";
import AvionDetails from "../../pages/AvionDetails";
import {Home} from "../../pages/Home";

export function Login(props: any){

    const [data, setData] = useState<any>(null);
    const [form, setForm] = useState<{} | any>({});
    const [loading, setLoading] = useState(false);
    const params = useParams<any>();
    const history = useHistory();

    let user: {} | any = {
        login: '',
        pwd: '',
    }

    function setPers(e: any){
        user = e;
    }

    function setLogin(e: any){
        setPers(form)
        user.login = e.target.value
        setForm(user)
    }

    function setPwd(e: any){
        setPers(form)
        user.pwd = e.target.value;
        setForm(user)
    }


    function save() {
        api.post("api/login", form)
            .then((response: any) => {
                if (response.status == 200){
                    setData(response.data)
                    setLoading(true)
                }
            })

    }

    if (loading && data!=null){
        localStorage.setItem("id", data.id)
        if (params.id != null) return (<AvionDetails id={params.id}/>)
        return (<Home />)
    }

    return (
        <IonPage className="loginPage">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/home">
                            <IonIcon icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow class="ion-justify-content-center">
                    <IonCol size="8">
                        <IonList>
                            <IonItem>
                                <IonLabel position="floating">
                                    Email
                                </IonLabel>
                                <IonInput type="text" name="name" placeholder="name"
                                          onInput={setLogin} value="admin"/>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">
                                    Password
                                </IonLabel>
                                <IonInput type="text" name="username" placeholder="username"
                                          onInput={setPwd} value="admin"/>
                            </IonItem>

                        </IonList>
                        <div className="ion-padding-top">
                            <IonButton className="outline" fill="outline" onClick={save}
                                       color="primary">Save</IonButton>
                        </div>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
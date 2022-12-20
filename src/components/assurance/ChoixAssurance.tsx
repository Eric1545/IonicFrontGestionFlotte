import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon, IonInput,
    IonItem, IonLabel, IonList,
    IonPage, IonSelect, IonSelectOption,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export function ChoixAssurance() {
    const array = [12]

    const [assurance, setAssurance] = useState(1);
    const history = useHistory();

    function handleInput(e: any){
        setAssurance(e.currentTarget.value)
    }

    function valid(){
        console.log("ici")
        history.push(`/assurance/${assurance}`)
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/">
                            <IonIcon icon={arrowBack}/>
                        </IonButton>
                    </IonButtons>
                    <IonTitle>ChoixAssurance</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">
                            {/*Name*/}
                        </IonLabel>
                        Dans <IonInput onInput={handleInput} name="assurance" type="number" />
                        {/*Dans <input onChange={handleInput} type="number" name="assurance"/> mois*/}
                        {/*<IonSelect name="assurance" placeholder="name">*/}
                            {/*<IonSelect name="assurance" id="" onIonChange={handleInput}>
                                <IonSelectOption value="0">...</IonSelectOption>
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>
                                <IonSelectOption value="3">3</IonSelectOption>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="6">6</IonSelectOption>
                                <IonSelectOption value="7">7</IonSelectOption>
                                <IonSelectOption value="8">8</IonSelectOption>
                                <IonSelectOption value="9">9</IonSelectOption>
                                <IonSelectOption value="10">10</IonSelectOption>
                                <IonSelectOption value="11">11</IonSelectOption>
                                <IonSelectOption value="12">12</IonSelectOption>
                            </IonSelect>*/}
                        {/*    {array.map((m: number) =>*/}
                        {/*        <IonSelectOption value={m} >{m}</IonSelectOption>*/}
                        {/*    )}*/}
                        {/*</IonSelect>*/}
                    </IonItem>

                </IonList>
                <div className="ion-padding-top">
                    <IonButton className="outline" fill="outline" onClick={valid}
                               color="primary">Save</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}
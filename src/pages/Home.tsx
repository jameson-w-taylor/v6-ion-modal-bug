import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar, IonFooter, useIonModal } from '@ionic/react';
import './Home.css';

const ModalContent: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <React.Fragment>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonButton onClick={onDismiss}>Close Modal</IonButton>
    </IonContent>
    <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
  </React.Fragment>
);

const Home: React.FC = () => {
  const handleDismiss = () => {
    dismissModalHook();
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalHook, dismissModalHook] = useIonModal(ModalContent, {
    onDismiss: handleDismiss
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={() => showModalHook()}>Show Modal w/Hook</IonButton>
        
        <IonButton onClick={() => setShowModal(true)}>Show Modal w/IonModal Component</IonButton>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Header</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <IonTitle>Footer</IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;

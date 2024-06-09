import React from 'react';
import { Modal } from '../components/Modal';
import Card from './Card';
import { userOrder } from '../services/UserService';

export default function CreateOrder({ visible, setVisible }) {

  const handleOrder = async (idService) => {
    try{
      await userOrder({
        id_service : idService
      })
    }catch(e){
      console.error(e);
    }finally{
      setVisible(false)
    }
  }

 
 
  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      content={
        <>
        <Card title="cuci cepat" content="10 jam, 10.000/kg" onClick={()=>handleOrder(23)}/>
        <br />
        <Card title="cuci lama" content="72 jam, 8.000/kg" onClick={()=>handleOrder(32)}/>
        </>
      }
    />
  );
}

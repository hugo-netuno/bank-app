import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as clientAPI from '../../services/clientAPI';
import ClientCard from '../ClientCard/ClientCard';

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    clientAPI.getClients()
      .then((response) => {
        setClients(response)
        setIsLoaded(true)
      })}, []);
  return (
    isLoaded ?
      <div>
        {clients.map((client) => <ClientCard key={client.id} client={client} />)}
        <Link to="/clients/new">ADICIONAR CLIENTE</Link>
      </div> : <div>Loading</div>
      );
}

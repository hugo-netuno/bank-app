import data from './clientData';

localStorage.setItem('clients', JSON.stringify(data));

const readClients = () => JSON.parse(localStorage.getItem('clients'));

const saveClients = (clients) => localStorage.setItem('clients', JSON.stringify(clients));

export const getClients = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const clients = readClients();
      resolve(clients);
    }, 2000);
  })
);

export const getClient = (clientId) => {
  const client = readClients().find((client) => client.id === parseInt(clientId, 10));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(client);
    }, 2000);
  });
};

export const updateClient = (updatedClient) => {
  const clients = readClients().map((client) => {
    if (client.id === parseInt(updatedClient.id, 10)) {
      return { ...client, ...updatedClient };
    }
    return client;
  });
  saveClients(clients);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
};

export const createClient = (clientData) => {
  let clients = readClients();
  const nextId = clients[clients.length - 1].id + 1;
  const newClient = { ...clientData, id: nextId };
  clients = [...clients, newClient];
  saveClients(clients);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 1000);
  });
};

export const deleteClient = (clientId) => {
  let clients = readClients();
  clients = clients.filter((client) => client.id !== parseInt(clientId, 10));
  saveClients(clients);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'OK' });
    }, 1000);
  });
};
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ClientCard({client}) {
    const parseDate = (input) => {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1]-1, parts[2]);
  }
    const age = (date) => {
        const time = parseDate(date)
        if (client.documentoTipo === 'CPF') {
            var ageDifMs = Date.now() - time.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        } else {
            return date;
        }
    }

    return (
      <div>
        <h3>{client.nome}</h3>
        <h2>{age(client.dataInicio)}</h2>
        <p>{client.documentoTipo}</p>
        <p>{client.documentoNumero}</p>
        <h3>{client.rendaMensal}</h3>
        <h3>{client.saldo}</h3>
        <Link to={`/clients/${client.id}`}>VER DETALHES</Link>
      </div>
    );
}

ClientCard.propTypes = {
  client: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

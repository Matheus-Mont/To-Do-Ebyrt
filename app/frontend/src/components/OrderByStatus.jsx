import React, { useState } from 'react';

export default function OrderByStatus ({ changeList, dados}) {
  const [all, setAll] = useState('');


  const handleChange = ({ target }) => {
    const { value } = target;
    const list = [...dados];
    setAll(value)
    const tasks = list.filter((e) => e.status === value);
    changeList([...tasks]);
  }
  return (
    <section className="d-flex justify-content-center">
        <select className="form-select text-center" id='order' value={ all } onChange={handleChange} > 
          <option disabled></option>
          <option value="em andamento">Em andamento</option>
          <option value="pendente">Pendente</option>
          <option value="pronto">Pronto</option>
        </select>
    </section>
  )
}
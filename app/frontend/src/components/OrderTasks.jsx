import React from 'react';
import OrderByStatus from './OrderByStatus';

export default function OrderTasks ({list, changeList, getTasks, dados}) {

const orderByA = () => {
    list.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : (
      a.title.toLowerCase() > b.title.toLowerCase() ) ? 1 : 0)
    changeList([...list]);
}
const orderByCrono = () => {
  list.sort((a,b) => (
    new Date(a.createdAt) < new Date(b.createdAt) ? -1 : (
      new Date(a.createdAt) > new Date(b.createdAt)) ? 1 : 0));
  changeList([...list]);
}
  return (
    <section>
        Ordenar tabela por: 
       <button type='button' onClick={ getTasks }>Todas as tarefas</button>
       <button type='button' onClick={ orderByA }>Ordem alfabética</button>
       <button type='button' onClick={ orderByCrono }>Ordem cronológica</button>
       <OrderByStatus list={list} changeList={changeList} dados={dados}/>
    </section>
  )
}
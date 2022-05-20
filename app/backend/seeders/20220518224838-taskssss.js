'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Tasks',
    [
      {
        title: 'Visitar a Lista de tarefas da Ebytr',
        description: 'Bem-vindx! Agora você nunca mais vai precisar esquecer nenhum compromisso importante. Eu mesmo sou super esquecido, mas tenho deixado nada pass... :O Eita! Um minuto que esqueci a comida no fogo! Volto já! Fica à vontade, viu?!',
        status: 'pronto',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Checar redes sociais do criador',
        description: 'Meu linkedin tá ali no Footer! Por lá você também tem acesso ao meu github e outras redes sociais. Me segue por lá e me dá um feedback! Quero melhorar cada vez mais, então suas sugestões seriam muito bem-vindas! Obrigadão, e até já! <3',
        status: 'pendente',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {})
  }
};

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    try {
      let entity;

      // Verifica se o ID é um número (ID numérico) ou uma string (document_id)
      if (!isNaN(id)) {
        // Se for um número, busca pelo ID
        entity = await strapi.entityService.findOne('api::page.page', id, {
          populate: {
            menu: {
              populate: {
                logo: true, // Popula o campo logo (media)
                menu_links: true, // Popula o componente menu_links
              },
            },
            sections: {
              populate: '*', // Popula todos os componentes dentro da Dynamic Zone
            },
          },
        });
      } else {
        // Se for uma string, busca pelo document_id
        entity = await strapi.db.query('api::page.page').findOne({
          where: { document_id: id },
          populate: {
            menu: {
              populate: {
                logo: true, // Popula o campo logo (media)
                menu_links: true, // Popula o componente menu_links
              },
            },
            sections: {
              populate: '*', // Popula todos os componentes dentro da Dynamic Zone
            },
          },
        });
      }

      // Se não encontrar, retorna 404
      if (!entity) {
        return ctx.notFound('Page not found');
      }

      // Retorna a página encontrada
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      console.error('Erro ao buscar a página:', error);
      return ctx.internalServerError('Erro interno ao processar a requisição');
    }
  },
}));
const responseDetail = {
  author: { name: 'Hernán', lastname: 'Correa' },
  item: {
    id: 'MLA1127715651',
    title: 'Apple iPhone 12 (128 Gb) - Azul',
    price: { currency: 'ARS', amount: 225000, decimals: 0 },
    picture: 'https://http2.mlstatic.com/D_839818-MLA45719894955_042021-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 0,
    description:
      'El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida (3). Que comience la diversión.\n\n\nAvisos Legales\n(1) La pantalla tiene las esquinas redondeadas. Si se mide en forma de rectángulo, la pantalla tiene 6.06 pulgadas en diagonal. El área real de visualización es menor.\n(2) La afirmación se basa en la comparación de la parte frontal de Ceramic Shield del iPhone 12 con respecto a la generación anterior de iPhone.\n(3) Los accesorios se venden por separado.\n(4) El iPhone 12 es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas, con una clasificación IP68 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 6 metros). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.',
  },
  categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
};

describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should navigate to list page', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('form').find('button').should('be.disabled');
    cy.get('input[type=text]').type('Iphone{enter}');
    cy.get('form').find('button').should('not.be.disabled');

    // we should be redirected to /dashboard
    cy.url().should('include', '/items?search=Iphone');
    cy.get('app-item').should('have.length', 4);
    cy.get('app-breadcrumb li').should('have.length.greaterThan', 0);
  });

  it('should visit list page', () => {
    cy.visit('/items?search=Iphone');
    cy.url().should('include', '/items?search=Iphone');
    cy.get('app-item').should('have.length', 4);
    cy.get('app-breadcrumb li').should('have.length.greaterThan', 0);
  });

  it('should navigate to detail item', () => {
    cy.visit('/items?search=Iphone');
    cy.url().should('include', '/items?search=Iphone');
    cy.get('app-item').children().first().click();
    cy.url().should('include', '/items/');
    cy.get('.image__item img').should('exist');
    // button contain "Comprar"
    cy.get('.description__paragraph').should('exist');
  });
  it('should navigate to category', () => {
    cy.visit('/items?search=Iphone');
    cy.url().should('include', '/items?search=Iphone');
    cy.get('app-breadcrumb li').children().first().click();
    cy.url().should('include', '/items?search');
    cy.get('app-item').should('have.length', 4);
  });
  it('should visit detail item', () => {
    cy.intercept('http://localhost:3333/api/items/MLA1127715651', {
      body: responseDetail,
    }).as('items');
    cy.visit('/items/MLA1127715651');
    cy.wait('@items');
    cy.get('.image__item img').should('exist');
    cy.get('#buy_button').should('include.text', 'Comprar');
    cy.get('app-breadcrumb li').should('have.length', 2);
    cy.get('.title__item').should('contain.text', responseDetail.item.title);
    cy.get('.description__paragraph').should(
      'contain.text',
      responseDetail.item.description
    );
  });
  it('should navigate home on click logo', () => {
    cy.visit('/items?search=Iphone');
    cy.get('.logo').click();
    cy.get('app-item').should('not.exist');
  });

  it('should navigate to not found data', () => {
    cy.get('input[type=text]').type('lksndflkasjflkasjflsajflsajflksaf{enter}');
    cy.url().should(
      'include',
      '/items?search=lksndflkasjflkasjflsajflsajflksaf'
    );
    cy.get('.not__content').should('exist');
  });

  it('should visit to not found data', () => {
    cy.visit('/items?search=lksndflkasjflkasjflsajflsajflksaf');
    cy.url().should(
      'include',
      '/items?search=lksndflkasjflkasjflsajflsajflksaf'
    );
    cy.get('.not__content').should('exist');
  });
});

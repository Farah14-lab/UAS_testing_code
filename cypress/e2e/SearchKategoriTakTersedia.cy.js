describe('mencari data kategori', () => {
  it('buku', () => {
    cy.visit('http://localhost/perpus2/')

    // memasukkan username
    cy.get('#user').type('farah')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()

    // menuju fitur data
    cy.get(':nth-child(4) > [href="#"]').click()

    // menampilkan data kategori
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > .cursor').click()

    // mengetikkan kategori yang dicari
    cy.get('#example1_filter > label > .form-control').type('Olahraga')
    
    // mengecek apakah kategoriyang dicari tersedia
    cy.get('.sorting_1').should('be.visible')
  })
})
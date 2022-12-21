describe('mencari data buku yang tidak tersedia', () => {
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

    // menampilkan data buku
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > .cursor').click()

    // mengetikkan ISBN buku yang dicari
    cy.get('#example1_filter > label > .form-control').type('522-2134-7634')
    
    // mengecek apakah buku yang dicari tersedia
    cy.get('.sorting_1').should('not.exist')
  })
})
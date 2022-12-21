describe('mencari data peminjaman', () => {
  it('transaksi', () => {
    cy.visit('http://localhost/perpus2/')

    // memasukkan username
    cy.get('#user').type('farah')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()

    // menuju fitur transaksi
    cy.get(':nth-child(5) > [href="#"]').click()

    // menampilkan data peminjaman
    cy.get('.menu-open > .treeview-menu > :nth-child(1) > .cursor').click()

    // mengetikkan ID peminjaman yang dicari
    cy.get('#example1_filter > label > .form-control').type('PJ0011')
    
    // mengecek apakah peminjaman yang dicari tersedia
    cy.get('.sorting_1').should('be.visible')
  })
})
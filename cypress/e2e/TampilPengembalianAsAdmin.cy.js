describe('menampilkan pengembalian pada hal Admin', () => {
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

    // menampilkan data pengembalian
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > .cursor').click()
  })
})
describe('menghapus data pengembalian berdasarkan ID', () => {
  it('transaksi', () => {
    cy.visit('http://localhost/perpus2/')

    // memasukkan username
    cy.get('#user').type('farah')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()

    // menuju fitur data
    cy.get(':nth-child(5) > [href="#"]').click()

    // menampilkan data rak
    cy.get('.menu-open > .treeview-menu > :nth-child(2) > .cursor').click()

    // mengeklik button delete
    cy.get(':nth-child(1) > :nth-child(10) > .btn-danger').click()
  })
})
describe('menghapus data rak berdasarkan ID', () => {
  it('rak', () => {
    cy.visit('http://localhost/perpus2/')

    // memasukkan username
    cy.get('#user').type('farah')

    // memasukkan password
    cy.get('#pass').type('123')

    // menekan tombol masuk
    cy.get('#loding').click()

    // menuju fitur data
    cy.get(':nth-child(4) > [href="#"]').click()

    // menampilkan data rak
    cy.get('.menu-open > .treeview-menu > :nth-child(3) > .cursor').click()

    // mengeklik button delete
    cy.get('[href="http://localhost/perpus2/data/rakproses?rak_id=4"] > .btn').click()
  })
})
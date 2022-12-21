describe('mengedit data rak berdasarkan ID', () => {
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

    // mengedit rak berdasarkan ID rak
    cy.get('[href="http://localhost/perpus2/data/rak?id=3"] > .btn').click()

    // mengosongkan rak terlebih dahulu
    cy.get('form > :nth-child(1) > .form-control').clear()

    // memasukkan nama rak terbaru
    cy.get('form > :nth-child(1) > .form-control').type('Rak Buku 4')

    // mengeklik button edit
    cy.get('form > .btn').click()
  })
})
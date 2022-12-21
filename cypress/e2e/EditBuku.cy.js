describe('mengedit data buku berdasarkan ID', () => {
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

    // mengedit buku berdasarkan ID buku
    cy.get('[href="http://localhost/perpus2/data/bukuedit/8"] > .btn').click()

    // mengosongkan inputan ISBN
    cy.get(':nth-child(3) > .form-control').clear()

    // mengedit ISBN baru 
    cy.get(':nth-child(3) > .form-control').type('213-3456-7634')

    // mengeklik button submit
    cy.get('.pull-right > .btn-primary').click()
  })
})
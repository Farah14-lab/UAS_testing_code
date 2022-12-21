describe('mengedit data kategori berdasarkan ID', () => {
  it('kategori', () => {
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

    // mengedit rak berdasarkan ID kategori
    cy.get('[href="http://localhost/perpus2/data/kategori?id=5"] > .btn').click()

    // mengosongkan rak terlebih dahulu
    cy.get('form > :nth-child(1) > .form-control').clear()

    // memasukkan nama rak terbaru
    cy.get('form > :nth-child(1) > .form-control').type('Teori Jaringan')

    // mengeklik button edit
    cy.get('form > .btn').click()
  })
})
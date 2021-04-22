let names = ["Ada Lovelace", "Aleksey Krylov", "Alan Turing", "Andrew Wiles", "Benjamin Banneker", "Bernhard Riemann", "Carl Runge", "Cédric Villani", "Charles Babbage", "D. R. Kaprekar", "David Blackwell", "David Hilbert", "Emmy Noether", "Florence Nightingale", "Gene H. Golub", "Sir George Stokes, 1st Baronet", "Gilbert Strang", "Grace Hopper", "Ingrid Daubechies", "Isaac Newton", "James Joseph Sylvester", "Carl Friedrich Gauss", "John Forbes Nash Jr.", "Joseph Fourier", "Katherine Johnson", "Leonhard Euler", "Mary Cartwright", "Mary Somerville", "Maryam Mirzakhani", "Paul Erdős", "Pierre-Simon Laplace", "Prasanta Chandra Mahalanobis", "Sofya Kovalevskaya", "Sophie Germain", "Srinivasa Ramanujan", "Steven_Strogatz", "Terence Tao", "William Rowan Hamilton"];
let images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg/145px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Alexey_Krylov_1910s.JPG/165px-Alexey_Krylov_1910s.JPG", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/147px-Alan_Turing_Aged_16.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Andrew_wiles1-3.jpg/150px-Andrew_wiles1-3.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Benjamin_Banneker_mural_cropped.tif/lossy-page1-85px-Benjamin_Banneker_mural_cropped.tif.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Friedrich_Bernhard_Riemann.jpeg/183px-Georg_Friedrich_Bernhard_Riemann.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Voit_202_Karl_Runge.jpg/138px-Voit_202_Karl_Runge.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cedric_Villani_at_his_office_2015_n3.jpg/133px-Cedric_Villani_at_his_office_2015_n3.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/153px-Charles_Babbage_-_1860.jpg", "https://upload.wikimedia.org/wikipedia/en/b/b1/D._R._Kaprekar.gif", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/David_Blackwell_1999_%28re-scanned%2C_cropped%29.jpg/161px-David_Blackwell_1999_%28re-scanned%2C_cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Hilbert.jpg/148px-Hilbert.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Noether.jpg/131px-Noether.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/144px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Genegolub.jpg/200px-Genegolub.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ggstokes.jpg/147px-Ggstokes.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gilbert_Strang.jpg/190px-Gilbert_Strang.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/160px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ingrid_Daubechies_%282005%29.jpg/133px-Ingrid_Daubechies_%282005%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/165px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/James_Joseph_Sylvester.jpg/143px-James_Joseph_Sylvester.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Carl_Friedrich_Gauss_1840_by_Jensen.jpg/157px-Carl_Friedrich_Gauss_1840_by_Jensen.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/John_Forbes_Nash%2C_Jr._by_Peter_Badge.jpg/132px-John_Forbes_Nash%2C_Jr._by_Peter_Badge.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Fourier2.jpg/158px-Fourier2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/160px-Katherine_Johnson_1983.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Leonhard_Euler.jpg/155px-Leonhard_Euler.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mary_cartwright.jpg/172px-Mary_cartwright.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thomas_Phillips_-_Mary_Fairfax%2C_Mrs_William_Somerville%2C_1780_-_1872._Writer_on_science_-_Google_Art_Project.jpg/164px-Thomas_Phillips_-_Mary_Fairfax%2C_Mrs_William_Somerville%2C_1780_-_1872._Writer_on_science_-_Google_Art_Project.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/b1/Maryam_Mirzakhani_in_Seoul_2014.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Erdos_budapest_fall_1992_%28cropped%29.jpg/151px-Erdos_budapest_fall_1992_%28cropped%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Laplace%2C_Pierre-Simon%2C_marquis_de.jpg/171px-Laplace%2C_Pierre-Simon%2C_marquis_de.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/PCMahalanobis.png/220px-PCMahalanobis.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/164px-Sofja_Wassiljewna_Kowalewskaja_1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Germain.jpeg/164px-Germain.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg/146px-Srinivasa_Ramanujan_-_OPC_-_1.jpg", "https://d3ml8cfhn9inlg.cloudfront.net/wp-content/uploads/2020/11/Strogatz_John-Groo.jpeg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ttao2006.jpg/159px-Ttao2006.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/William_Rowan_Hamilton_portrait_oval_combined.png/146px-William_Rowan_Hamilton_portrait_oval_combined.png"];
let urls = ["https://en.wikipedia.org/wiki/Ada_Lovelace", "https://en.wikipedia.org/wiki/Aleksey_Krylov", "https://en.wikipedia.org/wiki/Alan_Turing", "https://en.wikipedia.org/wiki/Andrew_Wiles", "https://en.wikipedia.org/wiki/Benjamin_Banneker", "https://en.wikipedia.org/wiki/Bernhard_Riemann", "https://g.co/kgs/w96q63", "https://en.wikipedia.org/wiki/C%C3%A9dric_Villani", "https://en.wikipedia.org/wiki/Charles_Babbage", "https://en.wikipedia.org/wiki/D._R._Kaprekar", "https://en.wikipedia.org/wiki/David_Blackwell", "https://en.wikipedia.org/wiki/David_Hilbert", "https://en.wikipedia.org/wiki/Emmy_Noether", "https://en.wikipedia.org/wiki/Florence_Nightingale", "https://en.wikipedia.org/wiki/Gene_H._Golub", "https://en.wikipedia.org/wiki/Sir_George_Stokes,_1st_Baronet", "https://en.wikipedia.org/wiki/Gilbert_Strang", "https://en.wikipedia.org/wiki/Grace_Hopper", "https://en.wikipedia.org/wiki/Ingrid_Daubechies", "https://en.wikipedia.org/wiki/Isaac_Newton", "https://en.wikipedia.org/wiki/James_Joseph_Sylvester", "https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss", "https://en.wikipedia.org/wiki/John_Forbes_Nash_Jr.", "https://en.wikipedia.org/wiki/Joseph_Fourier", "https://en.wikipedia.org/wiki/Katherine_Johnson", "https://en.wikipedia.org/wiki/Leonhard_Euler", "https://en.wikipedia.org/wiki/Mary_Cartwright", "https://en.wikipedia.org/wiki/Mary_Somerville", "https://en.wikipedia.org/wiki/Maryam_Mirzakhani", "https://en.wikipedia.org/wiki/Paul_Erd%C5%91s", "https://en.wikipedia.org/wiki/Pierre-Simon_Laplace", "https://en.wikipedia.org/wiki/Prasanta_Chandra_Mahalanobis", "https://en.wikipedia.org/wiki/Sofya_Kovalevskaya", "https://en.wikipedia.org/wiki/Sophie_Germain", "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan", "https://en.wikipedia.org/wiki/Steven Strogatz", "https://en.wikipedia.org/wiki/Terence_Tao", "https://en.wikipedia.org/wiki/William_Rowan_Hamilton"];

let data = [];

for (let i = 0; i < names.length; i++) {
    data.push({
        'title': names[i],
        'image': images[i],
        'url': urls[i],
    });
}
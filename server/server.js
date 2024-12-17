const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Samsung Notebook 9 Pro', 
      oldPrice: 900000, 
      price: 750000, 
      urlImg: 'https://www.unidiversidad.com.ar/cache/pc_1000_1100.jpg'
    },
    {
      id: 2, 
      name: 'Auriculares Aris',  
      oldPrice: 25000, 
      price: 23000, 
      urlImg: 'https://acdn.mitiendanube.com/stores/001/593/734/products/ng-a100bt-pl-angulo1-8d30f7d17ecc9b8c8e16518679401776-1024-1024.jpg' 
    },
    { 
      id: 3, 
      name: 'Disco-solido interno kingston sata-960g',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwqHX1fVP2DUn6mEw05ukydZ6KOgkf0w3N3ZEHHJnDUW7WtxSEzdOZ73YxCn-FBC5kYxGeF4wy9zakpXVDOXbjQouNAmyH1LTbzkyuK2t0u9We1eAqfkFFDw&usqp=CAE' 
    },
    { 
      id: 3, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const {spec} = require('pactum');
let URL = 'https://randomuser.me/api';

describe('Learning PactumJS', function(){
    it('Should get random users', async function(){
        await spec()
        .get(URL).expectStatus(200);
    });

    it('Should verify that gender is male', async function(){
        await spec()
        .get(URL).withQueryParams('gender', 'x');
    });

    it('should get random users', async function(){
        await spec()
          .get(URL)
          .withQueryParams('gender', 'female')
          .expectStatus(200)
          .expectJsonLike({
            'results':[
                {'gender':'female'}
            ]
        });
    });
});
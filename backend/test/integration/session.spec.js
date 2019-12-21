const { test } = use ('test/Suite')('Session');
const User = use('./../../app/Models/User.js');

trait('Test/ApiClient')

test('it should return JWT token when session created', () => {
    const user = await User.create({
      name:'Bruno de A. Bisogni',
      email:'brunobisognidev@gmail.com',
      password:'123456'
    });

    const response = await client
    .post('/session')
    .send({
      email:'brunobisognidev@gmail.com',
      password:'123456'
    })
    .end()

    console.log(response);

    response.assertStatus(200);

});

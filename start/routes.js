'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.resource('properties', 'PropertyController')
Route.post('properties/:id/images', 'ImageController.store')
Route.get('images/:path', 'ImageController.show')

//Route.resource('properties', 'PropertyController').apiOnly().middleware('auth')
//Route.get('images/:path', 'ImageController.show').middleware('auth')
//Route.post('properties/:id/images', 'ImageController.store').middleware('auth')




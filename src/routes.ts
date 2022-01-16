import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { FinAllDeliveriesController } from './modules/clients/useCases/deliveries/FinAllDeliveriesController'
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDeliveryController'
import { FindAllAvailableController } from './modules/deliveries/useCases/FindAllAvailableController'
import { UpdateDeliveryController } from './modules/deliveries/useCases/UpdateDeliveryController'
import { UpdateEndDateController } from './modules/deliveries/useCases/UpdateEndDateController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'
const routes = Router()
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryManController = new CreateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

const updateDeliveryController = new UpdateDeliveryController()

const findAllDeliveriesController = new FinAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

const updateEndDateController = new UpdateEndDateController()

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.post('/clients', createClientController.handle)

routes.post('/deliveryman', createDeliveryManController.handle)

routes.post('/delivery', ensureAuthenticateClient, createDeliveryController.handle)

routes.get('/delivery/available', ensureAuthenticateDeliveryman, findAllAvailableController.handle)

routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliveryController.handle)

routes.get('/client/deliveries', ensureAuthenticateClient, findAllDeliveriesController.handle)

routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put('/delivery/updateEndDate/:id', ensureAuthenticateDeliveryman, updateEndDateController.handle)

export { routes }
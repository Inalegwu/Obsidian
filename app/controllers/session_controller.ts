import type { HttpContext } from '@adonisjs/core/http';
import User from '#models/user';
import { loginValidator } from '#validators/user';

export default class SessionController {
  async create({ inertia }: HttpContext) {
    return inertia.render('auth/login', {});
  }

  async store({ request, auth, response }: HttpContext) {
    const payload = await request.validateUsing(loginValidator);
    const user = await User.verifyCredentials(payload.email, payload.password);

    await auth.use('web').login(user);
    response.redirect().toRoute('home');
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout();
    response.redirect().toRoute('session.create');
  }
}

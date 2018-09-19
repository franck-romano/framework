'use strict'

// const Mailer = util('mailer')
const Logger = util('logger')
const Listener = util('Listener')
// const WelcomeMail = mail('welcome')

/**
 * This event listener has the sole job of
 * sending a welcome mail to a newly
 * registered user.
 */
class SendWelcomeMail extends Listener {
  /**
   * This value matches the emitted event
   * in the `user-registered` event file.
   */
  on () {
    return 'user.registered'
  }

  async handle (event) {
    /**
     * You can surely delete the following logger statement
     * as soon as your mailer is ready to rock.
     */
    Logger.info(
      `SendWelcomeMail listener: user registered. This event handler should send the welcome email to ${
        event.user.email
      }`
    )

    /**
     * As soon as you configured the mailer, uncomment
     * the following line. If you want mor details on
     * the mailer, check the Boost docs.Thank you!
     */
    // await Mailer.send(new WelcomeMail(event.user))
  }
}

module.exports = SendWelcomeMail

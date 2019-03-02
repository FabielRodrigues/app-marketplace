const Mail = require('../services/Mail')

class PurchaseMail {
  get key() {
    return 'PurchaseMail'
  }

  async handle(job, done) {
    const {
      ad,
      user,
      content
    } = job.data
    await Mail.sendMail({
      from: '"Fabiel Rodrigues" <fabiel.rodrigues@gmail.com>',
      to: purchaseAd.author.mail,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      template: 'purchase',
      context: {
        user,
        content,
        ad
      }
    })

    return done()
  }
}

module.exports = new PurchaseMail()

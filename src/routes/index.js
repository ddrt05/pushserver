const { Router } = require("express");
const router = Router();
const webpush = require("../webpush");

 router.post("/enviar-mensaje", async (req, res) => {
    const { message } = req.body;
    const { title } = req.body;
    const { endpoint } = req.body;
    const { p256dh } = req.body;
    const { auth } = req.body;

    const payload = JSON.stringify({
      title,
      message 
    });

    const suscripcion ={
      endpoint,
      expirationTime: null,
      keys:{
        p256dh,
        auth
      }
    };

    try {
      await webpush.sendNotification(suscripcion, payload);
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(400).json();
    }
  });

module.exports = router;

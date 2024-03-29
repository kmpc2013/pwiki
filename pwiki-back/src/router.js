const express = require("express");

const pwikiController = require("./controllers/pwikiController");
const pwikiMiddleware = require("./middlewares/pwikiMiddleware");

const router = express.Router();


// ------------------- pwiki
router.get("/api/pwiki", pwikiController.getAll);
router.post(
  "/api/pwiki",
  pwikiMiddleware.validateFieldTitle,
  pwikiMiddleware.validateFieldType,
  pwikiMiddleware.validateFieldDescr,
  pwikiMiddleware.validateFieldLink,
  pwikiController.createDoc
);
router.delete("/api/pwiki/:id", pwikiController.deleteDoc);
router.put(
  "/api/pwiki/:id",
  pwikiMiddleware.validateFieldTitle,
  pwikiMiddleware.validateFieldType,
  pwikiMiddleware.validateFieldDescr,
  pwikiMiddleware.validateFieldLink,
  pwikiController.updateDoc
);

module.exports = router;

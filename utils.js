console.log("good morning");
const mongodb = require("mongodb"),
  mongoUrl = "mongodb://localhost:27017/",
  MongoClient = mongodb.MongoClient,
  mongoDoc = "self-improvment",
  collectionNameBookList = "bookList",
  collectionNameArticle = "articleList",
  collectionNamearticleListToArticleComponent = "articleListToArticleComponent",
  collectionNameMindVideo = "mindVideo",
  collectionNameMindVAricle = "mindArticle",
  collectionNameBodyTraining = "bodyTraining",
  collectionNameBodyDiet = "diet",
  collectionNameForum = "forum",
  collectionNameLike = "Like",
  collectionName = "Contacts";

const objectId = mongodb.ObjectId;

//todo add contact ----------------------------------------------------------------
function addContacts(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const contact = req.body;
    dbo.collection(collectionName).insertOne(contact, (err, doc) => {
      if (err) throw err;
      console.log(doc);
    });
  });
}
//todo add forum data ----------------------------------------------------------------
function addForum(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const contact = req.body;
    dbo.collection(collectionNameForum).insertOne(contact, (err, doc) => {
      if (err) throw err;
      console.log(doc);
    });
  });
}

//todo add like data ----------------------------------------------------------------
function addLink(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const contact = req.body;
    dbo.collection(collectionNameLike).insertOne(contact, (err, doc) => {
      if (err) throw err;
      console.log(doc);
    });
  });
}
//todo get form list ----------------------------------------------------------------
function getForumlist(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameForum)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}

//todo get book list ----------------------------------------------------------------
function getBooklist(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameBookList)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log("pppppppppppppppppppppppp", productsList.data);
        res.send(productsList);
      });
  });
}

//todo get article list ----------------------------------------------------------------------------------------------
function getArticlelist(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameArticle)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}
// get article list to article component ----------------------------------------------------------------------------------------------
function getArticlelistFromCompToDetailes(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNamearticleListToArticleComponent)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}
//todo get mind vieos -------------------------------------------------------------
function getMindVideos(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameMindVideo)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}
//todo get mind article----------------------------------------------------------------------
function getMindArticle(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameMindVAricle)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}
//todo get body training----------------------------------------------------------------------
function getBodyTraining(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameBodyTraining)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}

//todo get body diet----------------------------------------------------------------------
function getBodydiet(req, res) {
  MongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    dbo = db.db(mongoDoc);
    dbo
      .collection(collectionNameBodyDiet)
      .find({})
      .toArray((err, productsList) => {
        if (err) throw err;
        console.log(productsList.data);
        res.send(productsList);
      });
  });
}
//todo delete forum ----------------------------------------------------------------------
function deleteFormList(req, res) {
  MongoClient.connect(mongoUrl, function (err, db) {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const id = req.params.id;
    dbo
      .collection(collectionNameForum)
      .deleteOne({ _id: objectId(id) }, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });
  });
}
//todo update forum ----------------------------------------------------------------------
function updateForumList(req, res) {
  MongoClient.connect(mongoUrl, function (err, db) {
    if (err) throw err;
    const dbo = db.db(mongoDoc);
    const id = req.params.id;
    const newvalues = { $set: req.body  };
    dbo
      .collection(collectionNameForum)
      .updateOne({ _id: objectId(id) }, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
  });
}

module.exports = {
  addContacts,
  getBooklist,
  getArticlelist,
  getMindVideos,
  getMindArticle,
  getBodyTraining,
  getBodydiet,
  addForum,
  getForumlist,
  addLink,
  getArticlelistFromCompToDetailes,
  deleteFormList,
  updateForumList,
};

// "dev": "concurrently \"npm run server\" \"npm run self-improvment-project\" "

const express = require("express");
const app = express();
const utils = require("./utils.js");
const Contact = "/Contact";
const bookList = "/bookList";
const articleList = "/articleList";
const articleListToArticleComponent = "/articleListToArticleComponent";
const mindVideo = "/mindVideo";
const mindArticle = "/mindArticle";
const bodyTraining = "/bodyTraining";
const bodyDiet = "/diet";
const forum = "/forum";
const forumDelete = "/forum/:id";
const forumUpdate = "/forum/:id";
const like = "/like";
app.use(express.json());

//todo get book list --------------------------------------------------------------------------------------
app.get(bookList, (req, res) => {
  utils.getBooklist(req, res);
});

//todo get article list --------------------------------------------------------------------------------------
app.get(articleList, (req, res) => {
  utils.getArticlelist(req, res);
});

// get article list from component to detailes--------------------------------------------------------------------------------------
app.get(articleListToArticleComponent, (req, res) => {
  utils.getArticlelistFromCompToDetailes(req, res);
});

//todo get mind video --------------------------------------------------------------------------------------
app.get(mindVideo, (req, res) => {
  utils.getMindVideos(req, res);
});

//todo get mind article --------------------------------------------------------------------------------------
app.get(mindArticle, (req, res) => {
  utils.getMindArticle(req, res);
});
// todo get body training----------------------------------------------------------------------------------
app.get(bodyTraining, (req, res) => {
  utils.getBodyTraining(req, res);
});

// todo get body diet----------------------------------------------------------------------------------
app.get(bodyDiet, (req, res) => {
  utils.getBodydiet(req, res);
});

// todo get forum ----------------------------------------------------------------------------------
app.get(forum, (req, res) => {
  utils.getForumlist(req, res);
});
//todo add contact to list mongo db---------------------------------------------------------------------------------------------------------------------
app.post(Contact, (req, res) => {
  utils.addContacts(req, res);
});

// todo add forum
app.post(forum, (req, res) => {
  utils.addForum(req, res);
});

//todo add to like
app.post(like, (req, res) => {
  utils.addLink(req, res);
});
//todo delete from forum--------------------------------------------------------------------------------------------------------------------
app.delete(forumDelete, (req, res) => {
  utils.deleteFormList(req, res);
});

//todo update from forum--------------------------------------------------------------------------------------------------------------------
app.patch(forumUpdate, (req, res) => {
  utils.updateForumList(req, res);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening to port:${PORT}`));

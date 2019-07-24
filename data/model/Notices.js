var db = require('../db');
var seq = require('sequelize');

var Model = db.defineModel('Notices', {
  content: seq.TEXT,
  title: seq.STRING(30),
  startDate: seq.BIGINT,
  expireDate: seq.BIGINT,
  gmId: seq.INTEGER(10),
});

// Model.sync();

// 导出模型对象
// module.exports = Model;
module.exports = {
  getNotices: () => {
    var notices =  Model.findAll();
    console.log(`find ${notices.length} notices:`);
  },

  getNotice: (id) => {
    var notices = Model.findAll({
      where: {
        gmId: '10086'
      }
    });
    console.log(`find ${notices.length} notices:`);
    if (notices.length > 0) {
      return notices
    }
    return null;
  },

  createNotice: (name, manufacturer, price) => {
    Model.create({
      content: '我是公告内容。',
      title: '系统公告的标题',
      gmId: '10086',
      status: 0,
      expireDate: 1527396599123,
      startDate: Date.now()
    }).then((data) => {
      console.log(`公告发布成功:`+ JSON.stringify(data));
      return data;
    });
  },

  deleteNotice: (id) => {
    console.log(`删除公告:`+ id);
    return null;
  }
};
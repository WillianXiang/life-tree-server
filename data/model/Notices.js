var db = require('../db');
var seq = require('sequelize');

var Model = db.defineModel('Notices', {
  content: seq.TEXT,
  title: seq.STRING(30),
  startDate: seq.BIGINT,
  expireDate: seq.BIGINT,
  gmId: seq.INTEGER(10),
});

// Model.sync({
//   force: true  // 强制同步，先删除表，然后新建
// });

// 导出模型对象
// module.exports = Model;
module.exports = {
  getNotices: async() => {
    const a = await Model.findAll({

    });
    console.log("a"+ JSON.stringify(a));
    return a;
  },

  getNotice: async(id) => {
    const notices = await Model.findAll({
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

  createNotice: async(name, manufacturer, price) => {
    const data = await Model.create({
      content: '我是公告内容。',
      title: '系统公告的标题',
      gmId: '10086',
      status: 0,
      expireDate: 1527396599123,
      startDate: Date.now()
    });
    console.log(`删除公告:`+ JSON.stringify(data));
    return data
  },

  deleteNotice: async(id) => {
    console.log(`删除公告:`+ id);
    const deleteId = await Model.destroy({
      where:{
        id: id
      }
    });
    console.log(`删除公告结果:`+ deleteId);
    return deleteId;
  }
};
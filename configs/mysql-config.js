var config = {
  database: 'test', // 使用哪个数据库
  username: 'root', // 用户名
  password: 'root', // 口令
  host: 'localhost', // 主机名
  port: 3306, // 端口号，MySQL默认3306
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
};

module.exports = config;
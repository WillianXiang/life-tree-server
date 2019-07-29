const products = require('../products');
const Notices = require('../data/model/Notices');

const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/products': async (ctx, next) => {
        ctx.rest({
            products: products.getProducts()
        });
    },

    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },

    'GET /api/notices':async (ctx, next) =>{
        console.log(`查询所有的通知开始`);
        // var a = await Notices.getNotices();
        // console.log(`查询结果:`+JSON.stringify(a));
        ctx.rest({
            notices: await Notices.getNotices()
        });
        console.log(`查询所有的通知结束`);
    },


    'GET /api/notices:id': async (ctx, next) => {
        console.log(`查询一个通知`);
        ctx.rest({
            notices: await Notices.getNotice()
        });
    },

    'POST /api/notices': async (ctx, next) => {
        var p = await Notices.createNotice(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/notices/:id': async (ctx, next) => {
        console.log(`delete notices ${ctx.params.id}...`);
        var p = await Notices.deleteNotice(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('notice:not_found', 'notice not found by id.');
        }
    }
};

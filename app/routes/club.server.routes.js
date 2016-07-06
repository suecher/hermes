/**
 * Created by Administrator on 2016/3/8.
 */
"use strict";
let ClubControllers = require('../controllers/club.server.controller');

module.exports = function(app){
    app.route('/clublist')
        .post(function(req,res,next){

        });

    app.route('/clubbycity')
        .post(function(req,res,next){
            var cityId =req.body.cityId;
            var pagination = req.body.pagination;
            ClubControllers.listByCity(cityId,pagination,function(resultobjs){
                res.json(resultobjs);
            });
        });


    app.route('/clubupdate')
        .post(function(req,res){
            let clubId = req.body.clubId;
            let updateObj = req.body.obj;

            ClubControllers.clubByUpdate(clubId,updateObj,function(result){
                res.json(result);
            });

        });

    /**
     * 用于管理端根据ID获取俱乐部信息
     */
    app.route('/clubbyid')
        .post(function(req,res){
            let clubId = req.body.clubId;
            ClubControllers.clubById(clubId,function(resultobjs){
                res.json(resultobjs);
            });
        });


    /**
     * 用于删除俱乐部的的展示图片
     */
    app.route('/removeclubpic')
        .post(function(req,res){
            let clubId = req.body.clubId;
            let picId = req.body.picId;

            ClubControllers.removeClubPic(clubId,picId,function(result){
                res.json(result);
            });
        });

    /**
     * 添加俱乐部
     */
    app.route('/addclub')
        .post(function(req,res,next){
            var clientclub = req.body;
            ClubControllers.create(clientclub,function(resultobjs){
                res.json(resultobjs);
            });
        });

    app.route('/clubbyname')
        .post(function(req,res){
            ClubControllers.clubByName(req.body.clubName,function(resultobjs){
                res.json(resultobjs);
            });
        });

    //按省份查找俱乐部
    app.route('/clubbyprovince')
        .post(function(req,res,next){
            var provinceId=req.body.province;
            ClubControllers.listByprovince(provinceId,function(resultobjs){
                res.json(resultobjs);
            });
        });
};
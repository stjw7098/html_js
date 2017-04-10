/*
Navicat MySQL Data Transfer

Source Server         : weidie
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : shoes

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:47:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  `type` varchar(20) NOT NULL,
  `color` varchar(10) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `url` varchar(2555) NOT NULL,
  `oldprice` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '圣大保罗男鞋休闲鞋男士休闲皮鞋英伦低帮板鞋子男 黑色 41码', '349', 'manshoes', 'black', '39-44', 'http://localhost/myshoes/src/img/manshoes1_1.jpg?../img/manshoes1_2.jpg?../img/manshoes1_3.jpg?http://localhost/myshoes/src/img/manshoes1_4.jpg?http://localhost/myshoes/src/img/manshoes1_5.jpg', '469');
INSERT INTO `goods` VALUES ('2', ' 舍道 男鞋男士休闲鞋牛皮商务增高休闲鞋时尚板鞋鞋子系带大码皮鞋S-9830 S-9830黄色 39', '159', 'manshoes', 'orange', '39-44', 'http://localhost/myshoes/src/img/manshoes2_1.jpg?http://localhost/myshoes/src/img/manshoes2_2.jpg?http://localhost/myshoes/src/img/manshoes2_3.jpg', '359');
INSERT INTO `goods` VALUES ('3', '鳄鱼恤 男鞋休闲鞋英伦时尚板鞋头层牛皮鞋子男 黑色WB16771031 40码', '169', 'manshoes', 'black', '38-43', 'http://localhost/myshoes/src/img/manshoes3_1.jpg?http://localhost/myshoes/src/img/manshoes3_2.jpg?http://localhost/myshoes/src/img/manshoes3_3.jpg', '378');
INSERT INTO `goods` VALUES ('4', '左凯 男士休闲鞋 男鞋 透气网布运动鞋 潮流系带板鞋 韩版驾车鞋子 男款 黑白透气 42', '179', 'manshoes', 'black', '38-43', 'http://localhost/myshoes/src/img/manshoes4_1.jpg?http://localhost/myshoes/src/img/manshoes4_2.jpg?http://localhost/myshoes/src/img/manshoes4_3.jpg', '378');
INSERT INTO `goods` VALUES ('5', '骆驼动感（camel active）休闲鞋男鞋春夏头层牛皮舒适皮鞋 时尚系带皮鞋子 16001卡其色 41', '249', 'manshoes', 'orange', '38-43', 'http://localhost/myshoes/src/img/manshoes5_1.jpg?http://localhost/myshoes/src/img/manshoes5_2.jpg?http://localhost/myshoes/src/img/manshoes5_3.jpg', '399');
INSERT INTO `goods` VALUES ('6', '骆驼（CAMEL）2017春季新款男鞋 复古耐磨系带牛皮商务正装皮鞋 烟草 41', '339', 'manshoes', 'orange', '38-43', 'http://localhost/myshoes/src/img/manshoes6_1.jpg?http://localhost/myshoes/src/img/manshoes6_2.jpg?http://localhost/myshoes/src/img/manshoes6_3.jpg', '399');
INSERT INTO `goods` VALUES ('7', '帕兰保 男士休闲鞋 男鞋 韩版透气网布运动板鞋 英伦休闲皮鞋 鞋子男款 灰色 42', '129', 'manshoes', 'gray', '38-43', 'http://localhost/myshoes/src/img/manshoes7_1.jpg?http://localhost/myshoes/src/img/manshoes7_2.jpg?http://localhost/myshoes/src/img/manshoes7_3.jpg', '299');
INSERT INTO `goods` VALUES ('8', '七匹狼（SEPTWOLVES）男鞋商务休闲鞋系带板鞋 黑色8362204022 42', '229', 'manshoes', 'black', '38-43', 'http://localhost/myshoes/src/img/manshoes8_1.jpg?http://localhost/myshoes/src/img/manshoes8_2.jpg?http://localhost/myshoes/src/img/manshoes8_3.jpg', '399');
INSERT INTO `goods` VALUES ('9', 'Dickies休闲男鞋 户外时尚硬朗低帮工装男鞋161M50LXS01 棕色 41', '189', 'manshoes', 'orange', '38-43', 'http://localhost/myshoes/src/img/manshoes9_1.jpg?http://localhost/myshoes/src/img/manshoes9_2.jpg?http://localhost/myshoes/src/img/manshoes9_3.jpg', '299');
INSERT INTO `goods` VALUES ('10', 'OEOVEAO/欧维欧 老北京布鞋男鞋休闲鞋子男运动潮鞋板鞋男驾车鞋668xie 酒红色 41', '189', 'manshoes', 'red', '38-43', 'http://localhost/myshoes/src/img/manshoes10_1.jpg?http://localhost/myshoes/src/img/manshoes10_2.jpg?http://localhost/myshoes/src/img/manshoes10_3.jpg', '299');
INSERT INTO `goods` VALUES ('11', '竞帕（JINGPA）男鞋2017春季新款运动户外休闲鞋气垫缓震透气跑步鞋子 黑白 41', '189', 'manshoes', 'black', '38-43', 'http://localhost/myshoes/src/img/manshoes11_1.jpg?http://localhost/myshoes/src/img/manshoes11_2.jpg?http://localhost/myshoes/src/img/manshoes11_3.jpg', '299');
INSERT INTO `goods` VALUES ('12', '卡帝乐鳄鱼休闲鞋男鞋春夏季男士单鞋运动板鞋休闲户外网鞋子男 宝蓝 41', '289', 'manshoes', 'blue', '38-43', 'http://localhost/myshoes/src/img/manshoes12_1.jpg?http://localhost/myshoes/src/img/manshoes12_2.jpg?http://localhost/myshoes/src/img/manshoes12_3.jpg', '499');
INSERT INTO `goods` VALUES ('13', '德尔加多 2017新款春季男士网面运动休闲鞋 男鞋户外 网鞋男学生鞋子 817黑白 42', '189', 'manshoes', 'black', '38-43', 'http://localhost/myshoes/src/img/manshoes13_1.jpg?http://localhost/myshoes/src/img/manshoes13_2.jpg?http://localhost/myshoes/src/img/manshoes13_3.jpg', '199');
INSERT INTO `goods` VALUES ('14', 'MVPBOY男鞋休闲鞋春季男鞋新款男士休闲鞋2017韩版平板鞋时尚小白鞋学生鞋子男 2220白黑 42', '148', 'manshoes', 'white', '38-43', 'http://localhost/myshoes/src/img/manshoes15_1.jpg?http://localhost/myshoes/src/img/manshoes15_2.jpg?http://localhost/myshoes/src/img/manshoes15_3.jpg', '229');
INSERT INTO `goods` VALUES ('15', '公牛世家休闲鞋男鞋夏季透气网鞋男士运动户外网布鞋 灰色 41', '223', 'manshoes', 'gray', '38-43', 'http://localhost/myshoes/src/img/manshoes14_1.jpg?http://localhost/myshoes/src/img/manshoes14_2.jpg?http://localhost/myshoes/src/img/manshoes14_3.jpg', '330');
INSERT INTO `goods` VALUES ('16', '【迈图】男鞋春季新款高帮运动 休闲鞋男气垫韩版时尚内平板鞋增高情侣鞋子男耐磨 不加绒-黑白 42', '220', 'manshoes', 'black', '38-44', 'http://localhost/myshoes/src/img/manshoes16_1.jpg?http://localhost/myshoes/src/img/manshoes16_2.jpg?http://localhost/myshoes/src/img/manshoes16_3.jpg', '330');
INSERT INTO `goods` VALUES ('17', '【迈图】马丁靴男春季新款男靴加绒时尚简约高帮靴子 男街头潮流英伦风男士短靴棉鞋 单鞋军绿 42', '188', 'manshoes', 'green', '38-44', 'http://localhost/myshoes/src/img/manshoes17_1.jpg?http://localhost/myshoes/src/img/manshoes17_2.jpg?http://localhost/myshoes/src/img/manshoes17_3.jpg', '350');

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `goods_number` varchar(30) NOT NULL,
  `goods_count` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `goods_number` (`goods_number`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('2', 'weidie', '1', '11');
INSERT INTO `shopcar` VALUES ('3', 'weidie', '2', '45');
INSERT INTO `shopcar` VALUES ('4', 'situ', '1', '1');
INSERT INTO `shopcar` VALUES ('26', 'weidie', '10', '5');
INSERT INTO `shopcar` VALUES ('27', 'weidie', '7', '2');
INSERT INTO `shopcar` VALUES ('28', 'weidie', '6', '10');
INSERT INTO `shopcar` VALUES ('29', 'weidie', '8', '4');
INSERT INTO `shopcar` VALUES ('30', 'weidie', '3', '25');
INSERT INTO `shopcar` VALUES ('31', 'weidie', '15', '3');
INSERT INTO `shopcar` VALUES ('32', 'weidie', '14', '3');
INSERT INTO `shopcar` VALUES ('33', 'weidie', '12', '1');
INSERT INTO `shopcar` VALUES ('34', 'situ', '2', '3');
INSERT INTO `shopcar` VALUES ('35', 'situ', '7', '14');
INSERT INTO `shopcar` VALUES ('36', 'situ', '9', '15');
INSERT INTO `shopcar` VALUES ('37', 'weidie', '17', '5');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('31', 'situ', '123456');
INSERT INTO `user` VALUES ('30', 'weidie', '123456');

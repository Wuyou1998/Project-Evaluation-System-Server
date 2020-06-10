/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 80019
Source Host           : localhost:3306
Source Database       : reviewer_system

Target Server Type    : MYSQL
Target Server Version : 80019
File Encoding         : 65001

Date: 2020-05-23 15:49:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectName` varchar(45) NOT NULL,
  `content` longtext NOT NULL,
  `author` varchar(20) NOT NULL,
  `administraor` varchar(20) DEFAULT NULL,
  `image` tinytext,
  `fileUrl` tinytext,
  `level` int DEFAULT '0',
  `state` int DEFAULT '0',
  `reason` tinytext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `projectName_UNIQUE` (`projectName`),
  KEY `authorName_idx` (`author`),
  KEY `administratorName_idx` (`administraor`),
  CONSTRAINT `administratorName` FOREIGN KEY (`administraor`) REFERENCES `users` (`userName`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `authorName` FOREIGN KEY (`author`) REFERENCES `users` (`userName`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('23', '物联网智能蓝牙门禁系统研发', '在近20年来，物联网技术正在逐步全球化，受物联网时代的影响，智能家居行业搭上了这班顺风车，借此飞速发展。通过几年的技术研究与实践，物联网家庭网络基本覆盖了我们大部分家庭，渗透到我们生产生活的各个方面。随着科学技术的不断进步，我们的日常生活也正在变得智能和人性化，为了使我们的生产生活向更高层次进步，文章以物联网智能家居安防检测系统为例，配合蓝牙技术的应用，探讨其在如今科学水平下，物联网智能家居安防检测系统的设计与开发，推动让生活更加美好与便捷的革新。在近20年来，物联网技术正在逐步全球化，受物联网时代的影响，智能家居行业搭上了这班顺风车，借此飞速发展。通过几年的技术研究与实践，物联网家庭网络基本覆盖了我们大部分家庭，渗透到我们生产生活的各个方面。随着科学技术的不断进步，我们的日常生活也正在变得智能和人性化，为了使我们的生产生活向更高层次进步，文章以物联网智能家居安防检测系统为例，配合蓝牙技术的应用，探讨其在如今科学水平下，物联网智能家居安防检测系统的设计与开发，推动让生活更加美好与便捷的革新。', '张三', '管理员', 'https://review-system-1301777194.cos.ap-beijing.myqcloud.com/image/202005/7ddd4df2b88de354d81506611ff136ba.jpg', 'https://review-system-1301777194.cos.ap-beijing.myqcloud.com/file/202005/80248fa548f3b4abd0d2c7d378f2bee7.docx', '1', '0', '符合要求');
INSERT INTO `projects` VALUES ('24', '高校学生网络舆情分析及引导机制研究', '项目介绍：高校学生网络舆情分析及引导机制研究', '张三', null, null, null, '0', '0', null);
INSERT INTO `projects` VALUES ('25', '企业安全生产诚信体系信息化建设', '项目介绍：企业安全生产诚信体系信息化建设', '张三', '管理员', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589887277540&di=b344170c965528b953e3f9124637b7ba&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F04%2F47%2F59%2F375858d58e48c12.jpg', null, '2', '2', '不符合要求');
INSERT INTO `projects` VALUES ('26', '大数据采集、传输、存储与使用的优化研究', '项目介绍：大数据采集、传输、存储与使用的优化研究', '张三', null, null, null, '1', '0', null);
INSERT INTO `projects` VALUES ('27', '云计算中人体生理参数分析应用平台的研究', '项目介绍：云计算中人体生理参数分析应用平台的研究', '张三', '管理员', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3101770592,3093390079&fm=26&gp=0.jpg', null, '0', '1', '前景好。');
INSERT INTO `projects` VALUES ('28', '智能物联网工程研究中心', '项目介绍：智能物联网工程研究中心', '张三', null, null, null, '1', '0', null);
INSERT INTO `projects` VALUES ('29', '工业级高精度3D打印机的研究与实现', '项目介绍：工业级高精度3D打印机的研究与实现', '张三', '管理员', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589887448799&di=ae8a875a793e94d0acc2d16a386c2c32&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffc609cf5c20f7480857aea17ba63ff18b32636dbc761-c7iMBv_fw658', null, '1', '2', '无意义');
INSERT INTO `projects` VALUES ('30', '基于行驶状况的纯电动城市客车电动空调节能控制方法研究', '项目介绍：基于行驶状况的纯电动城市客车电动空调节能控制方法研究', '张三', '管理员', null, null, '1', '2', '不符合要求');
INSERT INTO `projects` VALUES ('31', '基于深度学习的自适应图像隐写分析新方法研究', '项目介绍：基于深度学习的自适应图像隐写分析新方法研究', '张三', null, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=123979568,2662601033&fm=26&gp=0.jpg', null, '1', '0', null);
INSERT INTO `projects` VALUES ('32', '大数据技术在分级诊疗建设中的应用', '项目介绍：大数据技术在分级诊疗建设中的应用', '张三', null, null, null, '1', '0', null);
INSERT INTO `projects` VALUES ('33', '大数据背景下农业企业电子商务模式研究', '项目介绍：大数据背景下农业企业电子商务模式研究', '张三', '管理员', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589887470699&di=59cc0cb539e77e9fed366d06595b85e9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015be758a3cc9ca801219c776d3f72.jpg%401280w_1l_2o_100sh.png', null, '0', '1', '符合要求');
INSERT INTO `projects` VALUES ('34', '基于物联网技术的智能购物车系统研究', '项目介绍：基于物联网技术的智能购物车系统研究', '张三', null, null, null, '0', '0', null);
INSERT INTO `projects` VALUES ('35', 'E+零售业电商平台的建设', '项目介绍：E+零售业电商平台的建设', '张三', '管理员', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3820763536,668101398&fm=26&gp=0.jpg', null, '1', '1', '前景好。');
INSERT INTO `projects` VALUES ('36', '基于演化算法的诗词创作系统设计与实现', '项目介绍：基于演化算法的诗词创作系统设计与实现', '张三', '管理员', null, null, '1', '1', '有实现价值。');
INSERT INTO `projects` VALUES ('37', '构建老年健康云服务模式', '项目介绍：构建老年健康云服务模式', '张三', '管理员', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589887664619&di=db3fc66f8543b25c1068d5b334dda428&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffd2f2e73f3f25602c30996d4d6f5944c5201fcfe49758-YAO19K_fw658', null, '1', '2', '不符合我校实际情况');

-- ----------------------------
-- Table structure for records
-- ----------------------------
DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `projectName` varchar(45) NOT NULL,
  `person` varchar(20) NOT NULL,
  `comment` mediumtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `personName_idx` (`person`),
  KEY `projectName_idx` (`projectName`),
  CONSTRAINT `proName` FOREIGN KEY (`projectName`) REFERENCES `projects` (`projectName`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userNAme` FOREIGN KEY (`person`) REFERENCES `users` (`userName`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of records
-- ----------------------------
INSERT INTO `records` VALUES ('24', '物联网智能蓝牙门禁系统研发', '张三', '这个项目很有发展前景。');
INSERT INTO `records` VALUES ('25', '物联网智能蓝牙门禁系统研发', '张三', '贴近生产生活');
INSERT INTO `records` VALUES ('26', '物联网智能蓝牙门禁系统研发', '管理员', '有实现价值。');
INSERT INTO `records` VALUES ('27', '物联网智能蓝牙门禁系统研发', '管理员', '符合要求，予以通过。');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) NOT NULL,
  `password` tinytext NOT NULL,
  `type` int NOT NULL,
  `state` varchar(50) DEFAULT '这个人很懒，没有设置签名。',
  `avatar` tinytext,
  `realName` varchar(20) DEFAULT '未设置',
  `contact` varchar(30) DEFAULT '未设置',
  `createAtTime` varchar(13) NOT NULL,
  `pushId` tinytext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `userName_UNIQUE` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('8', '管理员', 'e10adc3949ba59abbe56e057f20f883e', '1', '你好，我是管理员。', 'https://review-system-1301777194.cos.ap-beijing.myqcloud.com/avatar/202005/f9bc9319d0f36e962ffaab9f57d1f35a.jpg', '未设置', '未设置', '1589875634658', 'null');
INSERT INTO `users` VALUES ('9', '张三', 'e10adc3949ba59abbe56e057f20f883e', '0', '今天心情不错', 'https://review-system-1301777194.cos.ap-beijing.myqcloud.com/avatar/202005/3b054e67fb2f0b03932ee7cd90c73555.jpg', '未设置', '未设置', '1589875676509', '64eef9e37614a0b87a569715651dd989');

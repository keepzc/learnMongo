#指定基础镜像
FROM node:16
#创建对应文件夹， 作为项目运行位置
RUN mkdir -p /usr/src/app
#指定工作区
WORKDIR /use/src/app
#拷贝对应文件去工作区
COPY server.js /use/src/app/
#告知当前镜像暴露端口号 是 3000
EXPOSE 3000
#执行启动命令
CMD node server.js

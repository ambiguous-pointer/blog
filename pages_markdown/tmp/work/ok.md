# JAVA 安装教程
## 第一步 确定Linux架构
> 确定请 CPU的架构是 ARM 还是 X86 还是 RESIV

在bash 中执行以下命令
```
uname -r
3.10.0-1160.119.1.el7.x86_64
```
或者以下命令
```
[root@ ~]# uname -a
Linux xxx 5.4.119-19.0009.44 #1 SMP Tue May 7 20:08:51 CST 2024 aarch64 aarch64 aarch64 GNU/Linux
[root@ ~]#
```
`x86_64` 代表 机器是 X86架构的 
`aarch64` 代表 机器是 ARM架构的
> 架构决定了后续 下载软件需要的文件是不一致的
## 第二步 下载对应的文件
### JAVA 下载
java 分 OpenJDK和OracleJDK 其中 OpenJDK 是开源的 可以进行商用
> 本教程基于 OpenJDK 安装 OracleJDK 类似

### 在哪里下载
在以下页面搜索 你对应的 操作系统和硬件架构
https://adoptium.net/zh-CN/temurin/releases/?version=8

你也可以选择直接去GitHub 上面进行搜索下载
https://github.com/adoptium/temurin8-binaries/releases/tag/jdk8u422-b05

如 操作系统是liunx硬件架构是X64则搜索 `OpenJDK8U-jdk_x64_linux` 关键字下载即可
如 操作系统是liunx硬件架构是ARM64则搜索 `OpenJDK8U-jdk_aarch64_linux` 关键字下载即可

> 这里给出常见的几个下载链接

> [linux x64](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz) <br/>
[linux arm64](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_aarch64_linux_hotspot_8u422b05.tar.gz) <br/>
[OpenJDK8U-jdk_x64_windows msi](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_windows_hotspot_8u422b05.msi) <br/>
[OpenJDK8U-jdk_x64_windows zip](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_windows_hotspot_8u422b05.zip)

### 如何下载
在Linux上使用 wget或curl进行下载 若没有这两个工具 则 使用对应系统包管理工具进行安装

执行以下命令

`wget https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz`

> 建议在 /tmp 目录下执行 即 `cd /tmp` 后再执行 wget 命令

## 第三步 开始安装JDK

**第一步 解压到指定位置**

`tar -zxvf OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz  -C /usr/local/`

**第二步 确定`java`和`javac`命令是否可以使用避免下载错硬件架构版本 以及版本是否一致**

进入到解压目标文件夹

`cd /usr/local/jdk8u422-b05`

检查命令是否可以执行以及版本号

`./bin/java -version`
`./bin/javac -version`

## 第四步 配置JAVA环境变量

`vim /etc/profile.d/my_env.sh`

```shell
export JAVA_HOME=/usr/local/jdk8u252-b09
export PATH=$PATH:$JAVA_HOME/bin
```

`source /etc/profile`

## 第五步 检查JAVA环境变量 是否成功

```shell
[root@ylx_gc_onlie ~] whereis java
java: /usr/local/java /usr/local/java/jdk8u422-b05/bin/java
[root@ylx_gc_onlie ~]# java -version
openjdk version "1.8.0_422"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_422-b05)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.422-b05, mixed mode)
[root@ylx_gc_onlie ~]# javac -version
javac 1.8.0_422
```

# Zookeeper 单机单节点 安装教程
## 第一步 检查 JAVA_HOME 环境变量是否正确
```sh
[root@ylx_gc_onlie ~]# echo $JAVA_HOME
/usr/local/java/jdk8u252-b09
```
## 第二步 下载Zookeeper应用程序
`https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.9.2/apache-zookeeper-3.9.2-bin.tar.gz`
## 第三步 安装Zookeeper
`tar -zxvf apache-zookeeper-3.9.2-bin.tar.gz -C /usr/local/`
## 第四步 配置环境变量
`vim /etc/profile.d/my_env.sh`
```shell
export ZK_HOME=/usr/local/apache-zookeeper-3.7.0-bin
export PATH=$PATH:$ZK_HOME/bin
```
`source /etc/profile`
## 第五步 修改配置文件并运行
`cp /usr/local/apache-zookeeper-3.7.0-bin/conf/zoo_sample.cfg /usr/local/apache-zookeeper-3.7.0-bin/conf/zoo.cfg`
`zkServer.sh --help
zkServer.sh start`
## 第六步 检查Zookeeper是否运行成功

# Redis 编译 安装教程
## 第一步 确认基础编译环境
## 第二步 下载源代码文件
`wget https://mirrors.huaweicloud.com/redis/redis-6.2.3.tar.gz`
## 第三步 编译
`lscpu`
`make -j2`
## 第四步 安装到指定位置
-- ./configure --prefix=/usr/local/myapp
`make PREFIX=/usr/local/redis-6.2.3 install`
## 第五步 运行
`cp ./redis.conf /usr/local/redis-6.2.3/conf`
`vim /usr/lib/systemd/system/redis.service`
```shell
[Unit]
Description=redis
After=network.target

[Service]
Type=simple
WorkingDirectory=/usr/local/redis-6.2.3
ExecStart=/usr/local/redis-6.2.3/bin/redis-server /usr/local/redis-6.2.3/conf
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
`systemctl daemon-reload`
`systemctl enable redis.service`
`systemctl start redis.service`
`systemctl status redis.service`

## 第六步 检查Redis是否运行成功

https://jdk.java.net/archive/
https://jdk.java.net/java-se-ri/8-MR6
https://adoptopenjdk.net/releases.html?variant=openjdk8&jvmVariant=hotspot
https://adoptium.net/zh-CN/temurin/releases/?version=8&os=linux&arch=aarch64&package=jdk
https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz

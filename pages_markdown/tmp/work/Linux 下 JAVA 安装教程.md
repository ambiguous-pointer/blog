# JAVA 安装教程

## 第一步 确定 Linux 架构

在安装 Java 之前，首先需要确认你的 CPU 架构是 ARM 还是 X86。可以在 Bash 中执行以下命令：

```bash
uname -r
```
或
```bash
uname -a
```

### 输出解读
- `x86_64` 代表机器是 X86 架构。
- `aarch64` 代表机器是 ARM 架构。

> 选择正确的架构非常重要，因为它会直接影响后续下载的软件包的适用性。

## 第二步 下载对应的文件

### JAVA 下载

Java 有两种主要版本：OpenJDK 和 OracleJDK。其中 OpenJDK 是开源的，适合商用，而 OracleJDK 可能需要商业许可。我们将基于 OpenJDK 的安装进行讲解。

### 下载链接

你可以通过以下链接获取合适的 OpenJDK 版本：
- [Adoptium Temurin Releases](https://adoptium.net/zh-CN/temurin/releases/?version=8)
- [GitHub Releases](https://github.com/adoptium/temurin8-binaries/releases/tag/jdk8u422-b05)

例如：
- 如果你的操作系统是 Linux 且硬件架构为 x64，则搜索关键字 `OpenJDK8U-jdk_x64_linux`。
- 如果操作系统为 Linux 且硬件架构为 ARM64，则搜索 `OpenJDK8U-jdk_aarch64_linux`。

### 常见下载链接

- [Linux x64](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz)
- [Linux ARM64](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_aarch64_linux_hotspot_8u422b05.tar.gz)
- [Windows x64 (MSI)](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_windows_hotspot_8u422b05.msi)
- [Windows x64 (ZIP)](https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_windows_hotspot_8u422b05.zip)

### 下载命令

在 Linux 系统中，你可以使用 `wget` 或 `curl` 下载 Java。如果你的系统没有这两个工具，可以使用包管理器安装。

执行以下命令：

```bash
cd /tmp
wget https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u422-b05/OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz
```

## 第三步 开始安装 JDK

### 第一步 解压文件

将下载的 tar.gz 文件解压到指定目录：

```bash
tar -zxvf OpenJDK8U-jdk_x64_linux_hotspot_8u422b05.tar.gz -C /usr/local/
```

### 第二步 确认安装

进入解压后的目录，确认 `java` 和 `javac` 命令是否可用，并检查版本：

```bash
cd /usr/local/jdk8u422-b05
./bin/java -version
./bin/javac -version
```

## 第四步 配置 JAVA 环境变量

为了让系统能识别 Java 命令，你需要设置环境变量。可以通过编辑 `/etc/profile.d/my_env.sh` 文件来完成：

```bash
vim /etc/profile.d/my_env.sh
```

在文件中添加以下内容：

```bash
export JAVA_HOME=/usr/local/jdk8u422-b05
export PATH=$PATH:$JAVA_HOME/bin
```

然后，运行以下命令以使配置生效：

```bash
source /etc/profile
```

## 第五步 检查 JAVA 环境变量

使用以下命令验证 JAVA 环境变量配置是否成功：

```bash
whereis java
java -version
javac -version
```

### 示例输出

```
java: /usr/local/java /usr/local/jdk8u422-b05/bin/java
openjdk version "1.8.0_422"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_422-b05)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.422-b05, mixed mode)
javac 1.8.0_422
```

### 解释命令作用

- `export JAVA_HOME`：设置 JAVA_HOME 环境变量，指向 JDK 安装目录。
- `export PATH`：将 JDK 的 bin 目录添加到系统路径中，使得可以在任何位置使用 Java 命令。
- `source /etc/profile`：重新加载配置文件，使环境变量设置生效。

## 总结

通过以上步骤，你已成功在 Linux 系统上安装并配置 OpenJDK。确保环境变量设置正确，可以在终端中直接使用 Java 相关命令进行开发和测试。如果遇到任何问题，可以检查各个步骤的执行结果，确保每一步都正确。
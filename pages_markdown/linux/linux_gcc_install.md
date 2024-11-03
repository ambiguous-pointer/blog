# GCC 安装

在一个没有 `make`、没有 `gcc`、没有包管理工具的基本 Linux 系统上安装 `gcc` 和 `make` 是一项挑战，但这是可以实现的。你可以通过以下步骤完成这项任务：

1. **获取编译工具的源代码：**

你需要从其他地方获取 `gcc` 和 `make` 的源代码。可以从 [GNU 的官方FTP服务器](https://ftp.gnu.org/gnu/) 下载。

2. **获取必要的依赖包：**

`gcc` 和 `make` 依赖于许多库和工具。你可能需要提前下载这些依赖包的源代码。常见的依赖包包括 `binutils`、`glibc`、`mpfr`、`gmp`、`mpc` 等。

3. **准备交叉编译工具链（如果需要）：**

如果目标系统与你下载源代码的系统架构不同，可能需要交叉编译工具链。你可以在另一台计算机上设置交叉编译环境。

4. **手动编译 `binutils`：**

`binutils` 提供链接器（`ld`）和汇编器（`as`），是编译 `gcc` 所必需的。

- 解压 `binutils` 源代码：

```sh

tar -xvf binutils-<version>.tar.gz

cd binutils-<version>

```

- 配置和编译：

```sh

./configure --prefix=/usr/local/binutils

make

make install

```

5. **手动编译 `gcc`：**

`gcc` 编译器是通过多个阶段构建的，你可能需要先构建一个最小的编译器（bootstrap），然后再编译完整版本。

- 解压 `gcc` 源代码：

```sh

tar -xvf gcc-<version>.tar.gz

cd gcc-<version>

```

- 下载并解压依赖库（`gmp`、`mpfr`、`mpc`），将它们放在 `gcc` 源代码目录中：

```sh

tar -xvf gmp-<version>.tar.gz

mv gmp-<version> gcc-<version>/gmp

tar -xvf mpfr-<version>.tar.gz

mv mpfr-<version> gcc-<version>/mpfr

tar -xvf mpc-<version>.tar.gz

mv mpc-<version> gcc-<version>/mpc

```

- 配置和编译：

```sh

./configure --prefix=/usr/local/gcc --disable-multilib --enable-languages=c,c++

make

make install

```

6. **手动编译 `make`：**

`make` 是用于自动化编译过程的工具。

- 解压 `make` 源代码：

```sh

tar -xvf make-<version>.tar.gz

cd make-<version>

```

- 配置和编译：

```sh

./configure --prefix=/usr/local/make

make

make install

```

7. **更新系统环境变量：**

你可能需要更新系统的 `PATH` 变量，以确保新安装的工具可用。

```sh

export PATH=/usr/local/binutils/bin:/usr/local/gcc/bin:/usr/local/make/bin:$PATH

```

### 注意事项

- 编译过程中可能会遇到各种问题，如缺少依赖库、配置选项错误等，需要根据具体错误信息进行调整。

- 如果目标系统非常简陋，可能需要先在其他系统上构建必要的工具，然后将这些工具复制到目标系统上。

通过这些步骤，你应该能够在没有预安装包管理工具和编译器的基本 Linux 系统上安装 `gcc` 和 `make`。





在有 `apt` 或 `yum` 包管理工具的情况下，安装官方最新版本的 `gcc` 相对简单。这里是具体的方法：

### 使用 `apt` 安装最新的 `gcc`（适用于 Debian、Ubuntu 及其衍生版）

1. **更新包列表并安装所需的工具：**

```sh

sudo apt update

sudo apt install build-essential software-properties-common -y

```

2. **添加 `PPA`（Personal Package Archive）：**

对于 Ubuntu，你可以添加 `Toolchain Test Builds` PPA 来获得最新版本的 `gcc`。

```sh

sudo add-apt-repository ppa:ubuntu-toolchain-r/test

sudo apt update

```

3. **安装最新的 `gcc`：**

```sh

sudo apt install gcc-<version> g++-<version>

```

将 `<version>` 替换为你想安装的具体版本号（例如 `gcc-12`， `g++-12`）。

4. **更新默认的 `gcc` 版本（可选）：**

如果你希望将新安装的 `gcc` 设置为系统默认的 `gcc` 版本，可以使用 `update-alternatives` 命令。

```sh

sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-<version> 60

sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-<version> 60

sudo update-alternatives --config gcc

sudo update-alternatives --config g++

```

### 使用 `yum` 安装最新的 `gcc`（适用于 CentOS、RHEL 及其衍生版）

1. **更新包列表并安装开发工具组：**

```sh

sudo yum groupinstall 'Development Tools' -y

```

2. **启用第三方仓库：**

可以启用 `Developer Toolset`（DTS）仓库来获取最新的 `gcc`。

```sh

sudo yum install centos-release-scl -y

sudo yum-config-manager --enable rhel-server-rhscl-7-rpms

```

3. **安装最新的 `gcc`：**

```sh

sudo yum install devtoolset-<version>-gcc devtoolset-<version>-gcc-c++

```

将 `<version>` 替换为你想安装的具体版本号（例如 `devtoolset-11-gcc`）。

4. **启用 `scl` 工具链：**

你可以通过 `scl`（Software Collections）工具来启用新版本的 `gcc`。

```sh

scl enable devtoolset-<version> bash

```

或者可以将以下行添加到你的 `.bashrc` 文件中，使其在每次登录时自动启用：

```sh

source /opt/rh/devtoolset-<version>/enable

```

### 总结

上述方法可以帮助你在拥有 `apt` 或 `yum` 包管理工具的系统上安装官方最新的 `gcc` 版本。如果希望获取特定的 `gcc` 版本，可能需要参考具体版本的官方文档或使用社区提供的第三方仓库。


我们安装完golang后，我们在windows的cmd命令下就可以直接查看和使用go命令和环境变量了，同样的在linux下可以在控制台使用,如下图所示：

```swift
C:\Users\xxxx>go env
set GO111MODULE=
set GOARCH=amd64
set GOBIN=
set GOCACHE=C:\Users\xxxx\AppData\Local\go-build
set GOENV=C:\Users\xxxx\AppData\Roaming\go\env
set GOEXE=.exe
set GOFLAGS=
set GOHOSTARCH=amd64
set GOHOSTOS=windows
set GOINSECURE=
set GONOPROXY=
set GONOSUMDB=
set GOOS=windows
set GOPATH=E:\go-project
set GOPRIVATE=
set GOPROXY=https://goproxy.cn,direct
set GOROOT=C:\Go\go
set GOSUMDB=off
set GOTMPDIR=
set GOTOOLDIR=C:\Go\go\pkg\tool\windows_amd64
set GCCGO=gccgo
set AR=ar
set CC=gcc
set CXX=g++
set CGO_ENABLED=1
set GOMOD=
set CGO_CFLAGS=-g -O2
set CGO_CPPFLAGS=
set CGO_CXXFLAGS=-g -O2
set CGO_FFLAGS=-g -O2
set CGO_LDFLAGS=-g -O2
set PKG_CONFIG=pkg-config
set GOGCCFLAGS=-m64 -mthreads -fmessage-length=0 -fdebug-prefix-map=C:\Users\xxxxx\AppData\Local\Temp\go-build491479286=/tmp/go-build -gno-record-gcc-switches
```

我们也可以直接输入go,查看go支持的命令

## GO111MODULE

GO111MODULE是 go modules 功能的开关，关于go modules本文不详述，这个涉及到go的一种很重要的管理机制，后面会有专门的文章来分析，我们可以简单的理解为，在没有go modules机制时，go工程中对于第三方功能包的管理非常复杂，也非常专业，这就导致程序员在进行开发的时候，对于第三方功能包的管理很不方便，所以才有了go modules机制。这个机制的开关是通过GO111MODULE环境变量来配置的。

> GO111MODULE=off，无模块支持，go命令行将不会支持module功能，寻找依赖包的方式将会沿用旧版本那种通过vendor目录或者GOPATH模式来查找。

> GO111MODULE=on，模块支持，go命令行会使用modules，而一点也不会去GOPATH目录下查找。

> GO111MODULE=auto，默认值，go命令行将会根据当前目录来决定是否启用module功能。这种情况下可以分为两种情形：

1. 当前目录在GOPATH/src之外且该目录包含go.mod文件，开启模块支持。
2. 当前文件在包含go.mod文件的目录下面。

```ruby
注：
在使用go modules时，GOPATH是无意义的，不过它还是会把下载的依赖存储在$GOPATH/pkg/mod 中
也会把go install 的结果放在 $GOPATH/bin 中。

当modules 功能启用时，依赖包的存放位置变更为$GOPATH/pkg
允许同一个package多个版本并存，且多个项目可以共享缓存的module。
```

命令设置如下：

```csharp
go env -w GO111MODULE=on
```

> 注：如果后面不需要使用,可以再将值设置为off。

## GOPROXY

从字面意思就能看出，GOPROXY表示的是go的代理设置，之所以有这个环境变量，是因为go这种语言不像C语言，在C语言中，如果我们想要使用别人的第三方代码，一般有两种途径：

而在go语言中，类似于java，可以在编程时，引入第三方代码的库地址，比如git仓库，然后在编译的时候，IDE会自动的拉取第三方库文件到当前工程。
这样做虽然很方便，但是带来了一个问题：**网速和限制**，
golang默认的GOPROXY是[https://](https://links.jianshu.com/go?to=https%3A%2F%2Fgoproxy.io)[goproxy.io](http://goproxy.io/),这个是官方的设置，我们可以使用国内的代理，Windows下设置如下:，因为一些限制，我们不能很顺利的使用和下载这些仓库，这样就会导致下载缓慢或者失败，所以这个时候就需要一个**代理**来实现下载，这个代理就是中间商，可以跨过限制来访问。

golang默认的GOPROXY是[**https://**](https://links.jianshu.com/go?to=https%3A%2F%2Fgoproxy.io)[**goproxy.io**](http://goproxy.io/),这个是官方的设置，我们可以使用国内的代理，Windows下设置如下:

```go
go env -w GOPROXY=https://goproxy.cn,direct
```

> 注：其中 **-w** 表示 写 操作。

## 官方参考设置代理

具体细节，可以参考[https://](https://links.jianshu.com/go?to=https%3A%2F%2Fgoproxy.cn%2F)[goproxy.cn/。](http://goproxy.cn/。)

#### go module 代理设置 Go 1.13 及以上（推荐）

```go
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

#### macOS 或 Linux

```dart
$ export GO111MODULE=on
$ export GOPROXY=https://goproxy.cn
```

或者

```bash
$ echo "export GO111MODULE=on" >> ~/.profile
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile
$ source ~/.profile
```

#### Windows

打开你的 PowerShell 并执行

```ruby
C:\> $env:GO111MODULE = "on"
C:\> $env:GOPROXY = "https://goproxy.cn"
```
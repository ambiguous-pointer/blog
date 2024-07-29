## git bash proxy

> 由于直连到 `github` 的 `clone`, `pull`, `push` 等操作都很慢，我们需要为其设置代理，以加快连接 `github.com` 的速度
>
> 本文操作环境是 `Windows`

## 方法一

打开 `git bash`，然后输入

```bash
# 设置http代理
git config --global http.proxy "http://127.0.0.1:2080"
git config --global https.proxy "https://127.0.0.1:2080"
# 设置socks5代理
git config --global http.proxy socks5://10.191.131.156:3128/
git config --global https.proxy socks5://10.191.131.156:3128/
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

这样设置之后，`git clone https://github.com/username/repo.git` 的速度基本能跑满代理服务器的带宽

但是，这种方式并不适用于 `git clone git@github.com:username/repo.git` (ssh方式通信)

> 若只想在一个项目内使用代理 则去掉 `--global` 选项 > `git config https.proxy "https://127.0.0.1:1080"` 但是这样必须是在有`.git`目录里面也就是git项目里面

## 方法二

打开 `bash`，然后输入

```bash
# 设置http代理
export http_proxy="http://127.0.0.1:2080"
export https_proxy="http://127.0.0.1:2080"
# 取消代理
unset http_proxy
unset http_proxy
```

> 这个需要bash 环境支持代理
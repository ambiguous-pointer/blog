
## 管理人员
ssh密钥生成命令
`ssh-keygen -t ed25519 -f ~/.ssh/secret-keys/by_linux -C "your_email@example.com"`

用户添加命令
`useradd -m yangjie`

设置用户密码命令
`passwd yangjie`

## 用户链接端
`ssh -J yangjie@139.186.158.215:10022 root@172.30.0.40 -p 22`

`-J` 选项是必须的

`yangjie@139.186.158.215:10022` `yangjie` 是用户名称 由管理员创建（一般）

---
|172.30.0.40|root|gateway
|172.30.0.109|root|渝链信国创-测试环境
|172.30.0.6|root|spgz测试环境
|172.30.0.8|root|spgz生产环境-online



```shell
ssh-keygen -t ed25519 -f ~/.ssh/secret-keys/by_linux -C "your_email@example.com"
useradd -m yangjie

root@by-gateway:~# ls -la /home/
total 12
drwxr-xr-x  3 root    root    4096 Oct  4 20:08 .
drwxr-xr-x 19 root    root    4096 Oct  4 20:09 ..
drwxr-xr-x  2 yangjie yangjie 4096 Oct  4 20:08 yangjie

root@by-gateway:~# passwd yangjie
New password: YjPass..
Retype new password:
passwd: password updated successfully

$ ssh -p 10022 yangjie@139.186.158.215
yangjie@139.186.158.215's password:
Linux by-gateway 6.1.0-23-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.99-1 (2024-07-15) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.

ssh-keygen -t ed25519 -f ~/.ssh/secret-keys/by_linux -C "your_email@example.com"
ssh-copy-id -i ~/.ssh/secret-keys/by_linux_ed25519.pub -p 10022 yangjie@139.186.158.215


ssh -J <user@jump-host:port> <user@remote-target:port>

ssh -J yangjie@139.186.158.215:10022 root@172.30.0.109
yangjie@139.186.158.215's password:
root@172.30.0.109's password:
Last login: Fri Oct  4 19:42:48 2024 from 183.226.204.18
Welcome to TencentOS Server 2.4(tkernel4) aarch64
Version 2.4 20240902
[root@test_and_build_server ~]#


ssh -J yangjie@139.186.158.215:10022 root@172.30.0.40 -p 10022
yangjie@139.186.158.215's password:
The authenticity of host '[172.30.0.40]:10022 (<no hostip for proxy command>)' can't be established.
ED25519 key fingerprint is SHA256:Lwn20rG5Yl4gmH2w4evWS8hdX6HEyVoef+HMsSsDugw.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:71: 139.186.158.215
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[172.30.0.40]:10022' (ED25519) to the list of known hosts.
root@172.30.0.40's password:


ssh  -L 8099:127.0.0.1:8099 -J yangjie@139.186.158.215:10022 root@172.30.0.109yangjie@139.186.158.215's password:
root@172.30.0.109's password:
Last login: Fri Oct  4 20:44:20 2024 from 172.30.0.40
Welcome to TencentOS Server 2.4(tkernel4) aarch64
Version 2.4 20240902
[root@test_and_build_server ~]#

```
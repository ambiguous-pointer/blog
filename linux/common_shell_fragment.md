# **Linux下常用命令**



### top

```
c： 显示完整的命令
d： 更改刷新频率
f： 增加或减少要显示的列(选中的会变成大写并加*号)
F： 选择排序的列
h： 显示帮助画面
H： 显示线程
i： 忽略闲置和僵死进程
k： 通过给予一个PID和一个signal来终止一个进程。（默认signal为15。在安全模式中此命令被屏蔽）
l:  显示平均负载以及启动时间（即显示影藏第一行）
m： 显示内存信息
M： 根据内存资源使用大小进行排序
N： 按PID由高到低排列
o： 改变列显示的顺序
O： 选择排序的列，与F完全相同
P： 根据CPU资源使用大小进行排序
q： 退出top命令
r： 修改进程的nice值(优先级)。优先级默认为10，正值使优先级降低，反之则提高的优先级
s： 设置刷新频率（默认单位为秒，如有小数则换算成ms）。默认值是5s，输入0值则系统将不断刷新
S： 累计模式（把已完成或退出的子进程占用的CPU时间累计到父进程的MITE+ ）
T： 根据进程使用CPU的累积时间排序
t： 显示进程和CPU状态信息（即显示影藏CPU行）
u： 指定用户进程
W： 将当前设置写入~/.toprc文件，下次启动自动调用toprc文件的设置
<： 向前翻页
>： 向后翻页
?： 显示帮助画面
1(数字1)： 显示每个CPU的详细情况
```



## nmcli 配置网络

```
nmcli device show
ip link
ip addr
sudo nmcli connection add type ethernet ifname your-device-name
sudo nmcli connection modify "ethernet-eth0" ipv4.method auto

nmcli con mod ens192 ipv4.add 192.168.0.211/24 ipv4.gateway 192.168.0.1 ipv4.dns 192.168.0.211 ipv4.method manual

nmcli con mod ens192 ipv4.dns 192.168.0.211 
nmcli con reload
nmcli con up ens192

sudo nmcli connection add con-name "eth0" ifname "eth0" type ethernet
sudo nmcli connection modify "eth0" ipv4.address 192.168.1.100/24
sudo nmcli connection modify "eth0" ipv4.gateway 192.168.1.1
sudo nmcli connection modify "eth0" ipv4.dns 8.8.8.8
sudo nmcli connection modify "eth0" ipv4.method manual

[root@xydc ~]# cat /etc/docker/daemon.json
{
    "exec-opts": ["native.cgroupdriver=systemd"],
    "data-root": "/opt/anyandata/dockerimages",
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "100m",
        "max-file": "10"
    },
    "insecure-registries":["http://192.168.0.222:8000","http://reg.anyan.com:8000"],
    "registry-mirrors": ["https://pqbap4ya.mirror.aliyuncs.com"]
}

#!/usr/bin/bash

echo > /var/log/syslog
echo > /var/log/messages
echo > /var/log/httpd/access_log
echo > /var/log/httpd/error_log
echo > /var/log/xferlog
echo > /var/log/secure
echo > /var/log/auth.log
echo > /var/log/user.log
echo > /var/log/wtmp
echo > /var/log/lastlog
echo > /var/log/btmp
echo > /var/run/utmp
echo > ~/.bash_history
history -c
```



## **Linux下NodeJS+npm 安装脚本**

```
#! /bin/bash

mkdir temp && cd temp
mkdir -p  /opt/software/node
wget  https://nodejs.org/dist/v18.13.0/node-v18.13.0-linux-x64.tar.gz
tar -zxf node-v18.13.0-linux-x64.tar.gz  -C /opt/software/node/
touch vim /etc/profile.d/my_env.sh
echo #NODE_HOME

export NODE_HOME=/opt/software/node/node-v18.13.0-linux-x64

export PATH=\$PATH:\$NODE_HOME/bin  >> /etc/profile.d/my_env.sh

source /etc/profile
```

## **Linux下 Java(Oracle JDK17&8) 安装脚本**

```shell
#! /bin/bash

mkdir temp && cd temp
mkdir -p  /opt/software/jdk/jdk17
wget  https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz
tar -zxf jdk-17_linux-x64_bin.tar.gz  -C /opt/software/jdk/jdk17/
touch vim /etc/profile.d/my_env.sh
echo  "#JAVA_HOME

export JAVA_HOME=/opt/software/java/jdk-17.0.6

export PATH=\$PATH:\$JAVA_HOME/bin" >> /etc/profile.d/my_env.sh

source /etc/profile
```



## **Linux 基本开发下载地址**

```shell
https://nodejs.org/dist/v18.13.0/node-v18.13.0-linux-x64.tar.gz
https://dlcdn.apache.org/maven/maven-3/3.8.7/binaries/apache-maven-3.8.7-bin.tar.gz
https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz

## JDK 8 需要登录到Oracle 获取带有token的下载地址
https://download.oracle.com/otn/java/jdk/8u361-b09/0ae14417abb444ebb02b9815e2103550/jdk-8u361-linux-i586.tar.gz?AuthParam=1674179588_3b8c09e23265db90a2178bea6bc7d553
```

## **Linux 下 nohup 持续运行命令**

```
command > logfile.txt & echo $! > pidfile.txt
nohup java -jar halo-2.2.0-SNAPSHOT.jar > logfile.txt & echo $! > pidfile.txt
export PATH="/usr/local/nginx/sbin/:$PATH"
```

## **Linux 授予sh文件执行权限**

```
chmod u+x target.sh
```

## **CentOS 关闭防火墙命令**

```
systemctl stop firewalld.service
systemctl disable firewalld.service
systemctl status firewalld.service
systemctl disable firewalld --now
firewall-cmd --permanent --add-port=6443/tcp #apiserver
firewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16 #pods
firewall-cmd --permanent --zone=trusted --add-source=10.43.0.0/16 #services
firewall-cmd --reload

yum install -y yum-utils
```

## **Ubuntu 关闭防火墙命令**

```
sudo ufw status
sudo ufw enable
sudo ufw disable
ufw disable
ufw allow 6443/tcp #apiserver
ufw allow from 10.42.0.0/16 to any #pods
ufw allow from 10.43.0.0/16 to any #services
```

## netstat命令

```
usage: netstat [-veenNcCF] [<Af>] -r         netstat {-V|--version|-h|--help}
       netstat [-vnNcaeol] [<Socket> ...]
       netstat { [-veenNac] -I[<Iface>] | [-veenNac] -i | [-cnNe] -M | -s } [delay]

        -r, --route                display routing table            #显示路由表
        -I, --interfaces=<Iface>   display interface table for <Iface>  #显示网络接口表
        -i, --interfaces           display interface table  #显示网络接口表
        -g, --groups               display multicast group memberships      #显示多播组成员
        -s, --statistics           display networking statistics (like SNMP)    #显示网络统计数据，如IP/ICMP/SNMP/..各协议统计。
        -M, --masquerade           display masqueraded connections     #显示伪装的连接

        -v, --verbose              be verbose   #详细信息
        -n, --numeric              don't resolve names     #不做名字解析
        --numeric-hosts            don't resolve host names     #不做主机名解析
        --numeric-ports            don't resolve port names     #不做端口名解析
        --numeric-users            don't resolve user names     #不做用户名解析
        -N, --symbolic             resolve hardware names   
        -e, --extend               display other/more information   #显示更多信息，用户名，inode
        -p, --programs             display PID/Program name for sockets     #显示pid和程序名字
        -c, --continuous           continuous listing   #持续的列出相关信息

        -l, --listening            display listening server sockets     #显示处于监听状态的套接字
        -a, --all, --listening     display all sockets (default: connected)     #显示所有的套接字
        -o, --timers               display timers       #显示计时器
        -F, --fib                  display Forwarding Information Base (default)       #使用-rF查看路由表时，显示转发信息
        -C, --cache                display routing cache instead of FIB     #使用-rC查看路由表时，显示详细的路由缓存
        -T, --notrim               stop trimming long addresses     #停止修剪长地址
        -Z, --context              display SELinux security context for sockets     #显示套接字的SELINUX上下文

#例如
    -a 显示所有状态的socket  
    -n 不做名字解析，不加此参数，80端口会显示成http,127.0.0.1显示成localhost,uid为0显示成root等等    
    -e 显示更多信息如用户，inode
    -p 显示pid和程序名字
    -t 显示tcp链接
    -u 显示udp链接
    -x 显示unix套接字 
    -l #显示处于监听状态的套接字
netstat -anpelt   #查看处于监听状态的tcp链接
netstat -anpelu   #查看处于监听状态的udp链接
netstat -anpxe   #查看unix套接字链接
```

## top命令

e是单位切换 M是按照内存排序 c是cpu条 m 是内存tiao

除了e可以切换单位和M可以按照内存排序外，top命令还有以下常用功能：

1. 输入大写P，则结果按CPU占用降序排序。输入大写M，结果按内存占用降序排序。
2. 按f键可以选择显示的内容。按f键之后会显示列的列表，按a-z即可显示或隐藏对应的列，最后按回车键确定。
3. 按o键可以改变列的显示顺序。按小写的a-z可以将相应的列向右移动，而大写的A-Z可以将相应的列向左移动。最后按回车键确定。
4. 按大写的F或O键，然后按a-z可以将进程按照相应的列进行排序。而大写的R键可以将当前的排序倒转。

请注意，top命令的功能可能会因操作系统和版本的不同而有所差异。如果上述命令无法正常工作，建议查阅操作系统文档或联系系统管理员以获取更准确的信息。

```
Help for Interactive Commands - procps-ng version 3.3.10
Window 1:Def: Cumulative mode Off.  System: Delay 3.0 secs; Secure mode Off.

  Z,B,E,e   Global: 'Z' colors; 'B' bold; 'E'/'e' summary/task memory scale
  l,t,m     Toggle Summary: 'l' load avg; 't' task/cpu stats; 'm' memory info
  0,1,2,3,I Toggle: '0' zeros; '1/2/3' cpus or numa node views; 'I' Irix mode
  f,F,X     Fields: 'f'/'F' add/remove/order/sort; 'X' increase fixed-width

  L,&,<,> . Locate: 'L'/'&' find/again; Move sort column: '<'/'>' left/right
  R,H,V,J . Toggle: 'R' Sort; 'H' Threads; 'V' Forest view; 'J' Num justify
  c,i,S,j . Toggle: 'c' Cmd name/line; 'i' Idle; 'S' Time; 'j' Str justify
  x,y     . Toggle highlights: 'x' sort field; 'y' running tasks
  z,b     . Toggle: 'z' color/mono; 'b' bold/reverse (only if 'x' or 'y')
  u,U,o,O . Filter by: 'u'/'U' effective/any user; 'o'/'O' other criteria
  n,#,^O  . Set: 'n'/'#' max tasks displayed; Show: Ctrl+'O' other filter(s)
  C,...   . Toggle scroll coordinates msg for: up,down,left,right,home,end

  k,r       Manipulate tasks: 'k' kill; 'r' renice
  d or s    Set update interval
  W,Y       Write configuration file 'W'; Inspect other output 'Y'
  q         Quit
          ( commands shown with '.' require a visible task display window )
Press 'h' or '?' for help with Windows,
Type 'q' or <Esc> to continue
```

## ps命令

在Linux系统中，ps(Process Status的缩写)命令常常用来用来列出系统中当前运行的进程。ps命令列出的是当前那些进程的快照，就是执行ps命令的那个时刻的那些进程，如果想要动态的显示进程信息，就可以使用top命令。要对进程进行监测和控制，首先必须要了解当前进程的情况，也就是需要查看当前进程，而 ps 命令就是最基本同时也是非常强大的进程查看命令。使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等。总之大部分信息都是可以通过执行该命令得到的

**ps命令进程排行**

```
ps aux --sort -rss | head
ps -eo pid,ppid,%mem,%cpu,cmd --sort=-%mem | head #使用以下 ps 命令格式可在输出中仅展示有关内存消耗过程的特定信息。
ps -eo pid,ppid,%mem,%cpu,comm --sort=-%mem | head #查看命令名称而不是命令的绝对路径

top -c -b -o +%MEM | head -n 20 | tail -15
top -b -o +%MEM | head -n 20 | tail -15 #查看命令名称而不是命令的绝对路径
```

**ps命令支持三种语法格式**

Unix风格的参数，前面加单破折线
      BSD风格的参数，前面不加破折线
      GNU风格的长参数，前面加双破折线

**Linux上进程有5种状态:**

![img](http://ventcode.cn/upload/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-10%20223649.png)**1、ps -aux 是以BSD方式显示**

ps (Process Status) 进程状态

a (show processes for all users) 显示所有用户的进程

u (display the process's user/owner) 显示用户

x (also show processes not attached to a terminal)显示无控制终端的进程

**2、ps -ef 是以System V方式显示，该种方式比BSD方式显示的多**

e (all processes)显示所有用户的进程此参数的效果和指定"a"参数相同

f (ASCII art forest)用ASCII字符显示树状结构，表达程序间的相互关系

**3、grep**

用于查找文件里符合条件的字符串。

grep指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设grep指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为"-"，则grep指令会从标准输入设备读取数据
![img](http://ventcode.cn/upload/QQ%E5%9B%BE%E7%89%8720230310224106.png)

## tar压缩命令

```
tar -zxvf xxxx.tar.gz -C ./xxx/xxx/    # 解压缩
tar -zcvf xxxx.tar.gz -C ./xxx/xxx/    # 打包压缩

tar -zcvf tomcat.tar.gz --exclude=tomcat/logs/ --exclude=tomcat/libs/ tomcat    #错误写法  还是会将 logs 下的目录打包压缩
tar -zcvf tomcat.tar.gz --exclude=tomcat/logs --exclude=tomcat/libs tomcat    #正确写法
```



## cat 查看命令

```
参数说明:
-n 或 --number：由 1 开始对所有输出的行数编号。

-b 或 --number-nonblank：和 -n 相似，只不过对于空白行不编号。

-s 或 --squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行。

-v 或 --show-nonprinting：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。

-E 或 --show-ends : 在每行结束处显示 $。

-T 或 --show-tabs: 将 TAB 字符显示为 ^I。

-A, --show-all：等价于 -vET。

-e：等价于"-vE"选项；

-t：等价于"-vT"选项；
cat  xxx.txt tail -n 1000   #显示最后1000行
cat  xxx.txt tail -n +1000   #从1000行开始显示，显示1000行以后的
cat  xxx.txt head -n 1000   #显示前面1000行
```

## du磁盘大小查看命令

```shell
du -sh *
参数解释:
-h：以人类可读的方式显示

-a：显示目录占用的磁盘空间大小，还要显示其下目录和文件占用磁盘空间的大小

-s：显示目录占用的磁盘空间大小，不要显示其下子目录和文件占用的磁盘空间大小

-c：显示几个目录或文件占用的磁盘空间大小，还要统计它们的总和

–apparent-size：显示目录或文件自身的大小

-l ：统计硬链接占用磁盘空间的大小

-L：统计符号链接所指向的文件占用的磁盘空间大小
```

## find命令

```
find / -name *.conf
df -h    #磁盘大小
top    # P CUP  M 内存
cat /proc/cpuinfo     # CPU
export PATH="/usr/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/bin:/sbin"
```
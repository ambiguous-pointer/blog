```shell
https://down7.huorong.cn/sysdiag-all-5.0.74.2-2023.11.20.1.exe
https://www.huorong.cn/hrkill/download.php
[root@server ~]# nmap 192.168.0.0/22 -sn --min-rate 8888 -r

Starting Nmap 6.40 ( http://nmap.org ) at 2024-01-12 12:49 CST
Nmap scan report for 192.168.0.1
Host is up (0.00059s latency).
MAC Address: 64:6E:97:5D:15:48 (Unknown)
Nmap scan report for 192.168.0.8
Host is up (0.015s latency).
MAC Address: 50:81:40:DE:4E:DF (Unknown)
Nmap scan report for 192.168.0.134
Host is up (0.00032s latency).
MAC Address: 00:0C:29:5E:67:92 (VMware)
Nmap scan report for 192.168.0.201
Host is up (0.00035s latency).
MAC Address: 00:0C:29:5E:67:92 (VMware)
Nmap scan report for 192.168.0.202
Host is up (0.00031s latency).
MAC Address: 00:0C:29:EB:FC:E8 (VMware)
Nmap scan report for 192.168.0.203
Host is up (0.00033s latency).
MAC Address: 00:0C:29:6B:81:56 (VMware)
Nmap scan report for 192.168.0.204
Host is up (0.00034s latency).
MAC Address: 00:0C:29:19:88:B8 (VMware)
Nmap scan report for 192.168.0.233
Host is up (0.00047s latency).
MAC Address: 00:0C:29:92:B8:51 (VMware)
Nmap scan report for 192.168.0.234
Host is up (0.00045s latency).
MAC Address: 00:0C:29:86:5F:C8 (VMware)
Nmap scan report for 192.168.0.240
Host is up (0.00017s latency).
MAC Address: 00:0C:29:E9:46:29 (VMware)
Nmap scan report for 192.168.0.254
Host is up (0.00036s latency).
MAC Address: D0:94:66:1F:93:4C (Unknown)
Nmap scan report for 192.168.1.30
Host is up (0.00011s latency).
MAC Address: 00:0C:29:19:88:B8 (VMware)
Nmap scan report for 192.168.0.253
Host is up.
Nmap done: 1024 IP addresses (13 hosts up) scanned in 0.54 seconds
[root@server ~]# nmap 192.168.0.8 192.168.0.134 192.168.1.30 -sS -PN -p- --min-rate 8888 -r
Nmap scan report for 192.168.0.8
Host is up (0.0042s latency).
Not shown: 54914 closed ports, 10615 filtered ports
PORT     STATE SERVICE
80/tcp   open  http
515/tcp  open  printer
631/tcp  open  ipp
8018/tcp open  unknown
9100/tcp open  jetdirect
9400/tcp open  sec-t4net-srv
MAC Address: 50:81:40:DE:4E:DF (Unknown)

Nmap scan report for 192.168.0.134
Host is up (0.000075s latency).
Not shown: 65522 closed ports
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
3306/tcp  open  mysql
5672/tcp  open  amqp
6379/tcp  open  unknown
8081/tcp  open  blackice-icecap
8082/tcp  open  blackice-alerts
8083/tcp  open  us-srv
8084/tcp  open  unknown
8085/tcp  open  unknown
8086/tcp  open  d-s-n
10122/tcp open  unknown
15672/tcp open  unknown
MAC Address: 00:0C:29:5E:67:92 (VMware)

Nmap scan report for 192.168.1.30
Host is up (0.00027s latency).
Not shown: 65515 closed ports
PORT      STATE SERVICE
80/tcp    open  http
89/tcp    open  su-mit-tg
135/tcp   open  msrpc
445/tcp   open  microsoft-ds
3336/tcp  open  unknown
4369/tcp  open  epmd
5672/tcp  open  amqp
5985/tcp  open  wsman
10121/tcp open  unknown
15672/tcp open  unknown
25672/tcp open  unknown
33060/tcp open  unknown
47001/tcp open  unknown
49664/tcp open  unknown
49665/tcp open  unknown
49666/tcp open  unknown
49667/tcp open  unknown
49668/tcp open  unknown
49670/tcp open  unknown
49675/tcp open  unknown
MAC Address: 00:0C:29:19:88:B8 (VMware)

Nmap done: 3 IP addresses (3 hosts up) scanned in 70.25 seconds
[root@server ~]# nmap 192.168.1.30 -p 80,89,135,445,3336,4369,5672,5985,10121,15672,25672,33060,47001,49664,49665,49666,49667,49668,49670,49675 -sV -sC -O -A --version-all -A
Nmap scan report for 192.168.1.30
Host is up (0.00032s latency).
PORT      STATE SERVICE       VERSION
80/tcp    open  http          Apache httpd
| http-auth:
| HTTP/1.1 401 Unauthorized
|_  Basic realm=zentao runner authentication required
|_http-methods: No Allow or Public header in OPTIONS response (status code 401)
|_http-title: 401 Unauthorized
89/tcp    open  http          nginx 1.19.10
|_http-methods: No Allow or Public header in OPTIONS response (status code 405)
|_http-title: Site doesn't have a title (text/html).
135/tcp   open  msrpc         Microsoft Windows RPC
445/tcp   open  microsoft-ds?
3336/tcp  open  mysql         MySQL (unauthorized)
4369/tcp  open  epmd          Erlang Port Mapper Daemon
| epmd-info:
|   epmd running on port 4369
|_  name rabbit at port 25672
5672/tcp  open  amqp          RabbitMQ 3.8.18 (0-9)
| amqp-info:
|   capabilities:
|     publisher_confirms: YES
|     exchange_exchange_bindings: YES
|     basic.nack: YES
|     consumer_cancel_notify: YES
|     connection.blocked: YES
|     consumer_priorities: YES
|     authentication_failure_close: YES
|     per_consumer_qos: YES
|     direct_reply_to: YES
|   cluster_name: rabbit@WIN-71QILA5IAQK
|   copyright: Copyright (c) 2007-2021 VMware, Inc. or its affiliates.
|   information: Licensed under the MPL 2.0. Website: https://rabbitmq.com
|   platform: Erlang/OTP 24.0
|   product: RabbitMQ
|   version: 3.8.18
|   mechanisms: PLAIN AMQPLAIN
|_  locales: en_US
5985/tcp  open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-methods: No Allow or Public header in OPTIONS response (status code 404)
|_http-title: Not Found
10121/tcp open  unknown
15672/tcp open  tcpwrapped
25672/tcp open  erlang-node   Erlang Distribution Node (Status: not_allowed)
33060/tcp open  socks5
| socks-auth-info:
|   No authentication
|   No authentication
|_  No authentication
|_socks-open-proxy: ERROR: Script execution failed (use -d to debug)
47001/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-methods: No Allow or Public header in OPTIONS response (status code 404)
|_http-title: Not Found
49664/tcp open  msrpc         Microsoft Windows RPC
49665/tcp open  msrpc         Microsoft Windows RPC
49666/tcp open  msrpc         Microsoft Windows RPC
49667/tcp open  msrpc         Microsoft Windows RPC
49668/tcp open  msrpc         Microsoft Windows RPC
49670/tcp open  msrpc         Microsoft Windows RPC
49675/tcp open  msrpc         Microsoft Windows RPC
1 service unrecognized despite returning data. If you know the service/version, please submit the following fingerprint at http://www.insecure.org/cgi-bin/servicefp-submit.cgi :
SF-Port33060-TCP:V=6.40%I=9%D=1/12%Time=65A0C7FE%P=x86_64-redhat-linux-gnu
SF:%r(GenericLines,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(GetRequest,9,"\x05\
SF:0\0\0\x0b\x08\x05\x1a\0")%r(HTTPOptions,9,"\x05\0\0\0\x0b\x08\x05\x1a\0
SF:")%r(RTSPRequest,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(RPCCheck,9,"\x05\0
SF:\0\0\x0b\x08\x05\x1a\0")%r(DNSVersionBindReq,9,"\x05\0\0\0\x0b\x08\x05\
SF:x1a\0")%r(DNSStatusRequest,2B,"\x05\0\0\0\x0b\x08\x05\x1a\0\x1e\0\0\0\x
SF:01\x08\x01\x10\x88'\x1a\x0fInvalid\x20message\"\x05HY000")%r(Hello,9,"\
SF:x05\0\0\0\x0b\x08\x05\x1a\0")%r(Help,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%
SF:r(SSLSessionReq,2B,"\x05\0\0\0\x0b\x08\x05\x1a\0\x1e\0\0\0\x01\x08\x01\
SF:x10\x88'\x1a\x0fInvalid\x20message\"\x05HY000")%r(SSLv23SessionReq,32,"
SF:\x05\0\0\0\x0b\x08\x05\x1a\0%\0\0\0\x01\x08\x01\x10\x88'\x1a\x16Invalid
SF:\x20message-frame\.\"\x05HY000")%r(Kerberos,9,"\x05\0\0\0\x0b\x08\x05\x
SF:1a\0")%r(SMBProgNeg,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(X11Probe,2B,"\x
SF:05\0\0\0\x0b\x08\x05\x1a\0\x1e\0\0\0\x01\x08\x01\x10\x88'\x1a\x0fInvali
SF:d\x20message\"\x05HY000")%r(FourOhFourRequest,9,"\x05\0\0\0\x0b\x08\x05
SF:\x1a\0")%r(LPDString,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(LDAPBindReq,46
SF:,"\x05\0\0\0\x0b\x08\x05\x1a\x009\0\0\0\x01\x08\x01\x10\x88'\x1a\*Parse
SF:\x20error\x20unserializing\x20protobuf\x20message\"\x05HY000")%r(SIPOpt
SF:ions,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(LANDesk-RC,9,"\x05\0\0\0\x0b\x
SF:08\x05\x1a\0")%r(TerminalServer,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(NCP
SF:,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(NotesRPC,2B,"\x05\0\0\0\x0b\x08\x0
SF:5\x1a\0\x1e\0\0\0\x01\x08\x01\x10\x88'\x1a\x0fInvalid\x20message\"\x05H
SF:Y000")%r(DistCCD,9,"\x05\0\0\0\x0b\x08\x05\x1a\0")%r(JavaRMI,9,"\x05\0\
SF:0\0\x0b\x08\x05\x1a\0")%r(Radmin,15D,"\x05\0\0\0\x0b\x08\x05\x1a\0P\x01
SF:\0\0\x02\n\x0f\n\x03tls\x12\x08\x08\x01\x12\x04\x08\x07@\0\nM\n\x19auth
SF:entication\.mechanisms\x120\x08\x03\",\n\x11\x08\x01\x12\r\x08\x08J\t\n
SF:\x07MYSQL41\n\x17\x08\x01\x12\x13\x08\x08J\x0f\n\rSHA256_MEMORY\n\x1d\n
SF:\x0bdoc\.formats\x12\x0e\x08\x01\x12\n\x08\x08J\x06\n\x04text\n\x1e\n\x
SF:12client\.interactive\x12\x08\x08\x01\x12\x04\x08\x07@\0\nn\n\x0bcompre
SF:ssion\x12_\x08\x02\x1a\[\nY\n\talgorithm\x12L\x08\x03\"H\n\x18\x08\x01\
SF:x12\x14\x08\x08J\x10\n\x0edeflate_stream\n\x15\x08\x01\x12\x11\x08\x08J
SF:\r\n\x0blz4_message\n\x15\x08\x01\x12\x11\x08\x08J\r\n\x0bzstd_stream\n
SF:\x1c\n\tnode_type\x12\x0f\x08\x01\x12\x0b\x08\x08J\x07\n\x05mysql\n\x20
SF:\n\x14client\.pwd_expire_ok\x12\x08\x08\x01\x12\x04\x08\x07@\0");
MAC Address: 00:0C:29:19:88:B8 (VMware)
Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port
Device type: general purpose
Running (JUST GUESSING): Microsoft Windows Longhorn|Vista|7|2012|2008 (92%)
OS CPE: cpe:/o:microsoft:windows cpe:/o:microsoft:windows_vista::sp1 cpe:/o:microsoft:windows_7:::ultimate cpe:/o:microsoft:windows_2012 cpe:/o:microsoft:windows_server_2008::sp2 cpe:/o:microsoft:windows_8
Aggressive OS guesses: Microsoft Windows Longhorn (92%), Microsoft Windows Vista SP1 (92%), Microsoft Windows 7 or Windows Server 2012 (91%), Microsoft Windows Server 2008 SP2 (90%), Microsoft Windows 8 (89%), Microsoft Windows Server 2008 (88%), Microsoft Windows 7 or Windows Server 2008 (88%), Microsoft Windows 7 SP0 - SP1, Windows Server 2008 SP1, or Windows 8 (88%), Microsoft Windows 7 Ultimate (88%), Microsoft Windows Server 2008 R2 (88%)
No exact OS matches for host (test conditions non-ideal).
Network Distance: 1 hop
Service Info: OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_smbv2-enabled: Server supports SMBv2 protocol

TRACEROUTE
HOP RTT     ADDRESS
1   0.32 ms 192.168.1.30

OS and Service detection performed. Please report any incorrect results at http://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 427.40 seconds
```

`nmap` 是一个开源的网络扫描工具，用于网络发现和安全审计。用于扫描指定网络段中的活动主机。解释这个命令中的各个参数：

1. **192.168.0.0/22**: 这是要扫描的网络段。`/22` 表示前22位是网络地址，后10位是主机地址。因此，这个网络段总共有 (2^{10} = 1024) 个IP地址。具体来说，这个网络段的范围是从 `192.168.0.0` 到 `192.168.3.255`。
2. **-sn**: 这是 `nmap` 的一个参数，表示进行 "ping 扫描" (ping scan)。也就是说，`nmap` 会尝试向每个IP地址发送ICMP echo请求（也就是我们通常所说的 "ping" 请求），以查看哪些主机是活跃的。
3. **--min-rate 8888**: 这个参数指定了发送探测包的速率。在这个例子中，`nmap` 将以至少每秒8888个探测包的速度发送请求。这可以用于加速扫描过程，但也可能增加对目标网络的负载。
4. **-r**: 这个参数告诉 `nmap` 按照随机顺序发送探测包，而不是按照默认的递增顺序。这有助于避免某些类型的网络设备的检测机制，因为这些设备可能会识别并过滤掉连续或顺序的扫描请求。
5. 

-sS: 这是 TCP SYN 扫描（也称为半开扫描）。在这种扫描中，nmap 发送一个 SYN 数据包到目标端口，然后等待响应。如果目标端口是开放的，它会回应一个 SYN/ACK 数据包；如果端口是关闭的，它会回应一个 RST 数据包。这种扫描方式相比传统的 TCP 连接扫描要快，因为它不需要完成完整的 TCP 三次握手。

-PN: 这个参数告诉 nmap 不要对目标进行 ping 扫描来检测主机是否在线。即使你使用了其他类型的扫描（如 -sS），nmap 默认也会先执行一个 ping 扫描来确定哪些主机是在线的。使用 -PN 参数可以跳过这一步，假设所有指定的目标主机都是在线的。

-p-: 这个参数指定了扫描所有 65535 个 TCP 端口。短横线 - 表示一个范围，从 1 到 65535。这意味着 nmap 会尝试连接到目标主机的每一个 TCP 端口，以查看哪些端口是开放的。

--min-rate 8888: 如前所述，这个参数设置了扫描的数据包发送速率，即每秒至少发送 8888 个数据包。这可以加速扫描过程，但也可能增加网络负载。

-r: 这个参数告诉 nmap 以随机顺序发送探测包，而不是按照默认的递增顺序。随机化可以帮助避免触发某些网络设备的防御机制，这些设备可能会检测并过滤掉连续或顺序的扫描请求。

综上所述，这个 nmap 命令组合了 TCP SYN 扫描、跳过主机发现、扫描所有端口、高速发送探测包以及随机化探测顺序等特性。这种命令通常用于深入的网络安全审计和端口扫描，但使用时应当格外小心，确保你有合法的权限和理由进行扫描，以避免侵犯隐私或违反法律。



总的来说，这个命令的目的是快速、随机地扫描 `192.168.0.0/22` 网络段，以找出哪些主机是活跃的。但是，请注意，在使用 `nmap` 或其他网络扫描工具时，始终要确保你有合法的理由和权限，以避免违反法律或伦理规范。

在nmap工具中，-sn 和 -sP 是两种不同类型的扫描方式，它们各自有不同的目的和用途。

-sn (或 --ping-scan)：这是所谓的ping扫描，主要用于确定哪些主机在目标网络上是在线的。它发送ICMP echo请求（也就是我们通常所说的“ping”请求）到每个指定的IP地址，并等待回应。如果收到回应，那么就可以确定该主机是在线的。这种扫描方式对于快速识别活动主机非常有用，但它并不提供关于目标主机上运行的服务的详细信息。

-sP (或 --packet-trace)：这是主机发现扫描，它试图确定目标IP地址范围内哪些主机是存活的。不同于-sn，-sP使用ARP请求（对于本地网络）或ICMP echo请求（对于远程网络）来进行扫描。这种扫描方式不仅检查主机是否在线，还会尝试确定主机的MAC地址。它提供了一种更详细的主机存活状态信息，但可能比单纯的ping扫描要慢一些，因为它需要处理更多的网络层和链路层信息。

总结来说，-sn主要用于快速识别哪些主机是在线的，而-sP则提供更详细的主机存活和MAC地址信息。在进行网络扫描时，选择哪种扫描方式取决于你的具体需求，例如你只需要知道哪些主机在线，还是你需要更详细的主机和网络信息。
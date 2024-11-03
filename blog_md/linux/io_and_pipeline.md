在操作系统和编程中，**IO**（输入/输出）和**管道**（pipeline）是两个相关但不同的概念。

### 1. IO（输入/输出）：
**IO** 通常指的是计算机系统与外部设备（如硬盘、键盘、显示器等）或内部组件（如内存、处理器）之间进行的数据交换。IO的核心目的是让系统能够从外部设备获取数据，或者将数据输出到外部设备上。

- **输入**：从外部设备或用户输入中读取数据（如从键盘获取用户输入，或从文件中读取内容）。
- **输出**：将数据输出到外部设备或呈现给用户（如将信息显示在屏幕上，或将数据写入文件中）。

#### IO的主要特性：
- 操作对象是设备或文件。
- IO操作可以是阻塞的（同步IO），也可以是非阻塞的（异步IO）。
- 常见的 IO 操作包括文件读写、网络通信、设备数据传输等。

### 2. 管道（Pipeline）：
**管道** 是一种用于将一个进程的输出直接作为另一个进程的输入的通信机制。管道主要用于进程间通信（IPC），特别是在 Unix/Linux 系统中常见。它允许将多个命令组合在一起，形成一个数据处理流。

#### 管道的主要特性：
- **单向通信**：数据只能从一个方向流动，即一个进程的输出作为另一个进程的输入。
- **无名管道**：临时的，只存在于父子进程之间，用于短期的进程间通信。
- **命名管道（FIFO）**：可用于不相关的进程之间，持久化存在。
- **组合命令**：管道常用于 shell 脚本中，将多个命令组合成一个复杂的操作。比如：
  ```bash
  ls | grep ".txt"
  ```
  这里，`ls` 的输出通过管道传递给 `grep`，`grep` 进一步过滤文件列表中的 `.txt` 文件。

### 总结：
- **IO** 是一种广泛的输入输出操作，可以涉及文件、设备等。它负责让程序与外部环境进行交互。
- **管道** 是进程间通信的机制，用来将一个进程的输出作为另一个进程的输入，常用于命令的串联和数据流的处理。

IO可以是广泛的文件、设备操作，而管道则更专注于进程间的数据传递。
> [Making the Buffer Pool Scan Resistant](https://dev.mysql.com/doc/refman/8.4/en/innodb-performance-midpoint_insertion.html)
调整页的大小 64位上多个buffer pool给不同的链接以支持不同的数据库

[设计模式](https://www.bilibili.com/video/BV1eG411H7Jk?t=755.1&p=187)

[MySQL8 Buffer Pool](https://www.bilibili.com/video/BV1JW4y1179m?t=271.9&p=191)

[Redis 6新特性的应用]()

[redis](https://www.cnblogs.com/breezefaith/p/17984580)

和Memcached类似，它支持存储的value类型相对更多，包括string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。在此基础上，redis支持各种不同方式的排序。与memcached一样，为了保证效率，数据都是缓存在内存中。区别的是redis会周期性的把更新的数据写入磁盘或者把修改操作写入追加的记录文件，并且在此基础上实现了master-slave(主从)同步。

redis的出现，很大程度补偿了memcached这类key/value存储的不足，在部分场合可以对关系数据库起到很好的补充作用。它提供了Java，C/C++，C#，PHP，JavaScript，Perl，Object-C，Python，Ruby，Erlang等客户端，使用很方便。
Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。

官网:http://redis.io/

Redis 常用数据类型使用场景：

String，存短信验证码、缓存、计数器、分布式session
List，发布订阅等
Set，共同好友、点赞或点踩等
Hash，存储对象
Zset，排行榜
HyperLogLog，在线用户数、统计访问量等
GeoHash，同城的人、同城的店等
BitMap，签到打卡、活跃用户等

项目中引入spring-boot-starter-data-redis后默认使用Lettuce作为Redis客户端库。与老牌的Jedis客户端相比，Lettuce功能更加强大，不仅解决了线程安全的问题，还支持异步和响应式编程，支持集群，Sentinel，管道和编码器等等功能

> 设计模式 领域驱动设计
> 算法与数据结构
> Redis缓存使用 过期自动取消
> Doubbo框架使用
> HashMap List Set 等线程安全问题
> Juc CAS AQS
> Spring Mybatis等底层实现原理和高级应用
> 流程编排引擎
> 常见整套解决方案的问题，例如Alibaba全套解决方案
> 消息队列
> 事务
> 分布式事务，分布式锁，分布式存储，分布式缓存，分布式数据库
> 定时任务，线程编排
> 线程池，连接池，缓冲池
> MySQL 执行计划的解读，以及各种锁机制，和索引优化问题，索引失效的问题


```yaml
spring:
  data:
    redis:
      host: localhost     # Redis服务器地址
      port: 6379          # Redis服务器连接端口
      password: 123456    # Redis服务器连接密码（默认为空）
      database: 0         # Redis数据库索引（默认为0）
      timeout: 60s        # 连接空闲超过N(s秒、ms毫秒，不加单位时使用毫秒)后关闭，0为禁用，这里配置值和tcp-keepalive值一致
      # Lettuce连接池配置
      lettuce:
        pool:
          max-active: 10  # 允许最大连接数，默认8（负值表示没有限制），推荐值：大于cpu * 2，通常为(cpu * 2) + 2
          max-idle: 8     # 最大空闲连接数，默认8，推荐值：cpu * 2
          min-idle: 0     # 最小空闲连接数，默认0
          max-wait: 5s    # 连接用完时，新的请求等待时间(s秒、ms毫秒)，超过该时间抛出异常，默认-1（负值表示没有限制）

spring:
  redis:
    database: 0
#    host: 127.0.0.1
#    port: 6379
#    password: 
    cluster:
      nodes:
      - 127.0.0.1:6379
      - 127.0.0.1:6380
      - 127.0.0.1:6381
      - 127.0.0.1:6382
#    jedis:
    lettuce:
      pool:
         # 连接池中的最大空闲连接 默认8      
        max-idle: 8
        # 连接池中的最小空闲连接 默认0
        min-idle: 0
        # 连接池最大连接数 默认8 ，负数表示没有限制
        max-active: 8
        # 连接池最大阻塞等待时间（使用负值表示没有限制） 默认-1
        max-wait: -1
    timeout: 30000

```
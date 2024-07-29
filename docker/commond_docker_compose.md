> mysql 创建

```yml
version: '3.8'
services:
  dev-mysql-57:
    container_name: dev-mysql57
    image: mysql:5.7.42-oracle
    ports:
      - "3307:3306"
    volumes:
      - ./mysql/conf:/etc/mysql/conf.d
      - ./mysql/logs:/logs
      - ./mysql/data:/var/lib/mysql
    command: [
      'mysqld',
      '--innodb-buffer-pool-size=80M',
      '--character-set-server=utf8mb4',
      '--collation-server=utf8mb4_unicode_ci',
      '--default-time-zone=+8:00',
      '--lower-case-table-names=1'
    ]
    environment:
      MYSQL_ROOT_PASSWORD: password
  dev-mysql-80:
    container_name: dev-mysql
    image: mysql:8.0.32-oracle
    restart: unless-stopped
    build:
      context: ./mysql
      dockerfile: dockerfile
    ports:
      - "3306:3306"
    volumes:
      - ./mysql/conf:/etc/mysql/conf.d
      - ./mysql/logs:/logs
      - ./mysql/data:/var/lib/mysql
    command: [
      'mysqld',
      '--default-authentication-plugin=caching_sha2_password',
      '--innodb-buffer-pool-size=80M',
      '--character-set-server=utf8mb4',
      '--collation-server=utf8mb4_unicode_ci',
      '--default-time-zone=+8:00',
      '--lower-case-table-names=1'
    ]
    environment:
      MYSQL_ROOT_PASSWORD: password
  networks:
  mysql-network:
    driver: bridge  # 指定网络类型为桥接（默认）
    name: dev-mysql-network  # 指定自定义网络的名称
```
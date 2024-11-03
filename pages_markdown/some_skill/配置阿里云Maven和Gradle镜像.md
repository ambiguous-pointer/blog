# **公共代理库**

[maven.aliyun.com](https://maven.aliyun.com/)代理了很多公共的Maven仓库。使用[maven.aliyun.com](https://maven.aliyun.com/)中的仓库地址作为下载源，速度更快更稳定。

## **代理的仓库列表**

| 仓库名称         | 代理源地址                               | 使用地址                                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------------------------ |
| central          | https://repo1.maven.org/maven2/          | https://maven.aliyun.com/repository/central 或 https://maven.aliyun.com/nexus/content/repositories/central |
| jcenter          | https://jcenter.bintray.com/             | https://maven.aliyun.com/repository/jcenter 或 https://maven.aliyun.com/nexus/content/repositories/jcenter |
| public           | central仓和jcenter仓的聚合仓             | https://maven.aliyun.com/repository/public 或[https://](https://maven.aliyun.com/nexus/content/groups/public)[maven.aliyun.com/nexus/content/groups/public](http://maven.aliyun.com/nexus/content/groups/public) |
| google           | https://maven.google.com/                | https://maven.aliyun.com/repository/google 或 https://maven.aliyun.com/nexus/content/repositories/google |
| gradle-plugin    | https://plugins.gradle.org/m2/           | https://maven.aliyun.com/repository/gradle-plugin 或 https://maven.aliyun.com/nexus/content/repositories/gradle-plugin |
| spring           | https://repo.spring.io/libs-milestone/   | https://maven.aliyun.com/repository/spring 或 https://maven.aliyun.com/nexus/content/repositories/spring |
| spring-plugin    | https://repo.spring.io/plugins-release/  | https://maven.aliyun.com/repository/spring-plugin 或 https://maven.aliyun.com/nexus/content/repositories/spring-plugin |
| grails-core      | https://repo.grails.org/grails/core      | https://maven.aliyun.com/repository/grails-core 或 https://maven.aliyun.com/nexus/content/repositories/grails-core |
| apache snapshots | https://repository.apache.org/snapshots/ | https://maven.aliyun.com/repository/apache-snapshots 或 https://maven.aliyun.com/nexus/content/repositories/apache-snapshots |

## **配置指南**

**maven配置指南**

打开maven的配置文件（windows机器一般在maven安装目录的conf/settings.xml），在`<mirrors></mirrors>`标签中添加mirror子节点：

```xml
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>*</mirrorOf>
    <name>阿里云公共仓库</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

如果想使用其它代理仓库,可在`<repositories></repositories>`节点中加入对应的仓库使用地址。以使用spring代理仓为例：

```xml
<repository>
    <id>spring</id>
    <url>https://maven.aliyun.com/repository/spring</url>
    <releases>
        <enabled>true</enabled>
    </releases>
    <snapshots>
        <enabled>true</enabled>
    </snapshots>
</repository>
```

**gradle配置指南**

在build.gradle文件中加入以下代码：

```
allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public/' }
        mavenLocal()
        mavenCentral()
    }
}
```

如果想使用maven.aliyun.com提供的其它代理仓，以使用spring仓为例，代码如下：

```
allProjects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public/' }
        maven { url 'https://maven.aliyun.com/repository/spring/'}
        mavenLocal()
        mavenCentral()
    }
}
```

转载至 [阿里云**公共代理库**](https://help.aliyun.com/document_detail/102512.html?spm=a2c40.aliyun_maven_repo.0.0.36183054eGk3vS)
$ ssh-copy-id -i .ssh/secret-keys/qr.pub -o "ProxyJump=debain@58.17.154.7:50022" root@192.168.0.173
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: ".ssh/secret-keys/qr.pub"
debain@58.17.154.7's password:
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
debain@58.17.154.7's password:
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
debain@58.17.154.7's password:
root@192.168.0.173's password:

Number of key(s) added: 1

Now try logging into the machine, with: "ssh -i .ssh/secret-keys/qr -o 'ProxyJump=debain@58.17.154.7:50022' 'root@192.168.0.173'"
and check to make sure that only the key(s) you wanted were added.




可以通过 `ssh-copy-id` 配合 `ProxyJump` 或 `-J` 选项来实现免密配置。使用 `ssh-copy-id` 的时候，可以在 `-o` 选项中指定跳板机的配置，例如：

```bash
ssh-copy-id -o "ProxyJump=user@jump_host" user@internal_host
```

这样可以将公钥复制到内网机器上，达到免密登录的目的。


你看到的这个提示是因为 `ssh-copy-id` 尝试通过跳板机（即你指定的 `debain@58.17.154.7:50022`）连接到目标机器 `root@192.168.0.173`，但由于使用了跳板机，所以它需要先通过跳板机登录，然后再到达目标机器。

这个过程分为两个步骤：

1. **登录跳板机**：你需要输入跳板机的密码，才能连接到它。
2. **再登录内网机器**：然后，`ssh-copy-id` 需要再通过跳板机登录到目标机器，这就需要输入目标机器的密码。

所以，可能会多次要求输入密码。为了简化这个过程，建议：

1. 在跳板机上配置你的公钥，以便可以无密码登录。
2. 确保目标机器的公钥也被添加到跳板机上，这样在复制到目标机器时就不需要再输入密码。

通过这种方式，你可以减少输入密码的次数，并实现更方便的免密登录。


 ssh-copy-id -i .ssh/secret-keys/qr.pub -o "ProxyJump=qr-gateway" root@192.168.0.174